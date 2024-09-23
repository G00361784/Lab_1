//part a
let arrayOfStrings = [];//declaring array 
//part b
const addTask = (task) => {//passing argument of task with no data type declared
    arrayOfStrings.push(task);//using push method to add to end of array
    console.log("item added "+task);//sending user the message that the item was added along with the item added
    console.log(arrayOfStrings.length)//testing purposes, tells me the length of array after item is added
}

addTask("Work");
//part c

let listAllTasks = () =>{
    arrayOfStrings.forEach(//iterating for each item in array
        (item)=>{
            console.log(item);//printing each item in array
        }
    )
}
listAllTasks();//calling function list all tasks
//part d

let deleteTask = (task) => {
    let index = arrayOfStrings.indexOf(task);//finding the index of task passed to function
    if(index > -1){
        arrayOfStrings.splice(index,1);
        console.log("number of items in array after split = "+arrayOfStrings.length);//testing purposes, tells me the length of array after item is deleted

    }else{
        console.log("error");//displaying error if index is not working
    }
}

deleteTask("Work");






