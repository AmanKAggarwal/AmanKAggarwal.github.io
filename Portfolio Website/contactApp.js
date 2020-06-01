class ContactDiv{
  ContactDiv(ref){
    this.reference = ref;
  }
  /**
 * Takes in an image tag and returns its src for its black theme equivalent by adding '_Black' if required. 
 * @param {*} img 
 */
  changeSrcToNormal(img){
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

  changeSrcToBlack(img){
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

  hoverContact(e){
    if (e.target.classList.contains("contact-btn")){
      return;
    } else if (e.target.parentElement.classList.contains("contact-btn")){
      return;
    } else{
      document.getElementById('email-icon').src = changeSrcToBlack(document.getElementById('email-icon'));
      var btns = contact_div.querySelectorAll(".btn");
      for (var i = 0; i < btns.length; i++){
        btns[i].firstElementChild.src = changeSrcToBlack(btns[i].firstElementChild);
        btns[i].style.background = "#e8edff";
        btns[i].style.borderColor = "black";
      }
    } 
  }

  normalContact(){
    var btns = contact_div.querySelectorAll(".btn");
    var email_icon = document.getElementById('email-icon');
    email_icon.src = changeSrcToNormal(email_icon);
    for (var i = 0; i < btns.length; i++){
      console.log(btns);
      btns[i].firstElementChild.src = changeSrcToNormal(btns[i].firstElementChild);
      btns[i].style.background = "black";
      btns[i].style.borderColor = "#e8edff";
    }
  }

  buttonHover(e){
    var btn, img;
    if (e.target.classList.contains("contact-btn")){
      btn = e.target;
      img = btn.firstElementChild;
    } else{
      img = e.target;
    }
    img.src = changeSrcToNormal(img);
    img.parentElement.style.background = "#000000";
  }
}
const contact_div = document.getElementById('contact');
const cont_div = new ContactDiv(document.getElementById('contact'));
contact_div.addEventListener("mouseover", cont_div.hoverContact);
contact_div.addEventListener("mouseleave", cont_div.normalContact);
var btns = contact_div.querySelectorAll('.contact-btn');
for (var i = 0; i < btns.length; i++){
  btns[i].addEventListener('mouseover', cont_div.buttonHover);
}