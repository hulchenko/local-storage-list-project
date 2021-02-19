const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];//storing data in here

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;
    const item = {
        text: text,
        done: false
    }
    items.push(item);
    this.reset();
}

addItems.addEventListener("submit", addItem);