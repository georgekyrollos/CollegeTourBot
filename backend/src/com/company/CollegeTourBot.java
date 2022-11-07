package com.company;

import java.io.*;
import java.math.BigDecimal;
import java.net.URL;
import java.net.URLConnection;
import java.sql.*;
import java.sql.Date;
import java.util.*;
import java.util.concurrent.TimeUnit;

public class CollegeTourBot {
    static boolean debug = false;

    static String filePropName = "file.properties";
    static Connection conn = null;
    static String connString = "";
    static String tomcatRoot = "";
    static String userDB = "";
    static String passDB = "";
	static boolean hamilton = false; // hamilton parsing differs from all other schools

    static Hashtable collegeTourTimesHash = new Hashtable();

    static Vector colleges = new Vector();
    static Vector tourRequests = new Vector();

    public static void main(String[] args) throws IOException {
		long startlong = new java.util.Date().getTime();
		String school = "";
		
		try{
			school = args[0];
			debug = false;

		}
		catch(Exception ex) { System.out.println("no argument doing all schools!");}
		

            readPropertiesFile(filePropName);
            loadCollegeData(); // Load college list from sql db
			
            fetchTourData(school); // Parse one or all schools depending on if debugging
            loadTourRequestData(school); // Load Tour Requests where user has not been notified + valid date
            notifyTourRequest(); //  check whether tour requested is open, if so, notify + flag to ensure usr not renotified
            long endlong = new java.util.Date().getTime();
			
			double totaltime = (endlong-startlong)/1000;
			System.out.println("Total time of program="+totaltime+" secs"); // mesure total program time


        }
/*

*/
    public static void readPropertiesFile(String filename) throws IOException {

        Properties prop = new Properties();
        prop.load(new FileInputStream(filename));
        userDB = prop.getProperty("user");
        passDB = prop.getProperty("pass");
        connString = prop.getProperty("conn");
        tomcatRoot = prop.getProperty("rootPath");
    }
    public static void sendTestEmails(int limit) throws InterruptedException {
        for(int i=1;i<limit+1;i++)
        {
            SendMail2 m = new SendMail2("\n" +
                    "7328875493@txt.att.net","Message Number "+i,"hi");
            TimeUnit.SECONDS.sleep(1);
        }
    }


    private static void notifyTourRequest()
    {
        Vector notified = new Vector();
        for(int i=0; i<tourRequests.size(); i++)
        {
            TourRequest tr = (TourRequest)tourRequests.get(i);
            Hashtable date2Times = (Hashtable) collegeTourTimesHash.get(tr.getCollegeName());
            String times = (String) date2Times.get(tr.getDate());
			ArrayList<String> timesArr = null;
			try
			{
			 if(times != null) timesArr = new ArrayList<>(Arrays.asList(times.split(",")));
			}
			catch(Exception ex)
			{
			System.out.println("times="+times+"...exception="+ex);			
			}


            if(tr.getTourTime().equalsIgnoreCase("any") || tr.getTourTime().equalsIgnoreCase("all"))
            {
                if(times != null)
                {
                    notify(times, tr);
                    notified.add(tr.getTour_request_id());
                }
            }
            else{
                if(times == null)
                {
                    continue;
                }
                if(timesArr!= null && timesArr.contains(tr.getTourTime()))
                {
					System.out.println("times is="+times);
					System.out.println("IT HAS="+tr.getTourTime());
                    notify(times, tr);
                    notified.add(tr.getTour_request_id());
                }
            }
        }
        changeNotificationStatus(notified);
    }

