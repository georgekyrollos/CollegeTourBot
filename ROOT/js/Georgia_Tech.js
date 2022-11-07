$('#Georgia_Tech').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'1438' ,name: "Avail (Click to book)", date: "2022/11/07", description:"1:30 PM", type: "touropen" },
 { id:'1439' ,name: "Unavail Click for bot", date: "2022/11/07", description:"10:45 AM", type: "tourclosed" },
 { id:'1440' ,name: "Avail (Click to book)", date: "2022/11/08", description:"10:45 AM", type: "touropen" },
 { id:'1441' ,name: "Unavail Click for bot", date: "2022/11/08", description:"1:30 PM", type: "tourclosed" },
 { id:'1442' ,name: "Avail (Click to book)", date: "2022/11/09", description:"10:45 AM,1:30 PM", type: "touropen" },
 { id:'1443' ,name: "Avail (Click to book)", date: "2022/11/10", description:"10:45 AM,1:30 PM", type: "touropen" },
 { id:'1444' ,name: "Avail (Click to book)", date: "2022/11/11", description:"8:30 AM", type: "touropen" },
 { id:'1445' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:45 AM,1:30 PM", type: "touropen" },
 { id:'1446' ,name: "Avail (Click to book)", date: "2022/11/15", description:"10:45 AM,1:30 PM", type: "touropen" },
 { id:'1447' ,name: "Avail (Click to book)", date: "2022/11/16", description:"10:45 AM,1:30 PM", type: "touropen" },
 { id:'1448' ,name: "Avail (Click to book)", date: "2022/11/17", description:"10:45 AM,1:30 PM", type: "touropen" },
 { id:'1449' ,name: "Unavail Click for bot", date: "2022/11/18", description:"10:45 AM,1:30 PM,any", type: "tourclosed" },
 { id:'1450' ,name: "Unavail Click for bot", date: "2022/11/21", description:"10:45 AM,1:30 PM,any", type: "tourclosed" },
 { id:'1451' ,name: "Unavail Click for bot", date: "2022/11/22", description:"10:45 AM,1:30 PM,any", type: "tourclosed" },

], });$('#Georgia_Tech').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://application.gatech.edu/portal/freshman_sessions'); } else { window.location.href='/tourrequest.jsp?cname=Georgia_Tech&date='+activeEvent.date+'&times='+activeEvent.description;     }});
