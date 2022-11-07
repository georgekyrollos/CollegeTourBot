$('#Boston_College').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'1402' ,name: "Avail (Click to book)", date: "2022/11/07", description:"10:00 AM,12:00 PM,2:00 PM", type: "touropen" },
 { id:'1403' ,name: "Avail (Click to book)", date: "2022/11/08", description:"10:00 AM,12:00 PM,2:00 PM", type: "touropen" },
 { id:'1404' ,name: "Avail (Click to book)", date: "2022/11/09", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1405' ,name: "Avail (Click to book)", date: "2022/11/10", description:"10:00 AM,12:00 PM", type: "touropen" },
 { id:'1406' ,name: "Unavail Click for bot", date: "2022/11/10", description:"2:00 PM", type: "tourclosed" },
 { id:'1407' ,name: "Unavail Click for bot", date: "2022/11/11", description:"10:00 AM,12:00 PM,2:00 PM,any", type: "tourclosed" },
 { id:'1408' ,name: "Unavail Click for bot", date: "2022/11/12", description:"9:00 AM,10:15 AM,11:30 AM,any", type: "tourclosed" },
 { id:'1409' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:00 AM,12:00 PM,2:00 PM", type: "touropen" },
 { id:'1410' ,name: "Avail (Click to book)", date: "2022/11/15", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1411' ,name: "Avail (Click to book)", date: "2022/11/16", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1412' ,name: "Avail (Click to book)", date: "2022/11/17", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'1413' ,name: "Avail (Click to book)", date: "2022/11/18", description:"10:00 AM,12:00 PM", type: "touropen" },
 { id:'1414' ,name: "Unavail Click for bot", date: "2022/11/18", description:"2:00 PM", type: "tourclosed" },

], });$('#Boston_College').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://admission.bc.edu/portal/campusvisit'); } else { window.location.href='/tourrequest.jsp?cname=Boston_College&date='+activeEvent.date+'&times='+activeEvent.description;     }});