    public static void notify (String times, TourRequest tr)
    {
        if(debug) System.out.println(times);
        String timeString = "";
        String toursString ="";
        String hasString ="";
        String website = "<a href='"+tr.getWebsite()+"'>here</a>";
        if(tr.getTourTime().equalsIgnoreCase("any") || tr.getTourTime().equalsIgnoreCase("all"))
        {
            toursString = "tours";
            hasString = " have";
            timeString = times;

        }
        else{
            toursString = "A tour";
            hasString = " has";
            timeString = tr.getTourTime();
        }

		String notification = "<br>"+tr.getWebsite()+"<br><br>Hi "+tr.getFirstName()+".<br>"+toursString+" for "+tr.getCollegeName()+hasString+" just opened up for "+timeString+" on "+tr.getDate()+""+"<br>Thanks!<br>CollegeTourBot.com";

        if(tr.getNotificationChoice().equalsIgnoreCase("both"))
        {
            text(notification,tr.getPhone(),tr.getPhoneCarrier());
            email(notification,tr.getEmail());
        }
        else if(tr.getNotificationChoice().equalsIgnoreCase("email"))
        {
            email(notification,tr.getEmail());
        }
        else if(tr.getNotificationChoice().equalsIgnoreCase("text"))
        {
            text(notification,tr.getPhone(),tr.getPhoneCarrier());
        }
    }
    public static void email(String message, String email)
    {
        if(email != null || !email.equalsIgnoreCase(""))
        {
            try{
               if(debug)  System.out.println(message);
                SendMail2 m = new SendMail2(email,"College Tour Bot",message);

            }
            catch (Exception e)
            {
                System.err.println("Email sending error: "+e);
            }
        }
    }
    public static void text(String message, String phoneNum, String carrier)
    {
        if(phoneNum != null || !phoneNum.equalsIgnoreCase(""))
        {
            String endString = getPhoneNumEndString(carrier);
            try{
               if(debug)  System.out.println(message);
                SendMail2 m = new SendMail2(phoneNum+endString,"College Tour Bot",message);

            }
            catch (Exception e)
            {
                System.err.println("Text sending error: "+e);
            }
        }
    }

    public static String getPhoneNumEndString(String carrier)
    {
        if(carrier.equalsIgnoreCase("att"))  // ATAT
        {
            return "@txt.att.net";
        }
        else if(carrier.equalsIgnoreCase("verizon")) // VERIZON
        {
            return "@vtext.com";
        }
        else if(carrier.equalsIgnoreCase("tmobile")) // tmobile
        {
            return "@tmomail.net";
        }
		else if(carrier.equalsIgnoreCase("cricket")) // cricket
        {
            return "@mms.mycricket.com";
        }
		


        else{
            return "";
        }

    }

    public static void changeNotificationStatus(Vector notified)  {
        if(notified.size() > 0)
        {
            Connection conn = getDatabaseConnection();
            String whereString ="WHERE tour_request_id = "+notified.get(0);

            for(int i =1; i<notified.size();i++)
            {
                whereString+=" OR tour_request_id = "+notified.get(i);
            }
            String sql = "update tourrequestsimple set notification_status = 1\n" +
                    whereString;

            try{
                Statement stmt = conn.createStatement();
                stmt.executeUpdate(sql);
            }
            catch (Exception e)
            {
                System.err.println("Error updating notification database status: "+e);
				   System.err.println("bad sql="+sql);
            }
        }
    }



