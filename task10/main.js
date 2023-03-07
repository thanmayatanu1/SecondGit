function saveToLocalStorage(event)
{
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    

const obj = {
    name,
    email,
}


localStorage.setItem(obj.email, JSON.stringify(obj));
showUserOnScreen(obj);
}

function showUserOnScreen(obj)
{
    const parentElement = document.getElementById('listOfitems');
    const childElement = document.createElement('li');
    childElement.textContent = obj.name + '-' + obj.email ;
}
