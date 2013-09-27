//javascript for DOM assignment

function nickNames(){
    document.getElementById("nickname").innerText = "Smiley";
    document.getElementById("favorites").innerHTML = "Chocolate";
    document.getElementById("hometown").innerHTML = "Toronto";
};
nickNames();

function setFont(){
  document.body.style.fontFamily="Arial, sans-serif";
}
setFont();

function listClass(){
  for (var i=0; i < document.getElementsByTagName("li").length; i++ ){
      document.getElementsByTagName("li")[i].className = "listitem";
  }
}
listClass();

function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}
addStyleString('.listitem { color: red }');

function addImage(){
    var myImage = document.createElement('img');
    myImage.setAttribute('src', 'http://goo.gl/cfo8z');
    myImage.setAttribute('height', '80px');
    myImage.setAttribute('width', '160px');
    document.body.appendChild(myImage);
}
addImage();
