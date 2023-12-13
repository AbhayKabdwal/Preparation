#include <stdio.h>
#include <stdlib.h>

// Node structure for the linked list
struct Node {
    int data;
    struct Node* next;
};

// Linked List structure
struct LinkedList {
    struct Node* head;
    int size;
};

// Function to initialize an empty linked list
void initializeLinkedList(struct LinkedList* list) {
    list->head = NULL;
    list->size = 0;
}

// Function to insert a new node at the head of the linked list
void insertAtHead(struct LinkedList* list, int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation error\n");
        exit(EXIT_FAILURE);
    }

    newNode->data = data;
    newNode->next = list->head;
    list->head = newNode;
    list->size++;
}

// Function to remove the node at the head of the linked list
int removeAtHead(struct LinkedList* list) {
    if (list->head == NULL) {
        printf("Linked list is empty\n");
        exit(EXIT_FAILURE);
    }

    struct Node* temp = list->head;
    int data = temp->data;
    list->head = temp->next;
    free(temp);
    list->size--;

    return data;
}

// Stack structure using a linked list
struct Stack {
    struct LinkedList list;
    int top;
    int size;
};

// Function to initialize an empty stack
void initializeStack(struct Stack* stack, int size) {
    initializeLinkedList(&(stack->list));
    stack->top = -1;
    stack->size = size;
}

// Function to push an element onto the stack
void push(struct Stack* stack, int num) {
    if (stack->top == stack->size - 1) {
        printf("Stack is already full\n");
        return;
    }

    stack->top++;
    insertAtHead(&(stack->list), num);
    printf("%d pushed into stack\n");
}

// Function to pop an element from the stack
int pop(struct Stack* stack) {
    if (stack->top == -1) {
        printf("Stack is already empty\n");
        return;
    }

    stack->top--;
    return removeAtHead(&(stack->list));
}

// Function to peek at the top element of the stack
int peek(struct Stack* stack) {
    if (stack->top == -1) {
        printf("Stack is already empty\n");
        exit(EXIT_FAILURE);
    }

    return stack->list.head->data;
}

// Function to check if the stack is empty
int isEmpty(struct Stack* stack) {
    return stack->top == -1;
}

// Function to check if the stack is full
int isFull(struct Stack* stack) {
    return stack->top == stack->size - 1;
}

// Function to print the elements of the stack
void printStack(struct Stack* stack) {
    struct Node* current = stack->list.head;
    printf("[ ");
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("]\n");
}

// Driver code
int main() {
    struct Stack stack;
    initializeStack(&stack, 10);

    for (int i = 1; i <= 15; i++) {
        push(&stack, i);
    }

    printStack(&stack);
    printf("Popped element: %d\n", pop(&stack));

    return 0;
}
