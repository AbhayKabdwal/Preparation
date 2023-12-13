class node:
    def __init__(self,data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.size=0

    #Insertion at the head 
    def insertAtHead(self, data):
        newNode = node(data)
        if self.head == None:
            self.head = newNode
            self.size += 1
            # print(f"{data} inserted at front")
            return
        newNode.next = self.head
        self.head = newNode
        self.size += 1
        # print(f"{data} inserted at front")
            
    #Indexing starts from 0 to size-1
    def insertAtIndex(self, index, data):
        newNode = node(data)
        if self.isEmpty() or (index == 0):
            self.insert_at_front(data)
        elif index == self.size-1:
            self.insert_at_end(data)
        else:
            current = self.head
            for _ in range(1,index-1):
                current = current.next
            newNode.next = current.next
            current.next = newNode
            self.size += 1
            # print(f"{data} inserted at index {index}")
            
    #Insertion towards the end
    def insertAtEnd(self,data):
        newNode = node(data)
        if self.isEmpty():
            self.head = newNode
            self.size += 1
            return
        current = self.head
        while(current.next): current = current.next
        current.next = newNode
        self.size += 1
        # print(f"{data} inserted at end")

    def removeAtHead(self):
        if self.isEmpty():
            # print("Empty linked list")
            return
        temp = self.head.data
        self.head = self.head.next
        self.size -= 1
        return temp
            

    def removeAtEnd(self):
        if self.head is None:
            return
        elif self.head.next is None:
            self.head = None
            self.size-=1
            return
        else:
            current_node = self.head
            #Reaches to the second last node
            while(current_node.next.next): current_node = current_node.next
            temp = current_node.next.data
            current_node.next = None
            self.size-=1
            return temp

    def removeAtIndex(self, index):
        if self.isEmpty():
            # print("Linked list in empty")
            pass
        if index == self.size-1:
            self.remove_at_end()
        elif index == 0:
            self.remove_at_front()
        else:
            current = self.head
            for _ in range(1,index-1):
                current = current.next
            temp = current.next.data
            current.next = current.next.next
            return temp

    def printList(self):
        current_node = self.head
        print("[",end=" ")
        while(current_node):
            print(current_node.data,end=" ")
            current_node = current_node.next
        print("]")

#This is driver code
'''
llist = LinkedList()
for i in range(1,6):
    llist.insertAtHead(i)
llist.removeAtIndex(3)
llist.printList()
'''
