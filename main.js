function additem() {
    let key = prompt("key kiriting")
    let value = prompt("value kiriting")

    localStorage.setItem(key, value)
}

function getitem() {

    let key = prompt('key yoz')
    alert(localStorage.getItem(key))
}

function removeitem() {
    let key = prompt('value')
    localStorage.removeItem(key);
}

function clearItems() {
    localStorage.clear();
}

function lengthItems() {
    const numberOfItems = localStorage.length;
    alert(numberOfItems)
}