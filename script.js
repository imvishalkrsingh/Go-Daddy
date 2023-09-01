var tl = gsap.timeline();

tl

    .from("header",{
        opacity:0,
        y:-20,
        duration:2
    })
    .from("nav",{
        opacity:0,
        y:20,
        duration:4,
    })
    .from("#center h1",{
        opacity:0,
        scale:1.5,
        duration:2,
        y:-100,
    })
    .from("#center #start",{
        opacity:0,
        scale:1.5,
        duration:2,
        y:100,
    })
    .from(["#purse","#perfume"],{
        opacity:0,
        x:-100,
        scale:1.6,
        duration:1
    })
    .from(["#flower","#coffee"],{
        opacity:0,
        x:100,
        scale:1.6,
        duration:2,
        delay:-1
    })
    .to("#center #arrow",{
        y:20,
        yoyo:true,
        repeat:"-1"
    })
   