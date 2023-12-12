#include<stdio.h>

int counter = 0; //Global variable which keeps track of number of swaps

int randomNum(int l, int h){
	return rand()%(h-l+1)+l;
}

void sort(int arr[], int low, int high){
	if(low>=high) return;
	
	int start=low, end=high, randIdx=0,pivot=0,temp=0;
	randIdx = randomNum(start,end); //For randomization of pivot
	temp = arr[start];
	arr[start] = arr[randIdx];
	arr[randIdx] = temp;
	pivot = arr[start];
	
	while(start<=end){
		while(arr[start]<pivot) start++;
		while(arr[end]>pivot) end--;
		if(start<=end){
			counter++;
			temp = arr[end];
			arr[end] = arr[start];
			arr[start] = temp;
			start++;
			end--;
		}
	}
	
	//Pivot at correct index, sort the two halves of the array
	sort(arr,low,end);
	sort(arr,start,high);
}

int main(){
	int size=0,i=0;
	printf("Please enter the size of the array: ");
	scanf("%d",&size);
	
	int arr[size];
	for(i=0;i<size;i++){
		printf("\nPlease enter the element no %d: ",i+1);
		scanf("%d",&arr[i]);
	}
	
	//Call the sorting function
	sort(arr,0,size-1);
	
	printf("\nThe array after sorting is: ");
	for(i=0;i<size;i++) printf("%d ",arr[i]);
	
	printf("\nFor an array of size %d, number of swaps is %d",size,counter);
	
	return 0;
}
