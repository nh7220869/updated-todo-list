let to_do_list: string[] = [];

// Function to display the to-do list in HTML
function displayToDoList() {
    const list = document.getElementById("list") as HTMLElement;
    list.innerHTML = ''; // Clear the current list

    to_do_list.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item}
            <button onclick="removeItem(${index})">Remove</button>
        `;
        list.appendChild(listItem);
    });
}

// Function to remove an item from the list
(window as any).removeItem = (index: number) => {
    to_do_list.splice(index, 1);
    displayToDoList();
};

// Function to add a new item to the list
function addToDoItem() {
    const input = document.getElementById("grocery_item") as HTMLInputElement;
    const item = input.value.trim();

    if (item) {
        to_do_list.push(item);
        displayToDoList();
        input.value = ''; // Clear the input field
    } else {
        alert("Please enter a valid item.");
    }
}

document.getElementById("add_btn")!.addEventListener("click", addToDoItem);



