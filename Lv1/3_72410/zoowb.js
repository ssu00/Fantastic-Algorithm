function solution(new_id) {
    var answer = '';
    answer = new_id.toLowerCase()
            .replace( /[^a-zA-Z0-9-_.]/g, '')
            .replace(/(\.){2,}/g,'.')
            .replace(/^\./g, '')
            .replace(/\.$/g, '');
    if(!answer){answer='a'}
    if(answer.length>15){answer = answer.substring(0,15)}
    answer = answer.replace(/^\./g, '')
            .replace(/\.$/g, '');
    console.log(answer.length);
    for(var i=answer.length; i<3; i++){
        answer = answer+answer.substr(-1);
    }
    return answer;
}
