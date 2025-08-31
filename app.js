const buttonGroup = document.querySelector(".button-group");
const resultP = document.getElementById("result");
const checkbox = document.getElementById("cheatMode");

const hands = ["グー", "チョキ", "パー"];

// ボタンでじゃんけん実行
buttonGroup.addEventListener("click", function (event) {
  const target = event.target;
  if (!target.matches("button")) {
    return;
  }

  // あなたの手を判定
  let yourHand;
  if (target.textContent.includes("グー")) {
    yourHand = "グー";
  }else if (target.textContent.includes("チョキ")) {
    yourHand = "チョキ";
  }else if (target.textContent.includes("パー")) {
    yourHand = "パー";
  }

  const rivalHand = hands[Math.floor(Math.random() * hands.length)];

  // 結果表示
  let result;
  if (checkbox.checked) {
    const cheatData = cheat(yourHand);
    result = cheatData.result;
    resultP.textContent = `あなた：${yourHand} 相手：${cheatData.rival}  → ${cheatData.result}`;
  } else {
    const matchResult = match(yourHand, rivalHand);
    result = matchResult;
    resultP.textContent = `あなた：${yourHand}    相手：${rivalHand}  →${match(yourHand,rivalHand)}`;
  }
  //前の処理をクリアにする
  resultP.classList.remove("win", "lose", "draw");
  if (result.includes("あなたの勝ち！")) {
    resultP.classList.toggle("win");
  } else if (result.includes("あなたの負け！")) {
    resultP.classList.toggle("lose");
  } else {
    resultP.classList.toggle("draw");
  }
});

// 勝敗判定関数
function match(your, rival) {
  if (your === rival) {
    return "あいこ";
  } else if (
    (your === "グー" && rival === "チョキ") ||
    (your === "チョキ" && rival === "パー") ||
    (your === "パー" && rival === "グー")
  ) {
    return "あなたの勝ち！";
  } else {
    return "あなたの負け！";
  }
}

//チートモードの勝敗判定関数-相手の出し方を固定する
function cheat(your) {
  let rival;
  if (your === "グー") rival = "チョキ";
  else if (your === "チョキ") rival = "パー";
  else if (your === "パー") rival = "グー";
  return {
    rival: rival,
    result: "あなたの勝ち！(チートモードON)",
  };
}

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    document.body.classList.add("cheat-active");
  } else {
    document.body.classList.remove("cheat-active");
  }
});

// Math.floor(Math.random() * 配列.length)
// npx eslint app.js

