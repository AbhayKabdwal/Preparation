void initializeQueue(struct Queue *queue, int size) {
    int i;
    for (i = 0; i < size; i++) {
        queue->myList[i] = i;
    }
    queue->size = size;
    queue->front = -1;
    queue->rear = -1;
}