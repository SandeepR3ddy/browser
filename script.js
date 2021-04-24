let input = document.querySelector(".input_box");
let ul = document.querySelector(".task_list");
input.addEventListener("keydown",function(e)
{
    // key down is nothing but pressing keys 
    // identify enter key in all the keys pressed
    // every single e contains a object containing every single key 
    console.log("event object",e);
   if(e.key == "Enter")   // e is an object contains different keys --> key is one of the member of object 
{
    // create the html tag
   let task =  input.value;
   let li = document.createElement("li"); // creating a li element
   li.innerText = task;
   li.addEventListener("dblclick",function(e)
   {
       li.remove();
   });
   li.setAttribute("class","task");  // assiging value to the li element
   ul.appendChild(li);  // making li as a child to ul
   console.log(task);   // it only prints in the console check it in inspect and console
}
});