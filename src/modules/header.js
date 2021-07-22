

function createHeader(selectedTab){
    
    const headerContainer= document.createElement("div");
    headerContainer.id="header-container"; 
    
    const logo= document.createElement("div"); 

    logo.textContent= "EL BUEN SABOR"
    headerContainer.appendChild(logo); 
    headerContainer.appendChild(createNavBar(selectedTab));
    return  headerContainer;
}


function createNavBar(selectedTab){
    const navBar= document.createElement('div'); 
    navBar.id="nav-bar";
    
    
    const homeButton= document.createElement("div");
    homeButton.classList.add("button");
    homeButton.id="home-button"; 
    homeButton.textContent="Inicio"; 
    
    const menuButton= document.createElement("div");
    menuButton.classList.add("button");
    menuButton.id="menu-button"; 
    menuButton.textContent="Menu";
    
    const contactButton= document.createElement("div");
    contactButton.id="contact-button"; 
    contactButton.classList.add("button");
    contactButton.textContent="Contacto";

    

    if(selectedTab === "home"){
        homeButton.classList.add("selected"); 
    }

    if(selectedTab === "menu"){
        menuButton.classList.add("selected"); 
    }

    if(selectedTab === "contact"){
        contactButton.classList.add("selected"); 
    }

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton); 

    return navBar;
}


export default createHeader; 