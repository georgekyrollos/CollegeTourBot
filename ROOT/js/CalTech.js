$('#CalTech').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'312' ,name: "Avail (Click to book)", date: "2022/11/07", description:"2:00 PM", type: "touropen" },
 { id:'313' ,name: "Avail (Click to book)", date: "2022/11/08", description:"3:00 PM", type: "touropen" },
 { id:'314' ,name: "Avail (Click to book)", date: "2022/11/09", description:"2:00 PM,4:00 PM", type: "touropen" },
 { id:'315' ,name: "Avail (Click to book)", date: "2022/11/10", description:"3:00 PM", type: "touropen" },
 { id:'316' ,name: "Unavail Click for bot", date: "2022/11/11", description:"2:00 PM", type: "tourclosed" },
 { id:'317' ,name: "Avail (Click to book)", date: "2022/11/14", description:"2:00 PM", type: "touropen" },
 { id:'318' ,name: "Avail (Click to book)", date: "2022/11/16", description:"2:00 PM,4:00 PM", type: "touropen" },
 { id:'319' ,name: "Avail (Click to book)", date: "2022/11/18", description:"2:00 PM", type: "touropen" },
 { id:'320' ,name: "Avail (Click to book)", date: "2022/11/28", description:"2:00 PM", type: "touropen" },
 { id:'321' ,name: "Avail (Click to book)", date: "2022/11/29", description:"3:00 PM", type: "touropen" },
 { id:'322' ,name: "Avail (Click to book)", date: "2022/11/30", description:"2:00 PM,4:00 PM", type: "touropen" },
 { id:'323' ,name: "Avail (Click to book)", date: "2022/12/02", description:"2:00 PM", type: "touropen" },

], });$('#CalTech').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://apply.caltech.edu/portal/visit'); } else { window.location.href='/tourrequest.jsp?cname=CalTech&date='+activeEvent.date+'&times='+activeEvent.description;     }});
