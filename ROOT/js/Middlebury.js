$('#Middlebury').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'2012' ,name: "Avail (Click to book)", date: "2022/11/07", description:"all", type: "touropen" },
 { id:'2013' ,name: "Avail (Click to book)", date: "2022/11/08", description:"all", type: "touropen" },
 { id:'2014' ,name: "Avail (Click to book)", date: "2022/11/09", description:"all", type: "touropen" },
 { id:'2015' ,name: "Avail (Click to book)", date: "2022/11/10", description:"all", type: "touropen" },
 { id:'2016' ,name: "Avail (Click to book)", date: "2022/11/11", description:"all", type: "touropen" },
 { id:'2017' ,name: "Avail (Click to book)", date: "2022/11/14", description:"all", type: "touropen" },
 { id:'2018' ,name: "Avail (Click to book)", date: "2022/11/15", description:"all", type: "touropen" },
 { id:'2019' ,name: "Avail (Click to book)", date: "2022/11/16", description:"all", type: "touropen" },
 { id:'2020' ,name: "Avail (Click to book)", date: "2022/11/17", description:"all", type: "touropen" },
 { id:'2021' ,name: "Avail (Click to book)", date: "2022/11/18", description:"all", type: "touropen" },
 { id:'2022' ,name: "Avail (Click to book)", date: "2022/11/21", description:"all", type: "touropen" },
 { id:'2023' ,name: "Avail (Click to book)", date: "2022/11/22", description:"all", type: "touropen" },
 { id:'2024' ,name: "Avail (Click to book)", date: "2022/11/23", description:"all", type: "touropen" },
 { id:'2025' ,name: "Avail (Click to book)", date: "2022/11/28", description:"all", type: "touropen" },
 { id:'2026' ,name: "Avail (Click to book)", date: "2022/11/29", description:"all", type: "touropen" },
 { id:'2027' ,name: "Avail (Click to book)", date: "2022/11/30", description:"all", type: "touropen" },
 { id:'2028' ,name: "Avail (Click to book)", date: "2022/12/01", description:"all", type: "touropen" },
 { id:'2029' ,name: "Avail (Click to book)", date: "2022/12/02", description:"all", type: "touropen" },
 { id:'2030' ,name: "Avail (Click to book)", date: "2022/12/05", description:"all", type: "touropen" },
 { id:'2031' ,name: "Avail (Click to book)", date: "2022/12/06", description:"all", type: "touropen" },
 { id:'2032' ,name: "Avail (Click to book)", date: "2022/12/07", description:"all", type: "touropen" },
 { id:'2033' ,name: "Avail (Click to book)", date: "2022/12/08", description:"all", type: "touropen" },
 { id:'2034' ,name: "Avail (Click to book)", date: "2022/12/09", description:"all", type: "touropen" },
 { id:'2035' ,name: "Avail (Click to book)", date: "2022/12/12", description:"all", type: "touropen" },
 { id:'2036' ,name: "Avail (Click to book)", date: "2022/12/13", description:"all", type: "touropen" },
 { id:'2037' ,name: "Avail (Click to book)", date: "2022/12/14", description:"all", type: "touropen" },

], });$('#Middlebury').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://admissions.middlebury.edu/portal/campus-visit-academic-year'); } else { window.location.href='/tourrequest.jsp?cname=Middlebury&date='+activeEvent.date+'&times='+activeEvent.description;     }});
