function saveToLocalStorage(event)
{
    event.preventDefault();
    const amount = event.target.username.value;
    const description = event.target.email.value;
    const category = event.target.mail.value;
    

const obj = {
    amount,
    category,
    description,
}


localStorage.setItem(obj.description, JSON.stringify(obj));
showUserOnScreen(obj);
}

function showUserOnScreen(obj)
{
    const parentElement = document.getElementById('listOfitems');
    const childElement = document.createElement('li');
    childElement.textContent = obj.amount + '-' + obj.description + '-' + obj.category ;

    const editButton = document.createElement('input')
    editButton.type = "button"
    editButton.value = 'Edit Expense'

    editButton.onclick = () =>{
        localStorage.removeItem(obj.description)
        parentElement.removeChild(childElement)
        document.getElementById('usernameInputTag').value = obj.amount
        document.getElementById('emailInputTag').value = obj.description
        document.getElementById('mailInputTag').value = obj.category
    }
    

    const deleteButton = document.createElement('input')
    deleteButton.type = "button"
    deleteButton.value = 'Delete Expense'

    deleteButton.onclick = () =>{
        localStorage.removeItem(obj.description)
        parentElement.removeChild(childElement)

        

    }
    


    childElement.appendChild(deleteButton)
    childElement.appendChild(editButton)
    parentElement.appendChild(childElement)
    
}

