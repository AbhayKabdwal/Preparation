def search(arr,key):
    found = False
    for i in range(len(arr)):
        if int(arr[i]) == key:
            found = True
        else:
            pass
    return found

print("Enter a list of numbers (enter exit if done) : ")
arr = []
while True:
    a = input()
    if a in ["Exit","exit"]:
        break
    else:
        arr.append(a)

print("Entered list is :",arr)

key = int(input("Enter the key to be searched : "))

print(f"{key} found : ",search(arr,key))