$('#Kenyon').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'2540' ,name: "Unavail Click for bot", date: "2022/11/08", description:"all", type: "tourclosed" },
 { id:'2541' ,name: "Avail (Click to book)", date: "2022/11/09", description:"all", type: "touropen" },
 { id:'2542' ,name: "Avail (Click to book)", date: "2022/11/10", description:"all", type: "touropen" },
 { id:'2543' ,name: "Avail (Click to book)", date: "2022/11/11", description:"all", type: "touropen" },
 { id:'2544' ,name: "Avail (Click to book)", date: "2022/11/12", description:"all", type: "touropen" },
 { id:'2545' ,name: "Avail (Click to book)", date: "2022/11/14", description:"all", type: "touropen" },
 { id:'2546' ,name: "Avail (Click to book)", date: "2022/11/15", description:"all", type: "touropen" },
 { id:'2547' ,name: "Avail (Click to book)", date: "2022/11/16", description:"all", type: "touropen" },
 { id:'2548' ,name: "Avail (Click to book)", date: "2022/11/17", description:"all", type: "touropen" },
 { id:'2549' ,name: "Avail (Click to book)", date: "2022/11/18", description:"all", type: "touropen" },
 { id:'2550' ,name: "Avail (Click to book)", date: "2022/11/21", description:"all", type: "touropen" },
 { id:'2551' ,name: "Avail (Click to book)", date: "2022/11/22", description:"all", type: "touropen" },
 { id:'2552' ,name: "Avail (Click to book)", date: "2022/11/23", description:"all", type: "touropen" },
 { id:'2553' ,name: "Avail (Click to book)", date: "2022/11/28", description:"all", type: "touropen" },
 { id:'2554' ,name: "Avail (Click to book)", date: "2022/11/29", description:"all", type: "touropen" },
 { id:'2555' ,name: "Avail (Click to book)", date: "2022/11/30", description:"all", type: "touropen" },
 { id:'2556' ,name: "Avail (Click to book)", date: "2022/12/01", description:"all", type: "touropen" },
 { id:'2557' ,name: "Avail (Click to book)", date: "2022/12/02", description:"all", type: "touropen" },
 { id:'2558' ,name: "Avail (Click to book)", date: "2022/12/03", description:"all", type: "touropen" },
 { id:'2559' ,name: "Avail (Click to book)", date: "2022/12/05", description:"all", type: "touropen" },
 { id:'2560' ,name: "Avail (Click to book)", date: "2022/12/06", description:"all", type: "touropen" },
 { id:'2561' ,name: "Avail (Click to book)", date: "2022/12/07", description:"all", type: "touropen" },
 { id:'2562' ,name: "Avail (Click to book)", date: "2022/12/08", description:"all", type: "touropen" },
 { id:'2563' ,name: "Avail (Click to book)", date: "2022/12/09", description:"all", type: "touropen" },

], });$('#Kenyon').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://admissions.kenyon.edu/portal/visit'); } else { window.location.href='/tourrequest.jsp?cname=Kenyon&date='+activeEvent.date+'&times='+activeEvent.description;     }});