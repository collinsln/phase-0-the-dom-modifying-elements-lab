// Write your code here!
const element=document.getElementsByTagName("main");

main.remove();
function update(vic){

const newHeader = document.createElement("h1");

document.body.append(newHeader);

let select = document.querySelector("h1")
newHeader.id = "victory"
newHeader.textContent = "YOUR-NAME is the champion";
console.log(newHeader.textContent);


}
 update();
