var menu_bar = document.getElementById("menu-bar");
var menu_list_links_2 = document.getElementsByClassName("menu-list-links-2");
var close_icon = document.getElementById("close-icon")

menu_bar.addEventListener("click", ()=>{
    menu_list_links_2[0].style.width="100%";
    menu_list_links_2[0].style.height="100%";
})

close_icon.addEventListener("click", ()=>{
    menu_list_links_2[0].style.width="0%";
})