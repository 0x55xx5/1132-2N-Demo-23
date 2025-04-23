# (40%) 113-2 Web 程式設計一 期中 mid2 -- 開放考試

##### 2025-04-09, at E201, from 20:50~22:00

#### Note:

1. mid1 是斷網考試，mid2 是開放網路考試，如果 mid1 題目已經完成，可以開始做 mid2 題目不須網路的部分
2. 請不要發揮同學愛，作弊雙方除了本次考試 0 分外，平常分數另扣 20 分，情節嚴重者會送校。
3. iClass 上請繳交 md_xx.pdf, md_mid1.zip(md 壓縮檔), mid1_xx.zip (code 壓縮檔)，壓縮前請將 node_modules 全部砍掉
4. 請直接將答案寫在 md_mid1_xx/md_xx.md 上，老師出題及圖片放在 md_htc.pdf 上，請依照老師所給的圖片來實作並標註
5. 跟期中考相關的檔案及目錄名稱有 xx 時，必須要改成學號後 2 碼，沒有修改時，會視違犯情況扣分。
6. 每一張圖片要有機房左側背景，圖片上要有你的學號(或後兩碼)，圖片標註要跟老師所標註的類似。違者會依情節扣分。
7. 請自評分數，將每一題的 ? 填入分數，沒有填者，不會批改，以 0 分計算。

##### Your (Name, ID): (?, ?)

Mid1: 60% 斷網

- P1 (20%): ? 分
- P2 (15%): ? 分
- P3 (15%): ? 分
- P4 (10%): ? 分

Mid2: 40% 開放網路

- P5 (10%): ? 分
- P6 (10%): ? 分
- P7 (20%): ? 分

##### 總分: ? 分

## Mid2

#### (10%) P5: 顯示 Github and Vercel for quiz1

##### => 顯示 Github 上課 demo URL

[Github Demo URL](https://github.com/htchung/1132-2N-demo-xx)

##### => 顯示 Github URL and Vercel URL for midterm

[Github Midterm URL](https://github.com/htchung/1132_2N_midterm_xx)

[Vercel Midterm URL](https://1132-2-n-midterm-xx.vercel.app/)

![p5_1_xx.png](p5_1_xx.png)

![p5_1_1_xx.png](p5_1_1_xx.png)

##### => 顯示 Vercel URL for demo/w02 tailwind demo

![p5_2_xx.png](p5_2_xx.png)

#### Your Answer

##### => 顯示 Github demo URL

[Github Demo URL](https://github.com/htchung/1132-2N-demo-xx)

##### => 顯示 Github midterm URL and Vercel URL

[Github Midterm URL](https://github.com/htchung/1132_2N_midterm_xx)

[Vercel Midterm URL](https://1132-2-n-midterm-xx.vercel.app/)

![p5_3_xx.png](p5_3_xx.png)

##### => Github Midterm URL 分享給老師及助教

![p5_4_xx.png](p5_4_xx.png)

##### => 顯示 Vercel URL for demo/w02 tailwind demo

![p5_5_xx.png](p5_5_xx.png)

---

#### (10%) P6: 顯示 Github and Vercel for mid1

##### => Vercel URL and page for P1 (for root route)

![p6_1_xx.png](p6_1_xx.png)

##### => 顯示 Vercel URL and page for P2 (for p1_xx)

![p6_2_xx.png](p6_2_xx.png)

#### Your Answer

##### => Vercel URL and page for P1 (for root route)

![p6_1_xx.png](p6_1_xx.png)

##### => 顯示 Vercel URL and page for P2 (for p1_xx)

![p6_2_xx.png](p6_2_xx.png)

---

### (20%) P7: 實作 p4_xx，將 tours 資訊，透過 SQL 之 create table, insert 指令，將 tour info 放入 Supabase 中。規則如下：

由你學號後兩碼除以 5 取餘數，取得兩個 tours info，然後自行添加一筆跟台灣有關的 tour (id=11)，圖片及文字，請自行從網路上截取，總共 3 筆 tours 放入 Supabase mid_tour_xx 資料表中。

用 insert 指令加入到 Supabase 時，字串中出現 let's 請改成 let us 或是直接將 "'" 這個特殊符號去除，以免出現錯誤後無法繼續。

圖片要有兩個欄位紀錄，img 紀錄 local 圖片路徑，remote_img 紀錄遠端圖片位置，遠端圖片要放在 Supabase storage 中，路徑請自訂。

如果沒有透過 Supabase storage 抓取圖片者，而是直接從 local 路徑取得圖片者，會扣 4 分。

##### => 會用到的檔案目錄

![p7_1_xx.png](p7_1_xx.png)

##### => 用 SQL 指令加入 Supabase mid_tour_xx 3 筆資料

本題，老師用的學號是 89，因此下圖 id 出現 8, 9，還有一個 id=11 要自行去抓取跟台灣有關的旅遊圖片及文字。

![p7_2_xx.png](p7_2_xx.png)

##### => terminal 可以顯示從 Server 抓到的資料

請用 JSON.stringfy() 來顯示，如下圖

![p7_3_2_xx.png](p7_3_2_xx.png)

#### Your Answer

##### => 會用到的檔案目錄

![p7_4_xx.png](p7_4_xx.png)

##### => 用 SQL 指令加入 Supabase mid_tour_xx 3 筆資料

![p7_5_xx.png](p7_5_xx.png)

##### => Supabase SQL 指令

![p7_6_xx.png](p7_6_xx.png)

##### => Vercel Chrome 顯示

##### => Chrome 顯示 local & Vercel

=> local 顯示
![p7_7_1_xx.png](p7_7_1_xx.png)

=> Vercel 顯示
![p7_7_2_xx.png](p7_7_2_xx.png)

##### => p4_xx/page.js 顯示

![p7_8_xx.png](p7_8_xx.png)

##### => db-tour.js 顯示可以取得 Supabase mid_tour_xx 資料，在 terminal console 中顯示 (用 JSON.stringfy()顯示 t 文字)

![p7_9_xx.png](p7_9_xx.png)

##### => TourList_xx.js 顯示

![p7_10_xx.png](p7_10_xx.png)

##### => Tour_xx.js 顯示

![p7_11_xx.png](p7_11_xx.png)
