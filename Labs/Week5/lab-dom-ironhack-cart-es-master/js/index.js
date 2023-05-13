// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let result = parseFloat(price)*quantity;
  let elementSubtotal = product.querySelector('.subtotal span');
  elementSubtotal.innerText = result;
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let listOfItems = document.getElementsByClassName("product");
  let sumOfSubtotals = 0;
  for(let i = 0; i < listOfItems.length ; i++){
    sumOfSubtotals += updateSubtotal(listOfItems[i]);
  }
  // ITERATION 3
  document.querySelector("#total-value span").innerText = sumOfSubtotals;
}

// ITERATION 4

function removeProduct(event) {
  let target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let row = target.parentNode.parentNode;
  let parent = row.parentNode;
  parent.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  let elementRow = document.querySelector(".create-product")
  let newProductNameInput = elementRow.querySelector("input");
  let newProductNameValue = newProductNameInput.value;
  let newProductPriceInput = elementRow.querySelector(".newPrice");
  let newProductPriceValue = newProductPriceInput.value;

  let newChild = document.createElement("tr");
  newChild.className = "product";
  newChild.innerHTML = `
  <td class="name">
  <span>${newProductNameValue}</span>
  </td>
  <td class="price">
  $
  <span>${newProductPriceValue}</span>
  </td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>
  `;

  let parent = document.querySelector("#cart tbody");
  parent.appendChild(newChild);

  let removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  newProductNameInput.value = '';
  newProductPriceInput.value = 0;
}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName("btn-remove");
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click' , removeProduct);
  }

  const createBtn = document.querySelector("#create");
  createBtn.addEventListener("click", createProduct);
});
