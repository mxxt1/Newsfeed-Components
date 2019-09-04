/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
//create function, pass array
function createMenu(arr){
  const header = document.querySelector('.header');
  //create container div with class menu
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu');
  //create ul
  const list = document.createElement('ul');
 
  //loop over arr and create menu items as li
  for (let i=0;i<arr.length;i++){
    let li = document.createElement('li');
    list.appendChild(li);
    li.textContent = arr[i];
    }
  //select the menu button
  const menuButton = document.querySelector('.menu-button');
  header.addEventListener('click', e=>{
    console.log(`menu button clicked`);
    menuContainer.classList.toggle('menu--open');
  })

   //append ul to the created menu container
   header.appendChild(menuContainer);
   menuContainer.appendChild(list);


  
  console.log('menu container', menuContainer);
  return menuContainer;
}

createMenu(menuItems);