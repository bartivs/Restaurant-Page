import  createHeader from './header';
import  createFooter from './footer'; 
function contactContentBlock(){ 
    const content= document.createElement("div");
    content.classList.add("tab-content"); 
    content.textContent="Contacto del 'El buen Sabor'";
    return content; 
}

function contactTab(){ 
 const allPage=document.getElementById("content"); 
 allPage.innerHTML=""


 allPage.appendChild(createHeader("contact")); 
 allPage.appendChild(contactContentBlock());
 allPage.appendChild(createFooter()); 
}

export default contactTab;