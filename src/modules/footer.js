function createFooter(){
    const  footer= document.createElement("footer");
    // footer.id="footer"; 
    const aboutDev= document.createElement("div");
    aboutDev.textContent="bartivs"; 

    footer.appendChild(aboutDev); 
    return footer; 
    
}

export default createFooter; 