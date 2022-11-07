<%@ page import="java.util.Vector,java.util.Date,java.sql.*,java.text.SimpleDateFormat" %>
<!DOCTYPE html>
<a target = "_parent" href='http://www.collegetourbot.com'><img src='/images/ctb.png' height=150 width=auto align='center'></a><hr>
<%!

public String makeNullBlank(String s)
{
if(s.equals("null"))
{
	s = "";
}
return s;

}

%>
<head>
<style>
input[type=text] {
  padding: 0;
  height: 20px;
  position: relative;
  left: 0;
  outline: none;
  
  background-color: white;
  font-size: 16px;
}

.advancedSearchTextbox {
  width: 526px;
  margin-right: -4px;
}

  .box {
        width: 130px;
        height: 20px;
        border: 1px solid #999;
        font-size: 18px;
        color: #1c87c9;
        background-color: #eee;
        border-radius: 5px;
        box-shadow: 4px 4px #ccc;
      }


.inv {
		display: none;
		}
    main {
        padding: 5px;
        max-width: 1366px;
        width: 100%;
        margin: 10px auto;
    }
    h1 {
        color: #755eb5;
    }
    h1 span {
        color: #616161;
    }
	body {
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
    font-weight: bold
}
h2 {
        color: #755eb5;
    }
    h2 span {
        color: #616161;
    }
    hr {
        margin-bottom: 20px;
    }
    @media only screen and (max-width: 425px) {
        main {
            padding: 10px;
        }
    }
</style>
<script>

function checkIt()
{
	if(document.tourreq.notificationchoice.value == "both")
	{
		if(document.tourreq.email.value == "" || document.tourreq.phone.value == "")
			{
				alert("Given 'Both' is selected, Please Provide both email AND phone!");
				return;
			}
	}	
    else if(document.tourreq.email.value == "" && document.tourreq.notificationchoice.value == "email")
	{
				alert("Please provide Email!");
				return;
	}
	else if(document.tourreq.phone.value == "" && document.tourreq.notificationchoice.value == "text")
	{
				alert("Please provide Phone Number!");
				return;
	}
	
	document.tourreq.submit();
	
	
}

function goback(school)
{
	
	window.location.href='/ctb.jsp?school='+school;
	return;
	
}
</script>
</head>

<body>
<%

Connection conn = null;

