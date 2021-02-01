
let arr = [1,2 ,3, 4, 5, 6, 22, 33, 44, 22, 111], res = []; i = 0;

for (let i=0; i <arr.length; i++)
{

    for (let j=i; j<arr.length; j++)
    {
        for (let k=i; k<=j; k++){
            console.log(arr[k])
          
        }
            
    }
}

