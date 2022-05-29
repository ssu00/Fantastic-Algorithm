#include <string>
#include <vector>

using namespace std;
int checking(vector<string> v){

    // PP
    for(int i=0; i<5; i++){
        for(int j=0; j<4; j++){
            if(v[i][j]=='P'&&v[i][j+1]=='P')
                return 0;
        }
    }
    
    //P
    //P
     for(int i=0; i<4; i++){
        for(int j=0; j<5; j++){
            if(v[i][j]=='P'&&v[i+1][j]=='P')
                return 0;
        }
    }

    // P O P
     for(int i=0; i<5; i++){
        for(int j=0; j<3; j++){
            if(v[i][j]=='P'&&v[i][j+2]=='P' &&v[i][j+1]!='X')
                return 0;
        }
    }
        
    //P
    //O
    //P
    for(int i=0; i<3; i++){
        for(int j=0; j<5; j++){
            if(v[i][j]=='P'&&v[i+2][j]=='P' &&v[i+1][j]!='X')
                return 0;
        }
    }
    
    
// P O  O P
// X P  P X
    for(int i=0; i<4; i++){
        for(int j=0; j<4; j++){
            if(v[i][j]=='P'&& v[i+1][j+1]=='P'){
                if(v[i+1][j]!='X' || v[i][j+1]!='X')
                return 0;
            }
            if(v[i+1][j]=='P'&&v[i][j+1]=='P'){
                if(v[i][j]!='X'||v[i+1][j+1]!='X')
                    return 0;
            }
        }
    }
    
   
    return 1;    
}

vector<int> solution(vector<vector<string>> places) {
       vector<int> answer;
    answer={checking(places[0]),checking(places[1]),checking(places[2]),checking(places[3]),checking(places[4])};
    
    return answer;
}