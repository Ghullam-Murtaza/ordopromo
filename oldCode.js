// // Function to Update 'Slider' value ('productsQuantitySlider.value') using value of Number Field ('productsCountPdp')
// function fieldToSliderValue(updateUnitPriceOnly) {



//   if (productsCountPdp >= quantityWithUnitCost[`sliderPos${0}`].quantity && productsCountPdp < quantityWithUnitCost[`sliderPos${1}`].quantity) {
//     // only Update 'Unit Price' value 
//     if (updateUnitPriceOnly) {
//       // Update 'Unit Price' value
//       unitPrice = quantityWithUnitCost[`sliderPos${0}`].unitCost;
//       return;
//     }
//     // Update 'Slider' value
//     productsQuantitySlider.value = 0;
//     // Update 'Unit Price'
//     unitPrice = quantityWithUnitCost[`sliderPos${0}`].unitCost;
//   }
//   else if (productsCountPdp >= quantityWithUnitCost[`sliderPos${1}`].quantity && productsCountPdp < quantityWithUnitCost[`sliderPos${2}`].quantity) {
//     // only Update 'Unit Price' value 
//     if (updateUnitPriceOnly) {
//       // Update 'Unit Price' value
//       unitPrice = quantityWithUnitCost[`sliderPos${1}`].unitCost;
//       return;
//     }
//     productsQuantitySlider.value = 1;
//     // Update 'Unit Price'
//     unitPrice = quantityWithUnitCost[`sliderPos${1}`].unitCost;
//   }
//   else if (productsCountPdp >= quantityWithUnitCost[`sliderPos${2}`].quantity && productsCountPdp < quantityWithUnitCost[`sliderPos${3}`].quantity) {
//     // only Update 'Unit Price' value 
//     if (updateUnitPriceOnly) {
//       // Update 'Unit Price' value
//       unitPrice = quantityWithUnitCost[`sliderPos${2}`].unitCost;
//       return;
//     }
//     productsQuantitySlider.value = 2;
//     // Update 'Unit Price'
//     unitPrice = quantityWithUnitCost[`sliderPos${2}`].unitCost;
//   }
//   else if (productsCountPdp >= quantityWithUnitCost[`sliderPos${3}`].quantity && productsCountPdp < quantityWithUnitCost[`sliderPos${4}`].quantity) {
//     // only Update 'Unit Price' value 
//     if (updateUnitPriceOnly) {
//       // Update 'Unit Price' value
//       unitPrice = quantityWithUnitCost[`sliderPos${3}`].unitCost;
//       return;
//     }
//     productsQuantitySlider.value = 3;
//     // Update 'Unit Price'
//     unitPrice = quantityWithUnitCost[`sliderPos${3}`].unitCost;
//   }
//   else if (productsCountPdp >= quantityWithUnitCost[`sliderPos${4}`].quantity && productsCountPdp < quantityWithUnitCost[`sliderPos${5}`].quantity) {
//     // only Update 'Unit Price' value 
//     if (updateUnitPriceOnly) {
//       // Update 'Unit Price' value
//       unitPrice = quantityWithUnitCost[`sliderPos${4}`].unitCost;
//       return;
//     }
//     productsQuantitySlider.value = 4;
//     // Update 'Unit Price'
//     unitPrice = quantityWithUnitCost[`sliderPos${4}`].unitCost;
//   }
//   else if (productsCountPdp === quantityWithUnitCost[`sliderPos${5}`].quantity) {
//     // only Update 'Unit Price' value 
//     if (updateUnitPriceOnly) {
//       // Update 'Unit Price' value
//       unitPrice = quantityWithUnitCost[`sliderPos${5}`].unitCost;
//       return;
//     }
//     productsQuantitySlider.value = 5;
//     // Update 'Unit Price'
//     unitPrice = quantityWithUnitCost[`sliderPos${5}`].unitCost;
//   }
// }

// // Function to "Increase Product's Count" + update 'inputs' and 'HTML'
// plusButtonPdp.addEventListener("click", function() {
  
//   productsQuantityField.value = productsCountPdp < maxQuantity ? ++productsCountPdp : toast("increment", productsCountPdp);
  
//   // you can also get the 'latest value' of 'productsQuantityField' inside 'increment and decrement' functions before updating
//   // "productsCountPdp" and assigning to the "productsQuantityField.value". so you do not have to have function to update "productsCountPdp"
//   // whenever "productsQuantityField.value" is manually updated (like in below function);

//   console.log('increased products count. Type is: ' + typeof productsCountPdp + ' , Value: ' + productsCountPdp);
//   console.log('increased products count. Type is: ' + typeof productsQuantityField.value + ' , Value: ' + productsQuantityField.defaultValue);

//   // this method also changes 'defaultValue' of 'number field'
//   productsQuantityField.setAttribute("value", `${++productsQuantityField.value}`)
// })

// // Function to Update "productsCountPdp" and "number field's value" when 'Number Field' is manually updated + 'inputs' & HTML
// productsQuantityField.addEventListener("change", function() {
//   productsCountPdp = roundedFieldValue <= minQuantity ? [roundedFieldValue, enableDisableButton()] : 
//                                             (toast("increment", productsCountPdp),productsQuantityField.value = minQuantity);
// })