#include <stdio.h>

// Define the maximum size of the graph
#define MAX_SIZE 5

// Define the Graph structure
struct Graph {
    int adj_matrix[MAX_SIZE][MAX_SIZE];
    int size;
};

// Function to initialize the graph
void initGraph(struct Graph *g, int size) {
    g->size = size;
    for (int i = 0; i < size; ++i) {
        for (int j = 0; j < size; ++j) {
            g->adj_matrix[i][j] = 0;
        }
    }
}

// Function to add an edge to the graph
void addEdge(struct Graph *g, int v1, int v2) {
    if (v1 == v2) {
        printf("Same vertex %d and %d\n", v1, v2);
    } else {
        g->adj_matrix[v1][v2] = 1;
        g->adj_matrix[v2][v1] = 1;
    }
}

// Function to remove an edge from the graph
void removeEdge(struct Graph *g, int v1, int v2) {
    if (g->adj_matrix[v1][v2] == 0) {
        printf("There is no edge between %d and %d\n", v1, v2);
    } else {
        g->adj_matrix[v1][v2] = 0;
        g->adj_matrix[v2][v1] = 0;
    }
}

// Function to print the adjacency matrix
void printGraph(struct Graph *g) {
    printf("  ");
    for (int i = 0; i < g->size; ++i) {
        printf("%d ", i);
    }
    printf("\n");

    for (int i = 0; i < g->size; ++i) {
        printf("%d ", i);
        for (int j = 0; j < g->size; ++j) {
            printf("%d ", g->adj_matrix[i][j]);
        }
        printf("\n");
    }
}

// Main function as driver code
int main() {
    // Create a graph and initialize it
    struct Graph g;
    initGraph(&g, 5);

    // Add edges to the graph
    addEdge(&g, 0, 1);
    addEdge(&g, 0, 2);
    addEdge(&g, 1, 2);
    addEdge(&g, 2, 0);
    addEdge(&g, 2, 3);

    // Print the graph
    printGraph(&g);

    return 0;
}
