class Queue:
    myList=list()
    size=0
    front=-1
    rear=-1

    def __init__(self,size):
        self.myList.extend(list(range(0,size)))
        self.size = size

    def isEmpty(self):
        if self.rear==-1 : return True
        else: return False

    def isFull(self):
        if self.rear==self.size-1: return True
        else: return False

    def enqueue(self, num):
        if self.isFull():
            print("Queue is already full")
            return
        else:
            self.rear+=1
            self.myList[self.rear]=num

    def dequeue(self):
        if self.isEmpty():
            print("Queue is already empty")
            return
        else:
            temp = self.myList[0]
            #first idx will be removed, we need to shift all elements to the left
            for i in range(0,self.rear):
                self.myList[i]=self.myList[i+1]
            self.rear-=1
            return temp

    def currSize(self):
        return self.rear+1

    def print(self):
        print("Dequeue <- ",end='')
        for i in range(0,self.currSize()):
            print(self.myList[i],"|",end=' ')
        print("<- Enqueue")

#Below is some driver code
queue = Queue(25)
for i in range(1,25):
    queue.enqueue(i)
print("Queue is full: {}".format(queue.isFull()))
print("Queue size: {}".format(queue.currSize()))
queue.print()
for i in range(1,8):
    print("The element removed is: {}".format(queue.dequeue()))
print("Queue is empty: {}".format(queue.isEmpty()))
print("Queue size: {}".format(queue.currSize()))
queue.print()
                           
