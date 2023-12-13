import Linked_List as LL

class Stack:
    top = -1
    def __init__(self, size=30): #default size = 30
        self.llist = LL.LinkedList()
        self.size = size

    def push(self, num):
        if self.isFull():
            print("Stack is already full")
        else:
            self.top+=1
            self.llist.insertAtHead(num)

    def pop(self):
        if self.isEmpty():
            print("Stack is already empty")
        else:
            self.top-=1
            return self.llist.removeAtHead()

    def peek(self):
        if self.isEmpty():
            print("Stack is already empty")
        else:
            return self.llist.getElementAtHead()

    def printStack(self):
        self.llist.printList()

    def isEmpty(self):
        if self.top==-1: return True
        else: return False

    def isFull(self):
        if self.top==self.size-1: return True
        else: return False
        

#Driver code
stack = Stack(10)
for i in range(1,16):
    stack.push(i)
stack.printStack()
print(stack.pop())
