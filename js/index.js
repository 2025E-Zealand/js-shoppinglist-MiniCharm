//Write your Javascript code here
console.log("Shoppinglist")

//1) Create a function that return a new Li element
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

//2) Create a function that append a Li element to a list
//The function should have two parameters one for the id of the list 
//and one for li element

function appendToList(listId,liElement)
{
    let list = document.getElementById(listId)
    list.append(liElement)
}

appendToList("list",el)


//3) Create a function that change or add the class attribute
//The function should have two parameters, one for the element 
//and one for the value of the class attribute.
function ChangeClassAttribute(eleemetId,newclass)
{
    let element =document.getElementById(eleemetId)
    element.setAttribute("class",newclass)
}

ChangeClassAttribute("Seven","candy")

//4) Create a function that delete a li element
//The function should delete a specific li element
function DeleteElement(elmentId)
{
    let parentElement =document.getElementById(elmentId).parentElement
    parentElement.removeChild(document.getElementById(elmentId))
}

DeleteElement("Seven")

//5)Create a function that change the text in a Li element
//The function should change the text of a specific li element. Hint: use TextContent at the element
function ElementCountList(listId)
{
    let list = document.getElementById(listId)
    let count = list.childElementCount

    return count
}

ElementCountList("list")
