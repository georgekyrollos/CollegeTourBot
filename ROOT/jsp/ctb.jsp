<%@ page import="java.util.Vector,java.sql.*" %>
<!DOCTYPE html>

<%
Vector colleges = new Vector();
Connection conn = null;
String sql = "SELECT * FROM colleges where active=1  order by college_name";
%>
<%@ include file='conn.jsp' %>
<%
		
		String schoolrequest = request.getParameter("school");
        try (Statement stmt = conn.createStatement())
 {
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) 
		{
                int collegeId = rs.getInt("college_id");
                String collegeName = rs.getString("college_name");
				
                String city =  rs.getString("city");
                String state =  rs.getString("state");
                String url =  rs.getString("website");
                String parserType =  rs.getString("parser_type");


               // System.out.println( collegeId + ", " + collegeName + ", " + city + ", " + state + ", " + url + ", " +parserType);
               // College c = new College(collegeId,collegeName,city,state,url,parserType);
                colleges.add(collegeName);
			//System.out.println("name="+collegeName);
            }
        } catch (SQLException e) {
           System.out.println(e);
		}
       


%>

<html>

<head>
    <title>College Tour Bot</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="evo-calendar.css">
	
</head>
<style>
	.inv {
		display: none;
		}
    main {
        padding: 20px;
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
    font-weight: 300;
}
    hr {
        margin-bottom: 20px;
    }
    @media only screen and (max-width: 425px) {
        main {
            padding: 10px;
        }
    }
	
	select {
        width:200px;
    }
</style>
<body>
 <a target = "_parent" href='http://www.collegetourbot.com'><img src='/images/ctb.png' height=150 width=auto align='center'></a><hr>
<!--
<table>
	<tr><td colspan=2 align=center>
 
	<a target = "_parent" href='http://www.collegetourbot.com'><img src='/images/ctb.png' height=120 width=300 align='center'></a> 
</td>
</tr></table>
-->
<!-- <form name="tourreq" action="tourrequest.html">  -->
<input type="hidden" name="activedate">
<input type="hidden" name="imgsrc" value="/images/ctbbody.png">
<input type="hidden" name="time" value="1">

  <!--  <main>
        <h1><table align=center><tr><td align=center>CollegeTourBot.com</td></tr></table></h1>
        <hr/>
		 -->
		<select id="target">
            <option value="">Select School...</option>
<%
for(int i=0; i<colleges.size(); i++)
{
	String school = (String)colleges.elementAt(i);
	String displayschool= school.replaceAll("_"," ");
	String selected = "";
	if(schoolrequest != null && schoolrequest.equalsIgnoreCase(school))
		{
			selected = "selected";
		}
%>
            <option value="<%=school%>" <%=selected%>><%=displayschool%></option>
<%
}
%>

        </select>
			
<!-- <img id="logo" src='/images/ctbbody.png' height=400 width=400></a> -->


<%
for(int i=0; i<colleges.size(); i++)
{
	String school = (String)colleges.elementAt(i);
%>
            <div id="<%=school%>" class="inv"></div>

<%
}
%>		 <script>
            document
                .getElementById('target')
                .addEventListener('change', function () {
                    'use strict';
                    var vis = document.querySelector('.vis'),   
                        target = document.getElementById(this.value);
                    if (vis !== null) {
                        vis.className = 'inv';
                    }
                    if (target !== null ) 
					{
						//alert("ITS "+target.evoCalendar['todayHighlight']);
						//target['selectDate'] = activedate;
                        target.className = 'vis';
						var d = new Date();
						document.getElementById('time').value = d.getTime();
						
						//var image_x = document.getElementById('logo');
						//image_x.parentNode.removeChild(image_x);
						
					
						//alert("its"+target.evoCalendar('selectDate', activedate);
                    }
            });
        </script>
   <!--  </main> -->

    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="evo-calendar.js?ver=2"></script>


<%
long longtime = new java.util.Date().getTime();
for(int i=0; i<colleges.size(); i++)
{
	String school = (String)colleges.elementAt(i);
%>



<script src='<%=school%>.js?ver=<%=longtime%>'></script>
   


  
<%

}
try{
	conn.close();
	if(schoolrequest != null)
	{
		//schoolrequest = schoolrequest.replaceAll("_"," ");
		%>
		<script>
			//document.getElementById('target').value='<%=schoolrequest%>'; 
			document.getElementById('target').dispatchEvent(new Event('change'));
		</script>
		<%
	}
}
catch(Exception ex) {}
%>

<%
if(schoolrequest == null)
{
%>
 <h1>CollegeTourBot - Four Easy Steps</h1>

			<p>
			<ol style="font-size:18px;">
				<li>Select school. <br>
					
				<li>Select desired tour date/time. <br>
				
				<li>If tour is available, link will take you directly to school's website for you to sign up.<br>
					
				<li>If tour is unavailable, click to sign up and CollegeTourBot<br> will email and/or text you if the tour opens up.

			</ol>
		<img id="logo" src='/images/ctbbody.png' height=100 width=100>

		</p>
<%
}
%>
  
<!-- <center><img id="logo" src='/images/ctbface.png' height=90 width=90></center> -->
<!-- <center><img id="logo" src='/images/ctbbody.png' height=600 width=600></center> -->
</html>
