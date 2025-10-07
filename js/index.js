//Write your Javascript code here
console.log("Shoppinglist")

//Create a function that return a new Li element
//The function should have at least three parameters, one for the class attribute, 
// one for the id attribute and one for the text itself in the “li” element.
function newelement(id,clas,text)
{
    let newEl = document.createElement("li")
    newEl.setAttribute("id",id)
    newEl.setAttribute("Class",clas)
    let txt = document.createTextNode(text)
    newEl.append(txt)
    return newEl
}

let el = newelement("Seven","unhelthy","White chocklate")

//Create a function that append a Li element to a list
//The function should have two parameters one for the id of the list 
//and one for li element

function appendToList(listId,liElement)
{
    let list = document.getElementById(listId)
    list.append(liElement)
}

appendToList("list",el)

function ChangeClassAttribute(eleemetId,newclass)
{
    let element =document.getElementById(eleemetId)
    element.setAttribute("class",newclass)
}

ChangeClassAttribute("Seven","candy")