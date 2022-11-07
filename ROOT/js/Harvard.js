$('#Harvard').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'1' ,name: "Avail (Click to book)", date: "2022/11/07", description:"10:00 AM", type: "touropen" },
 { id:'2' ,name: "Avail (Click to book)", date: "2022/11/08", description:"2:00 PM", type: "touropen" },
 { id:'3' ,name: "Avail (Click to book)", date: "2022/11/09", description:"2:00 PM", type: "touropen" },
 { id:'4' ,name: "Unavail Click for bot", date: "2022/11/10", description:"2:00 PM", type: "tourclosed" },
 { id:'5' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:00 AM", type: "touropen" },
 { id:'6' ,name: "Avail (Click to book)", date: "2022/11/15", description:"2:00 PM", type: "touropen" },
 { id:'7' ,name: "Avail (Click to book)", date: "2022/11/16", description:"2:00 PM", type: "touropen" },
 { id:'8' ,name: "Unavail Click for bot", date: "2022/11/17", description:"2:00 PM", type: "tourclosed" },

], });$('#Harvard').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://apply.college.harvard.edu/portal/22-info-tour'); } else { window.location.href='/tourrequest.jsp?cname=Harvard&date='+activeEvent.date+'&times='+activeEvent.description;     }});
