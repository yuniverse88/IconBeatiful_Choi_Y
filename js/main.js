console.log('JavaScript is running!');

const vectorGraphic= document.querySelector ("#Layer_2");
function logThisID() {
    console.log('clicked on this element:', this.id);}
vectorGraphic.addEventListener('click', logThisID);


const runFox= document.querySelector ("#squirr");
function logThisID() {
    console.log('clicked on this element:', this.id);}
runFox.addEventListener('click', logThisID);