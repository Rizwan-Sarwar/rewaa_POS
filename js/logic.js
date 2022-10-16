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
        if (trash.parentElement.parentElement.parentElement.matches(".row-colapse")) {
            trash.parentElement.parentElement.parentElement.style.display = "none";
        }
    } else if (ele.matches(".arrow-icon")) {
        let arrow = ele;
        let nextSibling = arrow.parentElement.parentElement.nextElementSibling
        if (arrow.matches(".arrow-rotate")) {
            arrow.classList.remove("arrow-rotate");
            if (nextSibling.matches(".rs_colapsebar")) {
                nextSibling.classList.toggle("rs_hidebar");
            }
        } else {
            arrow.classList.add("arrow-rotate");
            if (nextSibling.matches(".rs_colapsebar")) {
                nextSibling.classList.toggle("rs_hidebar");
            }
        }
    }
}

// Input label animate
let inputValueCheck = (inputElement) => {
    let inputValue = inputElement.value;
    let inputLabel = document.getElementById("search-product-label");
    if (!inputValue.length == 0) {
        inputLabel.classList.add("labelAnim-active");

        function filter() {
            var search_Value = inputValue.toUpperCase();
            var list = document.getElementsByClassName("rs_product-list")[0].children;
            var local_list;
            for (var i = 0; i < list.length; i++) {
                local_list = list[i].innerText.toUpperCase();
                if (local_list.indexOf(search_Value) > -1) {
                    list[i].style.display = "block";
                } else {
                    list[i].style.display = "none";
                }
            }
        }
        filter()
    } else {
        inputLabel.classList.remove("labelAnim-active");

        function filter() {
            var list = document.getElementsByClassName("rs_product-list")[0].children;
            for (var i = 0; i < list.length; i++) {
                list[i].style.display = "block";
            }
        }
        filter()
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

function NewRow(ele) {
    let randomNumbers = new Array;
    for (var i = 0; i < 2; i++) {
        let random = Math.floor(Math.random() * 100) + 1;
        randomNumbers.push(random)
    }
    rs_productImage = ele.children[0].children[0]
    rs_productImage_src = rs_productImage.src
    rs_productName = ele.children[1].children[0].innerHTML
    let rowColapse = document.createElement('div')
    rowColapse.className = "row-colapse";
    rowColapse.innerHTML =
        `
        <div class="gridv8-ver">
            <div class="trash td"><a href="##" class="delete-btn" onclick="tableRowCollapsible(this)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></a></div>
            <div class="product-name td"><input type="text" readonly value="${rs_productName}"></div>
            <div class="price td"><input type="text" readonly value="${randomNumbers[0]}"></div>
            <div class="quantity td"><input type="text" readonly value="1"></div>
            <div class="total-price td"><input type="text" readonly value="${randomNumbers[0] + '.00'}"></div>
            <div class="arrorBTN td"><a href="##" class="arrow-icon" onclick="tableRowCollapsible(this)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></a></div>
        </div>
        <div class="rs_colapsebar rs_hidebar">
            <div class="product-discount">
                <div class="product-image">
                    <img src="${rs_productImage_src}" alt="img">
                </div>
                <div class="product-SKU">
                    <p class="bold">SKU</p>
                    <p class="sku-code">${randomNumbers[1]}</p>
                </div>
                <div class="product-Tax">
                    <p class="bold">Tax</p>
                    <p class="tax-amount">1.30</p>
                </div>
                <div class="product-discount-percent">
                    <input type="text" value="Discount%" readonly>
                </div>
            </div>
        </div>`
    document.getElementById("rs_addRows").appendChild(rowColapse);
    document.getElementById("search-product").value = "";
    document.getElementById("search-product-label").classList.remove("labelAnim-active");
    setTimeout(AllProductsShow, 500)
}

function AllProductsShow() {
    let list = document.getElementsByClassName("rs_product-list")[0].children;
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = "block";
    }
}
