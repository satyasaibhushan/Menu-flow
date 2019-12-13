var aray  = [
    ["Profile","posts","picture"],
    ["Messages","New","sent","spam"],
    ["Settings","password","language"],
    ["Logout"]
]
var icons = ["far fa-user","far fa-envelope","fas fa-cog","fas fa-sign-out-alt"]
var list = document.getElementsByClassName("list")[0];

for (let i = 0; i < aray.length; i++) {
    var newli = document.createElement("li")
    setAttributes(newli,{"id":aray[i][0],"class":"item"})
    var att = document.createElement("a")    
    setAttributes(att,{"class":"btn","href" :"#"+aray[i][0]})
    var icon = document.createElement("i")
    icon.setAttribute("class",icons[i]);
    att.innerHTML=aray[i][0];
    list.appendChild(newli);
    newli.appendChild(att);
    att.insertAdjacentElement('afterBegin',icon);
    var div = document.createElement("div")
    div.setAttribute("class","smenu");
      for (let j = 1; j < aray[i].length; j++) {
        var attr = document.createElement("a")
        attr.setAttribute("href","#")
        attr.innerHTML = aray[i][j];  
        div.appendChild(attr)
      }
    newli.appendChild(div)  

}


function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  } 
