$('#MIT').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'9' ,name: "Avail (Click to book)", date: "2022/11/07", description:"9:30 AM,1:30 PM", type: "touropen" },
 { id:'10' ,name: "Avail (Click to book)", date: "2022/11/08", description:"9:30 AM,1:30 PM", type: "touropen" },
 { id:'11' ,name: "Avail (Click to book)", date: "2022/11/09", description:"9:30 AM,1:30 PM", type: "touropen" },
 { id:'12' ,name: "Unavail Click for bot", date: "2022/11/10", description:"9:30 AM,1:30 PM,any", type: "tourclosed" },
 { id:'13' ,name: "Avail (Click to book)", date: "2022/11/14", description:"9:30 AM,1:30 PM", type: "touropen" },
 { id:'14' ,name: "Avail (Click to book)", date: "2022/11/15", description:"9:30 AM", type: "touropen" },
 { id:'15' ,name: "Avail (Click to book)", date: "2022/11/16", description:"9:30 AM", type: "touropen" },
 { id:'16' ,name: "Avail (Click to book)", date: "2022/11/17", description:"9:30 AM", type: "touropen" },
 { id:'17' ,name: "Avail (Click to book)", date: "2022/11/18", description:"9:30 AM,1:30 PM", type: "touropen" },
 { id:'18' ,name: "Avail (Click to book)", date: "2022/11/21", description:"9:30 AM,1:30 PM", type: "touropen" },
 { id:'19' ,name: "Avail (Click to book)", date: "2022/11/22", description:"9:30 AM,1:30 PM", type: "touropen" },
 { id:'20' ,name: "Avail (Click to book)", date: "2022/11/23", description:"9:30 AM", type: "touropen" },
 { id:'21' ,name: "Avail (Click to book)", date: "2022/11/28", description:"9:30 AM", type: "touropen" },
 { id:'22' ,name: "Avail (Click to book)", date: "2022/12/02", description:"9:30 AM", type: "touropen" },
 { id:'23' ,name: "Avail (Click to book)", date: "2022/12/05", description:"9:30 AM", type: "touropen" },
 { id:'24' ,name: "Avail (Click to book)", date: "2022/12/09", description:"9:30 AM", type: "touropen" },
 { id:'25' ,name: "Avail (Click to book)", date: "2022/12/12", description:"9:30 AM", type: "touropen" },
 { id:'26' ,name: "Avail (Click to book)", date: "2022/12/16", description:"9:30 AM", type: "touropen" },
 { id:'27' ,name: "Avail (Click to book)", date: "2022/12/19", description:"9:30 AM", type: "touropen" },

], });$('#MIT').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://apply.mitadmissions.org/portal/visitmit'); } else { window.location.href='/tourrequest.jsp?cname=MIT&date='+activeEvent.date+'&times='+activeEvent.description;     }});
