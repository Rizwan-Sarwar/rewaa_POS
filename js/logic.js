let layer = document.querySelector(".layer");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.getElementById("btn");
let allItems = sidebar.children[1].children;
closeBtn.addEventListener("click", () => {
    allMenuColapseWhenClickMenuBTN()
    allMenuColapseWhenClickSidebarIcon()
    sidebar.classList.toggle("open");
    if (window.innerWidth <= 1024) {
        layer.classList.toggle("layerFull");
    }
});
// SIDE BAR SCRIPT
let menuBTN_Click = (ele) => {
    let menuBTN = ele;
    let SubMenu = menuBTN.nextElementSibling.nextElementSibling
    if (sidebar.matches(".open")) {
        if (SubMenu === null) {
            console.log("null")
            allMenuColapseWhenClickMenuBTN()
        } else if (SubMenu.matches(".sub-menu")) {
            if (SubMenu.style.maxHeight) {
                SubMenu.style.maxHeight = null;
                if (menuBTN.lastElementChild.matches(".arrow-rotate")) {
                    menuBTN.lastElementChild.style.transform = "rotate(0deg)"
                }
            } else {
                allMenuColapseWhenClickMenuBTN()
                SubMenu.style.maxHeight = SubMenu.scrollHeight + "px";
                if (menuBTN.lastElementChild.matches(".arrow-rotate")) {
                    menuBTN.lastElementChild.style.transform = "rotate(180deg)"
                }
            }
            console.log("matched")
        } //
        else {
            console.log("not matched")
        }
    } //
    else {
        if (SubMenu === null) {
            console.log("null")
            allMenuColapseWhenClickMenuBTN_sm()
        } // 
        else if (SubMenu.matches(".sub-menu")) {
            if (SubMenu.style.maxHeight) {
                SubMenu.style.maxHeight = null;
                SubMenu.previousElementSibling.style.visibility = "visible";
            } else {
                allMenuColapseWhenClickMenuBTN_sm()
                SubMenu.classList.add("sub-menu-sm");
                SubMenu.style.maxHeight = SubMenu.scrollHeight + "px";
                SubMenu.previousElementSibling.style.visibility = "hidden";
            }
        }
    }
}
let allMenuColapseWhenClickMenuBTN = () => {
    for (var i = 0; i < allItems.length; i++) {
        if (allItems[i].lastElementChild.matches(".sub-menu")) {
            allItems[i].lastElementChild.style.maxHeight = null;
            if (allItems[i].firstElementChild.lastElementChild.matches(".arrow-rotate")) {
                allItems[i].firstElementChild.lastElementChild.style.transform = "rotate(0deg)"
            }
        }
    }
}
let allMenuColapseWhenClickMenuBTN_sm = () => {
    for (var i = 0; i < allItems.length; i++) {
        if (allItems[i].lastElementChild.matches(".sub-menu")) {
            if (allItems[i].lastElementChild.classList.contains("sub-menu-sm")) {
                allItems[i].lastElementChild.style.maxHeight = null;
                if (allItems[i].lastElementChild.previousElementSibling.matches("tooltip")) {
                    allItems[i].lastElementChild.previousElementSibling.visibility = "visible";
                }
            }
        }
    }
}
let allMenuColapseWhenClickSidebarIcon = () => {
    for (var i = 0; i < allItems.length; i++) {
        if (allItems[i].lastElementChild.matches(".sub-menu")) {
            if (allItems[i].lastElementChild.classList.contains("sub-menu-sm")) {
                allItems[i].lastElementChild.style.maxHeight = null;
                allItems[i].lastElementChild.classList.remove("sub-menu-sm");
            }
        }
    }
}

// Product Detail Table Collapse
let tableRowCollapsible = (ele) => {
    if (ele.matches(".delete-btn")) {
        let trash = ele;
        trash.parentElement.parentElement.style.display = "none";
        trash.parentElement.parentElement.nextElementSibling.style.display = "none";
    } else if (ele.matches(".arrow-icon")) {
        let arrow = ele;
        let nextSibling = arrow.parentElement.parentElement.nextElementSibling
        if (arrow.matches(".arrow-rotate")) {
            arrow.classList.remove("arrow-rotate");
            if (nextSibling.matches(".discount")) {
                if (nextSibling.children[0].children[0].matches(".productDiscount_show")) {
                    nextSibling.children[0].children[0].classList.remove("productDiscount_show")
                } else {
                    nextSibling.children[0].children[0].classList.add("productDiscount_show")
                }
            }
        } else {
            arrow.classList.add("arrow-rotate");
            if (nextSibling.matches(".discount")) {
                if (nextSibling.children[0].children[0].matches(".productDiscount_show")) {
                    nextSibling.children[0].children[0].classList.remove("productDiscount_show")
                } else {
                    nextSibling.children[0].children[0].classList.add("productDiscount_show")
                }
            }
        }
    }
}

// Input value check
let inputValueCheck = (inputElement) => {
    let inputValue = inputElement.value;
    let inputLabel = document.getElementById("search-product-label");
    if (!inputValue.length == 0) {
        inputLabel.style.cssText = `
        top: -10px;
        font-size: 14px;
        left: 33px;
        `;
    } else {
        inputLabel.style.removeProperty('top');
        inputLabel.style.removeProperty('left');
        inputLabel.style.removeProperty('font-size');
    }
}

document.querySelector(".home-section").addEventListener("click", () => {
    allMenuColapseWhenClickMenuBTN()
    allMenuColapseWhenClickMenuBTN_sm()
})

document.getElementById("btn2").addEventListener("click", toggleSideBar)

function toggleSideBar() {
    sidebar.classList.toggle("open");
    layer.classList.toggle("layerFull");
}
window.addEventListener("load", screenSizeCheck);

function screenSizeCheck() {
    if (window.innerWidth > 1024) {
        sidebar.classList.add("open");
    } else {
        sidebar.classList.remove("open");
    }
}
