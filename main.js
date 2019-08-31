

const example =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function filter(array, callback){
    const filtered=[]
    for(let i=0; i<a.length; i++){
        if(callback(array[i])){
            filtered.push(array[i])
        }
    }

    return filtered
}