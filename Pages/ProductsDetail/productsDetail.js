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

// ######################################### Products Quantity Filter or Selector (pdp) ########################################

// *************************** Variables ***************************

const minusButtonPdp = document.querySelector("#decrement-pdp");
const plusButtonPdp = document.querySelector("#increment-pdp");
const productsQuantityField = document.querySelector("#quantity-input-pdp");
const productsQuantitySlider = document.querySelector("#products-quantity-slider");
const unitPriceHtml = document.querySelector("#unit-price");
const totalPriceHtml = document.querySelector("#total-price");



// Unary plus operator (+) to convert a value into 'number' (if it is not already of type 'number') (input fields' value are
// of type 'string')
let productsCountPdp = +productsQuantityField.value;

let roundedFieldValue;
let totalPrice;

const quantityWithUnitCost = {
  sliderPos0: {
    quantity: 100,
    unitCost: 4.42
  },
  sliderPos1: {
    quantity: 300,
    unitCost: 4.25
  },
  sliderPos2: {
    quantity: 500,
    unitCost: 4.15
  },
  sliderPos3: {
    quantity: 1000,
    unitCost: 4.08
  },
  sliderPos4: {
    quantity: 2500,
    unitCost: 3.91
  },
  sliderPos5: {
    quantity: 5000,
    unitCost: 3.83
  },
}

const sliderPoints = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]];
const minQuantity = quantityWithUnitCost.sliderPos0.quantity;
const maxQuantity = quantityWithUnitCost.sliderPos5.quantity;
let unitPrice = quantityWithUnitCost.sliderPos0.unitCost;





// *************************** Event Listeners ***************************

// Function to Update 'Number Field' value ('productsQuantityField.value') when value of 'productsQuantitySlider' is changed
productsQuantitySlider.addEventListener("change", function() {
  // Update 'Number Field' value ('productsQuantityField.value') and 'productsCountPdp' using value of 'productsQuantitySlider'
  sliderToFieldValue();

  enableDisableButton(minusButtonPdp);
  enableDisableButton(plusButtonPdp);

  // Update 'Unit Price' value
  fieldToSliderValue(updateUnitPriceOnly = true);
  // Show latest 'Unit Price' and 'Total Price' in 'HTML'
  updateHtmlPrice();
})

// Function to "Decrease Product's Count" + update 'inputs' and 'HTML'
minusButtonPdp.addEventListener("click", function() {
  
  // (i) if the 'input field's value is already 'zero' or a 'negative value' (for any reason) then do not "decrease" its value
                                                                                              // and Disable the 'minus button'
  if (productsCountPdp <= minQuantity ) {
    enableDisableButton(minusButtonPdp);
    return;
  }
  // (ii) if the 'input field's value is greater than 'zero' then "decrease" its value
  productsQuantityField.value = --productsCountPdp;

  enableDisableButton(minusButtonPdp);
  enableDisableButton(plusButtonPdp);

  // Update 'Slider' value and 'Unit Price'
  fieldToSliderValue();
  // Show latest 'Unit Price' and 'Total Price' in 'HTML'
  updateHtmlPrice();
})

// Function to "Increase Product's Count" + update 'inputs' and 'HTML'
plusButtonPdp.addEventListener("click", function() {
  // if "productsCountPdp" is less than 'maxQuantity', then 'increment' it. And when it becomes 'maxQuantity', 'Disable' the 'plus button'
  productsQuantityField.value = productsCountPdp < maxQuantity && ++productsCountPdp;
  
  enableDisableButton(plusButtonPdp);
  enableDisableButton(minusButtonPdp);

  // Update 'Slider' value and 'Unit Price'
  fieldToSliderValue();
  // Show latest 'Unit Price' and 'Total Price' in 'HTML'
  updateHtmlPrice();
})

// Function to Update "productsCountPdp" and "number field's value" when 'Number Field' is manually updated + 'inputs' & HTML
productsQuantityField.addEventListener("change", function() {

  // Round the manually entered value in the Number Field into Integer (if a User enters Floating Point Number)
  roundedFieldValue = Math.round(+productsQuantityField.value);

  // when 'number field's value is manually updated, update the 'productsCountPdp' variable to have the latest value, so the 'plus'
  // and 'minus' operations can have the latest 'value' of 'productsCountPdp' variable to operate on.
  
  if (minQuantity <= roundedFieldValue && roundedFieldValue <= maxQuantity) {
    // update 'productsCountPdp' and 'Number Field' value
    productsQuantityField.value = productsCountPdp = roundedFieldValue;
  }
  else if (roundedFieldValue < minQuantity) {
    toast("decrement");
    productsQuantityField.value = productsCountPdp = minQuantity;
  }                    
  else if (roundedFieldValue > maxQuantity){
    toast("increment");
    productsQuantityField.value = productsCountPdp = maxQuantity;
  }                                               
  
  enableDisableButton(minusButtonPdp);
  enableDisableButton(plusButtonPdp);

  // Update 'Slider' value and 'Unit Price'
  fieldToSliderValue();
  // Show latest 'Unit Price' and 'Total Price' in 'HTML'
  updateHtmlPrice();
})



