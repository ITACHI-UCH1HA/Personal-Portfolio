var tabLinks=document.getElementsByClassName("tab-links");
var tabContents=document.getElementsByClassName("tab-contents");

function openTab(tabname){
    for(tablink of tabLinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------

var menubar=document.getElementById("menubar");

function openmenu(){
    menubar.style.right="0";
}
function closemenu(){
    menubar.style.right="-200px";
}