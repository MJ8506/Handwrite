function handwriting(){
    let handwriting = document.getElementById('HandWriting').value;
   console.log(handwriting)
    if(handwriting == "HMA") {
        document.getElementById('page').style.fontFamily ="Homemade Apple"
    }
    if(handwriting == "TGE") {
        document.getElementById('page').style.fontFamily ="Tangerine"
    }
    if(handwriting == "CVT") {
        document.getElementById('page').style.fontFamily ="Caveat"
    }
    if(handwriting == "PKH") {
        document.getElementById('page').style.fontFamily ="Patrick Hand"
    }
    else if (handwriting == "SIL") {
        document.getElementById('page').style.fontFamily = "Shadows Into Light"
    }
}
