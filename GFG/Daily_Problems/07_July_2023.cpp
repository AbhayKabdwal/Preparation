class Solution{
    public:
        //Function to merge the arrays.
       void merge(long long arr1[], long long arr2[], int n, int m) 
        { 
            // code here 
             int i=0,j=0;
           for(int i=0;i<min(n,m);i++){
               if(arr1[n-i-1]>arr2[i]){
                   long long temp = arr2[i];
                   arr2[i]=arr1[n-i-1];
                   arr1[n-i-1]=temp;
               }
           }
           sort(arr1,arr1+n);
           sort(arr2,arr2+m);
        }
};