String school = "";
String schoolimg = "";
String times = "";
String tourtime = "";
String tourdate = "";
String email = "";
String fname = "";
String lname = "";
String phone = "";
String phonecarrier = "";
String notificationchoice = "";


		try { school = request.getParameter("cname"); schoolimg = school.replaceAll("_"," ").toLowerCase();} catch (Exception e) {}
		try { times = request.getParameter("times");} catch (Exception e) {}
		try { tourdate = request.getParameter("date");} catch (Exception e) {}
	if((request.getParameter("email") != null && !request.getParameter("email").equals("")) || (request.getParameter("phone") != null && !request.getParameter("phone").equals(""))) // this is an insert
	{

		
		try { email = request.getParameter("email"); } catch (Exception e) {}
		try { tourtime = request.getParameter("tourtime"); } catch (Exception e) {}				
		try {fname = request.getParameter("fname");  } catch (Exception e) {}
		try {lname = request.getParameter("lname"); } catch (Exception e) {}
		try {phone = request.getParameter("phone"); } catch (Exception e) {}
		try {phonecarrier = request.getParameter("phonecarrier"); } catch (Exception e) {}
		try {notificationchoice = request.getParameter("notificationchoice"); } catch (Exception e) {}
						
%>
<%@ include file='conn.jsp' %>
<%

						try 
							
						{
							session.setAttribute("email",email);
							session.setAttribute("fname",fname);
							session.setAttribute("lname",lname);
							session.setAttribute("phone",phone);
							session.setAttribute("phonecarrier",phonecarrier);
							session.setAttribute("notificationchoice",notificationchoice);
							java.util.Date utilDate = new SimpleDateFormat("MM/dd/yyyy").parse(tourdate);
							java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
							String sql = "insert into tourrequestsimple (school,tourtime,tourdate,email,fname,lname,phone,phonecarrier,notificationchoice) values(?,?,?,?,?,?,?,?,?)";
							PreparedStatement stmt = conn.prepareStatement(sql);
							int i = 1;
							stmt.setString(i++,school);
							stmt.setString(i++,tourtime);
							stmt.setDate(i++,sqlDate);
							stmt.setString(i++,email);
							stmt.setString(i++,fname);
							stmt.setString(i++,lname);
							stmt.setString(i++,phone);
							stmt.setString(i++,phonecarrier);
							stmt.setString(i++,notificationchoice);
							
							stmt.executeUpdate();
							conn.close();
							
							
							
						} catch (SQLException e) 
						{
						   System.out.println(new java.util.Date()+".."+"SQL EXCEPTION "+e);
						}

%>




        <h1>THANK YOU!<br><br>You will be contacted if a tour becomes available.</h1>
<img src='/images/ctbbody.png' height=300 width=300></a>

		<script type="text/javascript">
setTimeout(
function ( )
{
  window.location.href="/ctb.jsp?school=<%=school%>";
}, 2000 );
</script>

        
<%
	}
	else // not an insert
	{
		
			email = makeNullBlank(""+session.getAttribute("email"));
		
			fname = makeNullBlank(""+session.getAttribute("fname"));
		
			lname = makeNullBlank(""+session.getAttribute("lname"));
		
			email = makeNullBlank(""+session.getAttribute("email"));
		
			phone = makeNullBlank(""+session.getAttribute("phone"));
		
			phonecarrier = makeNullBlank(""+session.getAttribute("phonecarrier"));
		
			notificationchoice = makeNullBlank(""+session.getAttribute("notificationchoice"));
		
		
%>		
<form name="tourreq" action="tourrequest.jsp"  method="POST">
<input type="hidden" name="times" value = "">

<table>
<tr>
	<td>
		<table>
		<!--<tr><td rowspan=15><img src='/images/ctbbody.png' height=300 width=300></a></td></tr>-->
		<tr><td><img src='/images/<%=schoolimg%>.jpg' height=150 width=150></td></tr>
		<tr><td><img src='/images/ctbbody.png' height=150 width=150></td></tr>
		</table>
	</td>
	<td>
		<table>
	<tr><td>School:</td><td><input type="text" class="advancedsearchtextbox" name="cname" value="<%=school%>" STYLE="background-color:#CCCCCC" readonly> </td></tr>
	<tr><td>Date:</td><td><input type="text" name="date" value="<%=tourdate%>" STYLE="background-color:#CCCCCC" readonly> </td></tr>
	<tr><td>Time:</td><td><select class="box" name="tourtime">
	<%
			String[] timesarr = times.split(",");
			for(int i=0;i <timesarr.length;i++)
			{
	%>			
		<option value="<%=timesarr[i]%>"><%=timesarr[i]%></option>
	<%
			}
		
	%>
		</select></td></tr>
	<tr><td>Email:</td><td><input type="text" name="email" value="<%=email%>"></td></tr>
	<tr><td>First Name:</td><td><input type="text" name="fname" value="<%=fname%>"></td></tr>
	<tr><td>Last Name:</td><td><input type="text" name="lname" value="<%=lname%>"></td></tr>
	<tr><td>Phone Number:</td><td><input type="text" name="phone" value="<%=phone%>"></td></tr>
	<tr><td>Phone Carrier:</td><td><select class="box" name="phonecarrier">
		<option value="Att">AT&T</option>
		<option value="Verizon">Verizon</option>
		<option value="TMobile">TMobile</option>
		<option value="cricket">Cricket</option>
		<option value="Other">Other</option>
		</select></td></tr>
		<tr><td>Notification:</td><td><select class="box" name="notificationchoice">
		<option value="both">Both</option>
		<option value="email">Email</option>
		<option value="text">Text</option>
		
		</select></td></tr>

<!--
			<tr><td align="center" >&nbsp;</td><td><table><tr><td><button name="BookIt" type='button' onclick="checkIt()" value="BookIt">Submit Tour Request</button></td>
			<td><button name="Cancel" type='button' onclick="goback('<%=school%>')" value="Cancel">Cancel</button></td></tr></table></td></tr>
-->
			<tr>
			<td colspan=2><table><tr><td><img src="/images/button_submit-tour-request.png" onclick="checkIt()"></td>
			<td><img src="/images/button_cancel.png" onclick="goback('<%=school%>')"></td></tr></table></td></tr>

		</table>
	</td>

	
	</tr>
	<table>
	</form>
	
<%
	}
		
%>		
