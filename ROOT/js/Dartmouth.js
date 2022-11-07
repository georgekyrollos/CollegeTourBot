$('#Dartmouth').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'221' ,name: "Avail (Click to book)", date: "2022/11/07", description:"11:30 AM,2:15 PM", type: "touropen" },
 { id:'222' ,name: "Avail (Click to book)", date: "2022/11/08", description:"11:30 AM", type: "touropen" },
 { id:'223' ,name: "Avail (Click to book)", date: "2022/11/09", description:"11:30 AM", type: "touropen" },
 { id:'224' ,name: "Unavail Click for bot", date: "2022/11/10", description:"11:30 AM", type: "tourclosed" },
 { id:'225' ,name: "Avail (Click to book)", date: "2022/11/11", description:"11:30 AM", type: "touropen" },
 { id:'226' ,name: "Unavail Click for bot", date: "2022/11/11", description:"2:15 PM,3:30 PM", type: "tourclosed" },
 { id:'227' ,name: "Unavail Click for bot", date: "2022/11/12", description:"9:45 AM,10:45 AM,12:00 PM,any", type: "tourclosed" },
 { id:'228' ,name: "Avail (Click to book)", date: "2022/11/14", description:"11:30 AM,2:15 PM", type: "touropen" },
 { id:'229' ,name: "Avail (Click to book)", date: "2022/11/15", description:"11:30 AM", type: "touropen" },

], });$('#Dartmouth').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://apply.dartmouth.edu/portal/campus-visit'); } else { window.location.href='/tourrequest.jsp?cname=Dartmouth&date='+activeEvent.date+'&times='+activeEvent.description;     }});
