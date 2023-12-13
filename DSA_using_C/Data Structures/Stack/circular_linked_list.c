#include <stdio.h>
#include <stdlib.h>

// Define the node structure
struct Node {
    int data;
    struct Node* next;
};

// Define the Circular Linked List structure
struct CircularLL {
    struct Node* head;
    struct Node* tail;
    int size;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Function to initialize a Circular Linked List
void initCircularLL(struct CircularLL* list) {
    list->head = NULL;
    list->tail = NULL;
    list->size = 0;
}

// Function to insert a node at the head of the Circular Linked List
void insertAtHead(struct CircularLL* list, int data) {
    struct Node* newNode = createNode(data);
    if (list->head == NULL) {
        list->head = newNode;
        list->tail = newNode;
        list->tail->next = list->head;
    } else {
        newNode->next = list->head;
        list->head = newNode;
        list->tail->next = list->head;
    }
    list->size++;
}

// Function to insert a node at the end of the Circular Linked List
void insertAtEnd(struct CircularLL* list, int data) {
    struct Node* newNode = createNode(data);
    if (list->head == NULL) {
        list->head = newNode;
        list->tail = newNode;
        list->tail->next = list->head;
    } else {
        list->tail->next = newNode;
        newNode->next = list->head;
        list->tail = newNode;
    }
    list->size++;
}

// Function to print the Circular Linked List
void printList(struct CircularLL* list) {
    struct Node* currentNode = list->head;
    for (int i = 0; i < list->size * 2; i++) {
        printf("%d ", currentNode->data);
        currentNode = currentNode->next;
    }
}

// Driver code
int main() {
    struct CircularLL l;
    initCircularLL(&l);

    for (int i = 0; i < 5; i++) {
        insertAtHead(&l, i + 1);
    }
    insertAtEnd(&l, -1);
    insertAtEnd(&l, -2);

    printList(&l);

    return 0;
}
