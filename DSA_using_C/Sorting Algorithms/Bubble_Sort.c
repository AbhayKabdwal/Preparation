#include<stdio.h>
#include<stdbool.h>
int main(){
	int size=0,i,j,counter=0;
	printf("Please enter the size of the array: ");
	scanf("%d",&size);
	int arr[size]; //Declaring an array of the given size
	for(i=0;i<size;i++){
		printf("\nPlease enter the element at index %d: ",i+1);
		scanf("%d",&arr[i]);
	}
	
	//To check the number of passes and comparisons
	int pass=0,comp=0,swap=0;
	
	//Sorting the given array using bubble sort
	for(i=0;i<size-1;i++){
		for(j=0;j<size-i-1;j++){
			comp++;
			if(arr[j]>arr[j+1]){
				int temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				swap++;
			}
		}
		pass++;
	}
	printf("\nThe number of passes = %d and the number of swaps = %d and the number of comparsions=%d",pass,swap,comp);
	printf("\nThe given array after sorting is: \n");
	for(i=0;i<size;i++) printf("%d ",arr[i]);
	return 0;
}
