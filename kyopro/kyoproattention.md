# 競プロ気をつけること個人的メモ
## C++の学習
### 過去に登場したC++の機能
- < set >
    - set
    - multiset
        - eraceは該当する要素をすべて消す
        
    |コンテナ|関数|計算量|備考|
    |:---:|:---:|:---:|:---:|
    |(multi)set|insert|条件付で(?)対数時間以下|ABC253C(multiset)|
    |(multi)set|erace|要素指定ではlog(size)|ABC253C(multiset)|
    |(multi)set|count|(log(size)+count)に比例|ABC253C(multiset, erace&insertを繰り返すとTLE)|
    |(multi)set|find|log(size)|ABC251C(set), ABC253C(multiset)|
    |||||
### 調べること
- 計算優先度
## 発想/構想
- 制約の厳しいところに目をつける
- 出力候補配列を設定して機械的に問題を読み換えられるようにする
- 探索の仮定は「変数独立の枠組み」作りに使える
## コーディング
- 計算は宣言の後
- 制約に表記された値をそのまま使わない
    - 気づき方
        - 配列とかでやるとREとかになる
    - 書き方
        - 最大値を考える
        - 考える前にめっちゃでかい値を置く
- ?番目は1-indexed 配列は0-indexed
- 変数の型(今のところ杞憂)

$$2.1\times10^9\lt\mathrm{max(int)}\lt2.2\times10^9$$