    public static void fetchTourData(String onlythiscollege) throws IOException {
        String site = "";
        String timeSite = "";
        String startDate = getStartDate();
        String endDate = getEndDate(5);
        String basicUrlAdd = "?cmd=getDates&dtstart="+startDate+"&dtend="+endDate; // Sites are parsed by visiting special url where tour data is displayed in simple text
        String basic2UrlAdd = "&cmd=event_dates&dtstart="+startDate+"&dtend="+endDate;
        College c = null;
        String masterjavascript = "";
        String javascript = "";
        String javascript2 = "";
        for(int i=0; i<colleges.size();i++)
        {
			
            javascript = "";
            javascript2 = "";
            try
            {
				c = (College) colleges.elementAt(i);
				System.out.println(i+" start="+new java.util.Date()+"... "+c.getCollege_name());
				if(!onlythiscollege.equals(""))
				{
						if(debug) System.out.println("collegeid="+c.getCollege_id());
						if(onlythiscollege.equalsIgnoreCase("GROUP1"))
						{
							if(c.getCollege_id() > 25)
							{
								continue;
							}	
						}
						else if(onlythiscollege.equalsIgnoreCase("GROUP2"))
						{
							if(c.getCollege_id() > 50)
							{
								continue;
							}	
						}
						else if(onlythiscollege.equalsIgnoreCase("GROUP3"))
						{
							if(c.getCollege_id() > 50)
							{
								continue;
							}	
						}
						else if(onlythiscollege.equalsIgnoreCase("GROUP4"))
						{
							if(c.getCollege_id() > 75)
							{
								continue;
							}	
						}
						else if(!onlythiscollege.equals(c.getCollege_name()))
						{
							continue;
						}
				}
                collegeTourTimesHash.put(c.getCollege_name(),new Hashtable());

            javascript =   "$('#"+c.getCollege_name()+"').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [\n";
            javascript2 = "], });$('#"+c.getCollege_name()+"').on('selectEvent', function(event,activeEvent) {"+ "if(activeEvent.type=='touropen') {	window.open('"+c.getWebsiteCal()+"'); } else { window.location.href='/tourrequest.jsp?cname="+c.getCollege_name()+"&date='+activeEvent.date+'&times='+activeEvent.description;     }});\n";


            if (c.getParser_type().equalsIgnoreCase("BASIC"))
            {
                site = c.getWebsite().trim() + basicUrlAdd.trim();

            }
            else if (c.getParser_type().equalsIgnoreCase("BASIC2"))
            {
                site = c.getWebsite().trim() + basic2UrlAdd.trim();

            }


            URL url = new URL(site);

           if(debug)  System.out.println("Default Port: "+url.getDefaultPort());
           if(debug)  System.out.println("Port: "+url.getPort());
           if(debug)  System.out.println(site);
            InputStream openStream = url.openStream();
           if(debug)  System.out.println("Input Stream Done!");
            InputStreamReader stream = new InputStreamReader(openStream);
           if(debug)  System.out.println("Input Stream Reader Done!");
            BufferedReader in = new BufferedReader(stream);
           if(debug)  System.out.println("Buffer Reader Done!");

            String res = "";
            String str;
            while ((str = in.readLine()) != null) {
                res = res + str + "\n";
                // str is one line of text; readLine() strips the newline character(s)
            }

            res = res.replace("{\"dates\":[[", "");
            res = res.replace("\"", "");
            res = res.replace("]]}", "");



            String[] dateData = res.split("],\\[");
            Vector tourDates = new Vector();
            for (int j = 0; j < dateData.length; j++)
            {
                int commaIndex = dateData[j].indexOf(",");
                if (commaIndex == -1)  // array is empty: site had no data
                {
                    break;
                }
                String date = dateData[j].substring(0, commaIndex);
                String status = (dateData[j].substring(commaIndex + 1));
			    if(debug)  System.out.println(date+".."+status);

                tourDates.add(date);  // tourDates.put(Date , tourStatus): split at comma
            }
            Enumeration e = tourDates.elements();
            while (e.hasMoreElements())
            {
                String date = (String) e.nextElement();
                String splitVar = "</li>";
                try {

                    String availableS = "available";
                    String unavailableS = "unavailable";
                   if (c.getParser_type().equalsIgnoreCase("BASIC"))
                   {
                       splitVar = "</li>";  // spilts html into tours relevant text chunks
                       splitVar =  "class=\"calendar_legend";
                       site = c.getWebsite() + basicUrlAdd;
                      if(debug)  System.out.println("\n" + c.getCollege_name() + ": " + c.getWebsite() + "\n");
                       timeSite = c.getWebsite() + "?cmd=getEvents&date=" + date + "&query=";
                   }
                   else if (c.getParser_type().equalsIgnoreCase("BASIC2"))
                   {
                       site = c.getWebsite() + basic2UrlAdd;
                       splitVar =  "class=\"calendar_legend";
                      if(c.getCollege_id() == 70) // special split for hamilton
                       {
						   splitVar =  "callout_body";
                           availableS = "Remaining Spaces";
                           unavailableS = "No Remaining Spaces";
						   hamilton = true;
                       }
                      if(debug)  System.out.println("\n" + c.getCollege_name() + ": " + c.getWebsite() + "\n");
                       if(c.getWebsite().contains("event_list"))
                       {
                           timeSite = c.getWebsite() + "&date="+date+"&query=";
                       }
                       else{
                           timeSite = c.getWebsite() +"&cmd=event_list&date="+date+"&query=";
                       }

                   }

                  if(debug)   System.out.println(c.getCollege_name()+" Timesite = "+timeSite+"...");
                   URL url2 = new URL(timeSite);
                   BufferedReader br = new BufferedReader(new InputStreamReader(url2.openStream()));
                   String result = "";
                   String line;
                   while ((line = br.readLine()) != null) {
                       result = result + line + "\n";
                       // str is one line of text; readLine() strips the newline character(s)
                   }

                   String[] dateData2 = result.split(splitVar);
                   String availableTimes = "";
                   String unavailableTimes = "";
                   for (int k = 1; k < dateData2.length; k++) {
                       if (dateData2[k].contains("Virtual") || dateData2[k].contains("virtual") || dateData2[k].contains("Self Guided") || dateData2[k].contains("Self-Guided") || dateData2[k].contains("Self guided")) {
                           continue;
                       }

                       boolean available = false;
                       dateData2[k] = dateData2[k].replaceAll(" Eastern Time","");
                       dateData2[k] = dateData2[k].replaceAll(" Pacific Time","");
                       dateData2[k] = dateData2[k].replaceAll(" Mountain Time","");
                       dateData2[k] = dateData2[k].replaceAll(" Central Time","");
                       dateData2[k] = dateData2[k].replaceAll(" PT&#xA0;","");
                       dateData2[k] = dateData2[k].replaceAll(" Information session","");




                       if (dateData2[k].indexOf(unavailableS) != -1)  // found
                       {
                           available = false;

                       } else if (dateData2[k].indexOf(availableS) != -1) {
                           available = true;
                       } else {
                           continue;
                       }
                       String timeString = "all";
                       String numericTime = "";
                       String am = "AM<";
                       String pm = "PM<";
                      if(debug)   System.out.println("data=\t\t"+dateData2[k]);
					if(debug)    System.out.println("available="+available);

                       if (dateData2[k].indexOf(am) != -1) {
                           timeString = "AM";

                       }
                       else if (dateData2[k].indexOf(pm) != -1) {
                           timeString = "PM";

                       }
                      if(debug)  System.out.println(c.getCollege_name()+".."+date+".."+timeString);
                       if(timeString.equals("all"))
                       {
                           numericTime = "all";
                       }
                       else
                        {
							int startIndexOfTime;
							if(hamilton)
							{
								startIndexOfTime = dateData2[k].indexOf(timeString);
							}
							else
							{
								startIndexOfTime = dateData2[k].lastIndexOf(timeString);
							}
                           
                           numericTime = (dateData2[k].substring(startIndexOfTime - 6, startIndexOfTime) + timeString);

                           numericTime = numericTime.trim();
						   numericTime = numericTime.replaceAll(">","");
                        }
                       if (available) {
                           availableTimes = availableTimes + numericTime + ",";
                       } else {
                           unavailableTimes = unavailableTimes + numericTime + ",";
                       }

                   } // end going through times
                   Tours t = null;
                   if (availableTimes.endsWith(",")) {

                       availableTimes = availableTimes.substring(0, availableTimes.length() - 1);
                       ((Hashtable) collegeTourTimesHash.get(c.getCollege_name())).put(date, availableTimes);
                       t = new Tours(c.getCollege_id(), availableTimes, date, true);
                       javascript = javascript + t + "\n";
                     if(debug)   System.out.println("AVAIL TOUR=" + t);
                   }
                   if (unavailableTimes.endsWith(",")) {
                       unavailableTimes = unavailableTimes.substring(0, unavailableTimes.length() - 1);
					   
					   if(availableTimes.isBlank() && unavailableTimes.indexOf(",") != -1)
					   {
						   unavailableTimes = unavailableTimes+",any";
					   }
					   
                       t = new Tours(c.getCollege_id(), unavailableTimes, date, false);
                       javascript = javascript + t + "\n";
                     if(debug)   System.out.println("UNAVAIL TOUR=" + t);
                   }
                if(debug)    System.out.println(date + " avaliable: " + availableTimes + "\tunavalible: " + unavailableTimes);
               }
               catch(Exception ex)
               {
                   System.err.println("exception with college "+c+"..and date "+date+".."+ex);
               }
            }
        }
        catch(Exception ex)
        {
            System.err.println("exception with college "+c+" ... "+ex);
        }

            try
            {
               writeToFile(tomcatRoot+"/"+c.getCollege_name()+".js",javascript+"\n"+javascript2);
            }
            catch(Exception ex)
            {
                System.err.println("error writing to file, website gui not updated"+ex);
            }
        masterjavascript = masterjavascript+"\n\n"+javascript+"\n"+javascript2; // javascript is generated to fill tour calendar


       }


    }

