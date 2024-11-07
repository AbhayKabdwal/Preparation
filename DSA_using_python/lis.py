
def get_lis(arr, n, ind, prev_index, dp):
    if ind == n:
        return 0

    if dp[ind][prev_index + 1] != -1:
        return dp[ind][prev_index + 1]

    not_take = get_lis(arr, n, ind + 1, prev_index, dp)

    take = 0
    if prev_index == -1 or arr[ind] > arr[prev_index]:
        take = 1 + get_lis(arr, n, ind + 1, ind, dp)

    dp[ind][prev_index + 1] = max(not_take, take)

    print(f"DP Matrix after processing index {ind} with prev_index {prev_index}:")
    for row in dp:
        print(" ".join(f"{x:3}" for x in row))
    print()

    return dp[ind][prev_index + 1]


def reconstruct_lis(arr, n, dp):
    lis = []
    ind = 0
    prev_index = -1

    while ind < n:
        if prev_index == -1 or arr[ind] > arr[prev_index]:
            if dp[ind][prev_index + 1] == 1 + dp[ind + 1][ind + 1]:
                lis.append(arr[ind])
                prev_index = ind
        ind += 1

    return lis


def lis(arr):
    n = len(arr)
    dp = [[-1 for _ in range(n + 1)] for _ in range(n)]
    length_of_lis = get_lis(arr, n, 0, -1, dp)

    lis_sequence = reconstruct_lis(arr, n, dp)
    
    return length_of_lis, lis_sequence


if __name__ == "__main__":
    arr = [10, 9, 2, 5, 3, 7, 101, 18]

    length, subsequence = lis(arr)
    print(f"The length of the Longest Increasing Subsequence is: {length}")
    print("The Longest Increasing Subsequence is:", subsequence)
