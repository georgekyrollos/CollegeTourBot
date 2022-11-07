$('#Michigan').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'1091' ,name: "Avail (Click to book)", date: "2022/11/07", description:"12:30 PM,2:00 PM", type: "touropen" },
 { id:'1092' ,name: "Unavail Click for bot", date: "2022/11/07", description:"11:00 AM", type: "tourclosed" },
 { id:'1093' ,name: "Unavail Click for bot", date: "2022/11/11", description:"11:00 AM,12:30 PM,2:00 PM,any", type: "tourclosed" },
 { id:'1094' ,name: "Unavail Click for bot", date: "2022/11/12", description:"9:00 AM,10:00 AM,any", type: "tourclosed" },
 { id:'1095' ,name: "Avail (Click to book)", date: "2022/11/14", description:"12:30 PM,2:00 PM", type: "touropen" },
 { id:'1096' ,name: "Unavail Click for bot", date: "2022/11/14", description:"11:00 AM", type: "tourclosed" },
 { id:'1097' ,name: "Unavail Click for bot", date: "2022/11/18", description:"11:00 AM,12:30 PM,2:00 PM,any", type: "tourclosed" },
 { id:'1098' ,name: "Unavail Click for bot", date: "2022/11/19", description:"9:00 AM,10:00 AM,any", type: "tourclosed" },
 { id:'1099' ,name: "Unavail Click for bot", date: "2022/11/21", description:"11:00 AM,12:30 PM,2:00 PM,any", type: "tourclosed" },
 { id:'1100' ,name: "Avail (Click to book)", date: "2022/11/28", description:"12:30 PM,2:00 PM", type: "touropen" },
 { id:'1101' ,name: "Unavail Click for bot", date: "2022/11/28", description:"11:00 AM", type: "tourclosed" },
 { id:'1102' ,name: "Avail (Click to book)", date: "2022/12/02", description:"11:00 AM,12:30 PM,2:00 PM", type: "touropen" },

], });$('#Michigan').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://enrollmentconnect.umich.edu/portal/campus_tours'); } else { window.location.href='/tourrequest.jsp?cname=Michigan&date='+activeEvent.date+'&times='+activeEvent.description;     }});
