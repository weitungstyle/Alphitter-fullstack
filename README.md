# # Simple Twitter

Simple Twitter | Individual Improvement Version

### Live Demo

[Live demo](https://xw093krds7.execute-api.ap-northeast-1.amazonaws.com/)

![首頁畫面]()

### 功能描述

- 註冊及登入功能

  - 使用者需登入才能進入網站主頁，若嘗試登入5次失敗，該使用者會暫停登入功能5分鐘
  - 註冊身分，以帳號、名稱、Email、密碼(密碼以 bcrypt 加密)
  - 註冊時，帳號 和 email 不能與其他人重複，否則會跳出錯誤提示
  - 使用者未註冊試圖登入時，會有錯誤提示
  - 使用者能編輯自己的 帳號、名稱、Email、密碼
  - 編輯時，帳號 和 email 不能與其他人重複，否則會跳出錯誤提示

- 使用者 ( User )

  - 可以新增個人貼文
  - 可以瀏覽所有推文，排序 新 → 舊
  - 點擊貼文時，可以查看該則貼文與回覆
  - 在貼文頁，點擊 🗨 可以回覆別人的推文
  - 點擊 ❤ 可以 like 貼文/unlike 貼文
  - 可以追隨/取消追隨其他使用者
  - 可以編輯自己的名稱、自我介紹、大頭照及個人背景
  - 可以在首頁的右側欄，瀏覽 Top 10 的使用者推薦名單

- 管理者 ( Admin )
  - 可以瀏覽所有的使用者清單
  - 可以瀏覽所有推文清單或刪除推文

### 測試帳號

1. User (提供使用者: user1~user10 )

   > account : user1
   > Password: 12345678

2. Admin
   > Account : root
   > Password: 12345678
