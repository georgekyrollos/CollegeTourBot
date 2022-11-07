$('#Buffalo').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'3416' ,name: "Avail (Click to book)", date: "2022/11/07", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'3417' ,name: "Avail (Click to book)", date: "2022/11/10", description:"10:00 AM", type: "touropen" },
 { id:'3418' ,name: "Unavail Click for bot", date: "2022/11/10", description:"2:00 PM", type: "tourclosed" },
 { id:'3419' ,name: "Unavail Click for bot", date: "2022/11/12", description:"9:30 AM,11:00 AM,any", type: "tourclosed" },
 { id:'3420' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'3421' ,name: "Avail (Click to book)", date: "2022/11/17", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'3422' ,name: "Avail (Click to book)", date: "2022/11/18", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'3423' ,name: "Unavail Click for bot", date: "2022/11/19", description:"9:30 AM,11:00 AM,any", type: "tourclosed" },
 { id:'3424' ,name: "Avail (Click to book)", date: "2022/11/21", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'3425' ,name: "Avail (Click to book)", date: "2022/11/28", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'3426' ,name: "Avail (Click to book)", date: "2022/12/01", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'3427' ,name: "Avail (Click to book)", date: "2022/12/02", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'3428' ,name: "Avail (Click to book)", date: "2022/12/03", description:"9:30 AM,11:00 AM", type: "touropen" },
 { id:'3429' ,name: "Avail (Click to book)", date: "2022/12/05", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'3430' ,name: "Avail (Click to book)", date: "2022/12/08", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'3431' ,name: "Avail (Click to book)", date: "2022/12/09", description:"10:00 AM,2:00 PM", type: "touropen" },

], });$('#Buffalo').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://ubconnect.buffalo.edu/portal/campustour'); } else { window.location.href='/tourrequest.jsp?cname=Buffalo&date='+activeEvent.date+'&times='+activeEvent.description;     }});
