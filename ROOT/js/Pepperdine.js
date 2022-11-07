$('#Pepperdine').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [

], });$('#Pepperdine').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://apply-seaver.pepperdine.edu/portal/visit?tab=walking'); } else { window.open('tourrequest.jsp?cname=Pepperdine&date='+activeEvent.date+'&times='+activeEvent.description);     }});
