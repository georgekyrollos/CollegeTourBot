$('#Colorado_School_of_Mines').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [

], });$('#Colorado_School_of_Mines').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://apply.mines.edu/portal/campus-visit?tab=home'); } else { window.location.href='/tourrequest.jsp?cname=Colorado_School_of_Mines&date='+activeEvent.date+'&times='+activeEvent.description;     }});
