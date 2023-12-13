class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None
        self.size = 0

    def insertAtHead(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            new_node.next = self.head  # Make it circular
        else:
            new_node.next = self.head
            current_node = self.head
            while current_node.next != self.head:
                current_node = current_node.next
            current_node.next = new_node
            self.head = new_node
        self.size += 1

    def insertAtIndex(self, idx, data):
        if idx == 0:
            self.insertAtHead(data)
        elif idx == self.size - 1:
            self.insertAtEnd(data)
        else:
            new_node = Node(data)
            current_node = self.head
            for _ in range(idx - 1):
                current_node = current_node.next
            new_node.next = current_node.next
            current_node.next = new_node
            self.size += 1

    def insertAtEnd(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            new_node.next = self.head  # Make it circular
        else:
            current_node = self.head
            while current_node.next != self.head:
                current_node = current_node.next
            current_node.next = new_node
            new_node.next = self.head
        self.size += 1

    def removeAtHead(self):
        if self.head is None:
            return
        else:
            temp = self.head.data
            if self.head.next == self.head:
                self.head = None
            else:
                current_node = self.head
                while current_node.next != self.head:
                    current_node = current_node.next
                current_node.next = self.head.next
                self.head = self.head.next
            self.size -= 1
            return temp

    def removeAtIndex(self, idx):
        if self.head is None:
            return
        elif idx == 0:
            self.removeAtHead()
        elif idx == self.size - 1:
            self.removeAtEnd()
        else:
            current_node = self.head
            for _ in range(idx - 1):
                current_node = current_node.next
            current_node.next = current_node.next.next
            self.size -= 1

    def removeAtEnd(self):
        if self.head is None:
            return
        elif self.head.next == self.head:
            self.head = None
        else:
            current_node = self.head
            while current_node.next.next != self.head:
                current_node = current_node.next
            current_node.next = self.head
        self.size -= 1

    def printList(self):
        if self.head is None:
            return
        current_node = self.head
        print("[", end=" ")
        while True:
            print(current_node.data, end=" ")
            current_node = current_node.next
            if current_node == self.head:
                break
        print("]")

    def getSize(self):
        return self.size

    def getElementAtHead(self):
        if self.head is None:
            return
        else:
            return self.head.data

    def getElementAtEnd(self):
        if self.head is None:
            return
        else:
            current_node = self.head
            while current_node.next != self.head:
                current_node = current_node.next
            return current_node.data

# Create a circular linked list
cll = CircularLinkedList()

# Insert at head
cll.insertAtHead(3)
cll.printList()  # Output: [3]

# Insert at head again
cll.insertAtHead(2)
cll.printList()  # Output: [2 3]

# Insert at end
cll.insertAtEnd(4)
cll.printList()  # Output: [2 3 4]

# Insert at index
cll.insertAtIndex(1, 5)
cll.printList()  # Output: [2 5 3 4]

# Remove at head
cll.removeAtHead()
cll.printList()  # Output: [5 3 4]

# Remove at end
cll.removeAtEnd()
cll.printList()  # Output: [5 3]

# Remove at index
cll.removeAtIndex(1)
cll.printList()  # Output: [5]

# Get size
print("Size:", cll.getSize())  # Output: 1

# Get element at head
print("Element at head:", cll.getElementAtHead())  # Output: 5

# Get element at end
print("Element at end:", cll.getElementAtEnd())  # Output: 5
