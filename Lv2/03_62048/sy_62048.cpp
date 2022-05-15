using namespace std;
int gcd (int  &w, int &h){//최대공약수
    int c;
    while(h!=0){
        c=w%h;
        w=h;
        h=c;
    }
    return w;
}
long long solution(int w,int h) {
    long long answer = 1;
    answer=(long long)w * (long long)h - (w+h -gcd(w,h));
    
    // 한 패턴 가로 : w / gcd
    // 한 패턴 세로 : h / gcd   
    // 패턴이 반복되는 개수 gcd
    // 한 패턴에서 못쓰는 조각의 개수 : 패턴의 가로 + 패턴의 세로 -1
    //                               w / gcd  +  h/ gcd   -1
    // 못 쓰는 조각의 개수 : gcd * (w/gcd + h/gcd -1) = w+h -gcd  

    return answer;
}
