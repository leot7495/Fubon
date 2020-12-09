
function resize () {
    if (document.body.clientWidth < 900) {
        document.getElementById('img_step1_1').src = "images/instructions/mobile/mobile01.png"
        document.getElementById('img_step1_2').src = "images/instructions/mobile/mobile02.png"
        document.getElementById('img_step2').src = "images/instructions/mobile/mobile03.png"
        document.getElementById('img_step3').src = "images/instructions/mobile/mobile04.png"
        document.getElementById('img_step4').src = "images/instructions/mobile/mobile05.png"
        document.getElementById('img_step5').src = "images/instructions/mobile/mobile06.png"
        document.getElementById('img_step6').src = "images/instructions/mobile/mobile07.png"
        document.getElementById('img_step7').src = "images/instructions/mobile/mobile08.png"
        document.getElementById('img_step8').src = "images/instructions/mobile/mobile09.png"
        document.getElementById('img_step9').src = "images/instructions/mobile/mobile10.png"
        document.getElementById('img_step10').src = "images/instructions/mobile/mobile11.png"
        document.getElementById('img_step11').src = "images/instructions/mobile/mobile12.png"
        document.getElementById('img_step12').src = "images/instructions/mobile/mobile13.png"
    }else{
        document.getElementById('img_step1_1').src = "images/instructions/web/web01.png"
        document.getElementById('img_step1_2').src = "images/instructions/web/web02.png" 
        document.getElementById('img_step2').src = "images/instructions/web/web03.png" 
        document.getElementById('img_step3').src = "images/instructions/web/web04.png"
        document.getElementById('img_step4').src = "images/instructions/web/web05.png"
        document.getElementById('img_step5').src = "images/instructions/web/web06.png"
        document.getElementById('img_step6').src = "images/instructions/web/web07.png"
        document.getElementById('img_step7').src = "images/instructions/web/web08.png"
        document.getElementById('img_step8').src = "images/instructions/web/web09.png"
        document.getElementById('img_step9').src = "images/instructions/web/web10.png"
        document.getElementById('img_step10').src = "images/instructions/web/web11.png"
        document.getElementById('img_step11').src = "images/instructions/web/web12.png"
        document.getElementById('img_step12').src = "images/instructions/web/web13.png"
    }
}

function scroll () {
    if (window.scrollY > 200) {
        document.getElementById('icon_up').style = 'display:block'
    }else{
        document.getElementById('icon_up').style = 'display:none'
    }
}

// 點擊 icon 向上滾動
function scrollYTop () { 
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    });
}

window.onload = resize
window.onload = scroll

window.onscroll = scroll
window.onresize = resize