function openTab(event, tabName) {
    let i, tabContent, tablink;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace("active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";

}

// document.getElementById("defaultOpen").click();






// let buttons = document.querySelectorAll(".join-btn", (event));