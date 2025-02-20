

  var tl = gsap.timeline()
  tl.from(".logo",{
    opacity:0,
    y:-20,
    delay:1,
    duration:1
  })
  tl.from(".menu-items li a",{
    opacity:0,
    y:-20,
    duration:1,
    stagger:0.5
  })