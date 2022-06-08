let menu = document.querySelector(".mobile-menu-line")
        let menuItem = document.querySelector(".menu-item")
        let menuOpen = false;
        menu.addEventListener('click', () => {
            if (!menuOpen) {
                menu.classList.add("mobile-menu-line-open");
                menuItem.classList.add("menu-item-open");
                menuItem.classList.remove("menu-item");
                menuOpen = true;
                
            }
            else {
                menu.classList.remove("mobile-menu-line-open");
                menuItem.classList.add("menu-item");
                menuItem.classList.remove("menu-item-open");
                menuOpen = false;
                
            }
        })