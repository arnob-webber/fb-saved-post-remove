// click each more buttons 
const mainElement = document.querySelector('[role=main]');
const moreButtons = Array.from(mainElement.querySelectorAll('[aria-label="More"]'));
moreButtons.slice(1).forEach(button => button.click());


// it still clicks all the menu items
const menuItems = document.querySelectorAll('[role=menuitem]');
Array.from(menuItems).forEach(item => item.click());
