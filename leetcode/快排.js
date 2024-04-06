// var sortColors = function(nums) {
//     partition(nums,0,nums.length-1)
//     return nums
// };

// function swap(nums,i,j){
//     [nums[i],nums[j]] = [nums[j],nums[i]]
// }
// function partition(nums,left,right){
//     if(left >= right) return 
//     let pivot = nums[left]
//     let j = left 
//     for(let i = left+1; i<nums.length; i++){
//         if(nums[i] < pivot){
//             j++
//             swap(nums,i,j)
//         }
//     }
//     swap(nums,left,j)
//     partition(nums,left,j-1)
//     partition(nums,j+1,right)
// }

var sortColors = function(nums) {
    partition(nums,0,nums.length-1)
    return nums
};

function swap(nums,i,j){
    [nums[i],nums[j]] = [nums[j],nums[i]]
}
function partition(nums,left,right){
    if(left >= right) return 
    let pivot = nums[right]
    let j = left 
    for(let i = left; i<nums.length; i++){
        if(nums[i] < pivot){
            swap(nums,i,j)
            j++
        }
    }
    swap(nums,j,right)
    partition(nums,left,j-1)
    partition(nums,j+1,right)
}

const nums = [2,5,1,3,6]
sortColors(nums)
console.log(nums)