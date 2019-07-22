const IMAGES = document.querySelectorAll("img");

//Shapes picture width based on browser size
const SIZES = {
    showcase: "100vw",
    reason: "(max-width: 799 px)100 vw, 372 px",
    feature: "(max-width: 799 px)100 vw, 558 px",
    story: "(max-width: 799 px)100 vw, 570 px"
};

//Loops through img srcs and provides correct urls to the images
function makeSrcset(imgSrc){
    let markup = [];
    let width = 400;
    
    
    for (let i = 0; i < 5; i ++){
        markup[i] = imgSrc + "-" + width + ".jpg" + width + "w" ;
        width += 400;
    }
    
    return markup.join()

}

for (let i = 0; i <IMAGES.length; i++){
    let imgSrc = IMAGES[i].getAttribute("src");
    
    //Strips off tail end of img src
    imgSrc = imgSrc.slice(0,-8);
    
    let srcSet = makeSrcset(imgSrc);
    
    IMAGES[i].setAttribute("srcset", srcset);
    
    console.log(srcSet);
    
    //Helps out with what our data type is
    let type = IMAGES[i].getAttribute("data-type");
    let sizes = SIZES[type];
    
    IMAGES[i].setAttribute("sizes", sizes);
    
}
