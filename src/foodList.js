function returnFoodList() {
    let foodList = {
        0: {
      num: 0,
      name: 'SUSHI',
      comment: '日本が誇る和食。それがSUSHI。',
      img:require('./assets/food/sushi.png'),
      vote: 0,
      listFlag: false,
    },
    1: {
      num: 1,
      name: '魚介・海鮮',
      comment: 'みんな大好き。外国人も。',
      img:require('./assets/food/ebi.png'),
      vote: 0,
      listFlag: false
    },
    2: {
      num: 2,
      name: 'おでん',
      comment: '具の総選挙会場はこちらですか？',
      img:require('./assets/food/oden.png'),
      vote: 0,
      listFlag: false
    },
    3: {
      num: 3,
      name: '定食',
      comment: '安定の満足感！栄養バランスも完璧！',
      img:require('./assets/food/bento.png'),
      vote: 0,
      listFlag: false
    },
    4: {
      num: 4,
      name: 'そば',
      comment: 'さっぱりいきたい！',
      img:require('./assets/food/soba.png'),
      vote: 0,
      listFlag: false
    },
    5: {
      num: 5,
      name: 'うどん',
      comment: 'どうしても食べたい日あるよね！',
      img:require('./assets/food/udon.png'),
      vote: 0,
      listFlag: false
    },
    6: {
      num: 6,
      name: 'ラーメン',
      comment: '魂ですすれ！',
      img:require('./assets/food/ramen.png'),
      vote: 0,
      listFlag: false,
    },
    7: {
      num: 7,
      name: '坦々麺',
      comment: '辛さと旨さの絶妙なバランス！',
      img:require('./assets/food/tantan.png'),
      vote: 0,
      listFlag: false
    },
    8: {
      num: 8,
      name: '丼もの',
      comment: 'はやい！やすい！うまい！',
      img: '',
      vote: 0,
      listFlag: false
    },
    9: {
      num: 9,
      name: 'たこ焼き',
      comment: 'おおさかにはうまいもんがいっぱいあるんやでぇ～♪',
      img:require('./assets/food/takoyaki.png'),
      vote: 0,
      listFlag: false
    },
    10: {
      num: 10,
      name: 'お好み焼き',
      comment: '関西人は黙ってお好み焼きや！',
      img:require('./assets/food/okonomi.png'),
      vote: 0,
      listFlag: false
    },
    11: {
      num: 11,
      name: '韓国料理',
      comment: 'マシソヨ！(おいしい！)',
      img: '',
      vote: 0,
      listFlag: false
    },
    12: {
      num: 12,
      name: '中華',
      comment: '強火で油たっぷり！',
      img: '',
      vote: 0,
      listFlag: false
    },
    13: {
      num: 13,
      name: 'イタリアン',
      comment: 'インスタ映え！',
      img: '',
      vote: 0,
      listFlag: false
    },
    14: {
      num: 14,
      name: 'カレー',
      comment: '家カレーもいいけど、プロの味が食べたい！',
      img:require('./assets/food/curry.png'),
      vote: 0,
      listFlag: false
    },
    15: {
      num: 15,
      name: 'ハンバーグ',
      comment: '肉汁たっぷり！',
      img:require('./assets/food/meat_pate.png'),
      vote: 0,
      listFlag: false
    },
    16: {
      num: 16,
      name: 'ハンバーガー',
      comment: 'ポテトとセットでいかが？',
      img:require('./assets/food/burger.png'),
      vote: 0,
      listFlag: false,
    },
    17: {
      num: 17,
      name: 'パエリア',
      comment: '素材のうまみたっぷり！',
      img:require('./assets/food/paellia.png'),
      vote: 0,
      listFlag: false
    },
    18: {
      num: 18,
      name: 'オムライス',
      comment: 'ふわとろ卵にスプーンが止まりません！',
      img:require('./assets/food/omlet.png'),
      vote: 0,
      listFlag: false
    },
    19: {
      num: 19,
      name: 'チーズフォンデュ',
      comment: '女子力アゲアゲ！',
      img:require('./assets/food/fondue.png'),
      vote: 0,
      listFlag: false
    },
    20: {
      num: 20,
      name: '焼肉',
      comment: 'それ俺が育てたやつ！',
      img:require('./assets/food/yakiniku.png'),
      vote: 0,
      listFlag: false
    },
    21: {
      num: 21,
      name: 'ステーキ',
      comment: 'にくっ！',
      img:require('./assets/food/steak.png'),
      vote: 0,
      listFlag: false
    },
    22: {
      num: 22,
      name: '焼き鳥',
      comment: '何本でもいけちゃう！',
      img:require('./assets/food/yakitori.png'),
      vote: 0,
      listFlag: false
    },
    23: {
      num: 23,
      name: '串カツ',
      comment: '二度づけ禁止！',
      img: '',
      vote: 0,
      listFlag: false
    },
    24: {
      num: 24,
      name: 'ローストビーフ丼',
      comment: 'ぜいたく！',
      img:require('./assets/food/roast_beef.png'),
      vote: 0,
      listFlag: false
    },
    25: {
      num: 25,
      name: '鍋',
      comment: '身も心もあったまろう！',
      img: '',
      vote: 0,
      listFlag: false
    },
    26: {
      num: 26,
      name: 'すき焼き',
      comment: 'お前肉ばっか取んなよ！',
      img:require('./assets/food/sukiyaki.png'),
      vote: 0,
      listFlag: false,
    },
    27: {
      num: 27,
      name: 'しゃぶしゃぶ',
      comment: 'しゃぶり時間をみきわめて！',
      img:require('./assets/food/syabu.png'),
      vote: 0,
      listFlag: false
    },
    28: {
      num: 28,
      name: '居酒屋',
      comment: 'お酒と一緒に食事を楽しむ！',
      img:require('./assets/food/izakaya.png'),
      vote: 0,
      listFlag: false
    },
    29: {
      num: 29,
      name: 'とんかつ',
      comment: '外はサックリ、中はジューシー！',
      img:require('./assets/food/pig.png'),
      vote: 0,
      listFlag: false
    }
  }
  return foodList;
}

export default { returnFoodList }