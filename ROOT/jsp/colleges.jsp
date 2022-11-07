<%@ page import="java.util.Vector,java.sql.*" %>
<!DOCTYPE html>
<%
Connection conn = null;
String sql = "SELECT * FROM colleges where active=1  order by college_name";
int perrow = 9;
%>
  <body>
 	<a target = "_parent" href='http://www.collegetourbot.com'><img src='/images/ctb.png' height=150 width=auto align='center'></a><hr>
	<table>
<!--
	<tr  style="vertical-align:top"><td colspan=<%=perrow%> align=center valign=top>

	<a target = "_parent" href='http://www.collegetourbot.com'><img src='/images/ctb.png' height=120 width=300 align='center'></a> 
</td>
</tr>
-->
<tr>

<%@ include file='conn.jsp' %>
<%
		//HttpSession session = request.getSession();
		String schoolrequest = request.getParameter("school");
        try (Statement stmt = conn.createStatement())
		{
            ResultSet rs = stmt.executeQuery(sql);
		int cnt = 0;
            while (rs.next()) 
		{

                String collegename = rs.getString("college_name");
				String imagename = collegename.toLowerCase();
				imagename = imagename.replaceAll("_"," ");
				if(cnt++ % perrow == 0)
					{
%>
					</tr><tr>
<%					}
				
%>		
<td><a href='/ctb.jsp?school=<%=collegename%>'><img src='/images/<%=imagename%>.jpg' height=82 width=82 align='center'></a></td>	

<%			
            }
			
			if(session.getAttribute("newvisit") == null)
			{
				session.setAttribute("newvisit","new");
				String sql2 = "update visits set counter=counter+1";
				PreparedStatement stmt2 = conn.prepareStatement(sql2);
				stmt2.executeUpdate();
				System.out.println("new visit="+request.getRemoteAddr()+" "+new java.util.Date());
			}
			else
			{
				System.out.println("same visit="+request.getRemoteAddr()+" "+new java.util.Date());
			}
			
			
			conn.close();
        } catch (SQLException e) {
           System.out.println(e);
		}
       


%>