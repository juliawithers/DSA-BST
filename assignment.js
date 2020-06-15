// 1) Draw a BST
// Given the data 3,1,4,6,9,2,5,7, if you were to insert this into an empty binary search tree, what would the tree look like? (Draw the tree, no coding needed here.)
//                      3
//                  1       4
//                     2        6
//                           5      9
//                                7


// Draw the BST with the keys - E A S Y Q U E S T I O N

//                      E
//                  A         S
//                        Q        Y
//                    E         U
//                      I     S
//                        O     T
//                      N

// 2) Remove the root
// 1,4,6,9,2,5,7,
//                      1
//                          4
//                       2       6
//                            5      9
//                                 7 
//                                                 

// A S Y Q U E S T I O N

//                      A
//                           S
//                        Q        Y
//                    E         U
//                      I     S
//                        O     T
//   

// 3) Create a BST class
const BinarySearchTree = require('./binaryClass');
// Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. Compare your result with the result from the 1st exercise.
function createBst(){
    const BST = new BinarySearchTree;
    let arr = [3,1,4,6,9,2,5,7];

    arr.forEach(item => {
        BST.insert(item,item)
    })
    console.log(BST)
    // console.log(findHeight(BST))
    // console.log(BST.value)
    // console.log(isBST(BST,Number.MIN_VALUE))
    // console.log(kthLargest(BST,3))
    console.log(isBalanced(BST))
}
createBst();

// Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. Compare your result with the result from the 1st exercise.
function createBst(){
    const BST = new BinarySearchTree;
    let arr = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];

    arr.forEach(item => {
        BST.insert(item,item)
    })
    console.log(BST)
}
createBst();

// 4) What does this program do?  - this function adds all of the values of the tree together recursively. 

function tree(t){
    // if tree is empty return 0;
    if(!t){
        return 0;
    }
    // recursively add all the values of the tree together.
    return tree(t.left) + t.value + tree(t.right)
}

// 5) Height of BST
// Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?

function findHeight(t){
    if (t == null) {
        return 0;
    }
    else{
        let left = findHeight(t.left);
        let right = findHeight(t.right);

        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }
}

// 6) Is it a BST 
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.

// t is the tree and prev is initially the lowest number value in javascript for type Number. 
function isBST(t,prev){
    if (t != null) {
        if (!isBST(t.left,prev)) {
            return false;
        }
        
        if (t.value <= prev) {
            return false
        }

        prev = root.data;
        return isBST(t.right, prev);
    }
    return true;
}


// 7) 3rd largest node
// Write an algorithm to find the 3rd largest node in a binary search tree.

// order recursively orders the tree values and stores them in an array. 
function order(t,arr=[]){
    if (t == null){
      return arr;
    }
    order(t.left,arr);
    arr.push(t.value);
    order(t.right,arr)
}

// t is the tree and k is the kth highest node to find.
function kthLargest(t,k) {
    console.log(t)
    if (t == null){
        return -1
    }
    let arr=[];
    order(t,arr);
    let count = 1;
    let index = arr.length-1;
    while(count<k){
        index = index-1;
        count = count +1
    }
    return arr[index]
}

// 8) Balanced BST
// Write an algorithm that checks if a BST is balanced (i.e., a tree where no 2 leaves differ in distance from the root by more than 1).
// need to check heights of left and right sides of tree.

function isBalanced(t){
    let leftH;
    let rightH;

    if (t == null){
        return true;
    }

    leftH = findHeight(t.left);
    rightH = findHeight(t.right);

    // recursive aspect of function
    if (Math.abs(leftH - rightH) <= 1 && isBalanced(t.left) && isBalanced(t.right)) {
        return true;
    }
    return false;
}

// 9) Are they the same BSTs?
// You are given two arrays which represent two sequences of keys that are used to create two binary search trees. Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree. You may use another data structure such as an array or a linked list but don't construct the BST. What is the time complexity of your algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will create the exact same BSTs and your program should return true.

function organize(arr) {
    let left=[];
    let right=[];
    let duplicates=[];
    let prev=arr[0];
    let first;

    for (let i=1; i<arr.length; i++){
        if (arr[i] < prev) {
            left.push(arr[i])
            prev = arr[i];
        }
        else if (arr[i] > prev) {
            right.push(arr[i])
            prev = arr[i];
        }
        else if (arr[i] == prev && i == 0) {
            first = arr[i] 
        }
        else if (arr[i] == prev && i != 0) {
            duplicates.push(arr[i])
        }
    }
    return object = {first, left, right, duplicates}
}

function isSameBST(arr1,arr2){

    arr1Object = organize(arr1);
    arr2Object = organize(arr2);
    if (
        arr1Object.first != arr2Object.first ||
        arr1Object.left.length != arr2Object.left.length || arr1Object.right.length != arr2Object.right.length || arr1Object.duplicates.length != arr2Object.duplicates.length) {
        return false;
    }
 
    for (let i=0; i<arr1Object.left.length; i++){
        if (arr1Object.left[i] != arr2Object.left[i]){
            return false
        }
    }
    for (let i=0; i<arr1Object.right.length; i++){
        if (arr1Object.right[i] != arr2Object.right[i]){
            return false
        }
    }
    for (let i=0; i<arr1Object.duplicate.length; i++){
        if (arr1Object.duplicates[i] != arr2Object.duplicates[i]){
            return false
        }
    }
    return true
    // if (arr1==null && arr2==null) {
    //     return true;
    // }
    // else if (arr1 != null && arr2 == null){
    //     return false;
    // }
    // else if (arr1 == null && arr2 != null){
    //     return false;
    // }
    // else {
    //     if (arr1 == arr2.data && isSameBST(arr1.left, arr2))
    // }
}



