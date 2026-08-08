//==========================
// BACK TO TOP
//==========================

let topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

};


if(topBtn){

    topBtn.onclick = function(){

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    };

}