function containsDuplicate(nums) {
    //create an empty object to store the numbers we have seen
    let hTable = {};

    // looping to check the numbers in the array
    for (let i = 0; i < nums.lenght; i++){
        //if the ith position number is already present in the hTable that means that
        // number is duplicate, return true
        if (nums[i] in hTable) {
            return true;
        }
        // if the number is not present in hTable than add it
        hTable[num[i]] = 1;
    }
    // if till the end of the loop we do not found any duplicate that means there is no duplicacy
    // so we can return false
    return false;
}