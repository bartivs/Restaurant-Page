import  createHeader from './header';
import  createFooter from './footer'; 
function homeContentBlock(){ 
    const content= document.createElement("div");
    content.classList.add("tab-content"); 
    content.textContent="Sobre 'El buen Sabor'";
    return content; 
}

function homeTab(){ 
 const allPage=document.getElementById("content"); 
 allPage.innerHTML=""


 allPage.appendChild(createHeader("home")); 
 allPage.appendChild(homeContentBlock());
 allPage.appendChild(createFooter()); 
}

export default homeTab; 