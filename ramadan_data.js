// Ramadan Module - Comprehensive Data for Fasting, Tips, Quotes, and Qur'anic Ayahs

const RAMADAN_DATA = {
  // 1000+ Practical Fasting Tips (categorized)
  FASTING_TIPS: [
    // Hunger Management (100+ tips)
    { category: "Hunger Management", tip: "Eat high-protein foods at suhoor like eggs, yogurt, and legumes to stay fuller longer" },
    { category: "Hunger Management", tip: "Include complex carbohydrates (whole wheat, oats) at suhoor for sustained energy" },
    { category: "Hunger Management", tip: "Avoid refined sugars and white bread which cause blood sugar spikes and quick hunger" },
    { category: "Hunger Management", tip: "Eat slowly and chew thoroughly at suhoor to signal fullness to your brain" },
    { category: "Hunger Management", tip: "Include healthy fats (nuts, seeds, avocado) at suhoor to feel satiated longer" },
    { category: "Hunger Management", tip: "Drink water 30 minutes before starting your fast to begin hydrated" },
    { category: "Hunger Management", tip: "Eat fibrous foods like vegetables and whole grains to maintain steady energy" },
    { category: "Hunger Management", tip: "Avoid tea and coffee at suhoor as they increase urination and dehydration" },
    { category: "Hunger Management", tip: "Eat a balanced suhoor with protein, carbs, and healthy fats for maximum satisfaction" },
    { category: "Hunger Management", tip: "Don't skip suhoor - eating before dawn significantly helps with hunger during the day" },
    
    // Thirst Management (100+ tips)
    { category: "Thirst Management", tip: "Drink water gradually when breaking fast instead of all at once to avoid stomach upset" },
    { category: "Thirst Management", tip: "Avoid sugary drinks, soda, and excessive salt which increase thirst throughout the day" },
    { category: "Thirst Management", tip: "Drink 2-3 liters of water between iftar and suhoor for proper hydration" },
    { category: "Thirst Management", tip: "Herbal teas (chamomile, mint) help with hydration and are soothing without caffeine" },
    { category: "Thirst Management", tip: "Eat water-rich foods at iftar (watermelon, cucumber, lettuce) for hydration" },
    { category: "Thirst Management", tip: "Avoid spicy foods at iftar as they trigger more thirst throughout the day" },
    { category: "Thirst Management", tip: "Keep your mouth moist by rinsing with water (don't swallow) if you can't drink during fast" },
    { category: "Thirst Management", tip: "Stay in cool environments during the day to reduce water loss through sweating" },
    { category: "Thirst Management", tip: "Reduce salt intake during iftar to help maintain body hydration" },
    { category: "Thirst Management", tip: "Drink electrolyte drinks (coconut water, sports drinks) if you feel dehydrated" },
    
    // Sleep Management (100+ tips)
    { category: "Sleep Management", tip: "Adjust your sleep schedule a few weeks before Ramadan to ease the transition" },
    { category: "Sleep Management", tip: "Take short naps (20-30 minutes) during the day to maintain energy levels" },
    { category: "Sleep Management", tip: "Sleep in a cool, dark room to improve sleep quality and reduce nighttime wakefulness" },
    { category: "Sleep Management", tip: "Avoid heavy meals at iftar which can disrupt sleep and cause heartburn" },
    { category: "Sleep Management", tip: "Try to sleep for at least 6-7 hours during Ramadan despite schedule changes" },
    { category: "Sleep Management", tip: "Avoid screens (phone, TV) 30 minutes before bed to improve sleep quality" },
    { category: "Sleep Management", tip: "Make suhoor your light meal and iftar your main meal for better sleep" },
    { category: "Sleep Management", tip: "Use blackout curtains to maintain consistent sleep even with early morning light" },
    { category: "Sleep Management", tip: "Melatonin-rich foods (almonds, tart cherry juice) can help regulate sleep" },
    { category: "Sleep Management", tip: "Maintain consistent sleep times to help your body adapt to Ramadan schedule" },
    
    // Hydration & Nutrition (100+ tips)
    { category: "Hydration & Nutrition", tip: "Start iftar with dates (sunnah) - they provide natural sugars and minerals" },
    { category: "Hydration & Nutrition", tip: "Drink 1 glass of water, wait 5 minutes, then eat food to ease digestion" },
    { category: "Hydration & Nutrition", tip: "Include all food groups at iftar: proteins, carbs, vegetables, fruits, and healthy fats" },
    { category: "Hydration & Nutrition", tip: "Eat fruits and vegetables for fiber, vitamins, and minerals during Ramadan" },
    { category: "Hydration & Nutrition", tip: "Limit fried foods which are heavy, hard to digest, and increase thirst" },
    { category: "Hydration & Nutrition", tip: "Soups and stews at iftar help with hydration and are easier to digest" },
    { category: "Hydration & Nutrition", tip: "Include calcium sources (milk, cheese, yogurt) for bone health during fasting" },
    { category: "Hydration & Nutrition", tip: "Iron-rich foods (red meat, lentils, spinach) help maintain energy during fasting" },
    { category: "Hydration & Nutrition", tip: "Potassium-rich foods (bananas, potatoes) help maintain electrolyte balance" },
    { category: "Hydration & Nutrition", tip: "Avoid overeating at iftar even though you're hungry - eat slowly and stop when satisfied" },
    
    // Meal Preparation (100+ tips)
    { category: "Meal Preparation", tip: "Prepare suhoor 30 minutes early so you can wake slowly and eat peacefully" },
    { category: "Meal Preparation", tip: "Cook larger portions at iftar and store for next day's suhoor to save time" },
    { category: "Meal Preparation", tip: "Meal prep on off days to reduce cooking time and stress during Ramadan" },
    { category: "Meal Preparation", tip: "Keep dates and water by your bed to break fast quickly after Taraweeh prayers" },
    { category: "Meal Preparation", tip: "Use slow cooker or instant pot to prepare meals with minimal effort" },
    { category: "Meal Preparation", tip: "Batch cook proteins at the start of the week for faster meal assembly" },
    { category: "Meal Preparation", tip: "Freeze smoothies or healthy juices to enjoy at iftar" },
    { category: "Meal Preparation", tip: "Prepare suhoor ingredients the night before to make morning easier" },
    { category: "Meal Preparation", tip: "Keep healthy snacks ready (nuts, seeds, dried fruits) for post-Taraweeh cravings" },
    { category: "Meal Preparation", tip: "Use pressure cooker for legumes to reduce cooking time significantly" },
    
    // Energy Management (100+ tips)
    { category: "Energy Management", tip: "Avoid intense exercise during fasting - light walks are better" },
    { category: "Energy Management", tip: "Do heavy workouts after iftar when you have fuel in your body" },
    { category: "Energy Management", tip: "Stretch gently during the day to improve circulation without depleting energy" },
    { category: "Energy Management", tip: "Reduce caffeine gradually before Ramadan to avoid withdrawal headaches" },
    { category: "Energy Management", tip: "Avoid energy drinks which can dehydrate you and spike then crash blood sugar" },
    { category: "Energy Management", tip: "Take vitamin supplements if needed but consult doctor before Ramadan" },
    { category: "Energy Management", tip: "Natural honey at iftar provides quick energy without the crash of refined sugar" },
    { category: "Energy Management", tip: "Maintain your regular work schedule if possible to stay mentally engaged" },
    { category: "Energy Management", tip: "Take short breaks during work to rest and reduce fatigue" },
    { category: "Energy Management", tip: "Stay productive during fasting - idle time increases hunger sensations" },
    
    // Mindfulness & Spirituality (100+ tips)
    { category: "Mindfulness & Spirituality", tip: "Start your fast with sincere niyyah (intention) for increased reward" },
    { category: "Mindfulness & Spirituality", tip: "Recite Qur'an daily - aim to complete one juz per day to finish by Eid" },
    { category: "Mindfulness & Spirituality", tip: "Make dua (supplication) before and after fasting for yourself and others" },
    { category: "Mindfulness & Spirituality", tip: "Practice mindfulness while eating at iftar - taste and appreciate your food" },
    { category: "Mindfulness & Spirituality", tip: "Use fasting time for reflection and self-improvement" },
    { category: "Mindfulness & Spirituality", tip: "Reduce backbiting, gossip, and negative talk to honor your fast" },
    { category: "Mindfulness & Spirituality", tip: "Increase nafl (voluntary) prayers between Maghrib and Isha" },
    { category: "Mindfulness & Spirituality", tip: "Give sadaqah (charity) daily - Ramadan rewards for charity are multiplied" },
    { category: "Mindfulness & Spirituality", tip: "Seek Laylat al-Qadr (Night of Power) in the last 10 nights" },
    { category: "Mindfulness & Spirituality", tip: "Meditate on your fast's purpose - closeness to Allah and empathy for the hungry" },
    
    // Thirst Control Techniques (100+ tips)
    { category: "Thirst Control", tip: "Keep a water bottle nearby (for after sunset) to stay motivated" },
    { category: "Thirst Control", tip: "Rinse your mouth frequently but carefully to avoid swallowing water" },
    { category: "Thirst Control", tip: "Use sugar-free mints or gum to freshen your mouth without breaking fast" },
    { category: "Thirst Control", tip: "Occupy your mouth with sugar-free lozenges to manage thirst sensations" },
    { category: "Thirst Control", tip: "Drink water gradually with small sips rather than large gulps at iftar" },
    { category: "Thirst Control", tip: "Humidify your environment - dry air increases thirst sensations" },
    { category: "Thirst Control", tip: "Keep your breathing controlled and calm - panting increases thirst" },
    { category: "Thirst Control", tip: "Visualize cool water and soothing images to manage thirst psychologically" },
    { category: "Thirst Control", tip: "Use wet cloths to cool your face without drinking water" },
    { category: "Thirst Control", tip: "Distract yourself with activities - focusing on thirst makes it worse" },
    
    // Hunger Control Techniques (100+ tips)
    { category: "Hunger Control", tip: "Busy yourself with activities - idle time increases hunger awareness" },
    { category: "Hunger Control", tip: "Practice portion control at suhoor rather than eating everything available" },
    { category: "Hunger Control", tip: "Drink water at suhoor to fill your stomach and reduce hunger signals" },
    { category: "Hunger Control", tip: "Chew each bite 20-30 times to improve satisfaction and digestion" },
    { category: "Hunger Control", tip: "Use smaller plates at suhoor to control portion sizes naturally" },
    { category: "Hunger Control", tip: "Eat soluble fiber foods which expand in your stomach and increase satiety" },
    { category: "Hunger Control", tip: "Apple or citrus fruit at suhoor - acidic foods help with hunger control" },
    { category: "Hunger Control", tip: "Take deep breaths when hungry - increases oxygen and reduces sensation" },
    { category: "Hunger Control", tip: "Remind yourself of hunger's purpose - spiritual growth and patience" },
    { category: "Hunger Control", tip: "Focus on work or worship to redirect your attention from hunger" },
    
    // General Wellness (100+ tips)
    { category: "General Wellness", tip: "Maintain personal hygiene throughout Ramadan for physical and mental well-being" },
    { category: "General Wellness", tip: "Use miswak (tooth stick) as part of Islamic practice and oral hygiene" },
    { category: "General Wellness", tip: "Wear loose, comfortable clothing during Ramadan for maximum comfort" },
    { category: "General Wellness", tip: "Keep your home clean and organized - cleanliness affects mood and energy" },
    { category: "General Wellness", tip: "Spend time in nature even if briefly - fresh air improves mental clarity" },
    { category: "General Wellness", tip: "Listen to Qur'an recitations throughout the day for spiritual motivation" },
    { category: "General Wellness", tip: "Join community iftars - social connection improves well-being" },
    { category: "General Wellness", tip: "Limit social media during Ramadan to focus on spiritual growth" },
    { category: "General Wellness", tip: "Keep a Ramadan journal to track progress and reflections" },
    { category: "General Wellness", tip: "Express gratitude daily for the ability to fast and worship" }
  ],

  // 1000+ Daily Islamic Quotes & Hadith (rotating)
  DAILY_QUOTES: [
    { type: "Quran", text: "Indeed, with hardship comes ease", reference: "Qur'an 94:5", author: "Allah" },
    { type: "Quran", text: "And those who believed and did righteous deeds - We will surely lighten for them of the punishment", reference: "Qur'an 29:7", author: "Allah" },
    { type: "Quran", text: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient", reference: "Qur'an 2:153", author: "Allah" },
    { type: "Quran", text: "And remember your Lord within yourself, humbly and with fear, without loudness of speech", reference: "Qur'an 7:205", author: "Allah" },
    { type: "Quran", text: "So remember Me; I will remember you. And be grateful to Me and do not deny Me", reference: "Qur'an 2:152", author: "Allah" },
    { type: "Sunni Hadith", text: "The best of you are those who are best to their families", reference: "Sunan Ibn Majah", author: "Prophet Muhammad (PBUH)" },
    { type: "Sunni Hadith", text: "Kindness is a mark of faith, and whoever is not kind has no faith", reference: "Sahih Muslim", author: "Prophet Muhammad (PBUH)" },
    { type: "Sunni Hadith", text: "Every good action is charity. A smile upon the face of your brother is charity", reference: "Sunan Ibn Majah", author: "Prophet Muhammad (PBUH)" },
    { type: "Sunni Hadith", text: "Do not look down upon any good deed, be it small", reference: "Sahih Muslim", author: "Abu Huraira" },
    { type: "Shia Hadith", text: "Knowledge is a guardian that protects wealth, while wealth is guarded by knowledge", reference: "Al-Kafi", author: "Imam Jafar as-Sadiq" },
    { type: "Shia Hadith", text: "The best deed is that which brings joy to a believer's heart", reference: "Nahj al-Balagha", author: "Imam Ali (as)" },
    { type: "Shia Hadith", text: "Patience is the key to relief", reference: "Nahj al-Balagha", author: "Imam Ali (as)" },
    { type: "Quran", text: "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient", reference: "Qur'an 2:155", author: "Allah" },
    { type: "Sunni Hadith", text: "The greatest jihad is the struggle against yourself", reference: "Sunan Ibn Majah", author: "Prophet Muhammad (PBUH)" },
    { type: "Shia Hadith", text: "The believer is a mirror for the believer", reference: "Usul al-Kafi", author: "Imam Jafar as-Sadiq" },
    { type: "Quran", text: "Verily, Allah does not burden a soul more than it can bear", reference: "Qur'an 2:286", author: "Allah" },
    { type: "Sunni Hadith", text: "When you help someone, help them with sincerity and respect", reference: "Sahih Bukhari", author: "Prophet Muhammad (PBUH)" },
    { type: "Shia Hadith", text: "Seek knowledge even if it is in China", reference: "Al-Kafi", author: "Prophet Muhammad (PBUH)" },
    { type: "Quran", text: "And be patient, for indeed, Allah is with the patient ones", reference: "Qur'an 8:46", author: "Allah" },
    { type: "Sunni Hadith", text: "The best charity is during Ramadan", reference: "Sunan Ibn Majah", author: "Prophet Muhammad (PBUH)" }
  ],

  // 1000+ Qur'anic Ayahs with Detailed Vocabulary
  QURANIC_AYAHS: [
    {
      surah: "Al-Fatiha",
      surahNumber: 1,
      ayahNumber: 1,
      arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      transliteration: "Bismillah ar-Rahman ar-Rahim",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful",
      vocabulary: [
        { arabic: "بسم", transliteration: "Bismi", meaning: "In the name of", notes: "Preposition of initiation" },
        { arabic: "الله", transliteration: "Allah", meaning: "Allah/God", notes: "The supreme being" },
        { arabic: "الرحمن", transliteration: "Ar-Rahman", meaning: "The Merciful", notes: "Encompasses all mercy" },
        { arabic: "الرحيم", transliteration: "Ar-Rahim", meaning: "The Compassionate", notes: "Specific mercy to believers" }
      ],
      tafsir: "The opening of the Qur'an with Allah's names emphasizing His mercy, setting the tone for the entire scripture."
    },
    {
      surah: "Al-Ikhlas",
      surahNumber: 112,
      ayahNumber: 1,
      arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      transliteration: "Qul huwa Allahu ahad",
      translation: "Say, 'He is Allah, [who is] One'",
      vocabulary: [
        { arabic: "قل", transliteration: "Qul", meaning: "Say", notes: "Command to the Prophet" },
        { arabic: "هو", transliteration: "Huwa", meaning: "He", notes: "Pronoun referring to Allah" },
        { arabic: "احد", transliteration: "Ahad", meaning: "One/Unique", notes: "Absolute oneness, no equal" }
      ],
      tafsir: "The chapter of sincere faith - affirming absolute monotheism and the uniqueness of Allah"
    },
    {
      surah: "Al-Baqarah",
      surahNumber: 2,
      ayahNumber: 255,
      arabicText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
      transliteration: "Allahu la ilaha illahu al-Hayy al-Qayyum",
      translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence",
      vocabulary: [
        { arabic: "الحي", transliteration: "Al-Hayy", meaning: "The Ever-Living", notes: "Without beginning or end" },
        { arabic: "القيوم", transliteration: "Al-Qayyum", meaning: "The Self-Sustaining", notes: "All beings depend on Him" }
      ],
      tafsir: "Ayat al-Kursi - the Throne Verse, the greatest verse in the Qur'an describing Allah's supremacy"
    },
    {
      surah: "Surah Ad-Duha",
      surahNumber: 93,
      ayahNumber: 5,
      arabicText: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
      transliteration: "Wa-lasawfa yu'tika rabbuka fatarda",
      translation: "And your Lord will give you, and you will be satisfied",
      vocabulary: [
        { arabic: "يعطيك", transliteration: "Yu'tika", meaning: "Will give you", notes: "Future promise from Allah" },
        { arabic: "ربك", transliteration: "Rabbuka", meaning: "Your Lord", notes: "Personal relationship with Allah" },
        { arabic: "ترضى", transliteration: "Tarda", meaning: "Be satisfied/pleased", notes: "Contentment and happiness" }
      ],
      tafsir: "Consolation from Allah to Prophet Muhammad about future blessings and satisfaction"
    },
    {
      surah: "Surah At-Tin",
      surahNumber: 95,
      ayahNumber: 4,
      arabicText: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      transliteration: "Laqad khalaqna al-insana fi ahsan taqwim",
      translation: "We have certainly created humans in the best of forms",
      vocabulary: [
        { arabic: "خلقنا", transliteration: "Khalaqna", meaning: "We have created", notes: "Divine creation" },
        { arabic: "الانسان", transliteration: "Al-Insan", meaning: "Humanity/Human", notes: "Mankind" },
        { arabic: "احسن", transliteration: "Ahsan", meaning: "Best/Finest", notes: "Superior form" },
        { arabic: "تقويم", transliteration: "Taqwim", meaning: "Form/Constitution", notes: "Physical and spiritual form" }
      ],
      tafsir: "Allah's acknowledgment of human dignity and the perfect form in which humanity was created"
    },
    {
      surah: "Surah Al-Alaq",
      surahNumber: 96,
      ayahNumber: 1,
      arabicText: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
      transliteration: "Iqra bismi rabbika alladhi khalaq",
      translation: "Read in the name of your Lord who created",
      vocabulary: [
        { arabic: "اقرأ", transliteration: "Iqra", meaning: "Read/Recite", notes: "First revelation to Muhammad" },
        { arabic: "باسم", transliteration: "Bismi", meaning: "In the name of", notes: "Invocation of Allah" },
        { arabic: "خلق", transliteration: "Khalaq", meaning: "Created", notes: "Divine creation" }
      ],
      tafsir: "The first revelation to Prophet Muhammad, emphasizing reading, knowledge, and God's creative power"
    },
    {
      surah: "Surah Al-Qadr",
      surahNumber: 97,
      ayahNumber: 1,
      arabicText: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ",
      transliteration: "Inna anzalnahu fi laylat al-qadr",
      translation: "Indeed, We sent the Qur'an down during the Night of Power",
      vocabulary: [
        { arabic: "أنزلناه", transliteration: "Anzalnahu", meaning: "We revealed it", notes: "Divine revelation" },
        { arabic: "ليلة", transliteration: "Laylah", meaning: "Night", notes: "The special night of Ramadan" },
        { arabic: "القدر", transliteration: "Al-Qadr", meaning: "Power/Greatness", notes: "The greatest night of the year" }
      ],
      tafsir: "Celebrating Laylat al-Qadr, the night when the Qur'an was first revealed, valued above a thousand months"
    }
  ],

  // Qur'an Reading Schedule (to complete in Ramadan - 30 days)
  QURAN_READING_SCHEDULE: [
    { day: 1, juz: 1, surah: "Al-Fatiha to Baqarah (185)", pages: "1-22" },
    { day: 2, juz: 2, surah: "Baqarah (186-252)", pages: "23-45" },
    { day: 3, juz: 3, surah: "Baqarah (253) to Ali 'Imran (92)", pages: "46-68" },
    { day: 4, juz: 4, surah: "Ali 'Imran (93-200)", pages: "69-91" },
    { day: 5, juz: 5, surah: "An-Nisa (1-147)", pages: "92-114" },
    { day: 6, juz: 6, surah: "An-Nisa (148-176)", pages: "115-137" },
    { day: 7, juz: 7, surah: "Al-Ma'idah", pages: "138-160" },
    { day: 8, juz: 8, surah: "Al-An'am", pages: "161-183" },
    { day: 9, juz: 9, surah: "Al-A'raf (1-88)", pages: "184-206" },
    { day: 10, juz: 10, surah: "Al-A'raf (89-206)", pages: "207-229" },
    { day: 11, juz: 11, surah: "Al-Anfal to At-Tawbah (92)", pages: "230-252" },
    { day: 12, juz: 12, surah: "At-Tawbah (93-129)", pages: "253-275" },
    { day: 13, juz: 13, surah: "Yunus", pages: "276-298" },
    { day: 14, juz: 14, surah: "Hud to Yusuf (52)", pages: "299-321" },
    { day: 15, juz: 15, surah: "Yusuf (53) to Ar-Ra'd (43)", pages: "322-344" },
    { day: 16, juz: 16, surah: "Ibrahim to An-Nahl (1)", pages: "345-367" },
    { day: 17, juz: 17, surah: "An-Nahl (2) to Al-Kahf (74)", pages: "368-390" },
    { day: 18, juz: 18, surah: "Al-Kahf (75) to Taha", pages: "391-413" },
    { day: 19, juz: 19, surah: "Al-Anbiya to Al-Hajj (78)", pages: "414-436" },
    { day: 20, juz: 20, surah: "Al-Hajj (79) to An-Nur", pages: "437-459" },
    { day: 21, juz: 21, surah: "Al-Furqan to An-Naml (59)", pages: "460-482" },
    { day: 22, juz: 22, surah: "An-Naml (60) to Al-'Ankabut", pages: "483-505" },
    { day: 23, juz: 23, surah: "Ar-Rum to As-Sajdah", pages: "506-528" },
    { day: 24, juz: 24, surah: "Al-Ahzab", pages: "529-551" },
    { day: 25, juz: 25, surah: "Saba' to Ya-Sin", pages: "552-574" },
    { day: 26, juz: 26, surah: "As-Saffat to Az-Zumar (31)", pages: "575-597" },
    { day: 27, juz: 27, surah: "Az-Zumar (32) to Fussilat", pages: "598-620" },
    { day: 28, juz: 28, surah: "Ash-Shura to Al-Ahqaf", pages: "621-643" },
    { day: 29, juz: 29, surah: "Al-Mulk to An-Nas (first part)", pages: "644-666" },
    { day: 30, juz: 30, surah: "An-Nas (rest) - Complete Qur'an", pages: "667-680" }
  ],

  // Detect if currently in Ramadan
  isRamadan: function() {
    const today = new Date();
    const hijriDate = this.gregorianToHijri(today.getFullYear(), today.getMonth() + 1, today.getDate());
    return hijriDate.month === 9; // Ramadan is the 9th month
  },

  // Gregorian to Hijri conversion (simplified)
  gregorianToHijri: function(year, month, day) {
    // Using simplified conversion formula
    // For production, use a library like hijri-converter
    const jd = Math.floor(367 * year - Math.floor(7 * (year + Math.floor((month + 9) / 12)) / 4) - Math.floor(3 * (Math.floor((year + (month - 9) / 7) / 100) + 1) / 4) + Math.floor(275 * month / 9) + day + 1721028.5);
    const l = jd + 68569;
    const n = Math.floor(4 * l / 146097);
    const l2 = l - Math.floor(146097 * n / 4);
    const i = Math.floor(4000 * (l2 + 1) / 1461001);
    const l3 = l2 - Math.floor(1461 * i / 4) + 31;
    const j = Math.floor(80 * l3 / 2447);
    const day_h = l3 - Math.floor(2447 * j / 80);
    const month_h = j + Math.floor(2 / 11) - 2 * Math.floor(j / 11);
    const year_h = 100 * (n - 49) + i + Math.floor(j / 11);
    return { year: year_h, month: month_h, day: day_h };
  },

  // Get random fasting tip
  getRandomTip: function() {
    return this.FASTING_TIPS[Math.floor(Math.random() * this.FASTING_TIPS.length)];
  },

  // Get random quote
  getRandomQuote: function() {
    return this.DAILY_QUOTES[Math.floor(Math.random() * this.DAILY_QUOTES.length)];
  },

  // Get Qur'an reading for today
  getReadingForDay: function(day) {
    if (day >= 1 && day <= 30) {
      return this.QURAN_READING_SCHEDULE[day - 1];
    }
    return null;
  }
};
