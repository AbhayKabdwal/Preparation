def selectionSort(array):
    size = len(array)
    for ind in range(size):
        min_index = ind
 
        for j in range(ind + 1, size):
            if array[j] < array[min_index]:
                min_index = j
        (array[ind], array[min_index]) = (array[min_index], array[ind])
 
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

selectionSort(arr)
print('The array after sorting in Ascending Order by selection sort is:')
print(arr)