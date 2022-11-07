$('#Minnesota').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'3128' ,name: "Unavail Click for bot", date: "2022/11/07", description:"8:45 AM,2:00 PM,any", type: "tourclosed" },
 { id:'3129' ,name: "Avail (Click to book)", date: "2022/11/11", description:"8:45 AM,2:00 PM", type: "touropen" },
 { id:'3130' ,name: "Avail (Click to book)", date: "2022/11/14", description:"8:45 AM", type: "touropen" },
 { id:'3131' ,name: "Avail (Click to book)", date: "2022/11/18", description:"8:45 AM,2:00 PM", type: "touropen" },
 { id:'3132' ,name: "Avail (Click to book)", date: "2022/11/28", description:"8:45 AM,2:00 PM", type: "touropen" },
 { id:'3133' ,name: "Avail (Click to book)", date: "2022/12/02", description:"8:45 AM,2:00 PM", type: "touropen" },
 { id:'3134' ,name: "Avail (Click to book)", date: "2022/12/05", description:"8:45 AM", type: "touropen" },
 { id:'3135' ,name: "Avail (Click to book)", date: "2022/12/09", description:"8:45 AM,2:00 PM", type: "touropen" },

], });$('#Minnesota').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://admit.umn.edu/portal/CollegiateVisits'); } else { window.location.href='/tourrequest.jsp?cname=Minnesota&date='+activeEvent.date+'&times='+activeEvent.description;     }});
