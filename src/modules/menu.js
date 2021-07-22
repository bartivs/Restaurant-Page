import  createHeader from './header';
import  createFooter from './footer'; 
function menuContentBlock(){ 
    const content= document.createElement("div");
    content.classList.add("tab-content"); 
    content.textContent="Menu del 'El buen Sabor'";
    return content; 
}

function menuTab(){ 
 const allPage=document.getElementById("content"); 
 allPage.innerHTML=""


 allPage.appendChild(createHeader("menu")); 
 allPage.appendChild(menuContentBlock());
 allPage.appendChild(createFooter()); 
}

export default menuTab;