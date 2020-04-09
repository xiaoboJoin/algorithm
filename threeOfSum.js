function sumOfThree(nums, target) {
    let results = []
    if (nums.length < 3) {
        return results;
    }
    nums.sort(function(a, b) {
        return a - b
    })

    for (var i = 0; i < nums.length; i++) {
        let m = i + 1,
            n = nums.length - 1;
        while (m < n) {
            if (target == nums[i] + nums[m] + nums[n]) {
                results.push(JSON.stringify([nums[i], nums[m], nums[n]]));
            }
            if (target - (nums[i] + nums[m] + nums[n]) > 0) {
                ++m;
            } else {
                --n;
            }
        }
    }
    return [...new Set(results)].map((o) => {
        return JSON.parse(o);
    });
}

console.log(sumOfThree([-1, 0, 1, 2, -1, -4], 0))