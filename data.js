// data.js
const skillData = [
 {
    id: "skill-1",
    category: "Hard Skill",
    title: "Galatama Fishing",
    desc: "Competitive pond fishing where timing, bait choice, and reading the water matter more than luck.",
    image: "https://images.unsplash.com/photo-1541742425281-c1d3fc8aff96?auto=format&fit=crop&w=800&q=80",
    level: "Intermediate",
    duration: "2 Weeks",
    instructor: "Bram (Galatama Angler)",
    content: "Learn how to read pond conditions, mix bait for competitive stocking, and adjust casting strategy as the session progresses. <strong>Built around real match-day scenarios</strong>, not just casual weekend fishing.",
    specs: {
        "Equipment": "Rod, Reel, Bait Mix",
        "Focus": "Competitive Pond Fishing",
        "Prerequisites": "Basic Casting Skills",
        "Output": "Match-Ready Fishing Strategy"
    },
    modules: [
        "Module 1: Reading Pond Conditions & Fish Behavior",
        "Module 2: Mixing Bait for Stocked Ponds",
        "Module 3: Casting Position & Timing Strategy",
        "Module 4: Match-Day Mental Game & Adjustments"
    ]
  },
  { 
    id: "skill-2",
    category: "Hard Skill",
    title: "Basic Cooking for Beginners",
    desc: "Fundamental kitchen techniques that level up your home cooking, no more burnt or over-salted dishes.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "2 Weeks",
    instructor: "Rani (Home Chef)",
    content: "Learn essential cutting techniques, sauteing, and consistent seasoning measurements. <strong>Focused on building a clean, efficient kitchen routine.</strong> Perfect for anyone just starting to cook on their own.",
    specs: {
      "Equipment": "Pan, Knife, Cutting Board",
      "Focus": "Everyday Home Cooking",
      "Prerequisites": "None",
      "Output": "3 Signature Dishes"
    },
    modules: [
      "Module 1: Cutting & Ingredient Prep Techniques",
      "Module 2: Sauteing Basics and Balanced Flavor",
      "Module 3: Cooking Time Management",
      "Module 4: Simple Plating"
    ]
  },
  {
    id: "skill-3",
    category: "Soft Skill",
    title: "Public Speaking & Presentation",
    desc: "Speak in front of a crowd without shaking, from office meetings to family gatherings.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    level: "Intermediate",
    duration: "3 Weeks",
    instructor: "Wulan (MC & Trainer)",
    content: "Practice message structure, breath control, and confident body language. <strong>Trained through hands-on presentation simulations.</strong> Not just communication theory.",
    specs: {
      "Focus": "Presentations & Public Speaking",
      "Method": "Practice & Video Recording",
      "Prerequisites": "None",
      "Output": "1 Confident Presentation"
    },
    modules: [
      "Module 1: Clear Message Structure",
      "Module 2: Voice and Breath Control",
      "Module 3: Body Language & Eye Contact",
      "Module 4: Live Presentation Simulation"
    ]
  },
  {
    id: "skill-4",
    category: "Hard Skill",
    title: "Smartphone Photography",
    desc: "Take aesthetic photos using just your phone, no need for an expensive camera.",
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "2 Weeks",
    instructor: "Reza (Content Creator)",
    content: "Learn composition, natural lighting, and light editing straight from your phone. <strong>Focused on consistent results</strong>, not just lucky angles.",
    specs: {
      "Equipment": "Smartphone",
      "Focus": "Everyday & Social Media Photos",
      "Prerequisites": "None",
      "Output": "10-Photo Mini Portfolio"
    },
    modules: [
      "Module 1: Basic Composition & Framing",
      "Module 2: Working with Natural Light",
      "Module 3: Light Editing on Mobile",
      "Module 4: Consistent Social Media Feed"
    ]
  },
  {
    id: "skill-5",
    category: "Soft Skill",
    title: "Journaling & Emotional Management",
    desc: "Daily writing as a simple way to understand and manage your own feelings.",
    image: "https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "2 Weeks",
    instructor: "Sasha (Wellness Coach)",
    content: "Simple journaling techniques to release mental clutter and recognize emotional patterns. <strong>Light daily practice</strong>, no writing experience needed.",
    specs: {
      "Tools": "Notebook / Notes App",
      "Focus": "Daily Self-Reflection",
      "Prerequisites": "None",
      "Output": "10-Minute Journaling Habit"
    },
    modules: [
      "Module 1: Why Journaling Matters",
      "Module 2: Daily Writing Prompts",
      "Module 3: Recognizing Emotional Patterns",
      "Module 4: Turning It Into a Habit"
    ]
  },
  {
    id: "skill-6",
    category: "Soft Skill",
    title: "Meditation & Mindfulness",
    desc: "Practice focus and calm amid a busy schedule, with just 10 minutes a day.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "2 Weeks",
    instructor: "Adit (Mindfulness Practitioner)",
    content: "An introduction to breathing techniques and short focus exercises you can do anywhere. <strong>Designed for beginners</strong>, no prior meditation experience required.",
    specs: {
      "Equipment": "No special equipment needed",
      "Focus": "Daily Calm & Focus",
      "Prerequisites": "None",
      "Output": "10-Minute Meditation Routine"
    },
    modules: [
      "Module 1: Basics of Mindful Breathing",
      "Module 2: Simple Body Scan",
      "Module 3: Managing Wandering Thoughts",
      "Module 4: Building a Daily Routine"
    ]
  },
  {
    id: "skill-7",
    category: "Hard Skill",
    title: "Home & Urban Gardening",
    desc: "Grow your own vegetables and herbs even with limited space at home.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "3 Weeks",
    instructor: "Tari (Urban Farmer)",
    content: "Learn planting media, watering schedules, and potted plant care for small spaces. <strong>Practical for houses and apartments alike.</strong>",
    specs: {
      "Equipment": "Pots, Planting Media, Seeds",
      "Focus": "Vegetables & Kitchen Herbs",
      "Prerequisites": "None",
      "Output": "3 Ready-to-Harvest Pots"
    },
    modules: [
      "Module 1: Choosing the Right Planting Media",
      "Module 2: Watering & Fertilizing Schedule",
      "Module 3: Handling Common Pests",
      "Module 4: Harvesting and Ongoing Care"
    ]
  },
  {
    id: "skill-8",
    category: "Hard Skill",
    title: "Manual Brew Coffee",
    desc: "Make coffee as good as your favorite cafe, right from home with simple manual brewing tools.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    level: "Intermediate",
    duration: "2 Weeks",
    instructor: "Fajar (Barista)",
    content: "Learn coffee-to-water ratio, temperature, and pouring technique for consistent results. <strong>Using manual brewers like V60 or French press.</strong>",
    specs: {
      "Equipment": "V60 / French Press",
      "Focus": "Quality Home-Brewed Coffee",
      "Prerequisites": "None",
      "Output": "Personal Brew Recipe"
    },
    modules: [
      "Module 1: Getting to Know Manual Brewers",
      "Module 2: Coffee-to-Water Ratio",
      "Module 3: Pouring Technique and Timing",
      "Module 4: Adjusting Flavor to Taste"
    ]
  },
  {
    id: "skill-9",
    category: "Soft Skill",
    title: "Decluttering & Home Organization",
    desc: "Tidy up your home to feel more spacious and comfortable, without constantly buying new shelves.",
    image: "https://images.unsplash.com/photo-1489516408517-0c0a15662682?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "2 Weeks",
    instructor: "Nadia (Home Organizer)",
    content: "Simple methods to sort belongings, arrange spaces, and keep your home tidy. <strong>A system built to last</strong>, not just a one-time cleanup.",
    specs: {
      "Equipment": "Storage Boxes, Labels",
      "Focus": "Living Room, Bedroom, Kitchen",
      "Prerequisites": "None",
      "Output": "Home Storage System"
    },
    modules: [
      "Module 1: Sorting What to Keep",
      "Module 2: Organizing Spaces by Function",
      "Module 3: Labeling and Categorizing System",
      "Module 4: Daily Tidying Habits"
    ]
  },
  {
    id: "skill-10",
    category: "Hard Skill",
    title: "Basic First Aid",
    desc: "Essential steps for handling minor injuries and emergencies before medical help arrives.",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",
    level: "Beginner",
    duration: "2 Weeks",
    instructor: "Dr. Fina (Health Practitioner)",
    content: "Learn wound care, bandaging, and basic steps for handling minor emergencies at home. <strong>Practical material for everyday needs.</strong>",
    specs: {
      "Equipment": "First Aid Kit",
      "Focus": "Minor Emergency Response",
      "Prerequisites": "None",
      "Output": "Personal First Aid Guide"
    },
    modules: [
      "Module 1: Essential First Aid Kit Items",
      "Module 2: Treating Minor Wounds",
      "Module 3: Basic Emergency Response Steps",
      "Module 4: When to Seek Medical Care"
    ]
  },
  {
    id: "skill-11",
    category: "Soft Skill",
    title: "Everyday English Conversation",
    desc: "Speak English confidently for work and travel needs.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    level: "Intermediate",
    duration: "4 Weeks",
    instructor: "Miss Clara (English Tutor)",
    content: "Practical conversation practice for work situations, meetings, and travel. <strong>Focused on speaking fluency</strong>, not complicated grammar memorization.",
    specs: {
      "Focus": "Speaking & Listening",
      "Method": "Role Play & Conversation Practice",
      "Prerequisites": "Basic English",
      "Output": "Fluent Conversation in 5 Topics"
    },
    modules: [
      "Module 1: Workplace Conversations",
      "Module 2: Everyday Small Talk",
      "Module 3: English for Traveling",
      "Module 4: Active Listening Practice"
    ]
  },
  {
    id: "skill-12",
    category: "Hard Skill",
    title: "DIY Home Furniture Repair",
    desc: "Fix your own furniture and household items, saving money without always calling a handyman.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    level: "Intermediate",
    duration: "3 Weeks",
    instructor: "Yoga (Carpenter)",
    content: "Learn basic techniques for fixing hinges, wobbly tables, and simple wood finishing. <strong>Hands-on practice using household tools.</strong>",
    specs: {
      "Equipment": "Screwdriver, Drill, Sandpaper",
      "Focus": "Furniture & Household Items",
      "Prerequisites": "None",
      "Output": "1 Completed Repair Project"
    },
    modules: [
      "Module 1: Must-Have Basic Tools",
      "Module 2: Fixing Hinges and Joints",
      "Module 3: Solving Wobbly Furniture",
      "Module 4: Finishing and Wood Care"
    ]
  },
];