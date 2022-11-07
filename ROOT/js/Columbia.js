$('#Columbia').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'3319' ,name: "Avail (Click to book)", date: "2022/11/09", description:"12:00 PM,4:00 PM", type: "touropen" },
 { id:'3320' ,name: "Avail (Click to book)", date: "2022/11/10", description:"12:00 PM,4:00 PM", type: "touropen" },
 { id:'3321' ,name: "Avail (Click to book)", date: "2022/11/11", description:"12:00 PM", type: "touropen" },
 { id:'3322' ,name: "Unavail Click for bot", date: "2022/11/11", description:"2:00 PM,4:00 PM", type: "tourclosed" },
 { id:'3323' ,name: "Unavail Click for bot", date: "2022/11/12", description:"12:00 PM", type: "tourclosed" },
 { id:'3324' ,name: "Avail (Click to book)", date: "2022/11/14", description:"12:00 PM,2:00 PM,4:00 PM", type: "touropen" },
 { id:'3325' ,name: "Avail (Click to book)", date: "2022/11/15", description:"12:00 PM,4:00 PM", type: "touropen" },
 { id:'3326' ,name: "Avail (Click to book)", date: "2022/11/16", description:"12:00 PM,4:00 PM", type: "touropen" },
 { id:'3327' ,name: "Avail (Click to book)", date: "2022/11/17", description:"12:00 PM,4:00 PM", type: "touropen" },
 { id:'3328' ,name: "Avail (Click to book)", date: "2022/11/18", description:"12:00 PM,2:00 PM,4:00 PM", type: "touropen" },
 { id:'3329' ,name: "Unavail Click for bot", date: "2022/11/19", description:"12:00 PM", type: "tourclosed" },
 { id:'3330' ,name: "Unavail Click for bot", date: "2022/11/21", description:"12:00 PM,2:00 PM,4:00 PM,any", type: "tourclosed" },

], });$('#Columbia').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://apply.college.columbia.edu/portal/campus_visit'); } else { window.location.href='/tourrequest.jsp?cname=Columbia&date='+activeEvent.date+'&times='+activeEvent.description;     }});
