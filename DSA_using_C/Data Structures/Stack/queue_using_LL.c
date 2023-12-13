#include <stdio.h>
#include <stdlib.h>

// Node structure for the linked list
struct Node {
    int data;
    struct Node* next;
};

// Linked list structure
struct LinkedList {
    struct Node* head;
    int size;
};

// Function to initialize a new linked list
struct LinkedList* initializeList() {
    struct LinkedList* list = (struct LinkedList*)malloc(sizeof(struct LinkedList));
    list->head = NULL;
    list->size = 0;
    return list;
}

// Function to insert a new node at the end of the linked list
void insertAtEnd(struct LinkedList* list, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;

    if (list->head == NULL) {
        list->head = newNode;
    } else {
        struct Node* current = list->head;
        while (current->next != NULL) {
            current = current->next;
        }
        current->next = newNode;
    }

    list->size++;
}

// Function to remove the node from the head of the linked list
int removeFromHead(struct LinkedList* list) {
    if (list->head == NULL) {
        // Empty list
        return -1; // Assuming -1 as an indicator of an error or an empty list
    }

    struct Node* temp = list->head;
    int data = temp->data;
    list->head = temp->next;
    free(temp);
    list->size--;

    return data;
}

// Queue structure using the linked list
struct Queue {
    struct LinkedList* llist;
    int size;
};

// Function to initialize a new queue
struct Queue* initializeQueue() {
    struct Queue* queue = (struct Queue*)malloc(sizeof(struct Queue));
    queue->llist = initializeList();
    queue->size = 0;
    return queue;
}

// Function to enqueue an element into the queue
void enqueue(struct Queue* queue, int num) {
    insertAtEnd(queue->llist, num);
    queue->size++;
}

// Function to dequeue an element from the queue
int dequeue(struct Queue* queue) {
    if (queue->size == 0) {
        // Empty queue
        return -1; // Assuming -1 as an indicator of an error or an empty queue
    }

    int data = removeFromHead(queue->llist);
    queue->size--;
    return data;
}

// Function to get the front element of the queue without dequeuing
int peek(struct Queue* queue) {
    if (queue->size == 0) {
        // Empty queue
        return -1; // Assuming -1 as an indicator of an error or an empty queue
    }

    return queue->llist->head->data;
}

// Function to get the size of the queue
int getSize(struct Queue* queue) {
    return queue->size;
}

// Function to check if the queue is empty
int isEmpty(struct Queue* queue) {
    return queue->size == 0;
}

// Function to print the elements of the queue
void printQueue(struct Queue* queue) {
    struct Node* current = queue->llist->head;
    printf("[ ");
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("]\n");
}

// Driver code
int main() {
    struct Queue* queue = initializeQueue();
    for (int i = 0; i < 10; i++) {
        enqueue(queue, i + 1);
    }
    printQueue(queue);
    dequeue(queue);
    printQueue(queue);

    // Free allocated memory
    free(queue->llist);
    free(queue);

    return 0;
}
