function changePic(){
  // define a variable
  var pic =  document.getElementById("pic1");
  //chnage the image source by changing the source
  pic.src = "https://th.bing.com/th/id/R.8ad434111f164c87fa42b152b990cf09?rik=cZkgJnnXgZIP5Q&pid=ImgRaw&r=0";

}

function changeTitle(){
    // define a variable
    var title = document.getElementById("pic1-title");
    // change the title text
    title.textContent= "New Article Title";
}