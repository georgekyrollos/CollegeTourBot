$('#Pitzer').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [

], });$('#Pitzer').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://connect.pitzer.edu/portal/campus-visits'); } else { window.location.href='/tourrequest.jsp?cname=Pitzer&date='+activeEvent.date+'&times='+activeEvent.description;     }});
