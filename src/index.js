import './style.css';
import  homeTab from './modules/home';
import  menuTab from './modules/menu';
import  contactTab from './modules/contact'


const tabSwitch=function(){
    
    
    const buttons= Array.from(document.querySelectorAll(".button"));
    buttons.forEach(button => {
        button.addEventListener("click",changeTab)
    }
    );

    function changeTab(e){
        switch(e.target.id){
            case "menu-button":
                menuTab();
                tabSwitch();
                break;
            case "contact-button":
                contactTab();
                tabSwitch();
                break; 
            case "home-button":
                homeTab();
                tabSwitch();
                break;
        }
    }
    
}

homeTab();
tabSwitch();



