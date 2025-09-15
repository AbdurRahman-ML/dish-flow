import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface Translations {
  [key: string]: {
    en: string;
    ur: string;
  };
}

const translations: Translations = {
  // Navigation
  dashboard: { en: 'Dashboard', ur: 'ڈیش بورڈ' },
  menu: { en: 'Menu', ur: 'مینو' },
  orders: { en: 'Orders', ur: 'آرڈرز' },
  tables: { en: 'Tables', ur: 'میزیں' },
  staff: { en: 'Staff', ur: 'عملہ' },
  analytics: { en: 'Analytics', ur: 'تجزیات' },
  settings: { en: 'Settings', ur: 'ترتیبات' },
  
  // Dashboard
  welcomeBack: { en: 'Welcome back, let\'s serve some love today!', ur: 'واپس آئیں، آج کچھ محبت پیش کریں!' },
  totalRevenue: { en: 'Total Revenue', ur: 'کل آمدنی' },
  ordersToday: { en: 'Orders Today', ur: 'آج کے آرڈرز' },
  customersServed: { en: 'Customers Served', ur: 'پیش کیے گئے گاہک' },
  avgOrderValue: { en: 'Avg Order Value', ur: 'اوسط آرڈر ویلیو' },
  
  // Menu
  menuManagement: { en: 'Menu Management', ur: 'مینو منیجمنٹ' },
  manageMenuItems: { en: 'Manage your restaurant\'s menu items and categories.', ur: 'اپنے ریسٹورنٹ کے مینو آئٹمز اور کیٹگریز کا انتظام کریں۔' },
  addNewItem: { en: 'Add New Item', ur: 'نیا آئٹم شامل کریں' },
  searchMenuItems: { en: 'Search menu items...', ur: 'مینو آئٹمز تلاش کریں...' },
  all: { en: 'All', ur: 'تمام' },
  appetizers: { en: 'Appetizers', ur: 'اسٹارٹرز' },
  mainCourse: { en: 'Main Course', ur: 'بنیادی کھانا' },
  desserts: { en: 'Desserts', ur: 'میٹھے' },
  beverages: { en: 'Beverages', ur: 'مشروبات' },
  popular: { en: 'Popular', ur: 'مقبول' },
  available: { en: 'Available', ur: 'دستیاب' },
  lowStock: { en: 'Low Stock', ur: 'کم اسٹاک' },
  outOfStock: { en: 'Out of Stock', ur: 'ختم' },
  edit: { en: 'Edit', ur: 'تبدیل کریں' },
  noMenuItems: { en: 'No menu items found', ur: 'کوئی مینو آئٹم نہیں ملا' },
  adjustFilters: { en: 'Try adjusting your search or filter criteria.', ur: 'اپنے سرچ یا فلٹر کے معیار کو تبدیل کرنے کی کوشش کریں۔' },
  
  // Orders
  orderManagement: { en: 'Order Management', ur: 'آرڈر منیجمنٹ' },
  trackOrders: { en: 'Track and manage all incoming orders in real-time.', ur: 'تمام آنے والے آرڈرز کو حقیقی وقت میں ٹریک اور منظم کریں۔' },
  new: { en: 'New', ur: 'نیا' },
  preparing: { en: 'Preparing', ur: 'تیار کر رہے ہیں' },
  ready: { en: 'Ready', ur: 'تیار' },
  served: { en: 'Served', ur: 'پیش کیا گیا' },
  newOrder: { en: 'New Order', ur: 'نیا آرڈر' },
  progress: { en: 'Progress', ur: 'پیشرفت' },
  specialRequests: { en: 'Special Requests:', ur: 'خصوصی درخواستیں:' },
  startCooking: { en: 'Start Cooking', ur: 'کھانا شروع کریں' },
  markReady: { en: 'Mark Ready', ur: 'تیار کا نشان' },
  markServed: { en: 'Mark Served', ur: 'پیش کیا گیا' },
  noOrders: { en: 'No orders found', ur: 'کوئی آرڈر نہیں ملا' },
  
  // Tables
  tableManagement: { en: 'Table Management', ur: 'میز کا انتظام' },
  monitorTables: { en: 'Monitor table status and manage reservations.', ur: 'میز کی حالت کی نگرانی اور بکنگ کا انتظام۔' },
  newReservation: { en: 'New Reservation', ur: 'نئی بکنگ' },
  occupied: { en: 'Occupied', ur: 'قبضے میں' },
  reserved: { en: 'Reserved', ur: 'محفوظ' },
  cleaning: { en: 'Cleaning', ur: 'صفائی' },
  revenue: { en: 'Revenue', ur: 'آمدنی' },
  todaysReservations: { en: 'Today\'s Reservations', ur: 'آج کی بکنگز' },
  restaurantFloorPlan: { en: 'Restaurant Floor Plan', ur: 'ریسٹورنٹ کا نقشہ' },
  seats: { en: 'seats', ur: 'نشستیں' },
  tableDetails: { en: 'Table Details', ur: 'میز کی تفصیلات' },
  status: { en: 'Status', ur: 'حالت' },
  capacity: { en: 'Capacity', ur: 'گنجائش' },
  actions: { en: 'Actions', ur: 'اعمال' },
  assignOrder: { en: 'Assign Order', ur: 'آرڈر تفویض' },
  markClean: { en: 'Mark Clean', ur: 'صاف کا نشان' },
  
  // Common
  guests: { en: 'guests', ur: 'مہمان' },
  table: { en: 'Table', ur: 'میز' },
  confirmed: { en: 'confirmed', ur: 'تصدیق شدہ' },
  pending: { en: 'pending', ur: 'زیر التوا' },
  people: { en: 'people', ur: 'لوگ' },
  
  // Restaurant Story
  ourStory: { en: 'Our Story', ur: 'ہماری کہانی' },
  restaurantStory: { 
    en: 'Founded in 1985 by Nana Jaan Muhammad Akram in the heart of Karachi, Karachi Khana began as a small family kitchen serving authentic Pakistani cuisine to the local community. What started with Nani Amma\'s secret biryani recipe has grown into a beloved restaurant chain, now managed by the third generation of the Akram family.',
    ur: '1985 میں کراچی کے دل میں نانا جان محمد اکرم کے ذریعے قائم کیا گیا، کراچی کھانا ایک چھوٹے خاندانی باورچی خانے سے شروع ہوا جو مقامی کمیونٹی کو اصل پاکستانی کھانا پیش کرتا تھا۔ نانی امّا کی خفیہ بریانی ریسیپی سے شروع ہونے والا یہ اب ایک محبوب ریسٹورنٹ چین بن گیا ہے، جو اب اکرم خاندان کی تیسری نسل چلا رہی ہے۔'
  },
  todaysSpecial: { en: 'Today\'s Special Story', ur: 'آج کی خصوصی کہانی' },
  specialStory: {
    en: 'Our Chicken Karahi is prepared using Nani Amma\'s 40-year-old recipe, featuring fresh tomatoes from Sargodha, organic chicken from local farms, and a special blend of spices that has been passed down through generations. Each karahi is cooked in traditional iron pans over high flame for that authentic smoky flavor.',
    ur: 'ہماری چکن کڑاہی نانی امّا کی 40 سال پرانی ریسیپی سے تیار کی جاتی ہے، جس میں سرگودھا سے تازہ ٹماٹر، مقامی فارموں سے آرگانک چکن، اور نسل در نسل چلے آنے والے مصالحوں کا خصوصی ملاپ شامل ہے۔ ہر کڑاہی روایتی لوہے کے برتنوں میں تیز آگ پر پکائی جاتی ہے تاکہ اصل دھواں دار ذائقہ آئے۔'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}