class Solution{
public:
    long long findNumber(long long N){
        char a[5]={'1','3','5','7','9'};
    string s="";
    long long pre=1,mul=5,times=2;
    while(N>0){
      long long temp=(N % mul)-1;
      long long ind=(temp+mul)%mul;
      int index=ind/pre;
      s=a[index]+s;
      N-=mul;
      mul*=5;
      pre*=5;
    }
    return stoll(s);
    }
};
