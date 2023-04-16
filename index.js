const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");


/* 
Task will be an array of object in which we are
going to push the contents of goals
 in form of object 

const tasks = [
    {
        name: "Krishna",
        surname: ""
    }, 
    {}, 
    {}, 
    {}];

    Ternary Operator
    10 > 5 ? a : b;

*/    

/* JSON.parse() is used to convert string to object */
const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

console.log(tasks);
showAllTasks();

function showAllTasks() {
    
    /* This Function will loop over the array
    and display all the added tasks and append it into container to display the tasks */

    tasks.forEach((value, index) => {
        
        const div = document.createElement("div");
        div.setAttribute("class", "task");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText = value.title;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerText = value.description;
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class", "deleteBtn");
        btn.innerText = "-";

        btn.addEventListener("click", () => {
            removeTasks();
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showAllTasks();
        });

        div.append(btn);
        container.append(div);

    });

}

function removeTasks() {
    tasks.forEach(() => {
        const div = document.querySelector(".task");
        div.remove();
    })
}



/* After Clicking the button the form gets submitted 
   using e.preventDefault() the page will not reload
   after we click on the button

   The form will get submitted after we click the
   button
*/


/* We are rendering the new array with added task again
and the previous array display remain as it is?
How to resolve this?  */
form.addEventListener("submit", (e) => {

    e.preventDefault();

    /* Here we need to first remove the tasks first 
    then traverse the tasks array to display
    all the tasks using showTasks() */
    removeTasks();

    tasks.push({
        title: title.value,
        description: description.value
    });

   
    console.log(tasks);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    /* We need to show the task added upon
    submission of the form */
    showAllTasks();

});






