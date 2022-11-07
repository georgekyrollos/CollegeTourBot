<%
try
{
    Class.forName ("com.mysql.cj.jdbc.Driver");
    conn=DriverManager.getConnection("","","");
   // System.out.println("con.."+conn);
}
catch (Exception e)
{
    System.err.println("D'oh! Got an exception!  "+e);
    System.err.println(e.getMessage());
}
%>
