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
const minusButtonPdp = document.querySelector("#decrement-pdp");
const plusButtonPdp = document.querySelector("#increment-pdp");
const productsQuantityField = document.querySelector("#quantity-input-pdp");
const productsQuantitySlider = document.querySelector("#products-quantity-slider");

const minQuantity = 0;
const maxQuantity = 5000;

// Unary plus operator (+) to convert a value into 'number' (if it is not already of type 'number') (input fields' value are
// of type 'string')
let productsCountPdp = +productsQuantityField.value;

let sliderValue;
let sliderProductsQuantity;
let totalQuantity;
let unitPrice;
let totalPrice;

const quantityUnitPrice = {
  sliderPos0: {
    quantity: 100,
    unitPrice: 4.42
  },
  sliderPos1: {
    quantity: 300,
    unitPrice: 4.25
  },
  sliderPos2: {
    quantity: 500,
    unitPrice: 4.15
  },
  sliderPos3: {
    quantity: 1000,
    unitPrice: 4.08
  },
  sliderPos4: {
    quantity: 2500,
    unitPrice: 3.91
  },
  sliderPos5: {
    quantity: 5000,
    unitPrice: 3.83
  },
  // sliderPos2: 4.25,
  // sliderPos3: 4.15,
  // sliderPos4: 4.08,
  // sliderPos5: 3.91,
  // sliderPos6: 3.83,
  }

// Function to Get the 'sliderPos' object from 'quantityUnitPrice' using 'productsQuantitySlider.value'
function getSliderValue() {
  // Get the 'object' of 'sliderPos' using 'productsQuantitySlider.value'
  sliderValue = quantityUnitPrice[`sliderPos${+productsQuantitySlider.value}`];
  return sliderValue;
}

// Function to Calculate Total Price of Items
function calculateTotalPrice() {
  // Get 'Products Quantity' that is selected using 'productsQuantitySlider' (Slider)
  sliderProductsQuantity = getSliderValue().quantity;

  // Get 'Products Quantity' that is selected using 'productsQuantityField' (Input Field)
  fieldProductsQuantity = +productsQuantityField.value;

  // Calculate 'Total Quantity'
  totalQuantity = sliderProductsQuantity + fieldProductsQuantity;

  // Get 'Unit Price' from 'quantityUnitPrice'
  // Calculate 'Unit Price' using Products 'Total Quantity' and 'Unit Price'

  // Update 'HTML' reflecting latest Prices
  // Update 'input field value' and 'range slider position or value'



  totalPrice = unitPrice * productsCountPdp;
}

// Function to Calculate and Update 'unitPrice' and 'totalPrice' when value of 'productsQuantitySlider' is changed
productsQuantitySlider.addEventListener("change", function() {

}) 




// Function to "Decrease Product's Count"
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
})

// Function to "Increase Product's Count"
plusButtonPdp.addEventListener("click", function() {
  // if "productsCountPdp" is less than 'maxQuantity', then 'increment' it. And when it becomes 'maxQuantity', 'Disable' the 'plus button'
  productsQuantityField.value = productsCountPdp < minQuantity && ++productsCountPdp;
  
  enableDisableButton(plusButtonPdp);
  enableDisableButton(minusButtonPdp);
  
  // Old Code
  // productsQuantityField.value = productsCountPdp < minQuantity ? ++productsCountPdp : toast("increment", productsCountPdp);
  
  // you can also get the 'latest value' of 'productsQuantityField' inside 'increment and decrement' functions before updating
  // "productsCountPdp" and assigning to the "productsQuantityField.value". so you do not have to have function to update "productsCountPdp"
  // whenever "productsQuantityField.value" is manually updated (like in below function);

  // console.log('increased products count. Type is: ' + typeof productsCountPdp + ' , Value: ' + productsCountPdp);
  // console.log('increased products count. Type is: ' + typeof productsQuantityField.value + ' , Value: ' + productsQuantityField.defaultValue);

  // this method also changes 'defaultValue' of 'number field'
  // productsQuantityField.setAttribute("value", `${++productsQuantityField.value}`)
})

// Function to Show updated "productsCountPdp" and "number field's text value" when it is manually updated
productsQuantityField.addEventListener("change", function() {
  // when 'number field's value is manually updated, update the 'productsCountPdp' variable to have the latest value, so the 'plus'
  // and 'minus' operations can have the latest 'value' of 'productsCountPdp' variable to operate on.
  
  if (minQuantity <= +productsQuantityField.value && +productsQuantityField.value <= minQuantity) {
    productsCountPdp = +productsQuantityField.value;
  }
  else if (+productsQuantityField.value < minQuantity) {
    toast("decrement");
    productsQuantityField.value = productsCountPdp = minQuantity;
    console.log("+productsQuantityField.value < minQuantity");
  }                    
  else if (+productsQuantityField.value > maxQuantity){
    toast("increment");
    productsQuantityField.value = productsCountPdp = minQuantity;
  }                                               
  
  enableDisableButton(minusButtonPdp);
  enableDisableButton(plusButtonPdp);  

  // Old Code
  // productsCountPdp = +productsQuantityField.value <= minQuantity ? [+productsQuantityField.value, enableDisableButton()] : (toast("increment", productsCountPdp),
  //                                                                                       productsQuantityField.value = minQuantity);
})

function enableDisableButton(buttonType) {

  // console.log("enableDisableButton() ran");
    
  // for 'plus button'
  if (buttonType.id === plusButtonPdp.id) {

    // Disable the 'button' when it is already 'enabled' and "productsCountPdp" is equal to 'maxQuantity'
    if (buttonType.disabled === false && productsCountPdp === minQuantity) {
      buttonType.disabled = true;
    }
    // Enable the 'button' when it is already 'disabled' and "productsCountPdp" is less than 'maxQuantity'
    else if (buttonType.disabled && productsCountPdp < minQuantity) {
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

function toast(infoAbout, variableToReturn) {
  // Show Toast when 'user's manually entered value' is more than 'maxQuantity'
  if (infoAbout === "increment") {
    alert(`You can not order more than ${maxQuantity} items!`)
  }
  // Show Toast when 'user's manually entered value' is more than 'minQuantity'
  else if (infoAbout === "decrement") {
    alert(`You can not order less than ${minQuantity} items!`)
  }

  // Then return the old value of "productsCountPdp" to assign to "productsCountPdp" 
  // return variableToReturn;
}
