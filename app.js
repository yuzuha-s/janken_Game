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
  const cpuHand = hands[Math.floor(Math.random() * hands.length)];

  results(yourHand, cpuHand);
});
// 結果表示
function results(yourHand, cpuHand) {
    let result;
    if (checkbox.checked) {
      const cheatData = cheat(yourHand);
      result = cheatData.result;
      resultP.textContent = `あなた：${yourHand} 相手：${cheatData.cpu}  → ${cheatData.result}`;
    } else {
      result = match(yourHand, cpuHand);
      resultP.textContent = `あなた：${yourHand}  相手：${cpuHand} →${result}`;
    }
    //前の処理をクリアにする
    resultP.classList.remove("win", "lose", "draw");
    if (result.includes("あなたの勝ち！")) {
      resultP.classList.add("win");
    } else if (result.includes("あなたの負け！")) {
      resultP.classList.add("lose");
    } else {
      resultP.classList.add("draw");
    }
}

// 勝敗判定関数
function match(your, cpu) {
  if (your === cpu) {
    return "あいこ";
  } else if (
    (your === "グー" && cpu === "チョキ") ||
    (your === "チョキ" && cpu === "パー") ||
    (your === "パー" && cpu === "グー")
  ) {
    return "あなたの勝ち！";
  } else {
    return "あなたの負け！";
  }
}

//チートモードの勝敗判定関数-相手の出し方を固定する
function cheat(your) {
  let cpu;
  if (your === "グー") cpu = "チョキ";
  else if (your === "チョキ") cpu = "パー";
  else if (your === "パー") cpu = "グー";
  return {
    cpu: cpu,
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

