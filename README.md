# じゃんけんゲーム with チートモード

## 環境
- ブラウザ：Google Chrome (開発者ツール)
  Consoleタブから直接JavaScriptを実行

- VSCodeの拡張機能：Live Server


## コーディングチェック
- ESLintを使用  ・・・JavaScript の静的解析ツール
- Prettierを使用 ・・・コードの インデント、改行、スペース、クォートの統一を自動で整える

## ディレクトリ構成図
```
janken_Game/
├── index.html      
├── style.css       
├── app.js           
└── README.md        
```

## 各ステップの概要
- 勝敗結果に応じて文字色がネオン風に変化する。(勝ち・あいこ・負け)  
- チートモードをONにすると、CPUが必ずプレイヤーに負ける手を選び、アニメーションで背景が変化する。

