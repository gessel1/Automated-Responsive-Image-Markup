const IMAGES = document.querySelectorAll("img");


for (let i = 0; i <IMAGES.length; i++){
    let imgSrc = IMAGES[i].getAttribute("src");
    
    //Strips off tail end of img src
    imgSrc = imgSrc.slice(0,-8);
    
    console.log(imgSrc);
    
    //Helps out with what our data type is
    let type = IMAGES[i].getAttribute("data-type");
    console.log(type);
}