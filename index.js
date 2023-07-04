let stagelevel = document.getElementById('stagelevel');
let scorearea = document.getElementById("score_area");
let score = 0;
let stagescore=0;
let number; // 랜덤으로 단어를 바꿔줄때 필요한 수의 인덱스 (0~23)

//초기 score, stagelevel 값 설정
scorearea.textContent="score : "+score+"점";
stagelevel.textContent="stage"+stagescore;

//html의 단어가 들어갈 자리에 단어 생성
function setword()
{
    for(let i =0; i<24; i++)
    {
        let word = document.getElementById("word"+i);
        word.textContent="멵";
    }
}
//랜덤으로 단어 바꿔주는 함수 
function changeword()
{
    //난수생성(0~23)
    number = Math.floor(Math.random()*24);
    //console.log("바뀌는 숫자 인덱스 : "+ number);
    let word=document.getElementById("word"+number);
    word.textContent="멶";
}

//정답
function success()
{
    //console.log("정답");
    alert("정답입니다");
    score++;
    if(score==5)
    {
        alert("승리하셨습니다!");
        score=0;
        stagescore=0;
    }
    stagescore++;
    //stage, score 값 재설정 
    scorearea.textContent="score : "+score+"점";
    stagelevel.textContent="stage"+stagescore;
    //새로운 값이 '멶'이되어야 하기 때문에 이전값 초기화
    let word=document.getElementById("word"+number);
    word.textContent="멵";
    //이전이벤트제거 함수 실행
    resetevent();
    //다시 난수생성부터 함수실행
    onecycle();
    

}

//틀림
function fail()
{
    stagescore--;
    //틀릴때마다 score 감소
    score--;
    scorearea.textContent="score : "+score+"점";
    //console.log("틀림");
    alert("틀렸습니다");
}

//글자마다 이벤트 생성
function makeevent()
{
    for(let i=0; i<24; i++)
    {
        let word=document.getElementById("word"+i);
        if(i==number)
        {
            //정답일경우 이벤트생성 
            word.addEventListener("click", success);
        }
        else
        {
            word.addEventListener("click", fail);
            
        }
    }
}
//이전 이벤트 제거
function resetevent()
{
    for(let i =0; i<24; i++)
    {
        let word=document.getElementById("word"+i);
        if(i==number)
        {
            word.removeEventListener("click",success);
        }
        else
        {
            word.removeEventListener("click", fail);
        }
    }
}
function onecycle()
{
    setword();
    changeword();
    makeevent();
}


onecycle();




