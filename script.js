document.addEventListener("DOMContentLoaded",function() {
anime({
    targets: '#container', 
    translateX:250,
    borderRadius: ['0%', '50%'],
    scale: '2', 
    duration: 3000,
    backgroundColor: '#fffff0',
    direction: 'alternate',
    loop: true,
    delay:1000,
    easing: 'easeInOutExpo'

})
anime({
    targets: '#content',
    innerHTML: [0,1000],
    round:1,
    duration:3000,
 
    loop:true,
    direction: 'alternate'
})
anime({
    targets: '#square',
translateX: {
    duration: 800,
    value: 300
},
rotate: {
    duration:1000,
    value: 360
},
scale: {
    duration: 2000,
    value: 2,

}
})
anime({
    targets: ['#firstbar', '#secondbar', '#thirdbar'],
    direction: 'alternate',
    width: '90%',
    loop:true,
    duration: 3000,
    easing: 'easeInOutQuad'
})
})
