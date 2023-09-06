function viewform()
{
    document.getElementById("formID").classList.remove("hidden");
    document.getElementById("eventsContainer").classList.add("hidden");
    document.getElementById("noevents").classList.add("hidden");
}
function viewform2(){
    document.getElementById("formID").classList.remove("hidden");
    document.getElementById("eventsContainer").classList.add("hidden");
    document.getElementById("ID2").classList.add("hidden");
}
function reset(){
 var events=[];
 localStorage.setItem("events",JSON.stringify(events));
 displayEvents();
 displayTodaysEvents();
 window.location.reload();
}
function fillTodayDate()
{
    var today=document.getElementById("todayDate");
    var todayDate=String(new Date());
    var dateParts=todayDate.split(" ");
    today.innerHTML="&nbsp; "+dateParts[1]+" "+dateParts[2] + " "+dateParts[3] +"&nbsp";
}
fillTodayDate();
displayTodaysEvents();
function displayTodaysEvents()
{
    var today=new Date();
    // console.log(today);
    var day=today.getDate();
    if(day<10){
        var day =("0" + today.getDate()).slice(-2);
    }
    var month =today.getMonth()+1;
    if(month<10){
        month =("0" + month).slice(-2);
    }
    var year = today.getFullYear();
    var todayDate=String(year+"-"+month+"-"+day);
    var events=JSON.parse(localStorage.getItem("events"));
    var len=events.length;
    var boxes=document.getElementById("boxesTodaysEvents");
    while(boxes.hasChildNodes())
        boxes.removeChild(boxes.firstChild);
    for(var i=0;i<len;i++)
    {
        if(events[i].date==todayDate)
        {

            var box=document.createElement("div");
            box.classList.add("box");
            // box.setAttribute('onclick',"display("+i+")");
            var list=document.createElement("ul");
            list.setAttribute("id",events[i].name);
            var listElement=document.createElement("li");
            listElement.innerHTML='<div class="hea"><div onclick="display('+i+')">'+events[i].name+'</div><button onclick="options()" class="options"><img src="vector.png"></button> <br>'+ events[i].date;
            list.appendChild(listElement);
            box.appendChild(list);
            boxes.appendChild(box);
            document.getElementById("noevents1").classList.add("hidden");
        }
    }
}
displayTodaysEvents();
function displayEvents()
{
    var events=JSON.parse(localStorage.getItem("events"));
    var len=events.length;
    var boxes=document.getElementById("boxes");
    while(boxes.hasChildNodes())
        boxes.removeChild(boxes.firstChild);
    for(var i=0;i<len;i++)
    {
        var box=document.createElement("div");
        box.classList.add("box");
        var list=document.createElement("ul");
        list.setAttribute("id",events[i].name);
        var listElement=document.createElement("li");
        listElement.innerHTML='<div onclick="display('+i+')">'+events[i].name+'</div><div class="updel"><div class="rectangle hidden" id="opt"><div class="update" onclick="viewform2()"><svg class="upd" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M16.3 6.925L12.05 2.725L13.45 1.325C13.8333 0.941667 14.3043 0.75 14.863 0.75C15.4217 0.75 15.8923 0.941667 16.275 1.325L17.675 2.725C18.0583 3.10833 18.2583 3.571 18.275 4.113C18.2917 4.655 18.1083 5.11733 17.725 5.5L16.3 6.925ZM14.85 8.4L4.25 19H0V14.75L10.6 4.15L14.85 8.4Z" fill="black"/></svg><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Update</p></div><div class="delete"><svg class="del" xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none"><path d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z" fill="black"/></svg><p onclick="dell()">delete</p></div></div><button id="opt" onclick="options()" class="options"><img src="vector.png"></button></div> <br>'+ events[i].date;
        list.appendChild(listElement);
        box.appendChild(list);
        boxes.appendChild(box);
    }
}
function addEvent() 
{
    var event={};
    event.name=document.getElementById("ename").value;
    event.date=document.getElementById("edate").value;
    event.location=document.getElementById("elocation").value;
    event.host=document.getElementById("ehost").value;
    var events=JSON.parse(localStorage.getItem("events"));
    events.push(event);
    localStorage.setItem("events",JSON.stringify(events));
    document.getElementById("ename").value = "";
    document.getElementById("edate").value = "";
    document.getElementById("elocation").value = "";
    document.getElementById("ehost").value = "";
    document.getElementById("formID").classList.add("hidden");
    document.getElementById("eventsContainer").classList.remove("hidden");
    displayEvents();
    displayTodaysEvents();
}
function display(index)
{
  document.getElementById("eventsContainer").classList.add("hidden");
  document.getElementById("ID2").classList.remove("hidden");
  var events=JSON.parse(localStorage.getItem("events"));
  var event=events[index];
  console.log(ename);
  document.getElementById("eventName").innerHTML=event.name;
  document.getElementById("eventLocation").innerHTML="Event Location:"+event.location +"<br> <br>";
  document.getElementById("eventHost").innerHTML="Event Host&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:"+event.host;
  document.getElementById("eventdate").innerHTML=event.date;
}
function eventsPage()
{
    document.getElementById("eventsContainer").classList.remove("hidden");
    document.getElementById("ID2").classList.add("hidden");

}
displayTodaysEvents();
const myDiv = document.getElementById('boxes');
function today(){
    document.getElementById("eventsContainer").classList.add("hidden");
    document.getElementById("todaysEventsContainer").classList.remove("hidden");
}
function allEvents(){
    document.getElementById("eventsContainer").classList.remove("hidden");
    displayEvents();
    document.getElementById("todaysEventsContainer").classList.add("hidden");
}

function options(){
            if (document.getElementById("opt").classList.contains('hidden')) {
                document.getElementById("opt").classList.remove('hidden');
            } else {
                document.getElementById("opt").classList.add('hidden');
            }
}
function dell(){
    var events=[];
    localStorage.setItem("events",JSON.stringify(events));
    displayEvents();
    displayTodaysEvents();
    window.location.reload();

}