    public static void writeToFile(String filename,String data) throws IOException {
        FileWriter fileWriter = new FileWriter(filename);
        PrintWriter printWriter = new PrintWriter(fileWriter);

        printWriter.print(data);
        printWriter.close();
    }

    public static String getStartDate()
    {
        GregorianCalendar gc = new GregorianCalendar();
        //
        int year = gc.get(Calendar.YEAR);
        int monthNum= (gc.get(Calendar.MONTH) + 1);
        int dayNum = gc.get(Calendar.DAY_OF_MONTH);

        String month = zeroFormat(monthNum);
        String day = zeroFormat(dayNum);
        //
        return year+"-"+month+"-"+day;
    }

    public static String getEndDate(int monthOffset)
    {
        GregorianCalendar gc = new GregorianCalendar();

        int year = gc.get(Calendar.YEAR);
        int monthNum= (gc.get(Calendar.MONTH) + 1+ monthOffset);
        int dayNum = gc.get(Calendar.DAY_OF_MONTH);

        if(monthNum > 12)
        {
            monthNum-=12;
            year++;
        }
        if(dayNum>27)
        {
            dayNum-=5;
        }
        String month = zeroFormat(monthNum);
        String day = zeroFormat(dayNum);


        return year+"-"+month+"-"+day;
    }

