$('#Colgate').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'2239' ,name: "Unavail Click for bot", date: "2022/11/07", description:"10:00 AM,2:00 PM,any", type: "tourclosed" },
 { id:'2240' ,name: "Unavail Click for bot", date: "2022/11/08", description:"10:00 AM,2:00 PM,any", type: "tourclosed" },
 { id:'2241' ,name: "Avail (Click to book)", date: "2022/11/09", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2242' ,name: "Unavail Click for bot", date: "2022/11/10", description:"10:00 AM,2:00 PM,any", type: "tourclosed" },
 { id:'2243' ,name: "Unavail Click for bot", date: "2022/11/11", description:"10:00 AM,2:00 PM,any", type: "tourclosed" },
 { id:'2244' ,name: "Unavail Click for bot", date: "2022/11/12", description:"10:00 AM", type: "tourclosed" },
 { id:'2245' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2246' ,name: "Avail (Click to book)", date: "2022/11/15", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2247' ,name: "Avail (Click to book)", date: "2022/11/16", description:"2:00 PM", type: "touropen" },
 { id:'2248' ,name: "Avail (Click to book)", date: "2022/11/17", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2249' ,name: "Avail (Click to book)", date: "2022/11/18", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2250' ,name: "Unavail Click for bot", date: "2022/11/19", description:"10:00 AM", type: "tourclosed" },
 { id:'2251' ,name: "Avail (Click to book)", date: "2022/11/21", description:"2:00 PM", type: "touropen" },
 { id:'2252' ,name: "Unavail Click for bot", date: "2022/11/21", description:"10:00 AM", type: "tourclosed" },
 { id:'2253' ,name: "Unavail Click for bot", date: "2022/11/22", description:"10:00 AM,2:00 PM,any", type: "tourclosed" },
 { id:'2254' ,name: "Unavail Click for bot", date: "2022/11/23", description:"10:00 AM", type: "tourclosed" },
 { id:'2255' ,name: "Avail (Click to book)", date: "2022/11/28", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2256' ,name: "Avail (Click to book)", date: "2022/11/29", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2257' ,name: "Avail (Click to book)", date: "2022/11/30", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2258' ,name: "Avail (Click to book)", date: "2022/12/01", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2259' ,name: "Avail (Click to book)", date: "2022/12/02", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2260' ,name: "Avail (Click to book)", date: "2022/12/05", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2261' ,name: "Avail (Click to book)", date: "2022/12/06", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2262' ,name: "Avail (Click to book)", date: "2022/12/07", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2263' ,name: "Avail (Click to book)", date: "2022/12/08", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2264' ,name: "Avail (Click to book)", date: "2022/12/09", description:"10:00 AM,2:00 PM", type: "touropen" },

], });$('#Colgate').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://connect.colgate.edu/portal/campus-visit'); } else { window.location.href='/tourrequest.jsp?cname=Colgate&date='+activeEvent.date+'&times='+activeEvent.description;     }});