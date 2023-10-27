// Get all 'Tabs'
const tabs = document.querySelectorAll(".tab");

// Attach 'Click' event listener to each 'Tab'
tabs.forEach(tab => {
  console.log('code inside first loop');
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