$('#Princeton').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'28' ,name: "Unavail Click for bot", date: "2022/11/07", description:"10:30 AM,2:30 PM,any", type: "tourclosed" },
 { id:'29' ,name: "Avail (Click to book)", date: "2022/11/08", description:"2:30 PM", type: "touropen" },
 { id:'30' ,name: "Unavail Click for bot", date: "2022/11/08", description:"10:30 AM", type: "tourclosed" },
 { id:'31' ,name: "Avail (Click to book)", date: "2022/11/09", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'32' ,name: "Unavail Click for bot", date: "2022/11/10", description:"10:30 AM,2:30 PM,any", type: "tourclosed" },
 { id:'33' ,name: "Unavail Click for bot", date: "2022/11/11", description:"10:30 AM,2:30 PM,any", type: "tourclosed" },
 { id:'34' ,name: "Unavail Click for bot", date: "2022/11/12", description:"10:00 AM,11:15 AM,3:15 PM,any", type: "tourclosed" },
 { id:'35' ,name: "Unavail Click for bot", date: "2022/11/13", description:"11:15 AM,3:15 PM,any", type: "tourclosed" },
 { id:'36' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'37' ,name: "Avail (Click to book)", date: "2022/11/15", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'38' ,name: "Avail (Click to book)", date: "2022/11/16", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'39' ,name: "Avail (Click to book)", date: "2022/11/17", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'40' ,name: "Unavail Click for bot", date: "2022/11/18", description:"10:30 AM,2:30 PM,any", type: "tourclosed" },
 { id:'41' ,name: "Unavail Click for bot", date: "2022/11/19", description:"10:00 AM,11:15 AM,3:15 PM,any", type: "tourclosed" },
 { id:'42' ,name: "Unavail Click for bot", date: "2022/11/20", description:"11:15 AM,3:15 PM,any", type: "tourclosed" },
 { id:'43' ,name: "Unavail Click for bot", date: "2022/11/21", description:"10:30 AM,2:30 PM,any", type: "tourclosed" },
 { id:'44' ,name: "Avail (Click to book)", date: "2022/11/28", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'45' ,name: "Avail (Click to book)", date: "2022/11/29", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'46' ,name: "Avail (Click to book)", date: "2022/11/30", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'47' ,name: "Avail (Click to book)", date: "2022/12/01", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'48' ,name: "Avail (Click to book)", date: "2022/12/02", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'49' ,name: "Avail (Click to book)", date: "2022/12/03", description:"10:00 AM,3:15 PM", type: "touropen" },
 { id:'50' ,name: "Unavail Click for bot", date: "2022/12/03", description:"11:15 AM", type: "tourclosed" },
 { id:'51' ,name: "Avail (Click to book)", date: "2022/12/04", description:"11:15 AM,3:15 PM", type: "touropen" },
 { id:'52' ,name: "Avail (Click to book)", date: "2022/12/05", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'53' ,name: "Avail (Click to book)", date: "2022/12/06", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'54' ,name: "Avail (Click to book)", date: "2022/12/07", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'55' ,name: "Avail (Click to book)", date: "2022/12/08", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'56' ,name: "Avail (Click to book)", date: "2022/12/09", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'57' ,name: "Avail (Click to book)", date: "2022/12/10", description:"10:00 AM,11:15 AM,3:15 PM", type: "touropen" },
 { id:'58' ,name: "Avail (Click to book)", date: "2022/12/11", description:"11:15 AM,3:15 PM", type: "touropen" },
 { id:'59' ,name: "Avail (Click to book)", date: "2022/12/12", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'60' ,name: "Avail (Click to book)", date: "2022/12/13", description:"10:30 AM,2:30 PM", type: "touropen" },
 { id:'61' ,name: "Avail (Click to book)", date: "2022/12/14", description:"10:30 AM,2:30 PM", type: "touropen" },

], });$('#Princeton').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://apply.princeton.edu/portal/orange_key_tour'); } else { window.location.href='/tourrequest.jsp?cname=Princeton&date='+activeEvent.date+'&times='+activeEvent.description;     }});