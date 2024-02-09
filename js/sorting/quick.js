const quickSort = (arr) => {
    if(arr.length <= 1) return arr

    let pivot = arr[0]
    const left = []
    const right = []
    
    for(let i=1; i<arr.length; i++){
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }

    return [...quickSort(left), pivot,...quickSort(right)]
}

const sorted = quickSort([2,5,3,6,7])

console.log(sorted)