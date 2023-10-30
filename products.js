// ############################################# Dropdown Menus (Products Filter (pp)) #############################################
// Get all 'Dropdown Buttons'
const dropdownButtons = document.querySelectorAll(".dropdown-button-pp");

// Get all 'Dropdown Menus'
const dropdownMenus = document.querySelectorAll(".dropdown-menu-pp");

// Attach 'Click' event listener to each 'Dropdown Button'
dropdownButtons.forEach(dropBtn => {
  dropBtn.addEventListener("click", e => {

    // Get the 'Dropdown Menu' whose 'Dropdown Button' is 'Clicked'
    const clickedMenu = document.querySelector(`#${e.target.id}-menu`);

    // (i)  If the "Clicked" 'Dropdown Menu' is already Open
    if (clickedMenu.classList.contains("active")) {
      // Remove the '.active Class' of Clicked 'Dropdown Menu'
      clickedMenu.classList.remove("active");
      return;
    }

    // (ii)  If the "Clicked" 'Dropdown Menu' is already Close
    // 1) Close already Opened 'Dropdown Menu' (if any)
    closeDropdownMenus();
    // 2) Add the '.active Class' to Clicked 'Dropdown Menu'
    clickedMenu.classList.add("active"); 
    
  })
});
// Attach 'Click' event listener to 'Window' (to Close 'Dropdown Menus' by Clicking outside 'Dropdown Buttons')
window.addEventListener('click', function (e) {

    // Check if the Clicked Element is not a 'Dropdown Button' (using instead of "e.stopPropagation();" in the
                                                                            // listener attached to 'dropdownButtons')
    if (!e.target.matches(".dropdown-button-pp")) {
      // Close already Opened 'Dropdown Menu' (if any)
      closeDropdownMenus();
    }
});

// Function to 'Close' already Opened 'Dropdown Menu' (if any)
const closeDropdownMenus = () => {
  dropdownMenus.forEach(dropMenu => {

    // Check if any 'Dropdown Menu' is Active or Opened
    if (dropMenu.classList.contains("active")) {
      // Remove the '.active Class' of that Active or Opened 'Dropdown Menu'
      dropMenu.classList.remove("active");
      // When the Opened 'Dropdown Menu' is Closed, End the 'Function Execution' to restrict Resource Wastage
      return;
    };
  });
}