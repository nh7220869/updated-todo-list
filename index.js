var to_do_list = [];
// Function to display the to-do list in HTML
function displayToDoList() {
    var list = document.getElementById("list");
    list.innerHTML = ''; // Clear the current list
    to_do_list.forEach(function (item, index) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "\n            ".concat(item, "\n            <button onclick=\"removeItem(").concat(index, ")\">Remove</button>\n        ");
        list.appendChild(listItem);
    });
}
// Function to remove an item from the list
window.removeItem = function (index) {
    to_do_list.splice(index, 1);
    displayToDoList();
};
// Function to add a new item to the list
function addToDoItem() {
    var input = document.getElementById("grocery_item");
    var item = input.value.trim();
    if (item) {
        to_do_list.push(item);
        displayToDoList();
        input.value = ''; // Clear the input field
    }
    else {
        alert("Please enter a valid item.");
    }
}
document.getElementById("add_btn").addEventListener("click", addToDoItem);