// *************************** Functions ***************************

// Function to Update 'Slider' value ('productsQuantitySlider.value') using value of Number Field ('productsCountPdp')
function fieldToSliderValue(updateUnitPriceOnly) {

  sliderPoints.forEach((sliderPoint) => {

    // if 'productsCountPdp' is less than 'maxQuantity'
    if (productsCountPdp >= quantityWithUnitCost[`sliderPos${sliderPoint[0]}`].quantity && productsCountPdp < quantityWithUnitCost[`sliderPos${sliderPoint[1]}`].quantity) {
      // (i) Update 'Unit Price' only
      if (updateUnitPriceOnly) {
        // Update 'Unit Price' value
        unitPrice = quantityWithUnitCost[`sliderPos${sliderPoint[0]}`].unitCost;
        return;
      }
      // (ii) Update 'Slider' value and 'Unit Price'
      // Update 'Slider' value
      productsQuantitySlider.value = sliderPoint[0];
      // Update 'Unit Price'
      unitPrice = quantityWithUnitCost[`sliderPos${sliderPoint[0]}`].unitCost;
      return;
    }

    // if 'productsCountPdp' is equal to 'maxQuantity'
    else if (productsCountPdp === quantityWithUnitCost[`sliderPos${sliderPoints[sliderPoints.length-1][1]}`].quantity) {
      // (i) Update 'Unit Price' only
      if (updateUnitPriceOnly) {
        // Update 'Unit Price' value
        unitPrice = quantityWithUnitCost[`sliderPos${sliderPoint[1]}`].unitCost;
        return;
      }
      // (ii) Update 'Slider' value and 'Unit Price'
      // Update 'Slider' value
      productsQuantitySlider.value = sliderPoint[1];
      // Update 'Unit Price'
      unitPrice = quantityWithUnitCost[`sliderPos${sliderPoint[1]}`].unitCost;
      return;
    }
  })
}
// Function to Update 'Number Field' value using 'Slider' value
function sliderToFieldValue() {
  // Update 'Number Field' value ('productsQuantityField.value') and 'productsCountPdp'
  productsQuantityField.value = productsCountPdp = getSliderValue();
}
// Function to Get the 'Products Quantity' using 'Slider' value
function getSliderValue() {
// Get the 'Products Quantity' from 'sliderPos' object of 'quantityWithUnitCost' using 'Slider' value 'productsQuantitySlider.value'
  return quantityWithUnitCost[`sliderPos${+productsQuantitySlider.value}`].quantity;
}
// Function to Calculate Total Price of Items
function calculateTotalPrice() {
  totalPrice = unitPrice * productsCountPdp;
  return totalPrice.toFixed(2);
}
// Function to Show latest 'Unit Price' and 'Total Price' in 'HTML'
function updateHtmlPrice() {
  // Update 'Unit Price' in HTML
  unitPriceHtml.textContent = unitPrice;
  // Update 'Total Price' in HTML
  totalPriceHtml.textContent = calculateTotalPrice();
}
// Function to Enable or Disable 'plus' and 'minus' Buttons
function enableDisableButton(buttonType) {
    
  // for 'plus button'
  if (buttonType.id === plusButtonPdp.id) {

    // Disable the 'button' when it is already 'enabled' and "productsCountPdp" is equal to 'maxQuantity'
    if (buttonType.disabled === false && productsCountPdp === maxQuantity) {
      buttonType.disabled = true;
    }
    // Enable the 'button' when it is already 'disabled' and "productsCountPdp" is less than 'maxQuantity'
    else if (buttonType.disabled && productsCountPdp < maxQuantity) {
      buttonType.disabled = false;
    }
  }

  // for 'minus button'
  if (buttonType.id === minusButtonPdp.id) {

    // Disable the 'button' when it is already 'enabled' and "productsCountPdp" is less than or equal to 'minQuantity'
    if (buttonType.disabled === false && productsCountPdp <= minQuantity) {
      buttonType.disabled = true;
    }
    // Enable the 'button' when it is already 'disabled' and "productsCountPdp" is greater than 'minQuantity'
    else if (buttonType.disabled && productsCountPdp > minQuantity) {
      buttonType.disabled = false;
    }
  }
}
// Function to Show a Toast when User entered Value is out of Range
function toast(infoAbout) {
  // Show Toast when 'user's manually entered value' is more than 'maxQuantity'
  if (infoAbout === "increment") {
    alert(`You can not order more than ${maxQuantity} items!`)
  }
  // Show Toast when 'user's manually entered value' is more than 'minQuantity'
  else if (infoAbout === "decrement") {
    alert(`You can not order less than ${minQuantity} items!`)
  }
}







// ************************** Calling Functions on Page Load **************************

// Initialize 'Number Field' value and 'productsCountPdp'
sliderToFieldValue();
// Show latest 'Unit Price' and 'Total Price' in 'HTML'
updateHtmlPrice();
