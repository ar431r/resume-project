function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status =="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
getfile("data.json",function(text){
  let data = JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.career);
  education(data.education);
});
var parent = document.querySelector(".flex-parent");

var child1 = document.createElement("div");
child1.classList.add("profile");
parent.appendChild(child1);

var child2 = document.createElement("div");
child2.classList.add("content");
parent.appendChild(child2);

function details(basic){
  var img = document.createElement("img");
  img.src = basic.photo;
  child1.appendChild(img);
  var name = document.createElement("h3");
  name.textContent = basic.name;
  child1.appendChild(name);
  var email = document.createElement("h3");
  email.href = "mailto:jannu@gmail.com";
  email.textContent = basic.email;
  child1.appendChild(email);
  var phone = document.createElement("h3");
  phone.textContent = basic.mobile;
  child1.appendChild(phone);
  var Address = document.createElement("h3");
  Address.textContent = "Address:";
  child1.appendChild(Address);
  var hr = document.createElement("hr");
  child1.appendChild(hr);
  var Address = document.createElement("p");
  Address.textContent = basic.Address;
  child1.appendChild(Address);
}
function career(obj){
  var heading=document.createElement("h3");
  heading.textContent=obj.info;
  child2.appendChild(heading);
  heading.textContent = "Career objectives:";
  var hline = document.createElement("hr");
  child2.appendChild(hline);
  var p = document.createElement("p");
  p.textContent=obj.info;
  child2.appendChild(p);
}
function education(edu){
  var heading = document.createElement("h3");
  child2.appendChild(heading);
  heading.textContent="Educational Details:";
  var hline=document.createElement("hr");
  child2.appendChild(hline);
  var list = document.createElement("ul");
  child2.appendChild(list);
  for (var i = 0; i < edu.length; i++)
   {
     var litem=document.createElement("li");
     list.appendChild(litem);
     litem.textContent=edu[i].course;

     var college=document.createElement("p");
     list.appendChild(college);
     college.textContent=edu[i].college;

     var data=document.createElement("q");
     list.appendChild(data);
     data.textContent=edu[i].data;
   }
}
