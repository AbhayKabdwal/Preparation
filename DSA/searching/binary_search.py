# It returns location of x in given array arr
def binarySearch(arr, l, r, x):

	while l <= r:

		mid = l + (r - l) // 2

		# Check if x is present at mid
		if arr[mid] == x:
			return mid

		# If x is greater, ignore left half
		elif arr[mid] < x:
			l = mid + 1

		# If x is smaller, ignore right half
		else:
			r = mid - 1
	return -1

def binarySearch_recursive(arr, l, r, x):
 
    # Check base case
    if l <= r:
 
        mid = l + (r - l) // 2
 
        # If element is present at the middle itself
        if arr[mid] == x:
            return mid
 
        # If element is smaller than mid, then it
        # can only be present in left subarray
        elif arr[mid] > x:
            return binarySearch(arr, l, mid-1, x)
 
        # Else the element can only be present
        # in right subarray
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