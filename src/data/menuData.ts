// Pakistani restaurant menu data with authentic dishes and PKR prices

export const menuCategories = {
  en: ["All", "Appetizers", "Main Course", "Desserts", "Beverages"],
  ur: ["تمام", "اسٹارٹرز", "بنیادی کھانا", "میٹھے", "مشروبات"]
};

export const menuItems = [
  {
    id: 1,
    name: { en: "Chicken Karahi", ur: "چکن کڑاہی" },
    description: { 
      en: "Traditional chicken karahi cooked with fresh tomatoes, green chilies and aromatic spices",
      ur: "تازہ ٹماٹر، ہری مرچ اور خوشبودار مصالحوں کے ساتھ بنی روایتی چکن کڑاہی" 
    },
    price: 1200,
    category: { en: "Main Course", ur: "بنیادی کھانا" },
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    prepTime: { en: "25-30 min", ur: "25-30 منٹ" },
    status: "available",
    isPopular: true
  },
  {
    id: 2,
    name: { en: "Chicken Biryani", ur: "چکن بریانی" },
    description: { 
      en: "Fragrant basmati rice layered with spiced chicken, served with raita and shorba",
      ur: "خوشبودار باسمتی چاول جو مسالہ دار چکن کے ساتھ تہہ دار، رائتہ اور شوربہ کے ساتھ" 
    },
    price: 800,
    category: { en: "Main Course", ur: "بنیادی کھانا" },
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop&crop=center",
    rating: 4.9,
    prepTime: { en: "35-40 min", ur: "35-40 منٹ" },
    status: "available",
    isPopular: true
  },
  {
    id: 3,
    name: { en: "Beef Seekh Kebab", ur: "بیف سیخ کباب" },
    description: { 
      en: "Grilled minced beef kebabs with traditional spices, served with naan and chutney",
      ur: "روایتی مصالحوں کے ساتھ گرل شدہ قیمہ کباب، نان اور چٹنی کے ساتھ" 
    },
    price: 600,
    category: { en: "Appetizers", ur: "اسٹارٹرز" },
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    prepTime: { en: "20-25 min", ur: "20-25 منٹ" },
    status: "available",
    isPopular: true
  },
  {
    id: 4,
    name: { en: "Mutton Korma", ur: "مٹن قورمہ" },
    description: { 
      en: "Slow-cooked tender mutton in rich yogurt-based curry with aromatic spices",
      ur: "خوشبودار مصالحوں کے ساتھ دہی کی بنیاد پر بنا ہوا نرم مٹن کا سالن" 
    },
    price: 1500,
    category: { en: "Main Course", ur: "بنیادی کھانا" },
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    prepTime: { en: "40-45 min", ur: "40-45 منٹ" },
    status: "available",
    isPopular: false
  },
  {
    id: 5,
    name: { en: "Fish Fry", ur: "فش فرائی" },
    description: { 
      en: "Crispy fried fish marinated in spices, served with salad and mint chutney",
      ur: "مصالحوں میں میری نیٹ کیا ہوا کرکرا تلا ہوا مچھلی، سلاد اور پودینہ چٹنی کے ساتھ" 
    },
    price: 900,
    category: { en: "Main Course", ur: "بنیادی کھانا" },
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center",
    rating: 4.5,
    prepTime: { en: "15-20 min", ur: "15-20 منٹ" },
    status: "low-stock",
    isPopular: false
  },
  {
    id: 6,
    name: { en: "Chicken Tikka", ur: "چکن ٹکہ" },
    description: { 
      en: "Grilled chicken pieces marinated in yogurt and spices, served with onions",
      ur: "دہی اور مصالحوں میں میری نیٹ کیے ہوئے گرل چکن کے ٹکڑے، پیاز کے ساتھ" 
    },
    price: 700,
    category: { en: "Appetizers", ur: "اسٹارٹرز" },
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop&crop=center",
    rating: 4.8,
    prepTime: { en: "25-30 min", ur: "25-30 منٹ" },
    status: "available",
    isPopular: true
  },
  {
    id: 7,
    name: { en: "Daal Makhani", ur: "دال مکھنی" },
    description: { 
      en: "Creamy black lentils slow-cooked with butter and cream, rich and flavorful",
      ur: "مکھن اور کریم کے ساتھ آہستہ پکی ہوئی کریمی کالی دال، امیر اور ذائقہ دار" 
    },
    price: 400,
    category: { en: "Main Course", ur: "بنیادی کھانا" },
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center",
    rating: 4.4,
    prepTime: { en: "30-35 min", ur: "30-35 منٹ" },
    status: "available",
    isPopular: false
  },
  {
    id: 8,
    name: { en: "Gulab Jamun", ur: "گلاب جامن" },
    description: { 
      en: "Traditional sweet dumplings made from milk solids, soaked in sugar syrup",
      ur: "دودھ کی کھویا سے بنے روایتی میٹھے گولے، چینی کے شربت میں بھیگے ہوئے" 
    },
    price: 250,
    category: { en: "Desserts", ur: "میٹھے" },
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop&crop=center",
    rating: 4.7,
    prepTime: { en: "5-10 min", ur: "5-10 منٹ" },
    status: "available",
    isPopular: true
  },
  {
    id: 9,
    name: { en: "Fresh Lime Water", ur: "تازہ لیمو پانی" },
    description: { 
      en: "Refreshing lime water with mint and a touch of black salt",
      ur: "پودینہ اور تھوڑا سا کالا نمک کے ساتھ تازہ لیمو پانی" 
    },
    price: 150,
    category: { en: "Beverages", ur: "مشروبات" },
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop&crop=center",
    rating: 4.3,
    prepTime: { en: "2-3 min", ur: "2-3 منٹ" },
    status: "available",
    isPopular: false
  },
  {
    id: 10,
    name: { en: "Kashmiri Chai", ur: "کشمیری چائے" },
    description: { 
      en: "Pink tea with cardamom, cinnamon and almonds, a specialty from Kashmir",
      ur: "الائچی، دارچینی اور بادام کے ساتھ گلابی چائے، کشمیر کی خصوصیت" 
    },
    price: 200,
    category: { en: "Beverages", ur: "مشروبات" },
    image: "https://images.unsplash.com/photo-1571934811297-95c7b81ea500?w=400&h=300&fit=crop&crop=center",
    rating: 4.6,
    prepTime: { en: "5-8 min", ur: "5-8 منٹ" },
    status: "available",
    isPopular: true
  },
  {
    id: 11,
    name: { en: "Chapli Kebab", ur: "چپلی کباب" },
    description: { 
      en: "Peshawar-style flat kebab with tomatoes, onions and special spices",
      ur: "ٹماٹر، پیاز اور خاص مصالحوں کے ساتھ پشاوری طریقے کا چپٹا کباب" 
    },
    price: 550,
    category: { en: "Appetizers", ur: "اسٹارٹرز" },
    image: "https://images.unsplash.com/photo-1607330289090-22e5c1711014?w=400&h=300&fit=crop&crop=center",
    rating: 4.5,
    prepTime: { en: "18-22 min", ur: "18-22 منٹ" },
    status: "available",
    isPopular: true
  },
  {
    id: 12,
    name: { en: "Kheer", ur: "کھیر" },
    description: { 
      en: "Creamy rice pudding with milk, sugar, cardamom and garnished with pistachios",
      ur: "دودھ، چینی، الائچی کے ساتھ کریمی چاول کا حلوہ، پستے سے سجا ہوا" 
    },
    price: 300,
    category: { en: "Desserts", ur: "میٹھے" },
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=400&h=300&fit=crop&crop=center",
    rating: 4.4,
    prepTime: { en: "8-12 min", ur: "8-12 منٹ" },
    status: "available",
    isPopular: false
  }
];

export const pakistaniNames = [
  "Muhammad Ali Khan", "Fatima Ahmed", "Hassan Sheikh", "Ayesha Malik",
  "Omar Hussain", "Zainab Iqbal", "Ahmad Raza", "Sadia Parveen",
  "Bilal Sharif", "Mariam Qureshi", "Faisal Baig", "Samina Khatoon",
  "Tariq Mahmood", "Nadia Butt", "Imran Siddiqui", "Hina Nazir",
  "Shahid Afridi", "Rubina Ashraf", "Kamran Akmal", "Saira Bano"
];

export const pakistaniTableNames = [
  "Khan Family", "Ahmed Party", "Malik Group", "Sheikh Sahib",
  "Hussain Brothers", "Qureshi Family", "Baig Wedding Party", "Parveen Group",
  "Sharif Family", "Iqbal Reunion", "Mahmood Anniversary", "Nazir Celebration",
  "Siddiqui Gathering", "Butt Family Dinner", "Afridi Team", "Ashraf Group",
  "Akmal Cricket Team", "Bano Ladies Club", "Raza Business Meet", "Khatoon Family"
];