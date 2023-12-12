#include <stdio.h>

#define SIZE 100

struct Queue {
    int myList[SIZE];
    int size;
    int front;
    int rear;
};

void initializeQueue(struct Queue *queue, int size) {
    int i;
    for (i = 0; i < size; i++) {
        queue->myList[i] = i;
    }
    queue->size = size;
    queue->front = -1;
    queue->rear = -1;
}

void enqueue(struct Queue *queue, int num) {
    if (queue->rear == queue->size - 1) {
        printf("Queue is already full\n");
        return;
    } else {
        queue->rear++;
        queue->myList[queue->rear] = num;
    }
}

int dequeue(struct Queue *queue) {
    if (queue->rear == -1) {
        printf("Queue is already empty\n");
        return -1; // Assuming -1 represents an error or an invalid value
    } else {
        int temp = queue->myList[0];
        for (int i = 0; i < queue->rear; i++) {
            queue->myList[i] = queue->myList[i + 1];
        }
        queue->rear--;
        return temp;
    }
}

int isEmpty(struct Queue *queue) {
    return (queue->rear == -1);
}

int isFull(struct Queue *queue) {
    return (queue->rear == queue->size - 1);
}

int currSize(struct Queue *queue) {
    return (queue->rear + 1);
}

void print(struct Queue *queue) {
    printf("Dequeue <- ");
    for (int i = 0; i <= queue->rear; i++) {
        printf("%d | ", queue->myList[i]);
    }
    printf("<- Enqueue\n");
}

int main() {
    struct Queue queue;
    initializeQueue(&queue, 100);

    for (int i = 1; i < SIZE; i++) {
        enqueue(&queue, i);
    }

    printf("Queue is full: %s\n", isFull(&queue) ? "true" : "false");
    printf("Queue size: %d\n", currSize(&queue));
    print(&queue);

    for (int i = 1; i <= 7; i++) {
        printf("The element removed is: %d\n", dequeue(&queue));
    }

    printf("Queue is empty: %s\n", isEmpty(&queue) ? "true" : "false");
    printf("Queue size: %d\n", currSize(&queue));

    return 0;
}
