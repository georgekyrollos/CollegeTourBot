$('#NJIT').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'3693' ,name: "Avail (Click to book)", date: "2022/11/07", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3694' ,name: "Avail (Click to book)", date: "2022/11/08", description:"11:00 AM", type: "touropen" },
 { id:'3695' ,name: "Avail (Click to book)", date: "2022/11/09", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3696' ,name: "Avail (Click to book)", date: "2022/11/14", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3697' ,name: "Avail (Click to book)", date: "2022/11/15", description:"11:00 AM", type: "touropen" },
 { id:'3698' ,name: "Avail (Click to book)", date: "2022/11/16", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3699' ,name: "Avail (Click to book)", date: "2022/11/17", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3700' ,name: "Avail (Click to book)", date: "2022/11/18", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3701' ,name: "Avail (Click to book)", date: "2022/11/21", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3702' ,name: "Avail (Click to book)", date: "2022/11/22", description:"11:00 AM", type: "touropen" },
 { id:'3703' ,name: "Avail (Click to book)", date: "2022/11/23", description:"11:00 AM", type: "touropen" },
 { id:'3704' ,name: "Avail (Click to book)", date: "2022/11/28", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3705' ,name: "Avail (Click to book)", date: "2022/11/29", description:"11:00 AM", type: "touropen" },
 { id:'3706' ,name: "Avail (Click to book)", date: "2022/11/30", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3707' ,name: "Avail (Click to book)", date: "2022/12/01", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3708' ,name: "Avail (Click to book)", date: "2022/12/02", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3709' ,name: "Avail (Click to book)", date: "2022/12/03", description:"11:00 AM", type: "touropen" },
 { id:'3710' ,name: "Avail (Click to book)", date: "2022/12/05", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3711' ,name: "Avail (Click to book)", date: "2022/12/06", description:"11:00 AM", type: "touropen" },
 { id:'3712' ,name: "Avail (Click to book)", date: "2022/12/07", description:"11:00 AM,02:00 PM", type: "touropen" },
 { id:'3713' ,name: "Avail (Click to book)", date: "2022/12/08", description:"11:00 AM,02:00 PM", type: "touropen" },

], });$('#NJIT').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://connect.njit.edu/portal/all-campus-tours'); } else { window.location.href='/tourrequest.jsp?cname=NJIT&date='+activeEvent.date+'&times='+activeEvent.description;     }});
