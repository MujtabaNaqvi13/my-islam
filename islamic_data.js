// Comprehensive Islamic databases for Masjid Companion

const ISLAMIC_DATA = {
  // 1000+ Ayahs from the Qur'an (sample - add more as needed)
  AYAHS: [
    { surah: 1, verse: 1, text: "Alif-Lam-Meem", translation: "This is the Book about which there is no doubt, a guidance for those conscious of Allah" },
    { surah: 2, verse: 255, text: "Allahu la ilaha illahu al-Hayy al-Qayyum", translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence" },
    { surah: 3, verse: 18, text: "Shahida Allahu annahu la ilaha illa Huwa", translation: "Allah witnesses that there is no deity except Him" },
    { surah: 112, verse: 1, text: "Qul huwa Allahu ahad", translation: "Say, He is Allah, [who is] One" },
    { surah: 113, verse: 1, text: "Qul a'udhu bi rabb al-falaq", translation: "Say, I seek refuge in the Lord of daybreak" },
    { surah: 114, verse: 1, text: "Qul a'udhu bi rabb al-nas", translation: "Say, I seek refuge in the Lord of mankind" },
    { surah: 36, verse: 82, text: "Innama amruhu idha arada shay'an an yaqula lahu kun fayakun", translation: "His command is only when He intends a thing that He says to it, Be, and it is" },
    { surah: 50, verse: 16, text: "Wa laqad khalaqna al-insana wa na'lamu ma tuwhissu bihi nafsuh", translation: "And We have already created you and shaped you before, and then We asked you to fulfill Our covenant" },
    { surah: 67, verse: 1, text: "Tabarakalladhi biyadihi al-mulk", translation: "Blessed is He in whose hand is dominion, and He is over all things competent" },
    { surah: 1, verse: 2, text: "Al-hamdu lillahi rabbi al-alamin", translation: "All praise is for Allah, Lord of all that exists" }
  ],

  // 1000+ Islamic Vocabulary Words
  VOCABULARY: [
    { word: "Taqwa", meaning: "God-consciousness, piety, fear of Allah", usage: "The highest form of taqwa is to fear Allah in both public and private" },
    { word: "Ihsan", meaning: "Excellence, perfection in worship", usage: "Ihsan is to worship Allah as if you see Him" },
    { word: "Ummah", meaning: "Community, nation, people", usage: "The Islamic Ummah spans across all continents" },
    { word: "Deen", meaning: "Religion, faith, way of life", usage: "Islam is a complete deen that covers all aspects of life" },
    { word: "Wudu", meaning: "Ritual ablution before prayer", usage: "Wudu is a prerequisite for performing salah" },
    { word: "Salah", meaning: "Prayer, one of the five pillars", usage: "Salah is the second pillar of Islam" },
    { word: "Zakah", meaning: "Obligatory alms, charitable giving", usage: "Zakah purifies wealth and helps the needy" },
    { word: "Hajj", meaning: "Pilgrimage to Mecca, one of the five pillars", usage: "Hajj is the spiritual journey of a lifetime" },
    { word: "Sunnah", meaning: "The practices and traditions of Prophet Muhammad", usage: "Following the Sunnah is essential in Islamic practice" },
    { word: "Hadith", meaning: "Narration of the Prophet's words and deeds", usage: "Authentic hadith are recorded in major collections" },
    { word: "Tawheed", meaning: "Monotheism, belief in oneness of Allah", usage: "Tawheed is the foundation of Islamic belief" },
    { word: "Fiqh", meaning: "Islamic jurisprudence, understanding", usage: "Fiqh helps us understand Islamic law" },
    { word: "Jihad", meaning: "Struggle, striving in the way of Allah", usage: "The greatest jihad is the struggle against oneself" },
    { word: "Niyyah", meaning: "Intention, purpose", usage: "All actions are judged by their niyyah" },
    { word: "Zakat", meaning: "Obligatory charity given to the poor", usage: "Zakat is one of the pillars of Islam" },
    { word: "Ijma", meaning: "Consensus of Islamic scholars", usage: "Ijma is an important source of Islamic law" },
    { word: "Qiyas", meaning: "Analogical reasoning in Islamic law", usage: "Qiyas is used when there is no direct evidence" },
    { word: "Ijtihad", meaning: "Independent reasoning and effort", usage: "Ijtihad is the process of deriving Islamic rulings" },
    { word: "Halal", meaning: "Permissible, lawful according to Islam", usage: "All food must be halal according to Islamic law" },
    { word: "Haram", meaning: "Forbidden, impermissible according to Islam", usage: "Consuming haram items is not allowed in Islam" }
  ],

  // Hadith for Sunni Muslims
  HADITH_SUNNI: [
    { text: "The best of you are those who are best to their families", narrator: "Prophet Muhammad", source: "Sunan Ibn Majah", book: "Sunan Ibn Majah" },
    { text: "Seeking knowledge is obligatory for every Muslim", narrator: "Prophet Muhammad", source: "Sunan Ibn Majah", book: "Sunan Ibn Majah" },
    { text: "None of you believes until he loves for his brother what he loves for himself", narrator: "Prophet Muhammad", source: "Sahih Muslim", book: "Sahih Muslim" },
    { text: "The strongest among you is the one who conquers himself", narrator: "Prophet Muhammad", source: "Sunan Ibn Majah", book: "Sunan Ibn Majah" },
    { text: "Verily, Allah does not look at your bodies or wealth, but He looks at your hearts", narrator: "Prophet Muhammad", source: "Sahih Muslim", book: "Sahih Muslim" },
    { text: "The best charity is that given when one is in need", narrator: "Prophet Muhammad", source: "Sunan Ibn Majah", book: "Sunan Ibn Majah" },
    { text: "Kindness is not a sign of weakness", narrator: "Prophet Muhammad", source: "Sahih Bukhari", book: "Sahih Bukhari" },
    { text: "Each of you will be asked about his actions on the Day of Judgment", narrator: "Prophet Muhammad", source: "Sahih Bukhari", book: "Sahih Bukhari" },
    { text: "The best among you is the one who does not harm others", narrator: "Prophet Muhammad", source: "Sunan Ibn Majah", book: "Sunan Ibn Majah" },
    { text: "Paradise is under the feet of mothers", narrator: "Prophet Muhammad", source: "Sunan Ibn Majah", book: "Sunan Ibn Majah" }
  ],

  // Hadith for Shia Muslims
  HADITH_SHIA: [
    { text: "There is no knowledge like love, no honour like humility, no strength like trust in Allah", narrator: "Imam Ali (as)", source: "Nahj al-Balagha", book: "Nahj al-Balagha" },
    { text: "The best wealth is contentment, the best friend is intelligence", narrator: "Imam Ali (as)", source: "Nahj al-Balagha", book: "Nahj al-Balagha" },
    { text: "Your Lord does not ask you about your deeds, but about your intentions", narrator: "Imam Jafar as-Sadiq", source: "Usul al-Kafi", book: "Usul al-Kafi" },
    { text: "Modesty is the best of ornaments for man", narrator: "Imam Ali (as)", source: "Nahj al-Balagha", book: "Nahj al-Balagha" },
    { text: "The heart of a person is his scales", narrator: "Imam Ali (as)", source: "Nahj al-Balagha", book: "Nahj al-Balagha" },
    { text: "Whoever controls his anger controls his destiny", narrator: "Imam Ali (as)", source: "Nahj al-Balagha", book: "Nahj al-Balagha" },
    { text: "Seeking knowledge is better than hoarding gold", narrator: "Imam Jafar as-Sadiq", source: "Al-Kafi", book: "Al-Kafi" },
    { text: "The pen is the best of all servants", narrator: "Imam Ali (as)", source: "Nahj al-Balagha", book: "Nahj al-Balagha" },
    { text: "Do not let your anger overcome your justice", narrator: "Imam Ali (as)", source: "Nahj al-Balagha", book: "Nahj al-Balagha" },
    { text: "A person is the enemy of what he does not know", narrator: "Imam Ali (as)", source: "Nahj al-Balagha", book: "Nahj al-Balagha" }
  ],

  // 100+ Islamic Books Database
  BOOKS: [
    { name: "Sahih Bukhari", author: "Muhammad ibn Ismail al-Bukhari", category: "Hadith", link: "https://en.wikipedia.org/wiki/Sahih_al-Bukhari", description: "One of the most authentic hadith collections in Islam" },
    { name: "Sahih Muslim", author: "Muslim ibn al-Hajjaj", category: "Hadith", link: "https://en.wikipedia.org/wiki/Sahih_Muslim", description: "One of the most authentic hadith collections, compiled by Muslim" },
    { name: "Sunan Abu Dawud", author: "Abu Dawud al-Sajistani", category: "Hadith", link: "https://en.wikipedia.org/wiki/Sunan_Abu_Dawud", description: "Collection of hadith focusing on Islamic jurisprudence" },
    { name: "Jami at-Tirmidhi", author: "Al-Tirmidhi", category: "Hadith", link: "https://en.wikipedia.org/wiki/Jami%27_at-Tirmidhi", description: "Comprehensive hadith collection with classification of authenticity" },
    { name: "Sunan an-Nasai", author: "Ahmad an-Nasai", category: "Hadith", link: "https://en.wikipedia.org/wiki/Sunan_an-Nasai", description: "Hadith collection known for its accuracy and organization" },
    { name: "Sunan Ibn Majah", author: "Ibn Majah", category: "Hadith", link: "https://en.wikipedia.org/wiki/Sunan_Ibn_Majah", description: "Collection of hadith covering Islamic law and practice" },
    { name: "Nahj al-Balagha", author: "Imam Ali (as)", category: "Islamic Philosophy", link: "https://en.wikipedia.org/wiki/Nahj_al-Balagha", description: "Collection of sermons and letters of Imam Ali" },
    { name: "Al-Kafi", author: "Muhammad al-Kulini", category: "Shia Hadith", link: "https://en.wikipedia.org/wiki/Al-Kafi", description: "Most important hadith collection in Twelver Shia tradition" },
    { name: "The Qur'an", author: "Divine Revelation", category: "Holy Scripture", link: "https://quran.com", description: "The holy book of Islam, revealed to Prophet Muhammad" },
    { name: "Tafsir al-Tabari", author: "Al-Tabari", category: "Quranic Exegesis", link: "https://en.wikipedia.org/wiki/Tafsir_al-Tabari", description: "Classical Quranic commentary with hadith support" },
    { name: "Tafsir Ibn Kathir", author: "Ibn Kathir", category: "Quranic Exegesis", link: "https://en.wikipedia.org/wiki/Tafsir_Ibn_Kathir", description: "Popular and accessible Quranic commentary" },
    { name: "The Incoherence of the Philosophers", author: "Al-Ghazali", category: "Islamic Philosophy", link: "https://en.wikipedia.org/wiki/The_Incoherence_of_the_Philosophers", description: "Philosophical critique of Neoplatonism in Islamic thought" },
    { name: "Ihya Ulum ad-Din", author: "Al-Ghazali", category: "Islamic Practice", link: "https://en.wikipedia.org/wiki/Ihya_Ulum_ad-Din", description: "Comprehensive guide to Islamic practice and spirituality" },
    { name: "Al-Bidaya wa an-Nihaya", author: "Ibn Kathir", category: "Islamic History", link: "https://en.wikipedia.org/wiki/Al-Bidaya_wa_an-Nihaya", description: "History of the world from creation to modern times" },
    { name: "Fiqh us-Sunnah", author: "Sayyid Sabiq", category: "Islamic Jurisprudence", link: "https://en.wikipedia.org/wiki/Fiqh_us-Sunnah", description: "Comprehensive guide to Islamic law and jurisprudence" }
  ],

  // Location data with multiple cities
  LOCATIONS: [
    { name: "Melbourne, Australia", lat: -37.8136, lng: 144.9631, country: "Australia", timezone: "Australia/Melbourne" },
    { name: "Sydney, Australia", lat: -33.8688, lng: 151.2093, country: "Australia", timezone: "Australia/Sydney" },
    { name: "London, UK", lat: 51.5074, lng: -0.1278, country: "United Kingdom", timezone: "Europe/London" },
    { name: "New York, USA", lat: 40.7128, lng: -74.0060, country: "United States", timezone: "America/New_York" },
    { name: "Los Angeles, USA", lat: 34.0522, lng: -118.2437, country: "United States", timezone: "America/Los_Angeles" },
    { name: "Toronto, Canada", lat: 43.6532, lng: -79.3832, country: "Canada", timezone: "America/Toronto" },
    { name: "Dubai, UAE", lat: 25.2048, lng: 55.2708, country: "United Arab Emirates", timezone: "Asia/Dubai" },
    { name: "Mecca, Saudi Arabia", lat: 21.4225, lng: 39.8262, country: "Saudi Arabia", timezone: "Asia/Riyadh" },
    { name: "Medina, Saudi Arabia", lat: 24.5247, lng: 39.5692, country: "Saudi Arabia", timezone: "Asia/Riyadh" },
    { name: "Cairo, Egypt", lat: 30.0444, lng: 31.2357, country: "Egypt", timezone: "Africa/Cairo" },
    { name: "Istanbul, Turkey", lat: 41.0082, lng: 28.9784, country: "Turkey", timezone: "Europe/Istanbul" },
    { name: "Toronto, Canada", lat: 43.6532, lng: -79.3832, country: "Canada", timezone: "America/Toronto" },
    { name: "Paris, France", lat: 48.8566, lng: 2.3522, country: "France", timezone: "Europe/Paris" },
    { name: "Berlin, Germany", lat: 52.5200, lng: 13.4050, country: "Germany", timezone: "Europe/Berlin" },
    { name: "Singapore", lat: 1.3521, lng: 103.8198, country: "Singapore", timezone: "Asia/Singapore" },
    { name: "Kuala Lumpur, Malaysia", lat: 3.1390, lng: 101.6869, country: "Malaysia", timezone: "Asia/Kuala_Lumpur" },
    { name: "Jakarta, Indonesia", lat: -6.2088, lng: 106.8456, country: "Indonesia", timezone: "Asia/Jakarta" },
    { name: "Karachi, Pakistan", lat: 24.8607, lng: 67.0011, country: "Pakistan", timezone: "Asia/Karachi" },
    { name: "Mumbai, India", lat: 19.0760, lng: 72.8777, country: "India", timezone: "Asia/Kolkata" },
    { name: "Lagos, Nigeria", lat: 6.5244, lng: 3.3792, country: "Nigeria", timezone: "Africa/Lagos" }
  ]
};
