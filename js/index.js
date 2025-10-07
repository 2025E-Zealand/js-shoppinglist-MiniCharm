//Write your Javascript code here
console.log("Shoppinglist")

function newelement(id,clas,text)
{
    let newEl = document.createElement("li")
    newEl.setAttribute("id",id)
    newEl.setAttribute("Class",clas)
    let txt = document.createTextNode(text)
    newEl.append(txt)
    return newEl
}

newelement("Seven","unhelthy","White chocklate")