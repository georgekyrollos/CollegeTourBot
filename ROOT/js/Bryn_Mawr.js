$('#Bryn_Mawr').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'2523' ,name: "Unavail Click for bot", date: "2022/11/07", description:"10:00 AM,2:00 PM,any", type: "tourclosed" },
 { id:'2524' ,name: "Unavail Click for bot", date: "2022/11/08", description:"6:00 PM,6:30 PM,7:30 PM,any", type: "tourclosed" },
 { id:'2525' ,name: "Unavail Click for bot", date: "2022/11/10", description:"10:00 AM,2:00 PM,any", type: "tourclosed" },
 { id:'2526' ,name: "Unavail Click for bot", date: "2022/11/11", description:"10:00 AM,2:00 PM,any", type: "tourclosed" },
 { id:'2527' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2528' ,name: "Avail (Click to book)", date: "2022/11/17", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2529' ,name: "Unavail Click for bot", date: "2022/11/18", description:"10:00 AM,2:00 PM,any", type: "tourclosed" },
 { id:'2530' ,name: "Unavail Click for bot", date: "2022/11/21", description:"10:00 AM,2:00 PM,any", type: "tourclosed" },
 { id:'2531' ,name: "Unavail Click for bot", date: "2022/11/22", description:"10:00 AM", type: "tourclosed" },
 { id:'2532' ,name: "Unavail Click for bot", date: "2022/11/23", description:"10:00 AM", type: "tourclosed" },
 { id:'2533' ,name: "Avail (Click to book)", date: "2022/11/28", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2534' ,name: "Avail (Click to book)", date: "2022/12/01", description:"2:00 PM", type: "touropen" },
 { id:'2535' ,name: "Avail (Click to book)", date: "2022/12/02", description:"10:00 AM", type: "touropen" },
 { id:'2536' ,name: "Avail (Click to book)", date: "2022/12/05", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2537' ,name: "Avail (Click to book)", date: "2022/12/08", description:"10:00 AM", type: "touropen" },
 { id:'2538' ,name: "Avail (Click to book)", date: "2022/12/09", description:"10:00 AM", type: "touropen" },
 { id:'2539' ,name: "Avail (Click to book)", date: "2022/12/12", description:"10:00 AM", type: "touropen" },

], });$('#Bryn_Mawr').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://admissions.brynmawr.edu/portal/ug-events'); } else { window.location.href='/tourrequest.jsp?cname=Bryn_Mawr&date='+activeEvent.date+'&times='+activeEvent.description;     }});