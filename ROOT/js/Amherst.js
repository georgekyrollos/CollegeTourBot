$('#Amherst').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'1895' ,name: "Avail (Click to book)", date: "2022/11/07", description:"10:00 AM,1:00 PM", type: "touropen" },
 { id:'1896' ,name: "Avail (Click to book)", date: "2022/11/08", description:"10:00 AM,1:00 PM", type: "touropen" },
 { id:'1897' ,name: "Avail (Click to book)", date: "2022/11/09", description:"10:00 AM,1:00 PM", type: "touropen" },
 { id:'1898' ,name: "Avail (Click to book)", date: "2022/11/10", description:"10:00 AM,1:00 PM", type: "touropen" },
 { id:'1899' ,name: "Avail (Click to book)", date: "2022/11/11", description:"10:00 AM,1:00 PM", type: "touropen" },
 { id:'1900' ,name: "Avail (Click to book)", date: "2022/11/13", description:"12:00 PM,2:00 PM", type: "touropen" },
 { id:'1901' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:00 AM,1:00 PM", type: "touropen" },
 { id:'1902' ,name: "Avail (Click to book)", date: "2022/11/15", description:"10:00 AM,1:00 PM", type: "touropen" },
 { id:'1903' ,name: "Avail (Click to book)", date: "2022/11/16", description:"10:00 AM,1:00 PM", type: "touropen" },
 { id:'1904' ,name: "Avail (Click to book)", date: "2022/11/17", description:"10:00 AM,1:00 PM", type: "touropen" },
 { id:'1905' ,name: "Avail (Click to book)", date: "2022/11/18", description:"10:00 AM,1:00 PM", type: "touropen" },

], });$('#Amherst').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://admission.amherst.edu/portal/campusvisit'); } else { window.location.href='/tourrequest.jsp?cname=Amherst&date='+activeEvent.date+'&times='+activeEvent.description;     }});
