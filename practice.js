const fib = (num) => {
    if (num <= 0) return 0
    const memo = { "1": 1, "2": 1 }
    const helper = (num) => {
        if (num <= 2) return memo[num]
        return memo[num] ?? (memo[num] = helper(num - 1) + helper(num - 2))
    }
    return helper(num)
}
console.log(fib(5))

const fibNoHelper = (num, memo = { "1": 1, "2": 1 }) => {
    return (num === 0) ? num : memo[num] ?? (memo[num] = fibNoHelper(num - 1) + fibNoHelper(num - 2))
}



const fibIterative = (num) => {
    if (num === 0) return 0
    if (num === 1) return 1
    let first = 0
    let second = 1
    let n = 2
    while (n < num) {
        n%2===0 ? first+=second : second+=first
       n++ 
       
    }
    return first+second

}

console.log(fibIterative(5))

const fibTable=(num)=>{
let values=[0,1,1]
    for(let i=3;i<=num;i++){
        values[i]=values[i-1]+values[i-2]
    }

    return values[num]
}

console.log(fibTable(3))