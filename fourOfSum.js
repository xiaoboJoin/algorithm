function sumOfFour(nums, target) {
    let results = []
    if (nums.length < 4) {
        return results;
    }
    nums.sort(function(a, b) {
        return a - b
    })
    for (var j = 0; j < nums.length - 3; j++) {
        if (j != 0 && nums[j] == nums[j - 1])
            continue; //去重
        for (var i = j + 1; i < nums.length - 2; i++) {
            if (i != j + 1 && nums[i] == nums[i - 1])
                continue; //去重
            let m = i + 1,
                n = nums.length - 1;
            while (m < n) {
                if (target == nums[j] + nums[i] + nums[m] + nums[n]) {
                    results.push(JSON.stringify([nums[j], nums[i], nums[m], nums[n]]));
                    m++;
                    n--;
                    while (m < n && nums[m] == nums[m - 1])
                        m++;
                    while (m < n && nums[n] == nums[n + 1])
                        n--;
                } else {
                    if (target - (nums[j] + nums[i] + nums[m] + nums[n]) > 0) {
                        ++m;
                    } else {
                        --n;
                    }
                }

            }
        }
    }
    return [...new Set(results)].map((o) => {
        return JSON.parse(o);
    });
}

console.log(sumOfFour([1, 0, -1, 0, -2, 2], 0))