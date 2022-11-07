$('#Penn_State').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'2709' ,name: "Unavail Click for bot", date: "2022/12/02", description:"9:30 AM,1:30 PM,any", type: "tourclosed" },
 { id:'2710' ,name: "Unavail Click for bot", date: "2022/11/15", description:"11:00 AM,2:00 PM,any", type: "tourclosed" },
 { id:'2711' ,name: "Unavail Click for bot", date: "2022/12/05", description:"10:00 AM,10:00 AM,12:00 PM,any", type: "tourclosed" },
 { id:'2712' ,name: "Unavail Click for bot", date: "2022/11/29", description:"9:30 AM", type: "tourclosed" },
 { id:'2713' ,name: "Unavail Click for bot", date: "2022/12/08", description:"9:30 AM", type: "tourclosed" },
 { id:'2714' ,name: "Unavail Click for bot", date: "2022/11/07", description:"10:00 AM,12:00 PM,any", type: "tourclosed" },
 { id:'2715' ,name: "Unavail Click for bot", date: "2022/11/28", description:"10:30 AM,2:00 PM,any", type: "tourclosed" },
 { id:'2716' ,name: "Avail (Click to book)", date: "2022/11/08", description:"2:00 PM", type: "touropen" },
 { id:'2717' ,name: "Unavail Click for bot", date: "2022/11/08", description:"9:30 AM", type: "tourclosed" },
 { id:'2718' ,name: "Unavail Click for bot", date: "2022/11/11", description:"9:30 AM,11:00 AM,12:30 PM,1:30 PM,any", type: "tourclosed" },
 { id:'2719' ,name: "Unavail Click for bot", date: "2022/11/17", description:"9:30 AM", type: "tourclosed" },
 { id:'2720' ,name: "Unavail Click for bot", date: "2022/12/01", description:"1:30 PM", type: "tourclosed" },
 { id:'2721' ,name: "Unavail Click for bot", date: "2022/12/16", description:"1:00 PM", type: "tourclosed" },

], });$('#Penn_State').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://apply.psu.edu/portal/up-pr-frst'); } else { window.location.href='/tourrequest.jsp?cname=Penn_State&date='+activeEvent.date+'&times='+activeEvent.description;     }});
