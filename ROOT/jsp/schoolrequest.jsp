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
if(document.schoolreq.schoolname.value == "" || document.schoolreq.url.value == "" || document.schoolreq.email.value == "" || document.schoolreq.classification.value == "")
{

alert("Information missing!");
return;

}
   

document.schoolreq.submit();


}

function goback()
{

window.location.href='/ctb.jsp';
return;

}
</script>
</head>

<body>
<%

Connection conn = null;

String schoolname = "";
String email = "";
String url = "";
String classification = "";
String phone = "";
String phonecarrier = "";
String notificationchoice = "";


try { schoolname = request.getParameter("schoolname"); } catch (Exception e) {}
try { email = request.getParameter("email");} catch (Exception e) {}
try { url = request.getParameter("url");} catch (Exception e) {}
try { classification = request.getParameter("classification");} catch (Exception e) {}

if((request.getParameter("schoolname") != null && !request.getParameter("schoolname").equals(""))) // this is an insert
{


try { schoolname = request.getParameter("schoolname"); } catch (Exception e) {}
try { email = request.getParameter("email");} catch (Exception e) {}
try { url = request.getParameter("url");} catch (Exception e) {}
try { classification = request.getParameter("classification");} catch (Exception e) {}

%>
<%@ include file='conn.jsp' %>
<%

try

{
session.setAttribute("email",email);
String sql = "insert into schoolrequest (name,url,email,classification) values(?,?,?,?)";
PreparedStatement stmt = conn.prepareStatement(sql);
int i = 1;
stmt.setString(i++,schoolname);
stmt.setString(i++,url);
stmt.setString(i++,email);
stmt.setString(i++,classification);
stmt.executeUpdate();
conn.close();



} catch (SQLException e)
{
  System.out.println(new java.util.Date()+".."+"SQL EXCEPTION "+e);
}

%>




        <h1>THANK YOU!<br><br>We will consider your request to add this school.</h1>
<img src='/images/ctbbody.png' height=300 width=300></a>

<script type="text/javascript">
setTimeout(
function ( )
{
  window.location.href="/ctb.jsp";
}, 5000 );
</script>

       
<%
}
else // not an insert
{

email = makeNullBlank(""+session.getAttribute("email"));




%>
<form name="schoolreq" action="schoolrequest.jsp"  method="POST">
<input type="hidden" name="times" value = "">

<table>
<tr>
<td>
<table>
<!--<tr><td rowspan=15><img src='/images/ctbbody.png' height=300 width=300></a></td></tr>-->
<tr><td><img src='/images/ctbbody.png' height=150 width=150></td></tr>
</table>
</td>
<td>
<table>
<tr><td>School Name:</td><td><input type="text" class="advancedsearchtextbox" name="schoolname" > </td></tr>
<tr><td>School URL:</td><td><input type="text" name="url" > </td></tr>
<tr><td>My Email:</td><td><input type="text" name="email" value="<%=email%>"></td></tr>
<tr><td>I am a:</td><td><select class="box" name="classification">
<option value="student">Student</option>
<option value="parent">Parent</option>
<option value="counselor">Counselor</option>
<option value="schoolemployee">School Employee</option>
</select></td></tr>



<tr>
<td colspan=2><table><tr><td><img src="/images/button_submit-school-request.png" onclick="checkIt()"></td>
<td><img src="/images/button_cancel2.png" onclick="goback()"></td></tr></table></td></tr>

</table>
</td>


</tr>
<table>
<tr><td>Feel free to suggest a school not listed and I will<br> do my best to fullfill your request in a timely manner!</td></tr>
</table>
</form>

<%
}

%>
