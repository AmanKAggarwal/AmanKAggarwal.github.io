// _____________________________________________________________________________________________________________________
const lightTheme = "#e8edff"
const darkTheme = "black"
/**
 * Takes in an image tag and returns its src for its black theme equivalent by adding '_Black' if required. 
 * @param {*} img 
 */
const changeSrcToNormal = function(img){
  var img_src = img.src.split('/');
  var img_name = img_src[img_src.length-1];
  var indexOfBlack = img_name.indexOf("_Black");
  if (indexOfBlack == -1){
    var new_name = img_name;
  } else{
    var new_name = img_name.substring(0, indexOfBlack)+".png";
  }
  img_src.splice([img_src.length-1]);
  return img_src.join('/')+'/'+new_name;
}
const changeSrcToBlack = function(img){
  var img_src = img.src.split('/');
  var img_name = img_src[img_src.length-1];
  var indexOfBlack = img_name.indexOf("_Black");
  if (indexOfBlack == -1){
    var new_name = img_name.substring(0,img_name.indexOf('.png'))+"_Black.png";
  } else{
    var new_name = img_name
  }
  img_src.splice([img_src.length-1]);
  return img_src.join('/')+'/'+new_name;
}
// _____________________________________________________________________________________________________________________
const contact_lighttheme = "#8f9094"
const hoverContact = function(e){
  if (e.target.classList.contains("contact-btn")){
    return;
  } else if (e.target.parentElement.classList.contains("contact-btn")){
    return;
  } else{
    document.getElementById('email-icon').src = changeSrcToBlack(document.getElementById('email-icon'));
    var btns = contact_div.querySelectorAll(".btn");
    for (var i = 0; i < btns.length; i++){
      btns[i].firstElementChild.src = changeSrcToBlack(btns[i].firstElementChild);
      btns[i].style.background = contact_lighttheme;
      btns[i].style.borderColor = darkTheme;
    }
  } 
}
const normalContact = function(){
  var btns = contact_div.querySelectorAll(".btn");
  var email_icon = document.getElementById('email-icon');
  email_icon.src = changeSrcToNormal(email_icon);
  for (var i = 0; i < btns.length; i++){
    console.log(btns[i])
    btns[i].firstElementChild.src = changeSrcToNormal(btns[i].firstElementChild);
    btns[i].style.background = darkTheme;
    btns[i].style.borderColor = contact_lighttheme;
  }
}
const buttonHover = function(e){
  var btn, img;
  if (e.target.classList.contains("contact-btn")){
    btn = e.target;
    img = btn.firstElementChild;
  } else{
    img = e.target;
  }
  img.src = changeSrcToNormal(img);
  img.parentElement.style.background = darkTheme;
}
// _____________________________________________________________________________________________________________________
// const tableBorderColor = function(container, color){
//   container = document.querySelector(".display-"+container+"s");
//   var tableLi = container.querySelector("table").getElementsByTagName("td");
//   for(var i = 0; i < tableLi.length; i++){
//     tableLi[i].style.borderColor = color;
//   }
// }

// const ifEventOnTD = function(e, container){
//   console.log(container);
//   if (e.target.classList.contains(""+container+"-item")){
//     return true;
//   } else{
//     return false;
//   }
// }
// const tdBorderColor = function(e, color, container){
//   var td;
//   if (ifEventOnTD(e, container)){
//     td = e.target;
//   } else{
//     td = e.target.parentElement;
//   }
//   td.style.borderColor = color;
// }
// const hoverEffectTable_EventListener = function(container){
//   const div = document.querySelector(".display-"+container+"s");
//   const tdList = div.querySelector("table").getElementsByTagName("td");
//   for (var i = 0; i < tdList.length; i++){
//     tdList[i].addEventListener("mouseover", function(e){
//       tdBorderColor(e, "#f141fa", container);
//     })
//     tdList[i].addEventListener("mouseleave", function(e){
//       tdBorderColor(e, darkTheme, container);
//     })
//   }
// }
// const allTDBorderColor = function(e, container, color){
//   if (ifEventOnTD(e, container)){
//     return;
//   }
//   console.log(container);
//   const div = document.querySelector(document.querySelector(".display-"+container+"s"))
//   const tdList = div.querySelectorAll("td");
//   for (var i = 0; i < tdList.length; i++){
//     tdList[i].style.borderColor = color;
//   }
// }
// _____________________________________________________________________________________________________________________

const contact_div = document.getElementById('contact');
contact_div.addEventListener("mouseover", hoverContact);
contact_div.addEventListener("mouseleave", normalContact);
var btns = contact_div.querySelectorAll('.contact-btn');
for (var i = 0; i < btns.length; i++){
  btns[i].addEventListener('mouseover', buttonHover);
}









