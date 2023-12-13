def binarySearch(arr, l, r, x):
	while l <= r:
		mid = l + (r - l) // 2
		if arr[mid] == x:
			return mid

		elif arr[mid] < x:
			l = mid + 1

		else:
			r = mid - 1
	return -1

def binarySearch_recursive(arr, l, r, x):
    if l <= r:
 
        mid = l + (r - l) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] > x:
            return binarySearch(arr, l, mid-1, x)
        else:
            return binarySearch(arr, mid + 1, r, x)

    else:
        return -1

print("Enter a list of numbers (enter exit if done) : ")
arr = []
while True:
    a = input()
    if a in ["Exit","exit"]:
        break
    else:
        arr.append(int(a))

print("Entered list is :",arr)
key = int(input("Enter the key to be searched : "))
found = False

temp_arr = arr.copy()
temp_arr.sort()
print("Sorted list is : ",temp_arr)

print(f"{key} found : ",binarySearch(temp_arr,0,len(temp_arr)-1,key) != -1)
print(f"{key} found : ",binarySearch_recursive(temp_arr,0,len(temp_arr)-1,key) != -1)