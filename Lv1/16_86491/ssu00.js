function solution(sizes) {
    let horizon=0, vertical=0;
    for(x of sizes){
        horizon = Math.max(horizon,x[0]>x[1]?x[0]:x[1]);
        vertical = Math.max(vertical,x[0]>x[1]?x[1]:x[0]);
    }
    return horizon*vertical;
}