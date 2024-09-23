const ages = [25, 31, 42, 77];//declaring array
let a = ages.map(//using map function to chagnge required items in array
    (item)=>{
        if (item < 70){//if statement to base the item on conditional
            return item * 2
            
        }else
            return item//returning item if not used
    }

);
console.log(a);


//console.log(materials.map((material) => material.length));
