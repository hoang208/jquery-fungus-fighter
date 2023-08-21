$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let apValue = 100;
let hpValue = 100;

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    render();
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    $('.arcane-scepter').on('click', arcaneScepterAttack)
    $('.entangle').on('click', entangleAttack)
    $('.dragon-blade').on('click', dragonBladeAttack)
    $('.star-fire').on('click', starFireAttack)
}
//end onReady()

function arcaneScepterAttack(event){
    event.preventDefault();
    apValue-=17;
    hpValue-=14;
    render();
}
//end arcaneScepterAttack()

function entangleAttack(event) {
    event.preventDefault();
    apValue-=23;
    hpValue-=9;
    render();
}
//end entangleAttack()

function dragonBladeAttack(event) {
    event.preventDefault();
    apValue-=38;
    hpValue-=47;
    render();
}
//end dragonBladeAttack()

function starFireAttack(event) {
    event.preventDefault();
    apValue-=33;
    hpValue-=25;
    render();
}
//end starFireAttack()

function hpRegen(){
    hpValue+=1;
    render();
}

function render() {
    if (hpValue <= 0) {
        hpValue = 0;
        $('.freaky-fungus').removeClass('walk').addClass('dead');
    } if (apValue <= 0) {
        apValue = 0;
        $('.freaky-fungus').removeClass('walk').addClass('jump');
        $('.attack-btn').attr("disabled", true);
    } if (hpValue <= 50) {
        setInterval(hpRegen, 1000);
    }
    $('.ap-text').text(apValue + " AP");
    $('#ap-meter').val(apValue);
    $('.hp-text').text(hpValue + " HP");
    $('#hp-meter').val(hpValue);
}
//end render()