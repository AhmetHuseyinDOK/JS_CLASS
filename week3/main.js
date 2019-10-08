function range(start,end,step = 1){
    let arr = [];
    
    if(start > end){
        
        let temp = start;   
        start = end;
        end = temp;
    }

    for (let index = start; index <= end; index+=step) {
        arr.push(index)
    }

    return arr;
}

function sum(arr){
    return arr.reduce((prev,curr) => prev+=curr);
}

