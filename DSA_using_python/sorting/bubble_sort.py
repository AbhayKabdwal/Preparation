def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j],arr[j+1] = arr[j+1],arr[j]
                swapped = True
        if (swapped == False):
            break
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
arr_sorted = bubble_sort(arr)
print("Sorted list is ",arr_sorted)