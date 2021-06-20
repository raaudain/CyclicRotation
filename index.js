//  Rotate an array to the right by a given number of steps. 

function solution(A, K) {
    const arr = A;

    if (arr.length < 1) {
        return arr;
    }

    while (K--) {
        let temp = arr.pop();
        arr.unshift(temp);
    }

    return arr;
}


solution([1,2,3,4,5,6,7,8,9,10], 5)