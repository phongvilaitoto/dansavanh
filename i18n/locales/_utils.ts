const LOCALE_INDEX: Record<string, number> = { en: 0, th: 1, cn: 2 }

const STATIC_FALLBACKS: Record<string, Record<string, string>> = {
  en: {
    'near By': 'Near By',
    'tour Package': 'Tour Package',
    investment: 'Investment',
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
    'tour Package': 'แพ็คเกจทัวร์',
    investment: 'โครงการลงทุน',
  },
  cn: {
    'near By': '周边景点',
    'tour Package': '旅游套餐',
    investment: '投资项目',
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
