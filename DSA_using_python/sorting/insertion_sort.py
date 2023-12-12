def insertion_sort(arr):
    print("iterations : ")
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j] :
                arr[j + 1] = arr[j]
                j -= 1
                print(arr)
        arr[j + 1] = key
    return arr


print("Enter a list of numbers (enter exit if done) : ")
arr = []
while True:
    a = input()
    if a in ["Exit","exit"]:
        break
    elif a.isnumeric():
        arr.append(int(a))
    else:
        pass

print("Entered list is :",arr)
arr_sorted = insertion_sort(arr)
print("Sorted list is ",arr_sorted)