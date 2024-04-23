let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];


let groceryListContainerEl = document.getElementById("groceryListContainer");
groceryListContainerEl.classList.add("container");

let headingEl = document.createElement("h1");
headingEl.textContent = "Grocery List";
headingEl.classList.add("heading");
groceryListContainerEl.appendChild(headingEl);

let listContainerEl = document.createElement("div");
listContainerEl.classList.add("listContainer-el");
groceryListContainerEl.appendChild(listContainerEl);

let unOrderListEl = document.createElement("ul");
listContainerEl.appendChild(unOrderListEl);

function appendOfListItems(item) {
    let listItemEl = document.createElement("li");
    listItemEl.textContent = item;
    listItemEl.classList.add("listItems");
    unOrderListEl.appendChild(listItemEl);
}

for (let item of groceryList) {
    appendOfListItems(item);
}