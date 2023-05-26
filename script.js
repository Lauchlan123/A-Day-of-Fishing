/* Declare variables below to save the different sections (divs) of your story*/
let play=document.querySelector(".playbtn");
let MM=document.querySelector(".MainMenu");
let Opt1=document.querySelector(".Option1");
let Opt2H=document.querySelector(".Option2H");
let Opt2h=document.querySelector(".Option2h");
let Opt2HB=document.querySelector(".Option2HB");
let Opt2hb=document.querySelector(".Option2hb");
let Opt2Hb=document.querySelector(".Option2Hb");
let Opt2hB=document.querySelector(".Option2hB");
let fishing2HB=document.querySelector(".fishing2HB");
let fishing2Hb=document.querySelector(".fishing2Hb");
let fishing2hb=document.querySelector(".fishing2hb");
let fishing2hB=document.querySelector(".fishing2hB");
let LargeHook=document.querySelector(".BOXLargeHook");
let SmallHook=document.querySelector(".BOXSmallHook");
let LargeBait=document.querySelector(".BOXLargeBait1");
let SmallBait=document.querySelector(".BOXSmallBait1");
let LargeBaitI=document.querySelector(".BOXLargeBait1I");
let SmallBaitI=document.querySelector(".BOXSmallBait1I");
let rig1=document.querySelector(".rig1");
let rig2=document.querySelector(".rig2");
let rig3=document.querySelector(".rig3");
let rig4=document.querySelector(".rig4");
let reel1=document.querySelector(".reel1");
let reel2=document.querySelector(".reel2");
let reel3=document.querySelector(".reel3");
let reel4=document.querySelector(".reel4");
let fish=document.querySelector(".fish");
let rtm=document.querySelector(".RTM");
let instruct=document.querySelector(".instruct1");
let fishimg=document.querySelector(".fishimg");

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
play.onclick=function(){
    Opt1.style.display="inline";
    MM.style.display="none";
};

LargeHook.onclick=function(){
    Opt2H.style.display="inline";
    Opt1.style.display="none";
};


SmallHook.onclick=function(){
    Opt2h.style.display="inline";
    Opt1.style.display="none";
};

LargeBait.onclick=function(){
    Opt2HB.style.display="inline";
    Opt2H.style.display="none";
};
	rig1.onclick=function(){
        fishing2HB.style.display="inline";
        Opt2HB.style.display="none";
    };

SmallBait.onclick=function(){
    Opt2hb.style.display="inline";
    Opt2h.style.display="none";
};
	rig3.onclick=function(){
        fishing2hb.style.display="inline";
        Opt2hb.style.display="none";
    };

LargeBaitI.onclick=function(){
    Opt2hB.style.display="inline";
    Opt2h.style.display="none";
};
	rig4.onclick=function(){
        fishing2hB.style.display="inline";
        Opt2hB.style.display="none";
    };

SmallBaitI.onclick=function(){
    Opt2Hb.style.display="inline";
    Opt2H.style.display="none";
};
	rig2.onclick=function(){
        fishing2Hb.style.display="inline";
        Opt2Hb.style.display="none";
    };

reel1.onclick=function(){
    instruct.innerHTML="WOW! You caught a Giant Sea Bass!";
    fish.style.display="inline";
    fishing2HB.style.display="none"; document.getElementById("imgfish").src="https://www.seafoodwatch.org/globalassets/sfw-data-blocks/species/seabass/black-sea-bass.png";
};

reel2.onclick=function(){
    fish.style.display="inline";
    fishing2Hb.style.display="none";
    instruct.innerHTML="Your bait was too small and the hook was too big for the mosquito to bite. The mosquito stole your bait!"; document.getElementById("imgfish").src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1280px-HD_transparent_picture.png";
};

reel3.onclick=function(){
    fish.style.display="inline";
    fishing2hb.style.display="none";
    instruct.innerHTML="WOW! You caught a mosquito!"; document.getElementById("imgfish").src="https://www.pestec.com/uploads/page/house-mosquito-photorealistic-2.png";
};

reel4.onclick=function(){ document.getElementById("imgfish").src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1280px-HD_transparent_picture.png";
    fish.style.display="inline";
    fishing2hB.style.display="none";
    instruct.innerHTML="Your bait was too big and it flew off your hook. You caught nothing!";
    
};

rtm.onclick=function(){
    MM.style.display="inline";
    fish.style.display="none";
};