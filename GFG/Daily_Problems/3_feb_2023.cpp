class Solution{
    public:
    pair<int,int> endPoints(vector<vector<int>> matrix, int R, int C){

        //code here

        int i=0,j=0;

        int m=matrix.size(),n=matrix[0].size();

        //i,m for rows and j,n for cols

        //0 for right , 1 for down , 2 for left and 3 for right

        int dx[]={0,1,0,-1};

        int dy[]={1,0,-1,0};

        int dir=0;

        while(i<m && j<n && i>=0 && j>=0)

        {

            if(matrix[i][j]==0)

            {

                i+=dx[dir];

                j+=dy[dir];

            }

            else if(matrix[i][j]==1)

            {

                matrix[i][j]=0;

                dir=(dir+1)%4;

            }

        }

        if(i<0)i=0;

        if(j<0)j=0;

        if(i==R)i--;

        if(j==C)j--;

        return {i,j};

        

    }
};
