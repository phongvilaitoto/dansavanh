const LOCALE_INDEX: Record<string, number> = { en: 0, th: 1, cn: 2 }

const STATIC_FALLBACKS: Record<string, Record<string, string>> = {
  en: {
    'near By': 'Near By',
    nearBy: 'Near By',
    'tour Package': 'Tour Package',
    tourPackage: 'Tour Package',
    tourPackageTitle: 'Tour Packages',
    tourPackageSubTitle: 'Explore our curated tour experiences',
    investment: 'Investment Project',
    home: 'Home',
    casino: 'Casino',
    hotels: 'Hotels',
    experience: 'Experience',
    events: 'Events',
    offer: 'Offers',
    contact: 'Contact',
    more: 'More',
    gallery: 'Gallery',
    newsTitle: 'News',
    careerTitle: 'Careers',
    ourHotels: 'Our Hotels',
    discoverMore: 'Discover More',
    viewHotelsButton: 'View Hotels',
    viewHotelButton: 'View Hotel',
    viewNews: 'View All News',
    stepInTheWorld: 'Step into a world of luxury',
    facilities: 'Facilities',
    contactTitle: 'Contact Us',
    contactSubTitle: 'We are here to help',
    dLocation: 'Our Location',
    gettingHere: 'Getting Here',
    clickOnMarker: 'Click on a marker for details',
    contactList1: 'From Vientiane: Take Route 13 North toward Thalat (~90 km)',
    contactList2: 'From Vang Vieng: Drive south on Route 13 (~60 km)',
    contactList3: 'Shuttle service available from Vientiane city center',
    contactList4: 'GPS: 18.6890° N, 102.5647° E',
    dActivities: 'Activities',
    fromSport: 'From sport to relaxation',
    sportAndActivities: 'Sport & Activities',
    tonsOfActivities: 'Tons of activities await',
    eventTitle: 'Events',
    eventComing: 'Upcoming Events',
    eventPast: 'Past Events',
    offerTitle: 'Special Offers',
    offerSubTitle: 'Exclusive deals for you',
  },
  th: {
    'near By': 'สถานที่ใกล้เคียง',
    nearBy: 'สถานที่ใกล้เคียง',
    'tour Package': 'แพ็คเกจทัวร์',
    tourPackage: 'แพ็คเกจทัวร์',
    investment: 'โครงการลงทุน',
    contactList1: 'จากเวียงจันทน์: เดินทางตามถนนหมายเลข 13 เหนือ ระยะทางประมาณ 90 กม.',
    contactList2: 'จากวังเวียง: เดินทางทางใต้ตามถนนหมายเลข 13 ระยะทางประมาณ 60 กม.',
    contactList3: 'มีรถรับส่งจากใจกลางเวียงจันทน์',
    contactList4: 'พิกัด GPS: 18.6890° N, 102.5647° E',
  },
  cn: {
    'near By': '周边景点',
    nearBy: '周边景点',
    'tour Package': '旅游套餐',
    tourPackage: '旅游套餐',
    investment: '投资项目',
    contactList1: '从万象出发：沿13号国道北行，约90公里',
    contactList2: '从万荣出发：沿13号国道南行，约60公里',
    contactList3: '提供万象市区接送服务',
    contactList4: 'GPS坐标：18.6890° N, 102.5647° E',
  },
}

export async function loadLocaleMessages(locale: string) {
  const config = useRuntimeConfig()
  const idx = LOCALE_INDEX[locale] ?? 0
  const fallbacks = { ...STATIC_FALLBACKS.en, ...STATIC_FALLBACKS[locale] }

  try {
    const { data } = await useFetch(`${config.public.apiBase}/getDLang`, {
      key: `d-lang-${locale}`,
      default: () => ({ dLang: null }),
    })
    const dLang = (data.value as any)?.dLang
    if (!dLang) return fallbacks

    const messages: Record<string, string> = { ...fallbacks }
    for (const field in dLang) {
      messages[field] = dLang[field]?.[idx] ?? dLang[field]?.[0] ?? fallbacks[field] ?? field
    }
    return messages
  } catch {
    return fallbacks
  }
}
