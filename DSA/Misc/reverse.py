num = int(input("Enter a number : "))
print("The reverse of given number is : ")
while num>0:
    print(num%10, end = "")
    num//=10
