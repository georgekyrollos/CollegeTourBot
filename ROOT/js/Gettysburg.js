$('#Gettysburg').evoCalendar({   sidebarToggler: false, eventListToggler: false,  theme:'Orange Coral', calendarEvents: [
 { id:'687' ,name: "Unavail Click for bot", date: "2022/11/07", description:"10:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM,any", type: "tourclosed" },
 { id:'688' ,name: "Avail (Click to book)", date: "2022/11/08", description:"11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'689' ,name: "Unavail Click for bot", date: "2022/11/08", description:"10:00 AM", type: "tourclosed" },
 { id:'690' ,name: "Avail (Click to book)", date: "2022/11/09", description:"10:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'691' ,name: "Avail (Click to book)", date: "2022/11/10", description:"10:00 AM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'692' ,name: "Unavail Click for bot", date: "2022/11/10", description:"11:00 AM,1:00 PM", type: "tourclosed" },
 { id:'693' ,name: "Unavail Click for bot", date: "2022/11/11", description:"10:00 AM,11:00 AM,3:00 PM,4:00 PM,any", type: "tourclosed" },
 { id:'694' ,name: "Unavail Click for bot", date: "2022/11/12", description:"10:00 AM,11:00 AM,12:00 PM,any", type: "tourclosed" },
 { id:'695' ,name: "Avail (Click to book)", date: "2022/11/14", description:"10:00 AM,11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'696' ,name: "Avail (Click to book)", date: "2022/11/15", description:"10:00 AM,11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'697' ,name: "Avail (Click to book)", date: "2022/11/16", description:"10:00 AM,11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'698' ,name: "Avail (Click to book)", date: "2022/11/17", description:"10:00 AM,11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'699' ,name: "Avail (Click to book)", date: "2022/11/18", description:"1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'700' ,name: "Unavail Click for bot", date: "2022/11/18", description:"11:00 AM", type: "tourclosed" },
 { id:'701' ,name: "Unavail Click for bot", date: "2022/11/19", description:"10:00 AM,11:00 AM,12:00 PM,any", type: "tourclosed" },
 { id:'702' ,name: "Avail (Click to book)", date: "2022/11/21", description:"11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'703' ,name: "Unavail Click for bot", date: "2022/11/21", description:"10:00 AM", type: "tourclosed" },
 { id:'704' ,name: "Avail (Click to book)", date: "2022/11/22", description:"10:00 AM,11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'705' ,name: "Avail (Click to book)", date: "2022/11/28", description:"11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'706' ,name: "Unavail Click for bot", date: "2022/11/28", description:"10:00 AM", type: "tourclosed" },
 { id:'707' ,name: "Avail (Click to book)", date: "2022/11/29", description:"10:00 AM,11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'708' ,name: "Avail (Click to book)", date: "2022/11/30", description:"10:00 AM,11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'709' ,name: "Avail (Click to book)", date: "2022/12/01", description:"10:00 AM,11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'710' ,name: "Avail (Click to book)", date: "2022/12/02", description:"10:00 AM,11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'711' ,name: "Unavail Click for bot", date: "2022/12/03", description:"10:00 AM,11:00 AM,12:00 PM,any", type: "tourclosed" },
 { id:'712' ,name: "Avail (Click to book)", date: "2022/12/05", description:"10:00 AM,11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'713' ,name: "Avail (Click to book)", date: "2022/12/06", description:"10:00 AM,11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'714' ,name: "Avail (Click to book)", date: "2022/12/07", description:"11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'715' ,name: "Avail (Click to book)", date: "2022/12/08", description:"10:00 AM,11:00 AM,1:00 PM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },
 { id:'716' ,name: "Avail (Click to book)", date: "2022/12/09", description:"10:00 AM,11:00 AM,2:00 PM,3:00 PM,4:00 PM", type: "touropen" },

], });$('#Gettysburg').on('selectEvent', function(event,activeEvent) {if(activeEvent.type=='touropen') {	window.open('https://admissions.gettysburg.edu/portal/campus_tour'); } else { window.location.href='/tourrequest.jsp?cname=Gettysburg&date='+activeEvent.date+'&times='+activeEvent.description;     }});