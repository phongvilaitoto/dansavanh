
import trans from "./translate"

const object: any = {
  en: {},
  th: {},
  cn: {}
}
const list: any = trans
for(let i in list) {
  object.en[i] = list[i][0]
  
  object.th[i] = list[i][1]
  object.cn[i] = list[i][2]
}

// locales: [
//   {
//     code: 'en',
//     file: 'en.ts'
//   }
// ],
// lazy: true,
// langDir: 'lang',
// locale: 'en',

export default defineI18nConfig(() => ({


  
    legacy: false,
    locale: 'en',
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
  }))