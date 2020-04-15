/* global $ */

//変数定義
var button1 = document.getElementById('button1');
var num1_box = document.getElementById('num1-box');
var num2_box = document.getElementById('num2-box');
var symbol_box = document.getElementById('symbol');
var symbol = ['+', '-', '×'];
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

  var symbol_num = Math.floor(Math.random() * 3);

  if(symbol_num == 0){
    //足し算
    var num1 = Math.ceil(Math.random() * 100);
    var num2 = Math.ceil(Math.random() * 100);
  } else if(symbol_num == 1){
    //引き算
    var num1 = Math.ceil(Math.random() * 100);
    var num2 = Math.ceil(Math.random() * num1);
  } else if(symbol_num == 2){
    //引き算
    var num1 = Math.ceil(Math.random() * 100);
    var num2 = Math.ceil(Math.random() * 9);
  }

  input_answer.focus();

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
    case 2:
      pc_answer = num1 * num2;
      break;
  }
  return pc_answer;
}

//textboxに入力された数値を取得
function check_answer(pc_answer, user_answer){

  //文字カラーリセット
  if((judge_message.classList.contains('correct')) || (judge_message.classList.contains('false'))){
    judge_message.classList.remove('correct');
    judge_message.classList.remove('false');
  };

  if ((user_answer != '') && (pc_answer != null)){
    h += 1;
    total_questions.innerText = h;

    if(user_answer == pc_answer){
      i += 1;
      how_many_answers.innerText = i;
      judge_message.classList.add('correct');
      judge_message.innerText = "正解";

      create_random();
    } else{
      // console.log(pc_answer);
      // console.log(user_answer);
      judge_message.classList.add('false');
      judge_message.innerText = "不正解";

      create_random();
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
  user_answer = document.getElementById('user_answer').value;
  check_answer(pc_answer, user_answer);
  input_answer.value = "";
});

//Enterキーで答えあわせ
document.onkeydown = function(e) {
    var keyCode = false;
    if (e) event = e;
    if (event) {
        if (event.keyCode) {
            keyCode = event.keyCode;
        } else if (event.which) {
            keyCode = event.which;
        }
    }
    if(keyCode == 13){
      user_answer = document.getElementById('user_answer').value;
      check_answer(pc_answer, user_answer);
    }
};

