/* global $ */

//変数定義
var button1 = document.getElementById('button1');
var num1_box = document.getElementById('num1-box');
var num2_box = document.getElementById('num2-box');
var symbol_box = document.getElementById('symbol');
var symbol = ['+', '-'];
var pc_answer;
var user_answer;
var input_answer = document.getElementById('user_answer');
var ok_btn = document.getElementById('send-btn');
var judge_message = document.getElementById('judge-message');
var i = 0;
var h = 0;
var how_many_answers = document.getElementById('how-many-answers');
var total_questions = document.getElementById('total-questions');
// __________________________________________関数定義↓↓


//ランダム数値生成
function create_random(){

  var num1 = Math.ceil(Math.random() * 100);
  var num2 = Math.ceil(Math.random() * 100);
  var symbol_num = Math.floor(Math.random() * 2);

  num1_box.innerText = num1
  symbol_box.innerText = symbol[symbol_num];
  num2_box.innerText = num2;
  var pc_answer = pc_calculate(num1, num2, symbol_num);

  input_answer.value = "";

  return pc_answer;
}

//表示された数値の答えを計算
function pc_calculate(num1, num2, symbol_num){

  switch(symbol_num){
    case 0:
      pc_answer = num1 + num2;
      break;
    case 1:
      pc_answer = num1 - num2;
      break;
  }
  return pc_answer;
}

//textboxに入力された数値を取得
function check_answer(pc_answer){
  user_answer = document.getElementById('user_answer').value;

  if (user_answer && pc_answer){
    h += 1;
    total_questions.innerText = h;

    if(user_answer == pc_answer){
      i += 1;
      how_many_answers.innerText = i;
      judge_message.innerText = "正解です";

      create_random();
    } else{
      // console.log(pc_answer);
      // console.log(user_answer);
      judge_message.innerText = "不正解";
    }
  } else{
    judge_message.innerText = "値を入力してください";
  }
}

// __________________________________________↑↑関数定義


//ページload時に数式表示
create_random();

//数字を変えるbuttonを押すとランダム数字が変わる
button1.addEventListener('click', function(){
  return create_random();
});

ok_btn.addEventListener('click', function(){
  // console.log(user_answer);
  check_answer(pc_answer);
  input_answer.value = "";
});


