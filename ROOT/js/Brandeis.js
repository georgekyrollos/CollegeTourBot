$('#Brandeis').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'1490' ,name: "Avail (Click to book)", date: "2022/11/07", description:"1:15 PM", type: "touropen" },
 { id:'1491' ,name: "Avail (Click to book)", date: "2022/11/08", description:"2:15 PM", type: "touropen" },
 { id:'1492' ,name: "Avail (Click to book)", date: "2022/11/09", description:"1:15 PM", type: "touropen" },
 { id:'1493' ,name: "Avail (Click to book)", date: "2022/11/10", description:"1:15 PM", type: "touropen" },
 { id:'1494' ,name: "Unavail Click for bot", date: "2022/11/11", description:"10:15 AM,2:15 PM,any", type: "tourclosed" },
 { id:'1495' ,name: "Unavail Click for bot", date: "2022/11/12", description:"9:15 AM", type: "tourclosed" },
 { id:'1496' ,name: "Avail (Click to book)", date: "2022/11/14", description:"1:15 PM", type: "touropen" },
 { id:'1497' ,name: "Avail (Click to book)", date: "2022/11/15", description:"2:15 PM", type: "touropen" },
 { id:'1498' ,name: "Avail (Click to book)", date: "2022/11/16", description:"1:15 PM", type: "touropen" },
 { id:'1499' ,name: "Avail (Click to book)", date: "2022/11/17", description:"1:15 PM", type: "touropen" },
 { id:'1500' ,name: "Avail (Click to book)", date: "2022/11/18", description:"2:15 PM", type: "touropen" },
 { id:'1501' ,name: "Avail (Click to book)", date: "2022/11/21", description:"1:15 PM", type: "touropen" },
 { id:'1502' ,name: "Avail (Click to book)", date: "2022/11/22", description:"10:15 AM", type: "touropen" },
 { id:'1503' ,name: "Avail (Click to book)", date: "2022/11/28", description:"1:15 PM", type: "touropen" },
 { id:'1504' ,name: "Avail (Click to book)", date: "2022/11/29", description:"2:15 PM", type: "touropen" },
 { id:'1505' ,name: "Avail (Click to book)", date: "2022/11/30", description:"1:15 PM", type: "touropen" },
 { id:'1506' ,name: "Avail (Click to book)", date: "2022/12/01", description:"1:15 PM", type: "touropen" },
 { id:'1507' ,name: "Avail (Click to book)", date: "2022/12/02", description:"2:15 PM", type: "touropen" },
 { id:'1508' ,name: "Avail (Click to book)", date: "2022/12/05", description:"1:15 PM", type: "touropen" },
 { id:'1509' ,name: "Avail (Click to book)", date: "2022/12/06", description:"2:15 PM", type: "touropen" },
 { id:'1510' ,name: "Avail (Click to book)", date: "2022/12/07", description:"1:15 PM", type: "touropen" },

], });$('#Brandeis').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://admissions.brandeis.edu/portal/visit'); } else { window.location.href='/tourrequest.jsp?cname=Brandeis&date='+activeEvent.date+'&times='+activeEvent.description;     }});
