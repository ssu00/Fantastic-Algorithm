function solution(board, moves) {
    var answer = 0;
    const destArr=[], boardColumn=[];
    for(let i=0;i<board.length;i++){ //세로칸 기준으로, 0이 없는 배열 만들기
        const oneColumn=[];
        for(let j=0;j<board.length;j++){
            board[j][i]!=0 && oneColumn.push(board[j][i]);
        }
        boardColumn.push(oneColumn);
    }

    moves.forEach((data)=>{
        if(boardColumn[data-1].length!=0){ //0이 없는 boardColumn 배열에서 하나씩 꺼내서 destArr에 넣기
            destArr.push(boardColumn[data-1][0]);
            boardColumn[data-1].shift();
            if(destArr[destArr.length-1]==destArr[destArr.length-2]){
                destArr.pop();
                destArr.pop();
                answer+=2;
            }
        }
    })

    return answer;
}