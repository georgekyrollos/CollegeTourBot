$('#Macalester').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'2460' ,name: "Unavail Click for bot", date: "2022/11/07", description:"all", type: "tourclosed" },
 { id:'2461' ,name: "Avail (Click to book)", date: "2022/11/08", description:"all", type: "touropen" },
 { id:'2462' ,name: "Avail (Click to book)", date: "2022/11/10", description:"all", type: "touropen" },
 { id:'2463' ,name: "Avail (Click to book)", date: "2022/11/11", description:"all", type: "touropen" },
 { id:'2464' ,name: "Avail (Click to book)", date: "2022/11/12", description:"all", type: "touropen" },
 { id:'2465' ,name: "Avail (Click to book)", date: "2022/11/14", description:"all", type: "touropen" },
 { id:'2466' ,name: "Avail (Click to book)", date: "2022/11/15", description:"all", type: "touropen" },
 { id:'2467' ,name: "Avail (Click to book)", date: "2022/11/17", description:"all", type: "touropen" },
 { id:'2468' ,name: "Avail (Click to book)", date: "2022/11/18", description:"all", type: "touropen" },
 { id:'2469' ,name: "Avail (Click to book)", date: "2022/11/19", description:"all", type: "touropen" },
 { id:'2470' ,name: "Avail (Click to book)", date: "2022/11/21", description:"all", type: "touropen" },
 { id:'2471' ,name: "Avail (Click to book)", date: "2022/11/22", description:"all", type: "touropen" },
 { id:'2472' ,name: "Avail (Click to book)", date: "2022/11/28", description:"all", type: "touropen" },
 { id:'2473' ,name: "Avail (Click to book)", date: "2022/12/02", description:"all", type: "touropen" },
 { id:'2474' ,name: "Avail (Click to book)", date: "2022/12/05", description:"all", type: "touropen" },
 { id:'2475' ,name: "Avail (Click to book)", date: "2022/12/09", description:"all", type: "touropen" },
 { id:'2476' ,name: "Avail (Click to book)", date: "2022/12/12", description:"all", type: "touropen" },
 { id:'2477' ,name: "Avail (Click to book)", date: "2022/12/19", description:"all", type: "touropen" },
 { id:'2478' ,name: "Avail (Click to book)", date: "2023/01/06", description:"all", type: "touropen" },
 { id:'2479' ,name: "Avail (Click to book)", date: "2023/01/09", description:"all", type: "touropen" },
 { id:'2480' ,name: "Avail (Click to book)", date: "2023/01/13", description:"all", type: "touropen" },
 { id:'2481' ,name: "Avail (Click to book)", date: "2023/01/20", description:"all", type: "touropen" },
 { id:'2482' ,name: "Avail (Click to book)", date: "2023/01/23", description:"all", type: "touropen" },
 { id:'2483' ,name: "Avail (Click to book)", date: "2023/01/27", description:"all", type: "touropen" },
 { id:'2484' ,name: "Avail (Click to book)", date: "2023/01/30", description:"all", type: "touropen" },
 { id:'2485' ,name: "Avail (Click to book)", date: "2023/02/01", description:"all", type: "touropen" },
 { id:'2486' ,name: "Avail (Click to book)", date: "2023/02/03", description:"all", type: "touropen" },
 { id:'2487' ,name: "Avail (Click to book)", date: "2023/02/06", description:"all", type: "touropen" },
 { id:'2488' ,name: "Avail (Click to book)", date: "2023/02/10", description:"all", type: "touropen" },
 { id:'2489' ,name: "Avail (Click to book)", date: "2023/02/13", description:"all", type: "touropen" },
 { id:'2490' ,name: "Avail (Click to book)", date: "2023/02/15", description:"all", type: "touropen" },
 { id:'2491' ,name: "Avail (Click to book)", date: "2023/02/17", description:"all", type: "touropen" },
 { id:'2492' ,name: "Avail (Click to book)", date: "2023/02/20", description:"8:15 AM", type: "touropen" },
 { id:'2493' ,name: "Avail (Click to book)", date: "2023/02/22", description:"all", type: "touropen" },
 { id:'2494' ,name: "Avail (Click to book)", date: "2023/02/24", description:"all", type: "touropen" },
 { id:'2495' ,name: "Avail (Click to book)", date: "2023/02/27", description:"all", type: "touropen" },

], });$('#Macalester').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://admissions.macalester.edu/portal/visit'); } else { window.location.href='/tourrequest.jsp?cname=Macalester&date='+activeEvent.date+'&times='+activeEvent.description;     }});