    public static String zeroFormat(int n)
    {
        if(n < 10)
        {
            return "0"+n;
        }
        else{
            return ""+n;
        }
    }

    public static Connection getDatabaseConnection()
    {
        try
        {
            if(conn != null)
            {
                return conn;
            }
            else{


                conn=DriverManager.getConnection(connString,userDB,passDB);
                return conn;
            }
        }
        catch (Exception e)
        {
            System.err.println("D'oh! Got an exception connecting to database  "+e);
            System.err.println(e.getMessage());
            return null;
        }

    }

    public static void loadTourRequestData(String onlythiscollege)
    {
        Connection conn = getDatabaseConnection();
		String sql = "";
		if (onlythiscollege.equals(""))
		{
			 sql = "SELECT* \n" +
                "FROM tourrequestsimple join colleges on (school = college_name) WHERE notification_status = 0 AND tourdate >= NOW()\n" +
                "ORDER BY tour_request_id";
		}
		else
		{
			if(debug)  System.out.println("onlky checking emails for "+onlythiscollege);
			 sql = "SELECT* \n" +
                "FROM tourrequestsimple join colleges on (school = college_name) WHERE notification_status = 0 AND tourdate >= NOW() AND school = '"+onlythiscollege+"'\n" +
                "ORDER BY tour_request_id";
		}
        try (Statement stmt = conn.createStatement()) {
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                int tourRequestId = rs.getInt("tour_request_id");
                String date =  rs.getString("tourdate");
                String email =  rs.getString("email");
                String phone =  rs.getString("phone");
                String phoneCarrier =  rs.getString("phonecarrier");
                String notificationChoice =  rs.getString("notificationchoice");
                String tourTime = rs.getString("tourtime");
                String firstName = rs.getString("fname");
                String lastName = rs.getString("lname");
                String collegeName = rs.getString("school");
                String website = rs.getString("website");
				String websiteCal = rs.getString("websiteCal");
				if(!websiteCal.equals(""))
					{
						website = websiteCal;
					}

               if(debug)   System.out.println(  ", " + tourRequestId + ", " + date + ", " + email + ", " + notificationChoice + ", " +tourTime + ", "+collegeName);
                 TourRequest tr = new TourRequest(tourRequestId, date, email, phone, phoneCarrier, notificationChoice, tourTime, collegeName, firstName, lastName,website);
                 tourRequests.add(tr);
            }
        } catch (SQLException e) {
            System.out.println(e+"\n Problem loading tour request data, website updated but no emails sent");
        }
    }
    public static void loadCollegeData()
    {
        Connection conn = getDatabaseConnection();
        String sql = "SELECT * FROM colleges where active = 1";

        try (Statement stmt = conn.createStatement()) {
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                int collegeId = rs.getInt("college_id");
                String collegeName = rs.getString("college_name");
                String city =  rs.getString("city");
                String state =  rs.getString("state");
                String url =  rs.getString("website");
                String parserType =  rs.getString("parser_type");

                String websiteCal = rs.getString("websiteCal");
                if(websiteCal.equals(""))
                {
                    websiteCal = url;
                }

                College c = new College(collegeId,collegeName,city,state,url,parserType,websiteCal);
                colleges.add(c);
            }
        } catch (SQLException e) {
           System.out.println(e+"\n Problem Loading Data, website failed to update and no emails sent");
        }
    }
}
