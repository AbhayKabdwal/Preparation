#include <stdio.h>
#include <stdlib.h>

struct Node {
    int vertex;
    struct Node* next;
};

struct Graph {
    int V;
    struct Node** graph;
};

struct Node* createNode(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->vertex = value;
    newNode->next = NULL;
    return newNode;
}

struct Graph* createGraph(int size) {
    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
    graph->V = size;
    graph->graph = (struct Node**)malloc(size * sizeof(struct Node*));

    for (int i = 0; i < size; ++i) {
        graph->graph[i] = NULL;
    }

    return graph;
}

void addEdge(struct Graph* graph, int v1, int v2) {
    struct Node* newNode = createNode(v1);
    newNode->next = graph->graph[v2];
    graph->graph[v2] = newNode;

    newNode = createNode(v2);
    newNode->next = graph->graph[v1];
    graph->graph[v1] = newNode;
}

void printGraph(struct Graph* graph) {
    for (int i = 0; i < graph->V; ++i) {
        printf("Vertex [%d] :", i);
        struct Node* ptr = graph->graph[i];
        while (ptr != NULL) {
            printf(" %d ->", ptr->vertex);
            ptr = ptr->next;
        }
        printf("\n");
    }
}

int main() {
    int V = 5;
    struct Graph* graph = createGraph(V);

    addEdge(graph, 0, 1);
    addEdge(graph, 0, 2);
    addEdge(graph, 0, 3);
    addEdge(graph, 1, 2);

    printGraph(graph);

    return 0;
}
