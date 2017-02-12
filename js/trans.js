var lang_en={
    
    "home": "Home",
    "about": "About",
    "contact": "Contact",
    "title": "Geolocation and local storage",
    "header": "Your current position:"
    
};

var lang_hu={
    
    "home": "Főoldal",
    "about": "Rólunk",
    "contact": "Kapcsolat",
    "title": "Geolokáció és helyi adattárolás",
    "header": "A jelenlegi pozíciód:"
};


//Checking the language settings
function getNavigatorLang(){
    
    return navigator.language.split( "-" )[0];
    
}


//Setting the language of the menu

function setMenuLang(){
    
    // Browser basic settings
    var currentLang = "lang_"+getNavigatorLang();
    
    
    if(localStorage.myLang)
    {
        currentLang= "lang_"+localStorage.myLang;
    }

    //Menu setting
    
    var menu = document.querySelectorAll("ul.nav li a");
    for(var i=0; i<menu.length; i++)
    {
        var data = menu[i].getAttribute("data-name");
        menu[i].innerHTML= window[currentLang][data];
    }
    
    // Navbar title and header setting
    
    var getSelector = document.querySelector(".navbar-header a");
    
    var dataName = getSelector.getAttribute("data-title");
    
    getSelector.innerHTML = window[currentLang][dataName];
    
    
    var getSelector = document.querySelector(".starter-template h1");
    
    var dataName = getSelector.getAttribute("header-title");
    
    getSelector.innerHTML = window[currentLang][dataName];    
}


// Swapping language

function setNewLang(element){
    
   localStorage.myLang = element.value;
    
   setMenuLang();
}


//Selector setting
function setSelector(){
    
    
    if(!localStorage.myLang) return;
    
    
    //Setting the stored-value
    var selector = document.querySelector(".lang-selector");
    
    selector.value= localStorage.myLang;
    
}

setSelector();
setMenuLang();
