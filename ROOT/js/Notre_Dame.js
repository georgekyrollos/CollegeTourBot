$('#Notre_Dame').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'999' ,name: "Avail (Click to book)", date: "2022/11/07", description:"10:15 AM,1:00 PM,2:15 PM", type: "touropen" },
 { id:'1000' ,name: "Avail (Click to book)", date: "2022/11/08", description:"3:00 PM", type: "touropen" },
 { id:'1001' ,name: "Avail (Click to book)", date: "2022/11/09", description:"3:00 PM", type: "touropen" },
 { id:'1002' ,name: "Avail (Click to book)", date: "2022/11/10", description:"2:15 PM", type: "touropen" },
 { id:'1003' ,name: "Unavail Click for bot", date: "2022/11/11", description:"10:00 AM,10:15 AM,1:00 PM,2:15 PM,any", type: "tourclosed" },
 { id:'1004' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:15 AM,1:00 PM,2:15 PM", type: "touropen" },
 { id:'1005' ,name: "Avail (Click to book)", date: "2022/11/15", description:"3:00 PM", type: "touropen" },
 { id:'1006' ,name: "Avail (Click to book)", date: "2022/11/17", description:"2:15 PM", type: "touropen" },
 { id:'1007' ,name: "Avail (Click to book)", date: "2022/11/18", description:"10:00 AM,2:15 PM,2:30 PM,3:15 PM", type: "touropen" },
 { id:'1008' ,name: "Unavail Click for bot", date: "2022/11/18", description:"10:00 AM,10:15 AM,1:00 PM", type: "tourclosed" },
 { id:'1009' ,name: "Avail (Click to book)", date: "2022/11/19", description:"10:15 AM", type: "touropen" },
 { id:'1010' ,name: "Unavail Click for bot", date: "2022/11/21", description:"10:15 AM,1:00 PM,2:15 PM,any", type: "tourclosed" },
 { id:'1011' ,name: "Avail (Click to book)", date: "2022/11/28", description:"10:15 AM,2:15 PM", type: "touropen" },
 { id:'1012' ,name: "Avail (Click to book)", date: "2022/11/29", description:"3:00 PM", type: "touropen" },
 { id:'1013' ,name: "Avail (Click to book)", date: "2022/12/01", description:"3:00 PM", type: "touropen" },
 { id:'1014' ,name: "Avail (Click to book)", date: "2022/12/02", description:"10:15 AM,1:00 PM", type: "touropen" },

], });$('#Notre_Dame').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://enrollment.nd.edu/portal/on-campus-visit'); } else { window.location.href='/tourrequest.jsp?cname=Notre_Dame&date='+activeEvent.date+'&times='+activeEvent.description;     }});
