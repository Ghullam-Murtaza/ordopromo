// ############################################## Product Description Tabs (pdp) ##############################################
// Get all 'Tabs'
const tabs = document.querySelectorAll(".tab");

// Attach 'Click' event listener to each 'Tab'
tabs.forEach(tab => {
  tab.addEventListener("click", function(e) {

    // Check if the 'Clicked Tab' is already 'Active' (if yes, then end the "Event Handler function's execution")
    if (e.target.classList.contains("active")) {
      return;
    }
    // If 'inactive Tab' is 'Clicked' (make the previously 'Active' Tab and its Tab Content 'Inactive' and 
    // make the "Clicked" Tab and its Tab Content 'Active')

    // 'Remove' '.active Class' from both 'Active' Tab and 'Active' Tab Content (then end the "forEach's Callback function's execution")
    tabs.forEach(tabb => {
      // 'Remove' '.active Class' from 'Active' Tab
      if (tabb.classList.contains("active")) {
        tabb.classList.remove("active");
        
        
        // Get Active Tab's Id
        const activeTabId = tabb.getAttribute("id");
        // Get Active Tab Content using Active Tab's Id
        const activeTabContent = document.querySelector(`#${activeTabId}-content`);
        // 'Remove' '.active Class' from 'Active' Tab Content
        activeTabContent.classList.remove("active");

        // End the Function's Execution (skip remaining iterations (if any))
        return;
      }
    });   

    // Add '.active Class' to the "Clicked" Tab
    e.target.classList.add("active");

    // Get the 'Tab Content' element to be made 'Active' using the 'id' of the 'Clicked' Tab
    const clickedTabContent = document.querySelector(`#${e.target.id}-content`);
    //  Add '.active Class' to the "Clicked" Tab's "Tab Content"
    clickedTabContent.classList.add("active");
  });
});



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







// To Do;

// Attach image thumbnails to owl-slider in productsDetail.html and enable navigation buttons and arrows on owl-slider carousel

// Make a general purpose function for opening or showing items of dropdown or tabs