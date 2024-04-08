const trans = {
  //Navbar
  home: ["Home", "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01", "\u4E3B\u9875"],
  casino: ["Casino", "\u0E04\u0E32\u0E2A\u0E34\u0E42\u0E19", "\u5A31\u4E50\u5385"],
  hotels: ["Hotels", "\u0E42\u0E23\u0E07\u0E41\u0E23\u0E21", "\u9152\u5E97"],
  hotelTab1: ["DANSAVANH RESORT & CASINO", "\u0E41\u0E14\u0E19\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C \u0E23\u0E35\u0E2A\u0E2D\u0E23\u0E4C\u0E17\u0E41\u0E25\u0E30\u0E04\u0E32\u0E2A\u0E34\u0E42\u0E19", "\u5929\u5802\u5EA6\u5047\u6751\u53CA\u8D4C\u573A"],
  hotelTab2: ["DANSAVANH GOLF & COUNTRY CLUB", "\u0E41\u0E14\u0E19\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C \u0E01\u0E2D\u0E25\u0E4C\u0E1F \u0E41\u0E2D\u0E19\u0E14\u0E4C \u0E04\u0E31\u0E19\u0E17\u0E23\u0E35\u0E48 \u0E04\u0E25\u0E31\u0E1A", "\u4E39\u8428\u4E07\u9AD8\u5C14\u592B\u4E61\u6751\u4FF1\u4E50\u90E8"],
  hotelTab3: ["DANSAVANH VIENTIANE HOTEL", "\u0E41\u0E14\u0E19\u0E2A\u0E27\u0E23\u0E23\u0E04\u0E4C \u0E42\u0E23\u0E07\u0E41\u0E23\u0E21\u0E40\u0E27\u0E35\u0E22\u0E07\u0E08\u0E31\u0E19\u0E17\u0E19\u0E4C", "\u4E07\u8C61\u5929\u5802\u9152\u5E97"],
  experience: ["Experience", "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C", "\u6D3B\u52A8"],
  events: ["Events", "\u0E40\u0E2B\u0E15\u0E38\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19", "\u6D3B\u52A8"],
  offer: ["Offer", "\u0E41\u0E1E\u0E04\u0E40\u0E01\u0E08", "\u4F18\u60E0"],
  more: ["More", "\u0E2D\u0E37\u0E48\u0E19\u0E46", "\u66F4\u591A"],
  contact: ["Contact", "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32", "\u8054\u7CFB"],
  //Hotel
  ourHotels: ["OUR HOTELS", "\u0E42\u0E23\u0E07\u0E41\u0E23\u0E21\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32", "\u6211\u4EEC\u7684\u9152\u5E97"],
  stepInTheWorld: ["STEP IN THE WORLD OF DANSAVANH", "\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E43\u0E19\u0E42\u0E25\u0E01\u0E02\u0E2D\u0E07 DANSAVANH", "\u6B65\u5165\u4E39\u8428\u65FA\u7684\u4E16\u754C"],
  // Utils 
  discoverMore: ["DISCOVER MORE", "\u0E04\u0E49\u0E19\u0E1E\u0E1A\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21", "\u53D1\u73B0\u66F4\u591A"],
  viewNews: ["VIEW MORE NEWS", "\u0E14\u0E39\u0E02\u0E48\u0E32\u0E27\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14", "\u67E5\u770B\u6240\u6709\u65B0\u805E"],
  viewHotelButton: ["VIEW HOTEL", "\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21\u0E0A\u0E21\u0E42\u0E23\u0E07\u0E41\u0E23\u0E21", "\u9884\u89C8\u9152\u5E97"],
  viewHotelsButton: ["VIEW HOTELS", "\u0E40\u0E22\u0E35\u0E48\u0E22\u0E21\u0E0A\u0E21\u0E42\u0E23\u0E07\u0E41\u0E23\u0E21", "\u9884\u89C8\u9152\u5E97"],
  facilities: ["FACILITIES", "\u0E2A\u0E34\u0E48\u0E07\u0E2D\u0E33\u0E19\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E14\u0E27\u0E01", "\u8BBE\u65BD"],
  //Casino Page
  ourResortsCasino: [
    "OUR RESORTS CASINO",
    "\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E1A\u0E31\u0E07\u0E40\u0E17\u0E34\u0E07\u0E02\u0E2D\u0E07\u0E23\u0E35\u0E2A\u0E2D\u0E23\u0E4C\u0E17",
    "\u5EA6\u5047\u533A\u5A31\u4E50\u5385"
  ],
  aMagicPlace: [
    "A MAGIC PLACE",
    "\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E21\u0E2B\u0E31\u0E28\u0E08\u0E23\u0E23\u0E22\u0E4C\u0E41\u0E2B\u0E48\u0E07\u0E2B\u0E19\u0E36\u0E48\u0E07",
    "\u4E00\u4E2A\u795E\u5947\u7684\u5730\u65B9"
  ],
  casinoTitle1: ["BLACKJACK 21", "\u0E41\u0E1A\u0E25\u0E47\u0E04\u0E41\u0E08\u0E4A\u0E04 21 \u0E41\u0E15\u0E49\u0E21", "21\u70B9"],
  casinoCaption1: [
    "The aim of Blackjack is to dealt a hand that has a value greater than that of the Dealer without exceeding 21. Blackjack is a game of chance and skill which player may improve their chance by betting strategies.",
    "\u0E41\u0E1A\u0E25\u0E47\u0E04\u0E41\u0E08\u0E47\u0E04 \u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1C\u0E39\u0E49\u0E0A\u0E19\u0E30\u0E17\u0E35\u0E21\u0E35\u0E14\u0E41\u0E15\u0E49\u0E21\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14 \u0E41\u0E15\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E44\u0E21\u0E49\u0E40\u0E01\u0E34\u0E19 21 \u0E41\u0E15\u0E49\u0E21 \u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E1D\u0E35\u0E21\u0E37\u0E2D \u0E41\u0E25\u0E30\u0E17\u0E31\u0E01\u0E29\u0E30 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E1C\u0E39\u0E49\u0E0A\u0E19\u0E30",
    "\u73A9\u5BB6\u7684\u7684\u76EE\u7684\u5C31\u662F\u4E89\u53D6\u628A\u624B\u4E0A\u7684\u70B9\u6570\u80DC\u8FC7\u5E84\u5BB6\u65E2\u4E0D\u8D85\u8FC721\u70B9\u3002\u8FD9\u6E38\u620F\u9700\u8981\u7684\u662F\u673A\u4F1A\u4E0E\u6280\u672F\u7684\u7ED3\u5408\u624D\u80FD\u63D0\u9AD8\u80DC\u7B97"
  ],
  casinoTitle2: ["ROULETTE", "\u0E23\u0E39\u0E40\u0E25\u0E47\u0E15", "\u8F6E\u76D8"],
  casinoCaption2: [
    "The game is about guessing what number and sector the ball will land in a spinning wheel of 36 numbers. If you have that sharp instinct or lady luck shines on you, this game gives you the fastest returns.",
    "\u0E23\u0E39\u0E40\u0E25\u0E47\u0E15 36 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E08\u0E30\u0E43\u0E2B\u0E49\u0E25\u0E39\u0E01\u0E27\u0E34\u0E48\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E27\u0E48\u0E32\u0E04\u0E38\u0E13\u0E08\u0E30\u0E17\u0E32\u0E22\u0E16\u0E39\u0E01\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E2B\u0E32\u0E01\u0E04\u0E38\u0E13\u0E04\u0E37\u0E2D\u0E40\u0E0B\u0E35\u0E22\u0E19\u0E17\u0E32\u0E22\u0E08\u0E30\u0E44\u0E14\u0E49\u0E1C\u0E25\u0E15\u0E2D\u0E1A\u0E41\u0E17\u0E19\u0E40\u0E23\u0E47\u0E27\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E08\u0E32\u0E01\u0E40\u0E01\u0E21\u0E2A\u0E4C \u0E23\u0E39\u0E40\u0E25\u0E47\u0E15",
    "\u572836 \u4E2A\u53F7\u7801\u8F6E\u76D8\u4E2D\u731C\u6D4B\u7403\u4F1A\u505C\u843D\u5728\u90A3\u4E2A\u6570\u5B57\u6216\u533A\u57DF\u3002\u82E5\u4F60\u662F\u8D22\u661F\u9AD8\u7167\u6216\u662F\u6709\u7279\u522B\u51C6\u786E\u7684\u76F4\u89C9\uFF0C\u8FD9\u6E38\u620F\u80FD\u8BA9\u4F60\u6700\u5FEB\u5F97\u5230\u6700\u9AD8\u56DE\u62A5\u3002"
  ],
  casinoTitle3: ["BACCARAT", "\u0E1A\u0E32\u0E04\u0E32\u0E23\u0E48\u0E32", "\u767E\u5BB6\u4E50"],
  casinoCaption3: [
    "We provide both commissioned and non-commissioned baccarat. The simplicity of the game and thrill make it the most popular game worldwide. Just bet and wait for the outcome, Yeah!",
    "\u0E1A\u0E32\u0E04\u0E32\u0E23\u0E48\u0E32 \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E17\u0E35\u0E48\u0E21\u0E31\u0E19\u0E41\u0E25\u0E30\u0E2A\u0E38\u0E14\u0E40\u0E23\u0E49\u0E32\u0E43\u0E08 \u0E40\u0E25\u0E48\u0E19\u0E07\u0E48\u0E32\u0E22 \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E19\u0E34\u0E22\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E32\u0E01\u0E21\u0E32\u0E01 \u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48\u0E25\u0E07\u0E40\u0E14\u0E34\u0E21\u0E1E\u0E31\u0E19\u0E41\u0E25\u0E49\u0E27\u0E23\u0E2D\u0E1C\u0E25\u0E15\u0E2D\u0E1A\u0E41\u0E17\u0E19\u0E41\u0E04\u0E48\u0E19\u0E31\u0E49\u0E19\u0E40\u0E2D\u0E07",
    "\u6211\u4EEC\u63D0\u4F9B\u4F63\u91D1\u5F0F\u4E0E\u65E0\u4F63\u91D1\u5F0F\u767E\u5BB6\u4E50\u6E38\u620F\u3002\u8FD9\u6E38\u620F\u65E2\u7B80\u5355\u53C8\u523A\u6FC0\u5168\u7403\u5E7F\u53D7\u6B22\u8FCE\u3002 \u60A8\u53EA\u9700\u4E0B\u4E2A\u6CE8\u7B49\u5F85\u7ED3\u679C\u4FBF\u53EF\u3002"
  ],
  casinoTitle4: ["DRAGON TIGER", "\u0E14\u0E23\u0E32\u0E01\u0E49\u0E2D\u0E19 \u0E44\u0E17\u0E40\u0E01\u0E2D\u0E23\u0E4C", "\u9F99\u864E\u6597"],
  casinoCaption4: [
    "Considered as one of the most favourite games in the region. Bet on TIGER or DRAGON, whichever you think that will win. Nevertheless, try TIE that gives the highest return.",
    "\u0E14\u0E23\u0E32\u0E01\u0E49\u0E2D\u0E19 \u0E44\u0E17\u0E40\u0E01\u0E2D\u0E23\u0E4C \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E2D\u0E35\u0E01\u0E40\u0E01\u0E21\u0E2A\u0E4C\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E19\u0E34\u0E22\u0E21 \u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48\u0E40\u0E14\u0E34\u0E21\u0E1E\u0E31\u0E19 \u0E14\u0E23\u0E32\u0E01\u0E49\u0E2D\u0E19 \u0E2B\u0E23\u0E37\u0E2D \u0E44\u0E17\u0E40\u0E01\u0E2D\u0E23\u0E4C \u0E2B\u0E32\u0E01\u0E40\u0E14\u0E34\u0E21\u0E1E\u0E31\u0E19\u0E40\u0E2A\u0E21\u0E2D\u0E01\u0E48\u0E2D\u0E08\u0E30\u0E44\u0E14\u0E49\u0E1C\u0E25\u0E15\u0E2D\u0E1A\u0E41\u0E17\u0E19\u0E17\u0E35\u0E48\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 \u0E08\u0E36\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E48\u0E19\u0E34\u0E22\u0E21\u0E02\u0E2D\u0E07\u0E04\u0E19\u0E43\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48",
    "\u5728\u8FD9\u533A\u57DF\u7B97\u662F\u88AB\u53D7\u6B22\u8FCE\u7684\u6E38\u620F\u4E4B\u4E00\u3002\u51ED\u611F\u89C9\u4E0B\u6CE8\u201C\u9F99\u201C\u6216\u2022\u201D\u864E\u201D \u4FBF\u53EF\u3002\u5F53\u7136\u548C\u5C40\u7684\u8D54\u7387\u751A\u9AD8\uFF0C\u4E4B\u6240\u4EE5\u6210\u4E86\u5F53\u5730\u4EBA\u7684\u559C\u7231\u3002"
  ],
  casinoTitle5: ["SLOTS", "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E25\u0E48\u0E19\u0E2A\u0E25\u0E47\u0E2D\u0E15", "\u6E38\u620F\u673A"],
  casinoCaption5: [
    "We offer both new and traditional gaming machines with progressive win and massive jackpots in addition to Duo Fu Duo Cai and Fa Fa Fa. Our casino also consists of popular electronic Roulette and multiple live Baccarat games on electronic betting stations that unlock a whole new level of gaming excitement.",
    "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E25\u0E48\u0E19\u0E2A\u0E25\u0E47\u0E2D\u0E15 \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E25\u0E48\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22 \u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22 \u0E2A\u0E27\u0E22\u0E07\u0E32\u0E21 \u0E41\u0E25\u0E30\u0E22\u0E31\u0E07\u0E21\u0E35\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E21\u0E32\u0E01\u0E21\u0E32\u0E22 \u0E08\u0E36\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E35\u0E48\u0E19\u0E34\u0E22\u0E21\u0E21\u0E32\u0E01\u0E43\u0E19\u0E2A\u0E21\u0E31\u0E22\u0E19\u0E35\u0E49",
    "\u6211\u4EEC\u62E5\u6709\u65B0\u578B\u4F20\u7EDF\u7D2F\u8FDB\u5F0F\u7535\u5B50\u6E38\u620F\u673A\u9644\u52A0\u548C\u4E30\u539A\u5DE8\u5956\u3002\u5F53\u7136\u5C11\u4E0D\u4E86\u65F6\u5C1A\u6700\u53D7\u6B22\u8FCE\u7684\u201C\u591A\u798F\u591A\u8D22\u201D\u53CA\u201C\u53D1\u53D1\u53D1\u201D\u7535\u5B50\u6E38\u620F\u673A\u3002\u6211\u4EEC\u4E5F\u6709\u7535\u5B50\u8F6E\u76D8\u8BBE\u5907\u53CA\u591A\u753B\u9762\u767E\u5BB6\u4E50\u7535\u5B50\u6295\u6CE8\u7AD9\uFF0C\u5F00\u542F\u53E6\u4E00\u9AD8\u6F6E\u8FED\u8D77\u7684\u6E38\u620F\u4F53\u9A8C\u3002"
  ],
  // Experience Page
  dActivities: [`DANSAVANH'S ACTIVITIES`, "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21 DANSAVANH", "\u4E39\u8428\u65FA\u6D3B\u52A8"],
  sportAndActivities: ["SPORTS & ACTIVITIES", "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E01\u0E35\u0E2C\u0E32", "\u4E50\u8DA3\u65E0\u7A77"],
  tonsOfActivities: ["TONS OF ACTIVITIES", "\u0E15\u0E31\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21", "\u4F53\u9A8C\u7BC7"],
  fromSport: ["FROM SPORTS TO SIGHTSEEING, WE HAVE IT ALL", "\u0E08\u0E32\u0E01\u0E01\u0E35\u0E2C\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E21\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E32\u0E21\u0E35\u0E17\u0E38\u0E01\u0E2A\u0E34\u0E48\u0E07", "\u9AD4\u80B2\u89C0\u5149\uFF0C\u64C1\u6709\u4E00\u5207"],
  // Event Page
  eventTitle: ["EVENTS", "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21", "\u6D3B\u52D5"],
  eventComing: ["COMING EVENTS", "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E21\u0E32", "\u6D3B\u52D5\u9810\u544A"],
  eventPast: ["PAST EVENTS", "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E21\u0E32", "\u8FC7\u53BB\u7684\u4E8B\u4EF6"],
  eventGallery: ["GALLERY", "\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21\u0E23\u0E39\u0E1B", "\u50CF\u5ECA"],
  // Offer Page
  offerTitle: ["OUR OFFERS", "\u0E02\u0E49\u0E2D\u0E40\u0E2A\u0E19\u0E2D\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32", "\u4F18\u60E0\u5957\u9910"],
  offerSubTitle: [
    "Interested in some activities? Have a look at ours packages.",
    "\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E19\u0E43\u0E08\u0E43\u0E19\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07? \u0E21\u0E35\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E17\u0E35\u0E48\u0E41\u0E1E\u0E04\u0E40\u0E01\u0E08\u0E2D\u0E2D\u0E01",
    "\u5343\u8F7D\u96BE\u9022\uFF01\u4E0D\u53EF\u9519\u8FC7\uFF01"
  ],
  // News Page
  newsTitle: ["DANSAVANH NEWS", "\u0E02\u0E48\u0E32\u0E27", "\u4E39\u8428\u65FA\u65B0\u805E"],
  // Career Page
  careerTitle: ["CAREER", "\u0E41\u0E14\u0E19\u0E2A\u0E30\u0E2B\u0E27\u0E31\u0E19\u0E01\u0E31\u0E1A\u0E2D\u0E32\u0E0A\u0E35\u0E1E", "\u4E8B\u696D\u4E0E\u524D\u7A0B"],
  careerSubTitle: ["WORK AT DANSAVANH", "\u0E41\u0E14\u0E19\u0E2A\u0E30\u0E2B\u0E27\u0E31\u0E19", "\u4E0E\u4E39\u8428\u65FA\u521B\u9020"],
  dCareer: ["DANSAVANH CAREER", "\u0E41\u0E14\u0E19\u0E2A\u0E30\u0E2B\u0E27\u0E31\u0E19\u0E01\u0E31\u0E1A\u0E2D\u0E32\u0E0A\u0E35\u0E1E", "\u8001\u631D\u804C\u4E1A\u9996\u9009"],
  bestPlacesToWork: ["ONE OF THE BEST PLACES TO WORK IN LAOS", "\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E17\u0E35\u0E48\u0E17\u0E35\u0E48\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19\u0E43\u0E19\u0E25\u0E32\u0E27", "\u8001\u631D\u804C\u4E1A\u9996\u9009\u8001\u631D\u804C\u4E1A\u9996\u9009"],
  availableJobs: ["AVAILABLE JOBS", "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E27\u0E48\u0E32\u0E07", "\u804C\u4F4D"],
  // Contact Page
  contactTitle: ["CONTACT", "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32", "\u8054\u7CFB\u8D28\u8BE2"],
  contactSubTitle: ["Get in touch for a booking or a greeting", "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E2D\u0E1A\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E48\u0E21", "\u8054\u7CFB\u9884\u8BA2\u6216\u95EE\u5019"],
  clickOnMarker: ["CLICK ON MARKER FOR NAVIGATION", "\u0E04\u0E25\u0E34\u0E01\u0E25\u0E39\u0E01\u0E28\u0E23 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E33\u0E17\u0E32\u0E07", "\u5BFC\u822A\u6307\u5F15"],
  dLocation: ["DANSAVANH LOCATION", "\u0E04\u0E25\u0E34\u0E01\u0E25\u0E39\u0E01\u0E28\u0E23 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E33\u0E17\u0E32\u0E07", "\u4E39\u8428\u65FA\u6240\u5728\u5904"],
  gettingHere: ["GETTING HERE", "\u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07\u0E21\u0E32\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48", "\u5230\u8FBE\u8FD9\u91CC"],
  contactList1: ["Wattay Airport \u2013 Look out for Dansavanh Meet & Greet counter at the arrival hall.", "", ""],
  contactList2: ["Lao-Thai immigration at Tanahleng - Daily departure at 7:30 am, 13:30 pm and 19:00 pm", "", ""],
  contactList3: ["ansavanh Vientiane Hotel \u2013 Daily departure starting from 6:30 am till 12:30 am at 2 hours interval", "", ""],
  contactList4: ["A private limousine can be arranged via VIP hotline", "", ""],
  shuttleBus: ["SHUTTLE BUS", "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E23\u0E16\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E17\u0E32\u0E07", "\u7EBF\u8DEF\u8F66"],
  tel: ["TELEPHONE", "\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17", "\u7535\u8BDD"],
  telInfo: ["For instant info", "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E2D\u0E1A\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32\u0E1C\u0E48\u0E32\u0E19\u0E17\u0E32\u0E07\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48", "\u53CA\u65F6\u8BE2\u95EE"],
  tel1: ["Dansavanh Vientiane Hotel", "\u0E42\u0E23\u0E07\u0E41\u0E23\u0E21\u0E40\u0E27\u0E35\u0E22\u0E07\u0E08\u0E31\u0E19\u0E17\u0E19\u0E4C", "\u4E39\u8428\u65FA\u4E07\u8C61\u9152\u5E97"],
  tel2: ["Dansavanh Resort & Casino", "\u0E19\u0E49\u0E33\u0E07\u0E36\u0E21\u0E23\u0E35\u0E2A\u0E2D\u0E23\u0E4C\u0E17\u0E41\u0E2D\u0E19\u0E14\u0E4C\u0E04\u0E32\u0E2A\u0E34\u0E42\u0E19", "\u4E39\u8428\u65FA\u65C5\u6E38\u5EA6\u533A\u9152\u5E97"],
  tel3: ["Dansavanh Thai Office", "\u0E41\u0E14\u0E19\u0E2A\u0E30\u0E2B\u0E27\u0E31\u0E19 \u0E2B\u0E19\u0E2D\u0E07\u0E04\u0E32\u0E22\u0E2D\u0E2D\u0E1F\u0E1F\u0E34\u0E28", "\u6CF0\u56FD\u529E\u4E8B\u5904"],
  email: ["E-MAIL", "\u0E1C\u0E48\u0E32\u0E19\u0E17\u0E32\u0E07 EMAIL", "\u7535\u5B50\u90AE\u4EF6"],
  emailInfo: ["If you are on the go and wish to enquire.", "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E2D\u0E1A\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32\u0E1C\u0E48\u0E32\u0E19\u0E17\u0E32\u0E07 Email", "\u968F\u65F6\u8BE2\u95EE"],
  contactForm: ["CONTACT FORM", "\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E40\u0E1E\u0E37\u0E48 \u0E2D\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E41\u0E25\u0E30\u0E2A\u0E2D\u0E1A\u0E16\u0E32\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25", "\u8054\u7CFB\u8868\u683C"],
  contactFormCaption: ["You can still contact us, right here - right now. Use this contact form to send an e-mail. Usually we respond in 1 business day.", "\u0E17\u0E38\u0E01\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48\u0E17\u0E48\u0E32\u0E19\u0E16\u0E32\u0E21\u0E21\u0E32\u0E40\u0E23\u0E32\u0E08\u0E30\u0E15\u0E2D\u0E1A\u0E01\u0E25\u0E31\u0E1A\u0E17\u0E31\u0E19\u0E17\u0E35\u0E20\u0E32\u0E22\u0E43\u0E19\u0E40\u0E27\u0E25\u0E321\u0E27\u0E31\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23", "\u6211\u4EEC\u4F1A\u5728\u4E00\u5929\u5185\u56DE\u590D\u60A8\u7684\u90AE\u4EF6\u3002"],
  formName: ["Name", "\u0E0A\u0E37\u0E48\u0E2D", "\u540D\u5B57"],
  formPhone: ["Phone", "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17", "\u7535\u8BDD"],
  formEmail: ["Email", "\u0E2D\u0E35\u0E40\u0E21\u0E25", "\u90AE\u4EF6\u5730\u5740"],
  formMessage: ["Message", "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21", "\u4FE1\u606F"],
  formSubmit: ["SUBMIT", "\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21", "\u63D0\u4EA4"],
  newsLetter: ["NEWSLETTER", "\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23", "\u7B80\u8BAF\u6D77\u62A5"],
  newsLetterCaption: ["Subscribe to our newsletter and get instant updates to our news and offers.", "\u0E17\u0E48\u0E32\u0E19\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E2D\u0E37\u0E48\u0E19\u0E46\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E23\u0E27\u0E21\u0E44\u0E1B\u0E16\u0E36\u0E07\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E1E\u0E34\u0E40\u0E28\u0E29\u0E2D\u0E37\u0E48\u0E19\u0E46", "\u9884\u5148\u5F97\u5230\u6700\u65B0\u8D44\u8BAF\u4E0E\u4FC3\u9500\uFF01"],
  newsLetterEmail: ["Your E-mail address", "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13", "\u786E\u5B9A"],
  newsLetterSubmit: ["Go", "\u0E04\u0E25\u0E34\u0E01", "\u786E\u5B9A"],
  // Gallery Page
  gallery: ["GALLERY", "\u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35\u0E48", "\u753B\u5ECA"]
  // New Keys Only here
};
const object = {
  en: {},
  th: {},
  cn: {}
};
const list = trans;
for (let i in list) {
  object.en[i] = list[i][0];
  object.th[i] = list[i][1];
  object.cn[i] = list[i][2];
}
const i18n_config = () => ({
  legacy: false,
  locale: "en",
  messages: object
  // messages: {
  //   en: {
  //     //Navbar
  //     home: 'Home',
  //     casino: 'Casino',
  //     hotels: 'Hotels',
  //     hotelTab1: 'DANSAVANH RESORT & CASINO',
  //     hotelTab2: 'DANSAVANH GOLF & COUNTRY CLUB',
  //     hotelTab3: 'DANSAVANH VIENTIANE HOTEL',
  //     experience: 'Experience',
  //     events: 'Events',
  //     offer: 'Offer',
  //     more: 'More',
  //     contact: 'Contact',
  //     //Casino Page
  //     ourResortsCasino: 'OUR RESORTS CASINO',
  //     aMagicPlace: 'A MAGIC PLACE',
  //     casinoTitle1: 'BLACKJACK 21',
  //     casinoCaption1: 'The aim of Blackjack is to dealt a hand that has a value greater than that of the Dealer without exceeding 21. Blackjack is a game of chance and skill which player may improve their chance by betting strategies.',
  //     casinoTitle2: 'ROULETTE',
  //     casinoCaption2: 'The game is about guessing what number and sector the ball will land in a spinning wheel of 36 numbers. If you have that sharp instinct or lady luck shines on you, this game gives you the fastest returns.',
  //     casinoTitle3: 'BACCARAT',
  //     casinoCaption3: 'We provide both commissioned and non-commissioned baccarat. The simplicity of the game and thrill make it the most popular game worldwide. Just bet and wait for the outcome, Yeah!',
  //     casinoTitle4: 'DRAGON TIGER',
  //     casinoCaption4: 'Considered as one of the most favourite games in the region. Bet on TIGER or DRAGON, whichever you think that will win. Nevertheless, try TIE that gives the highest return.',
  //     casinoTitle5: 'SLOTS',
  //     casinoCaption5: 'We offer both new and traditional gaming machines with progressive win and massive jackpots in addition to Duo Fu Duo Cai and Fa Fa Fa. Our casino also consists of popular electronic Roulette and multiple live Baccarat games on electronic betting stations that unlock a whole new level of gaming excitement.',
  //     // Experience Page
  //     dActivities: `DANSAVANH'S ACTIVITIES`,
  //     sportAndActivities: 'SPORTS & ACTIVITIES',
  //     // Event Page
  //     eventTitle: 'EVENTS',
  //     eventComing: 'COMING EVENTS',
  //     evenrtGallery: 'GALLERY',
  //     // Offer Page
  //     offerTitle: 'OUR OFFER',
  //     offerSubTitle: 'Interested in some activities? Have a look at ours packages.',
  //     // Hotel page
  //   },
  //   cn: {
  //     // Navbar
  //     home: '主页',
  //     casino: '娱乐厅',
  //     hotels: '酒店',
  //     hotelTab1: '',
  //     hotelTab2: '',
  //     hotelTab3: '',
  //     experience: '活动',
  //     events: '活动',
  //     offer: '优惠',
  //     more: '更多',
  //     contact: '联系',
  //     // Casino Page
  //     ourResortsCasino: '度假区娱乐厅',
  //     aMagicPlace: '一个神奇的地方',
  //     casinoTitle1: '21点',
  //     casinoCaption1: '玩家的的目的就是争取把手上的点数胜过庄家既不超过21点。这游戏需要的是机会与技术的结合才能提高胜算',
  //     casinoTitle2: '轮盘',
  //     casinoCaption2: '在36 个号码轮盘中猜测球会停落在那个数字或区域。若你是财星高照或是有特别准确的直觉，这游戏能让你最快得到最高回报。',
  //     casinoTitle3: '百家乐',
  //     casinoCaption3: '我们提供佣金式与无佣金式百家乐游戏。这游戏既简单又刺激全球广受欢迎。 您只需下个注等待结果便可。',
  //     casinoTitle4: '龙虎斗',
  //     casinoCaption4: '在这区域算是被受欢迎的游戏之一。凭感觉下注“龙“或•”虎” 便可。当然和局的赔率甚高，之所以成了当地人的喜爱。',
  //     casinoTitle5: '游戏机',
  //     casinoCaption5: '我们拥有新型传统累进式电子游戏机附加和丰厚巨奖。当然少不了时尚最受欢迎的“多福多财”及“发发发”电子游戏机。我们也有电子轮盘设备及多画面百家乐电子投注站，开启另一高潮迭起的游戏体验。',
  //     // Experience Page
  //     dActivities: `丹萨旺活动`,
  //     sportAndActivities: '乐趣无穷',
  //     // Event Page
  //     eventTitle: '活動',
  //     eventComing: '活動預告',
  //     evenrtGallery: '像廊',
  //     // Offer Page
  //     offerTitle: '优惠套餐',
  //     offerSubTitle: '千载难逢！不可错过！'
  //   },
  //   th: {
  //     home: 'หน้าหลัก',
  //     casino: 'คาสิโน',
  //     hotels: 'โรงแรม',
  //     hotelTab1: '',
  //     hotelTab2: '',
  //     hotelTab3: '',
  //     experience: 'ประสบการณ์',
  //     events: 'เหตุการณ์ที่เกิดขึ้น',
  //     offer: 'แพคเกจ',
  //     more: 'อื่นๆ',
  //     contact: 'ติดต่อเรา',
  //     ourResortsCasino: 'แหล่งบังเทิงของรีสอร์ท',
  //     aMagicPlace: 'เป็นสถานที่มหัศจรรย์แห่งหนึ่ง',
  //     casinoTitle1: 'แบล็คแจ๊ค 21 แต้ม',
  //     casinoCaption1: 'แบล็คแจ็ค ต้องการผู้ชนะทีมีดแต้มสูงสุด แต่ต้องไม้เกิน 21 แต้ม ต้องใช้ฝีมือ และทักษะ เพื่อจะเป็นผู้ชนะ',
  //     casinoTitle2: 'รูเล็ต',
  //     casinoCaption2: 'รูเล็ต 36 ตัวเลขที่จะให้ลูกวิ่งเป็นตัวกำหนดว่าคุณจะทายถูกหรือไม่ หากคุณคือเซียนทายจะได้ผลตอบแทนเร็วที่สุดจากเกมส์ รูเล็ต',
  //     casinoTitle3: 'บาคาร่า',
  //     casinoCaption3: 'บาคาร่า เป็นเกมส์ที่มันและสุดเร้าใจ เล่นง่าย ได้รับความนิยมเป็นอย่างมากมาก เพียงแค่ลงเดิมพันแล้วรอผลตอบแทนแค่นั้นเอง',
  //     casinoTitle4: 'ดราก้อน ไทเกอร์',
  //     casinoCaption4: 'ดราก้อน ไทเกอร์ เป็นเกมส์อีกเกมส์หนึ่งที่ได้รับความนิยม เพียงแค่เดิมพัน ดราก้อน หรือ ไทเกอร์ หากเดิมพันเสมอก่อจะได้ผลตอบแทนที่มากกว่า จึงเป็นที่นิยมของคนในพื้นที่',
  //     casinoTitle5: 'เครื่องเล่นสล็อต',
  //     casinoCaption5: 'เครื่องเล่นสล็อต เป็นเครื่องเล่นที่มีความทันสมัย หลากหลาย สวยงาม และยังมีรางวัลมากมาย จึงเป็นที่นิยมมากในสมัยนี้',
  //     //Experince Page
  //     dActivities: `กิจกรรม DANSAVANH`,
  //     sportAndActivities: 'กิจกรรมกีฬา',
  //     // Event Page
  //     eventTitle: 'กิจกรรม',
  //     eventComing: 'กิจกรรมมา',
  //     evenrtGallery: 'อัลบั้มรูป',
  //     // Offer Page
  //     offerTitle: 'ข้อเสนอของเรา',
  //     offerSubTitle: 'ความสนใจในกิจกรรมบางอย่าง? มีลักษณะที่แพคเกจออก'
  //   }
  // }
});

export { i18n_config as default };
//# sourceMappingURL=i18n.config-37-lSPQB.mjs.map
