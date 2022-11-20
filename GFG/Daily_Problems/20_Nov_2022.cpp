class Solution {
  public:
    long long lcmTriplets(long long N) {
        if(N>=3){
            if (N%2==0){
                if (N%3==0)
                    return (N-2)*(N-1)*(N-3);
                else
                    return N*(N-1)*(N-3);
            }
            else
                return N*(N-1)*(N-2);
        }
        return N;
    }
};
