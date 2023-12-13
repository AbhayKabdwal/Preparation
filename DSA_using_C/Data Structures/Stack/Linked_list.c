#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct LinkedList {
    struct Node* head;
    int size;
};

// Function to create a new node
struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Function to initialize a linked list
void initializeList(struct LinkedList* list) {
    list->head = NULL;
    list->size = 0;
}

// Function to insert at the head of the list
void insertAtHead(struct LinkedList* list, int data) {
    struct Node* newNode = createNode(data);
    if (list->head == NULL) {
        list->head = newNode;
    } else {
        newNode->next = list->head;
        list->head = newNode;
    }
    list->size++;
}

// Function to insert at a specific index
void insertAtIndex(struct LinkedList* list, int idx, int data) {
    struct Node* newNode = createNode(data);
    if (idx == 0) {
        insertAtHead(list, data);
    } else if (idx == list->size - 1) {
        // Insert at the end
        struct Node* current = list->head;
        while (current->next != NULL) {
            current = current->next;
        }
        current->next = newNode;
        list->size++;
    } else {
        struct Node* current = list->head;
        for (int i = 1; i < idx - 1; i++) {
            current = current->next;
        }
        newNode->next = current->next;
        current->next = newNode;
        list->size++;
    }
}

// Function to insert at the end of the list
void insertAtEnd(struct LinkedList* list, int data) {
    struct Node* newNode = createNode(data);
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

// Function to remove at the head of the list
int removeAtHead(struct LinkedList* list) {
    if (list->head == NULL) {
        return -1; // Assuming -1 is an invalid data value
    } else {
        int temp = list->head->data;
        struct Node* tempNode = list->head;
        list->head = list->head->next;
        free(tempNode);
        list->size--;
        return temp;
    }
}

// Function to remove at a specific index
void removeAtIndex(struct LinkedList* list, int idx) {
    if (list->head == NULL) {
        return;
    } else if (idx == 0) {
        removeAtHead(list);
    } else if (idx == list->size - 1) {
        // Remove at the end
        struct Node* current = list->head;
        while (current->next->next != NULL) {
            current = current->next;
        }
        free(current->next);
        current->next = NULL;
        list->size--;
    } else {
        struct Node* current = list->head;
        for (int i = 1; i < idx; i++) {
            current = current->next;
        }
        struct Node* tempNode = current->next;
        current->next = current->next->next;
        free(tempNode);
        list->size--;
    }
}

// Function to print the list
void printList(struct LinkedList* list) {
    struct Node* current = list->head;
    printf("[ ");
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("]\n");
}

// Function to get the size of the list
int getSize(struct LinkedList* list) {
    return list->size;
}

// Function to get the element at the head of the list
int getElementAtHead(struct LinkedList* list) {
    if (list->head == NULL) {
        return -1; // Assuming -1 is an invalid data value
    } else {
        return list->head->data;
    }
}

// Function to get the element at the end of the list
int getElementAtEnd(struct LinkedList* list) {
    if (list->head == NULL) {
        return -1; // Assuming -1 is an invalid data value
    } else {
        struct Node* current = list->head;
        while (current->next != NULL) {
            current = current->next;
        }
        return current->data;
    }
}

// Function to free the memory allocated for the list
void freeList(struct LinkedList* list) {
    struct Node* current = list->head;
    while (current != NULL) {
        struct Node* temp = current;
        current = current->next;
        free(temp);
    }
    list->head = NULL;
    list->size = 0;
}

int main() {
    struct LinkedList myList;
    initializeList(&myList);

    insertAtHead(&myList, 3);
    insertAtHead(&myList, 2);
    insertAtHead(&myList, 1);
    printList(&myList); // [ 1 2 3 ]

    insertAtIndex(&myList, 1, 5);
    printList(&myList); // [ 1 5 2 3 ]

    insertAtEnd(&myList, 6);
    printList(&myList); // [ 1 5 2 3 6 ]

    removeAtHead(&myList);
    printList(&myList); // [ 5 2 3 6 ]

    removeAtIndex(&myList, 2);
    printList(&myList); // [ 5 2 6 ]

    freeList(&myList);
    
    return 0;
}
