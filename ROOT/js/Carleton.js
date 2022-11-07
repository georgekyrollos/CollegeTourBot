$('#Carleton').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'1999' ,name: "Unavail Click for bot", date: "2022/11/07", description:"10:30 AM,2:30 PM,any", type: "tourclosed" },
 { id:'2000' ,name: "Unavail Click for bot", date: "2022/11/11", description:"10:10 AM,1:40 PM,any", type: "tourclosed" },
 { id:'2001' ,name: "Unavail Click for bot", date: "2022/11/12", description:"9:00 AM,10:30 AM,any", type: "tourclosed" },
 { id:'2002' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'2003' ,name: "Unavail Click for bot", date: "2022/11/23", description:"10:00 AM", type: "tourclosed" },
 { id:'2004' ,name: "Avail (Click to book)", date: "2022/11/28", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2005' ,name: "Avail (Click to book)", date: "2022/12/05", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2006' ,name: "Avail (Click to book)", date: "2022/12/09", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2007' ,name: "Avail (Click to book)", date: "2022/12/12", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2008' ,name: "Avail (Click to book)", date: "2022/12/16", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2009' ,name: "Avail (Click to book)", date: "2022/12/19", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2010' ,name: "Avail (Click to book)", date: "2022/12/23", description:"10:00 AM,2:00 PM", type: "touropen" },
 { id:'2011' ,name: "Avail (Click to book)", date: "2023/01/02", description:"10:00 AM,2:00 PM", type: "touropen" },

], });$('#Carleton').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://www.admissions.carleton.edu/portal/campusvisit'); } else { window.location.href='/tourrequest.jsp?cname=Carleton&date='+activeEvent.date+'&times='+activeEvent.description;     }});
