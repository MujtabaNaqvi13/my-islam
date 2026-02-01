// Arabic Learning Course - Progressive Lessons
// Teaches Arabic from complete beginner to intermediate level

const ARABIC_COURSE = {
  // Course Metadata
  courseInfo: {
    name: "Learn Arabic - From Zero to Hero",
    totalLessons: 40,
    levels: ["Beginner (Lessons 1-15)", "Intermediate (Lessons 16-30)", "Advanced (Lessons 31-40)"],
    estimatedDuration: "8-12 weeks",
    difficulty: "Progressive (Easy → Hard)"
  },

  // Level 1: Beginner (Lessons 1-15)
  lessons: {
    // LEVEL 1: FOUNDATIONS
    1: {
      level: "Beginner",
      title: "The Arabic Alphabet - Letters (Alif to Haa)",
      content: `
        Learn the first 6 letters of the Arabic alphabet and their shapes.
        
        Letter 1: ا (Alif) - Sound: 'A' as in "Apple"
        • Shape: Vertical line |
        • Pronunciation: Long 'A' sound
        • Example: ابن (Ibn - son)
        
        Letter 2: ب (Baa) - Sound: 'B' as in "Ball"
        • Shape: Looks like "B" with 1 dot
        • Pronunciation: Hard 'B' sound
        • Example: باب (Baab - door)
        
        Letter 3: ت (Taa) - Sound: 'T' as in "Table"
        • Shape: Looks like "B" with 2 dots
        • Pronunciation: Hard 'T' sound
        • Example: تاج (Taj - crown)
        
        Letter 4: ث (Thaa) - Sound: 'Th' as in "Thank"
        • Shape: Looks like "B" with 3 dots
        • Pronunciation: Soft 'Th' sound
        • Example: ثلج (Thalj - snow)
        
        Letter 5: ج (Jeem) - Sound: 'J' as in "Jelly"
        • Shape: Looks like a hook
        • Pronunciation: Soft 'J' sound
        • Example: جار (Jaar - neighbor)
        
        Letter 6: ح (Haa) - Sound: 'H' (guttural)
        • Shape: Similar to Jeem but open
        • Pronunciation: Deep guttural 'H'
        • Example: حار (Haar - hot)
        
        📝 PRACTICE:
        Write each letter 10 times in your notebook
        Say the sounds aloud 5 times each
        Try to recognize them in words
      `,
      vocabulary: [
        { word: "ابن", transliteration: "Ibn", meaning: "Son" },
        { word: "باب", transliteration: "Baab", meaning: "Door" },
        { word: "تاج", transliteration: "Taj", meaning: "Crown" },
        { word: "ثلج", transliteration: "Thalj", meaning: "Snow" },
        { word: "جار", transliteration: "Jaar", meaning: "Neighbor" },
        { word: "حار", transliteration: "Haar", meaning: "Hot" }
      ],
      quiz: [
        { question: "What sound does ب make?", options: ["B", "T", "J", "H"], answer: 0 },
        { question: "How many dots does ت have?", options: ["1", "2", "3", "0"], answer: 1 },
        { question: "Which letter looks like a hook?", options: ["ب", "ج", "ح", "ت"], answer: 1 }
      ]
    },

    2: {
      level: "Beginner",
      title: "The Arabic Alphabet - Letters (Waw to Yaa)",
      content: `
        Learn the remaining core letters of the alphabet.
        
        Letter 7: و (Waw) - Sound: 'W' as in "Water"
        • Shape: Looks like a curvy line
        • Pronunciation: 'W' or can mean "and" (wa)
        • Example: وقت (Waqt - time)
        
        Letter 8: ز (Zay) - Sound: 'Z' as in "Zebra"
        • Shape: Similar to Waw but with a line on top
        • Pronunciation: Hard 'Z' sound
        • Example: زين (Zayn - beauty/name)
        
        Letter 9: س (Seen) - Sound: 'S' as in "Sun"
        • Shape: Three bumps on a line
        • Pronunciation: Soft 'S' sound
        • Example: سلام (Assalam - peace)
        
        Letter 10: ش (Sheen) - Sound: 'Sh' as in "Ship"
        • Shape: Three bumps with teeth
        • Pronunciation: 'Sh' sound
        • Example: شمس (Shams - sun)
        
        Letter 11: ص (Saad) - Sound: 'S' (emphatic)
        • Shape: Like Seen but heavier
        • Pronunciation: Emphatic 'S'
        • Example: صحيح (Sahih - correct)
        
        Letter 12: ض (Daad) - Sound: 'D' (emphatic)
        • Shape: Like Daad (ض) but different
        • Pronunciation: Emphatic 'D'
        • Example: ضار (Darr - harmful)
        
        Letter 13: ط (Taa emphatic) - Sound: 'T' (emphatic)
        • Shape: Like Taa but heavier
        • Pronunciation: Emphatic 'T'
        • Example: طالب (Talib - student)
        
        Letter 14: ظ (Zaa emphatic) - Sound: 'Z' (emphatic)
        • Shape: Like Zay but with teeth
        • Pronunciation: Emphatic 'Z'
        • Example: ظهر (Zahr - back)
        
        Letter 15: ع (Ayn) - Sound: Guttural 'A'
        • Shape: Like a twisted line
        • Pronunciation: Deep guttural sound
        • Example: عالم (Aalam - world)
        
        Letter 16: غ (Ghayn) - Sound: 'Gh' (guttural)
        • Shape: Like Ayn with a dot
        • Pronunciation: Deep 'Gh' from throat
        • Example: غيب (Ghayb - unseen)
        
        📝 PRACTICE:
        Practice each letter for 2 minutes daily
        Write words containing these letters
        Listen to native speakers pronounce them
      `,
      vocabulary: [
        { word: "وقت", transliteration: "Waqt", meaning: "Time" },
        { word: "سلام", transliteration: "Assalam", meaning: "Peace" },
        { word: "شمس", transliteration: "Shams", meaning: "Sun" },
        { word: "طالب", transliteration: "Talib", meaning: "Student" },
        { word: "عالم", transliteration: "Aalam", meaning: "World" },
        { word: "غيب", transliteration: "Ghayb", meaning: "Unseen" }
      ],
      quiz: [
        { question: "Which letter means 'and'?", options: ["ج", "و", "س", "ش"], answer: 1 },
        { question: "What does 'طالب' mean?", options: ["Teacher", "Student", "Book", "Pen"], answer: 1 }
      ]
    },

    3: {
      level: "Beginner",
      title: "Final Letters and Vowels",
      content: `
        Complete the Arabic alphabet and learn vowel marks (Tashkeel).
        
        Letter 17: ف (Faa) - Sound: 'F' as in "Fish"
        • Shape: Like a link in a chain
        • Example: فم (Fam - mouth)
        
        Letter 18: ق (Qaaf) - Sound: 'Q' (deep)
        • Shape: Circle with a tail
        • Pronunciation: Deep 'Q' from throat
        • Example: قلب (Qalb - heart)
        
        Letter 19: ك (Kaaf) - Sound: 'K' as in "King"
        • Shape: Like an open hand
        • Example: كتاب (Kitaab - book)
        
        Letter 20: ل (Laam) - Sound: 'L' as in "Light"
        • Shape: Like a tall hook
        • Example: لون (Lawn - color)
        
        Letter 21: م (Meem) - Sound: 'M' as in "Mother"
        • Shape: Like a rounded bump
        • Example: ماء (Maa - water)
        
        Letter 22: ن (Noon) - Sound: 'N' as in "Nose"
        • Shape: Like Meem with a point
        • Example: نور (Noor - light)
        
        Letter 23: ه (Haa - final) - Sound: 'H'
        • Shape: Like a small circle
        • Example: هدى (Huda - guidance)
        
        Letter 24: ء (Hamza) - Sound: Glottal stop
        • Shape: A small mark (')
        • Pronunciation: Like pause in English "uh-oh"
        • Example: قرآن (Quran - with hamza)
        
        VOWELS (TASHKEEL):
        
        1. Fatha (َ) - Short 'A' sound
           • Mark: Line above letter
           • Example: َك (Ka) - like "car"
        
        2. Damma (ُ) - Short 'U' sound
           • Mark: Curved shape above letter
           • Example: ُك (Ku) - like "cool"
        
        3. Kasra (ِ) - Short 'I' sound
           • Mark: Line below letter
           • Example: ِك (Ki) - like "key"
        
        4. Sukoon (ْ) - No vowel (silent)
           • Mark: Small circle above letter
           • Example: ْك (K) - no vowel sound
        
        5. Shadda (ّ) - Double letter
           • Mark: W-shaped symbol
           • Example: ّك (Kk) - double the sound
        
        📝 PRACTICE:
        Read words with vowel marks aloud
        Practice all 24 letters in one sitting
        You now know the complete Arabic alphabet!
      `,
      vocabulary: [
        { word: "كتاب", transliteration: "Kitaab", meaning: "Book" },
        { word: "ماء", transliteration: "Maa", meaning: "Water" },
        { word: "نور", transliteration: "Noor", meaning: "Light" },
        { word: "قلب", transliteration: "Qalb", meaning: "Heart" },
        { word: "قرآن", transliteration: "Quran", meaning: "Quran" }
      ]
    },

    4: {
      level: "Beginner",
      title: "Simple Greetings and Salutations",
      content: `
        Learn how to greet people in Arabic - the foundation of communication!
        
        GREETINGS:
        
        1. السلام عليكم ورحمة الله وبركاته
           Assalamu alaikum wa rahmatullahi wa barakatuh
           "Peace be upon you and God's mercy and blessings"
           ↳ Used: Formal greeting
           ↳ Response: وعليكم السلام ورحمة الله وبركاته (wa alaikum assalam)
        
        2. السلام عليكم
           Assalamu alaikum
           "Peace be upon you" (Short version)
           ↳ Used: Quick greeting
           ↳ Response: وعليكم السلام (wa alaikum assalam)
        
        3. السلام عليك
           Assalamu alaik
           "Peace be upon you" (To one person)
           ↳ Gender/number specific form
        
        4. مرحبا
           Marhaba
           "Hello" or "Welcome"
           ↳ Used: Friendly greeting
           ↳ Response: مرحبا بك (Marhaba bak)
        
        5. صباح الخير
           Sabah al-khair
           "Good morning" (literally "morning of good")
           ↳ Used: Morning greeting
           ↳ Response: صباح النور (Sabah an-noor) "morning of light"
        
        6. مساء الخير
           Masa al-khair
           "Good evening"
           ↳ Used: Evening greeting
           ↳ Response: مساء النور (Masa an-noor)
        
        7. كيف حالك؟
           Kayf halak?
           "How are you?" (to male)
           ↳ Response: أنا بخير (Ana bi-khair) "I'm fine"
        
        8. كيف حالك؟
           Kayf halik?
           "How are you?" (to female)
           ↳ Note: Different ending for gender
        
        9. تمام
           Tamam
           "Perfect" / "Great"
           ↳ Used: As a response or affirmation
        
        10. والحمد لله
            Alhamdulillah
            "All praise is to God"
            ↳ Used: When expressing gratitude or contentment
        
        CONVERSATION FLOW:
        
        Person A: السلام عليكم
        Person B: وعليكم السلام ورحمة الله
        Person A: كيف حالك؟
        Person B: بخير، والحمد لله. وأنت؟
        Person A: تمام، الحمد لله
        
        📝 PRACTICE:
        1. Say each greeting 10 times aloud
        2. Practice the conversation above with a friend
        3. Try greeting people using these phrases
        4. Learn to recognize responses
      `,
      vocabulary: [
        { word: "السلام", transliteration: "As-Salam", meaning: "Peace" },
        { word: "مرحبا", transliteration: "Marhaba", meaning: "Hello/Welcome" },
        { word: "صباح", transliteration: "Sabah", meaning: "Morning" },
        { word: "مساء", transliteration: "Masa", meaning: "Evening" },
        { word: "كيف", transliteration: "Kayf", meaning: "How" },
        { word: "حال", transliteration: "Hal", meaning: "Condition/State" }
      ]
    },

    5: {
      level: "Beginner",
      title: "Numbers 1-10",
      content: `
        Learn to count in Arabic - essential for daily life!
        
        NUMBER BASICS:
        Numbers in Arabic have gender (masculine/feminine).
        We'll learn the masculine forms first.
        
        MASCULINE NUMBERS (1-10):
        
        1. واحد (Wahid) - One
           • Used for masculine nouns
           • Example: واحد كتاب (One book)
        
        2. اثنان (Ithnaan) - Two
           • Special dual form in Arabic
           • Example: اثنا رجال (Two men)
        
        3. ثلاثة (Talata) - Three
           • Example: ثلاثة أطفال (Three children)
        
        4. أربعة (Arba'a) - Four
           • Example: أربعة أيام (Four days)
        
        5. خمسة (Khamsa) - Five
           • Example: خمسة أصدقاء (Five friends)
        
        6. ستة (Sitta) - Six
           • Example: ستة كتب (Six books)
        
        7. سبعة (Saba'a) - Seven
           • Sacred number in Islam
           • Example: سبع سماوات (Seven heavens)
        
        8. ثمانية (Tamaniya) - Eight
           • Example: ثمانية ملائكة (Eight angels)
        
        9. تسعة (Tisa'a) - Nine
           • Example: تسعة شهور (Nine months)
        
        10. عشرة (Ashara) - Ten
            • Example: عشرة أيام (Ten days)
        
        FEMININE NUMBERS (1-10):
        
        1. واحدة (Wahida) - One (feminine)
        2. اثنتان (Ithnatan) - Two (feminine)
        3. ثلاث (Talas) - Three (feminine)
        4. أربع (Arba) - Four (feminine)
        5. خمس (Khams) - Five (feminine)
        6. ست (Sist) - Six (feminine)
        7. سبع (Saba) - Seven (feminine)
        8. ثماني (Tamanin) - Eight (feminine)
        9. تسع (Tisa) - Nine (feminine)
        10. عشر (Ashar) - Ten (feminine)
        
        COUNTING GAME:
        
        Count items around you in Arabic:
        - 1 pen = قلم واحد (Qalam wahid)
        - 2 books = كتابان (Kitabaan)
        - 3 people = ثلاثة أشخاص (Talata ashkhas)
        - 5 days = خمسة أيام (Khamsa ayyam)
        - 10 sentences = عشر جمل (Ashar jumal)
        
        📝 PRACTICE:
        1. Count 1-10 forward and backward daily
        2. Say each number's masculine AND feminine form
        3. Practice saying numbers with nouns
        4. Count objects in your room using Arabic
      `,
      vocabulary: [
        { word: "واحد", transliteration: "Wahid", meaning: "One" },
        { word: "اثنان", transliteration: "Ithnaan", meaning: "Two" },
        { word: "ثلاثة", transliteration: "Talata", meaning: "Three" },
        { word: "أربعة", transliteration: "Arba'a", meaning: "Four" },
        { word: "خمسة", transliteration: "Khamsa", meaning: "Five" },
        { word: "عشرة", transliteration: "Ashara", meaning: "Ten" }
      ]
    },

    6: {
      level: "Beginner",
      title: "Common Nouns - People & Family",
      content: `
        Learn words for family members and people - very practical!
        
        FAMILY MEMBERS:
        
        أب (Ab) - Father
        • Formal: والد (Walid) - "The One who gave life"
        • Example: أبي طيب (My father is good)
        
        أم (Um) - Mother
        • Formal: والدة (Walida)
        • Example: أمي تحب القراءة (My mother loves reading)
        
        أخ (Akh) - Brother
        • Plural: إخوة (Ikhwa)
        • Example: لدي ثلاثة إخوة (I have three brothers)
        
        أخت (Ukht) - Sister
        • Plural: أخوات (Akhawat)
        • Example: لدي أختان (I have two sisters)
        
        جد (Jad) - Grandfather
        • Example: جدي كبير (My grandfather is old)
        
        جدة (Jadda) - Grandmother
        • Example: جدتي طيبة (My grandmother is kind)
        
        ابن (Ibn) - Son
        • Plural: أبناء (Abnaa)
        • Example: لدي ابنان (I have two sons)
        
        بنت (Bint) - Daughter
        • Plural: بنات (Banat)
        • Example: لدي بنتان (I have two daughters)
        
        عم (Amm) - Uncle (father's brother)
        • Example: عمي في المدينة (My uncle is in the city)
        
        خالة (Khala) - Aunt (mother's sister)
        • Example: خالتي تعمل معلمة (My aunt works as a teacher)
        
        زوج (Zawj) - Husband
        • Example: زوجي يحب السفر (My husband loves traveling)
        
        زوجة (Zawja) - Wife
        • Example: زوجتي ذكية (My wife is intelligent)
        
        ابن العم (Ibn al-Am) - Cousin (male)
        • Example: ابن عمي طالب (My cousin is a student)
        
        بنت العم (Bint al-Am) - Cousin (female)
        
        صديق (Sadiq) - Friend (male)
        • Plural: أصدقاء (Asdiqaa)
        • Example: صديقي اسمه محمد (My friend's name is Muhammad)
        
        صديقة (Sadiqah) - Friend (female)
        
        PEOPLE DESCRIPTIONS:
        
        رجل (Rajul) - Man
        • Plural: رجال (Rijal)
        
        امرأة (Imra'ah) - Woman
        • Plural: نساء (Nisa)
        
        ولد (Walad) - Boy/Child
        • Plural: أولاد (Awlad)
        
        بنت (Bint) - Girl
        • Plural: بنات (Banat)
        
        شخص (Shakhsh) - Person
        • Plural: أشخاص (Ashkhas)
        
        📝 PRACTICE EXERCISE:
        Describe your family in Arabic:
        "أسرتي: أبي يعمل معهندس. أمي معلمة. لدي أختان وأخ واحد."
        Translation: "My family: My father is an engineer. My mother is a teacher. I have two sisters and one brother."
        
        Try to describe:
        - Your family members
        - Your friends
        - Your relationships
      `,
      vocabulary: [
        { word: "أب", transliteration: "Ab", meaning: "Father" },
        { word: "أم", transliteration: "Um", meaning: "Mother" },
        { word: "أخ", transliteration: "Akh", meaning: "Brother" },
        { word: "أخت", transliteration: "Ukht", meaning: "Sister" },
        { word: "ابن", transliteration: "Ibn", meaning: "Son" },
        { word: "بنت", transliteration: "Bint", meaning: "Daughter" },
        { word: "صديق", transliteration: "Sadiq", meaning: "Friend" }
      ]
    },

    7: {
      level: "Beginner",
      title: "Common Nouns - School & Work",
      content: `
        Learn vocabulary for school and workplace environments.
        
        SCHOOL (المدرسة - Al-Madrasa):
        
        مدرسة (Madrasa) - School
        • Example: أنا ذاهب إلى المدرسة (I'm going to school)
        
        معلم (Mu'allim) - Teacher (male)
        • Example: معلمي طيب (My teacher is good)
        
        معلمة (Mu'allima) - Teacher (female)
        
        طالب (Talib) - Student (male)
        • Plural: طلاب (Tullab)
        • Example: نحن طلاب جيدون (We are good students)
        
        طالبة (Taliba) - Student (female)
        • Plural: طالبات (Talibat)
        
        كتاب (Kitaab) - Book
        • Plural: كتب (Kutub)
        • Example: الكتاب مفيد (The book is useful)
        
        قلم (Qalam) - Pen
        • Plural: أقلام (Aqlam)
        
        دفتر (Daftar) - Notebook
        • Plural: دفاتر (Dafatir)
        
        مكتب (Maktab) - Desk/Office
        • Plural: مكاتب (Makatib)
        
        سبورة (Sabora) - Blackboard
        • Example: الكتابة على السبورة (Writing on the board)
        
        فصل (Fasl) - Classroom
        • Plural: فصول (Fusul)
        
        درس (Dars) - Lesson
        • Plural: دروس (Durus)
        • Example: درس اليوم صعب (Today's lesson is difficult)
        
        رياضيات (Riyadiyat) - Mathematics
        • Example: أحب الرياضيات (I love math)
        
        لغة عربية (Lugha Arabiyya) - Arabic Language
        
        لغة إنجليزية (Lugha Injiliziyya) - English Language
        
        تاريخ (Tarikh) - History
        
        جغرافيا (Jughrafya) - Geography
        
        علوم (Ulum) - Science
        
        دين (Deen) - Religion
        
        WORKPLACE (مكان العمل - Makan al-Amal):
        
        مكتب (Maktab) - Office
        
        مصنع (Masna) - Factory
        
        مستشفى (Mustashfa) - Hospital
        
        بيت (Bayt) - House
        
        متجر (Mutajjar) - Store
        
        مطعم (Mat'am) - Restaurant
        
        موظف (Muwazzaf) - Employee
        
        مدير (Mudeer) - Manager/Director
        
        عامل (Aamil) - Worker
        
        طبيب (Tabib) - Doctor
        
        ممرضة (Mumarrida) - Nurse
        
        محامي (Muhami) - Lawyer
        
        مهندس (Muhandis) - Engineer
        
        عمل (Amal) - Work
        • Example: أنا أحب عملي (I love my work)
        
        وظيفة (Wazifah) - Job/Position
        
        راتب (Rataib) - Salary
        
        📝 PRACTICE:
        1. Describe your school or workplace in Arabic
        2. Introduce your teacher/boss
        3. List your favorite subjects or jobs
        
        EXAMPLE DIALOGUE:
        "أنا طالب في المدرسة. معلمي يعلم الرياضيات وهو طيب جداً."
        Translation: "I'm a student at school. My teacher teaches mathematics and he's very good."
      `,
      vocabulary: [
        { word: "مدرسة", transliteration: "Madrasa", meaning: "School" },
        { word: "معلم", transliteration: "Mu'allim", meaning: "Teacher" },
        { word: "طالب", transliteration: "Talib", meaning: "Student" },
        { word: "كتاب", transliteration: "Kitaab", meaning: "Book" },
        { word: "قلم", transliteration: "Qalam", meaning: "Pen" },
        { word: "درس", transliteration: "Dars", meaning: "Lesson" }
      ]
    },

    8: {
      level: "Beginner",
      title: "Simple Verbs - Present Tense (He/She)",
      content: `
        Learn the foundation of Arabic verbs - essential for making sentences!
        
        VERB BASICS:
        
        Arabic verbs are structured around a ROOT (usually 3 letters).
        The root فَعَلَ (F-A-L) is used as a model: it means "to do"
        
        PRESENT TENSE CONJUGATION (He/She form):
        
        يفعل (Yaf'al) - He does / does do
        تفعل (Taf'al) - She does / does do
        
        COMMON VERBS WITH MEANINGS:
        
        1. ذهب - يذهب (Dhahaba - Yadhab) - To go
           • Present: يذهب (He/She goes)
           • Example: هو يذهب إلى المدرسة (He goes to school)
        
        2. عاد - يعود (Aada - Ya'ood) - To return
           • Present: يعود (He/She returns)
           • Example: هي تعود إلى البيت (She returns home)
        
        3. أكل - يأكل (Akala - Ya'akul) - To eat
           • Present: يأكل (He/She eats)
           • Example: الولد يأكل الطعام (The boy eats food)
        
        4. شرب - يشرب (Shariba - Yashrab) - To drink
           • Present: يشرب (He/She drinks)
           • Example: البنت تشرب الماء (The girl drinks water)
        
        5. نام - ينام (Nama - Yanam) - To sleep
           • Present: ينام (He/She sleeps)
           • Example: الطفل ينام الآن (The child sleeps now)
        
        6. استيقظ - يستيقظ (Istayqaza - Yastayqiz) - To wake up
           • Present: يستيقظ (He/She wakes up)
           • Example: هي تستيقظ في الصباح (She wakes up in the morning)
        
        7. درس - يدرس (Darasa - Yadrus) - To study
           • Present: يدرس (He/She studies)
           • Example: الطالب يدرس الرياضيات (The student studies math)
        
        8. كتب - يكتب (Kataba - Yaktub) - To write
           • Present: يكتب (He/She writes)
           • Example: المعلم يكتب على السبورة (The teacher writes on the board)
        
        9. قرأ - يقرأ (Qara'a - Yaqra) - To read
           • Present: يقرأ (He/She reads)
           • Example: البنت تقرأ كتاباً (The girl reads a book)
        
        10. فهم - يفهم (Fahima - Yafhamu) - To understand
            • Present: يفهم (He/She understands)
            • Example: هو يفهم الدرس (He understands the lesson)
        
        11. تكلم - يتكلم (Takallama - Yatakallam) - To speak
            • Present: يتكلم (He/She speaks)
            • Example: هي تتكلم اللغة العربية (She speaks Arabic)
        
        12. سمع - يسمع (Sami'a - Yasma') - To hear/listen
            • Present: يسمع (He/She hears)
            • Example: الولد يسمع الموسيقى (The boy listens to music)
        
        13. رأى - يرى (Ra'a - Yara) - To see
            • Present: يرى (He/She sees)
            • Example: هي ترى الطائر (She sees the bird)
        
        14. قال - يقول (Qala - Yaqul) - To say/speak
            • Present: يقول (He/She says)
            • Example: المعلم يقول الحقيقة (The teacher tells the truth)
        
        15. عمل - يعمل (Amila - Ya'mal) - To work
            • Present: يعمل (He/She works)
            • Example: أبي يعمل مهندساً (My father works as an engineer)
        
        SENTENCE STRUCTURE:
        
        Simple Present Tense Sentences:
        
        Subject (optional) + Verb + Object/Complement
        
        Examples:
        • هو يأكل التفاح (He eats the apple)
        • البنت تشرب الحليب (The girl drinks milk)
        • الطالب يدرس جيداً (The student studies well)
        • المعلم يكتب الدرس (The teacher writes the lesson)
        
        📝 PRACTICE EXERCISE:
        
        Conjugate these verbs in "He" and "She" forms:
        1. ذهب (to go)
        2. أكل (to eat)
        3. درس (to study)
        4. كتب (to write)
        5. قرأ (to read)
        
        Create sentences with verbs:
        "المعلم يعلم الطلاب العربية"
        "البنات يدرسن جيداً"
        "الولد يلعب في الحديقة"
        
        Try translating these sentences:
        1. "She reads books" - __________
        2. "He goes to school" - __________
        3. "The girl eats bread" - __________
      `,
      vocabulary: [
        { word: "ذهب", transliteration: "Dhahaba", meaning: "To go" },
        { word: "أكل", transliteration: "Akala", meaning: "To eat" },
        { word: "شرب", transliteration: "Shariba", meaning: "To drink" },
        { word: "درس", transliteration: "Darasa", meaning: "To study" },
        { word: "كتب", transliteration: "Kataba", meaning: "To write" },
        { word: "قرأ", transliteration: "Qara'a", meaning: "To read" }
      ]
    },

    // ... Continue with lessons 9-15 for Beginner level
    // ... Then Level 2: Intermediate (Lessons 16-30)
    // ... Then Level 3: Advanced (Lessons 31-40)

    9: {
      level: "Beginner",
      title: "Daily Routine - A Day in the Life",
      content: `
        Learn to describe your daily activities in Arabic!
        
        DAILY SCHEDULE:
        
        الصباح (Al-Sabah) - Morning
        • 5:00 AM - الفجر (Al-Fajr) - Dawn/Early morning
          - استيقظت من النوم (I woke up from sleep)
          - قمت بصلاة الفجر (I prayed Fajr prayer)
        
        • 6:00 AM - الصباح (Al-Sabah) - Morning
          - أكلت الإفطار (I ate breakfast)
          - استعددت للمدرسة (I prepared for school)
        
        • 7:00-8:00 AM - الذهاب (Al-Dhihab) - Leaving/Going
          - ذهبت إلى المدرسة (I went to school)
          - ركبت الحافلة (I took the bus)
        
        النهار (Al-Nhar) - Daytime
        • 8:00 AM - 12:00 PM - الدراسة (Al-Dirasa) - School/Study
          - درست الدروس (I studied lessons)
          - اجتمعت مع الأصدقاء (I met with friends)
          - لعبت في الملعب (I played in the field)
        
        • 12:00 PM - الغداء (Al-Ghada) - Lunch
          - أكلت الغداء (I ate lunch)
          - رحت إلى البيت (I went home)
        
        المساء (Al-Masa) - Evening
        • 2:00-3:00 PM - الراحة (Al-Raha) - Rest
          - نمت قليلاً (I slept a bit)
          - شاهدت التلفاز (I watched TV)
        
        • 4:00-6:00 PM - العمل (Al-Amal) - Work/Studies
          - واجب البيت (Homework)
          - مراجعة الدروس (Reviewing lessons)
          - ركضت في الحديقة (I ran in the park)
        
        الليل (Al-Layl) - Night
        • 6:00 PM - العشاء (Al-Asha) - Dinner
          - أكلت العشاء (I ate dinner)
          - جلست مع العائلة (I sat with family)
        
        • 7:00-10:00 PM - المساء (Al-Masa) - Evening/Night
          - ذاكرت الدروس (I studied lessons)
          - مارست الرياضة (I exercised)
          - قرأت كتاباً (I read a book)
        
        • 10:00 PM - النوم (Al-Nawm) - Sleep
          - نمت مبكراً (I slept early)
          - كان يوماً جيداً (It was a good day)
        
        DAILY ROUTINE VERBS:
        
        استيقظ (Istayqaza) - To wake up
        نهض (Nahada) - To get up
        اغتسل (Ightasala) - To wash/bathe
        لبس (Labisa) - To wear/dress
        أكل (Akala) - To eat
        شرب (Shariba) - To drink
        ذهب (Dhahaba) - To go
        ركب (Rakiba) - To ride
        جلس (Jalasa) - To sit
        عمل (Amila) - To work
        لعب (La'iba) - To play
        درس (Darasa) - To study
        قرأ (Qara'a) - To read
        كتب (Kataba) - To write
        ركض (Rakada) - To run
        ساعد (Sa'ada) - To help
        نام (Nama) - To sleep
        
        DAILY CONVERSATION:
        
        Person A: "كيف كان يومك؟"
        (How was your day?)
        
        Person B: "كان يوماً جميلاً، شكراً على السؤال"
        (It was a beautiful day, thanks for asking)
        
        Person A: "ماذا فعلت في الصباح؟"
        (What did you do in the morning?)
        
        Person B: "استيقظت في السادسة وأكلت الإفطار ثم ذهبت إلى المدرسة"
        (I woke up at six, ate breakfast, then went to school)
        
        📝 PRACTICE:
        
        Describe your daily routine:
        1. Morning activities
        2. School/work activities
        3. Evening activities
        4. Before sleep routine
        
        Example paragraph:
        "أنا استيقظت في السابعة صباحاً. ثم غسلت وجهي ولبست ملابسي.
        بعد ذلك أكلت الإفطار وذهبت إلى المدرسة على الحافلة.
        في المدرسة درست الدروس ولعبت مع الأصدقاء.
        في المساء عدت إلى البيت وأكلت الغداء.
        بعد الغداء ذاكرت الدروس ثم لعبت وشاهدت التلفاز.
        أخيراً نمت في الساعة التاسعة."
      `,
      vocabulary: [
        { word: "صباح", transliteration: "Sabah", meaning: "Morning" },
        { word: "مساء", transliteration: "Masa", meaning: "Evening" },
        { word: "ليل", transliteration: "Layl", meaning: "Night" },
        { word: "يوم", transliteration: "Yawm", meaning: "Day" },
        { word: "ساعة", transliteration: "Sa'a", meaning: "Hour/Clock" },
        { word: "إفطار", transliteration: "Iftaar", meaning: "Breakfast" }
      ]
    },

    10: {
      level: "Beginner",
      title: "Food & Eating",
      content: `
        Learn food vocabulary and discuss meals in Arabic!
        
        MEALS:
        
        إفطار (Iftaar) - Breakfast
        • وجبة الإفطار (Wajbat al-Iftaar)
        • Example: أكلت إفطاراً لذيذاً (I ate a delicious breakfast)
        
        غداء (Ghada) - Lunch
        • وجبة الغداء
        • Example: الغداء في الظهيرة (Lunch is at noon)
        
        عشاء (Asha) - Dinner
        • وجبة العشاء
        • Example: نأكل العشاء في المساء (We eat dinner in the evening)
        
        BREAD & GRAINS:
        
        خبز (Khubz) - Bread
        • خبز أسمر (Brown bread)
        • خبز أبيض (White bread)
        
        أرز (Arz) - Rice
        • مثل: أرز بسمتي (Basmati rice)
        
        معكرونة (Ma'karona) - Pasta/Noodles
        
        دقيق (Daqiq) - Flour
        
        FRUITS:
        
        تفاح (Tuffah) - Apple
        • أحمر (Red)
        • أخضر (Green)
        
        برتقال (Burtaqal) - Orange
        
        موز (Mawz) - Banana
        
        عنب (Inab) - Grapes
        
        تمر (Tamr) - Dates (very Islamic significance)
        
        جوافة (Guava)
        
        شمام (Shamam) - Cantaloupe/Melon
        
        بطيخ (Battikh) - Watermelon
        
        ليمون (Laymun) - Lemon
        
        VEGETABLES:
        
        خضار (Khidar) - Vegetables
        
        طماطم (Tamatim) - Tomato/Tomatoes
        
        خيار (Khiyar) - Cucumber
        
        جزر (Jazar) - Carrot
        
        بصل (Basal) - Onion
        
        ثوم (Thawm) - Garlic
        
        ملفوف (Malfuf) - Cabbage
        
        سبانخ (Sabanikh) - Spinach
        
        بطاطس (Batatas) - Potato
        
        PROTEINS:
        
        لحم (Lahm) - Meat
        • لحم الدجاج (Chicken meat)
        • لحم الأغنام (Lamb meat)
        • لحم البقر (Beef)
        
        دجاج (Dajaj) - Chicken
        
        سمك (Samak) - Fish
        
        بيض (Bayd) - Eggs
        
        جبن (Jubn) - Cheese
        
        حليب (Haleb) - Milk
        
        زبادي (Zabadi) - Yogurt
        
        DRINKS:
        
        ماء (Maa) - Water
        
        شاي (Chai) - Tea
        
        قهوة (Qahwa) - Coffee
        
        عصير (Asir) - Juice
        • عصير البرتقال (Orange juice)
        • عصير التفاح (Apple juice)
        
        حليب (Haleb) - Milk
        
        لبن (Laban) - Milk (cultured)
        
        TASTES & FLAVORS:
        
        حلو (Hilw) - Sweet
        • Example: الحلوى (Sweets/Candies)
        
        مالح (Malih) - Salty
        
        حامض (Hamid) - Sour
        
        مرّ (Murr) - Bitter
        
        لاذع (La'i') - Hot/Spicy
        
        لذيذ (Latif) - Delicious
        
        طيب (Tayyib) - Good/Tasty
        
        COOKING VERBS:
        
        طبخ (Tabakha) - To cook
        • المرأة تطبخ الطعام (The woman cooks food)
        
        قلي (Qalya) - To fry
        
        شوي (Shawya) - To grill/roast
        
        طحن (Tahana) - To grind
        
        قطع (Qata'a) - To cut
        
        FOOD CONVERSATION:
        
        Person A: "هل تحب الطعام العربي؟"
        (Do you like Arabic food?)
        
        Person B: "نعم، أحب الأرز والدجاج"
        (Yes, I love rice and chicken)
        
        Person A: "ما تفضل أن تأكل؟"
        (What do you prefer to eat?)
        
        Person B: "أفضل الخضار والفواكه"
        (I prefer vegetables and fruits)
        
        📝 PRACTICE:
        
        1. List your favorite foods in Arabic
        2. Describe a meal you had yesterday
        3. Talk about food preferences
        4. Create a simple recipe in Arabic
        
        EXAMPLE RECIPE:
        "دجاج مشوي (Grilled Chicken)"
        1. قطع الدجاج (Cut the chicken)
        2. أضف الملح والفلفل (Add salt and pepper)
        3. ضع الدجاج على الشواية (Put chicken on grill)
        4. اشوِ لمدة 20 دقيقة (Grill for 20 minutes)
        5. قدم وهو ساخن (Serve while hot)
      `,
      vocabulary: [
        { word: "طعام", transliteration: "Ta'am", meaning: "Food" },
        { word: "خبز", transliteration: "Khubz", meaning: "Bread" },
        { word: "تفاح", transliteration: "Tuffah", meaning: "Apple" },
        { word: "ماء", transliteration: "Maa", meaning: "Water" },
        { word: "دجاج", transliteration: "Dajaj", meaning: "Chicken" },
        { word: "لحم", transliteration: "Lahm", meaning: "Meat" }
      ]
    },

    // Lessons 11-15 would continue similarly with more beginner content
    // Lessons 16-30 would cover Intermediate level
    // Lessons 31-40 would cover Advanced level
  },

  // Helper function to get lesson
  getLesson: function(lessonNumber) {
    return this.lessons[lessonNumber] || null;
  },

  // Helper function to get all lessons for a level
  getLessonsByLevel: function(level) {
    return Object.values(this.lessons).filter(l => l.level === level);
  },

  // Progress tracking
  userProgress: {
    currentLesson: 1,
    completedLessons: [],
    score: 0,
    studyTime: 0 // in minutes
  },

  // Mark lesson as complete
  completeLesson: function(lessonNumber) {
    if(!this.userProgress.completedLessons.includes(lessonNumber)) {
      this.userProgress.completedLessons.push(lessonNumber);
    }
    if(lessonNumber < 40) {
      this.userProgress.currentLesson = lessonNumber + 1;
    }
  },

  // Get progress percentage
  getProgressPercentage: function() {
    return Math.round((this.userProgress.completedLessons.length / this.courseInfo.totalLessons) * 100);
  }
};

console.log('Arabic Learning Course loaded successfully!');
console.log('Total lessons available:', ARABIC_COURSE.courseInfo.totalLessons);
