# CollegeTourBot
 collegetourbot.com
This is the official github for collegetourbot.com. CollegeTourBot is a website that consolidates collegetour data and gives users 
the option to sign up to be notified if a full tour eve opens back up. 

NOTE: passwords and usernames have been changed to be placeholders. 


The backend folder contains the java files that constantly run in the background to keep the site up to date. First, the college
data is loaded in from the database. The data is then parsed depending on the parser type of the college website. This data is 
written to a file and sent to the root directory where it will be used to populate the tour calendar. 
	NOTE: <schoolName>.js files in root directory are from the last instance of being run. If the program where to run again, they 
	would be overwritten and replaced with new data. 
The program then loads any relevant tour requests and decides whether to notify the user based on the freshly parsed data. 
If a tour request is filed, that means that the tour belonging to that request was at some point filled. All that must be done
to determine whether the user should be notified is to see if the tour date/time of the request is currently in the available data 
structure. This means that the tour is now open, so an email should be sent. The notification status of the user is then updated 
accordingly to ensure that users are not notified multiple times for the same tour. 

The root folder contains all of the front end javascript/html. The main page populates the <select school> drop down menu 
by querying the database. The calendar is filled based on the js files that were written by the java code. If a tour request is 
made, the values inputted by the user is inputted into the database and will be checked by the java code as described above upon 
the next iteration of the code running. 

If you have any questions about anything or are just curious to learn more, feel free to email me:
	info@collegetourbot.com
Thanks
