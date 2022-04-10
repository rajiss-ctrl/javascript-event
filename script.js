
//DECLARE A VARIABLE THAT HOLD BUTTON WHICH WILL HANDLE THE EVENT
const clickEvent = document.querySelector('button');
// WE ADD THE TYPE OF EVENT WE NEED TO THE BUTTON BELLOW AND CALL THE FUNCTION
clickEvent.addEventListener('click', clcikEventFunc);
// FUNCTION THAT WILL GIVE US THE THE FUNCTIONALITY WE WANT 
function clcikEventFunc(){
    //we create the paragraph that will hold the message
    const eventPara = document.createElement('p');
    const evenParaText = document.createTextNode('When javascript interacts with HTML. Then the Script can respond to these events, which is known as Javascript event. Javascript event occur when the user clicks on the link or button, hover or swipe over an element, Type any thing, resize the window or when the page is load.');

    eventPara.appendChild(evenParaText);

    document.querySelector('.para').appendChild(eventPara)
}

//  ANOTHER TYPE OF EVENT TO THE BELOW (KEYUP)
//DECLARE A VARIABLE THAT WE HOLD INPUT WHICH WILL HANDLE THE EVENT
const keyupEvent = document.querySelector('input');
keyupEvent.addEventListener('keyup', keyupFunc)
// FUNCTION THAT WILL GIVE US THE THE FUNCTIONALITY WE WANT 
function keyupFunc(){
    console.log(keyupEvent.value)

    const output = document.querySelector('.keyupPara');
    output.innerHTML=keyupEvent.value
}









