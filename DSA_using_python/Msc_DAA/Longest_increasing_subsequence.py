def longest_increasing_subsequence(arr):
    n = len(arr)
    if n == 0:
        return 0, []

    dp = [1] * n  
    parent = [-1] * n  

    for i in range(1, n):
        for j in range(i):
            if arr[j] < arr[i]:
                dp[i] = max(dp[i], dp[j] + 1)
                parent[i] = j

        print(f"DP Table after processing element {arr[i]}: {dp}")
        print(f"Parent Table: {parent}")
        print("-" * 40)

    max_length = max(dp)
    last = dp.index(max_length)

    lis = []
    while last != -1:
        lis.append(arr[last])
        last = parent[last]

    lis.reverse()
    return max_length, lis


if __name__ == "__main__":
    arr = [10, 9, 2, 5, 3, 7, 101, 18]
    length, lis = longest_increasing_subsequence(arr)
    print("The length of the longest increasing subsequence is", length)
    print("The longest increasing subsequence is", lis)
