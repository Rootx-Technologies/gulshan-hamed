export const site = {
  name: "Gulshan Hameed Sweets & Bakers",
  shortName: "Gulshan Hameed",
  urduName: "گلشن حمید سویٹس اینڈ بیکرز",
  tagline: "Mithai for the box. Bakery for the morning.",
  description:
    "Gulshan Hameed Sweets & Bakers — mix mithai, celebration cakes, patties, rolls, and fresh bakery. Open 6am to 10pm, with free home delivery.",
  city: "Karor Lal Esan",
  cityAlt: "Karor Lal Isa",
  district: "Layyah",
  province: "Punjab",
  postalCode: "31100",
  country: "Pakistan",
  addressLine: "Near New Khan Bus Stand",
  fullAddress:
    "Gulshan Hameed Sweets and Bakers, Near New Khan Bus Stand, Karor Lal Isa, 31100, Punjab, Pakistan",
  hoursLabel: "Open daily, 6:00am – 10:00pm",
  hours: {
    open: "06:00",
    close: "22:00",
    display: "6:00am – 10:00pm",
  },
  phoneDisplay: "0307 6542584",
  phoneTel: "+923076542584",
  facebook: "https://www.facebook.com/1448719881812305",
  tiktok: "https://www.tiktok.com/@gulshan_hameed_karor",
  instagram: "https://www.instagram.com/gulshan_hameed_karor/",
  mapsQuery:
    "Gulshan Hameed Sweets and Bakers Near New Khan Bus Stand Karor Lal Isa",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Gulshan+Hameed+Sweets+and+Bakers+Near+New+Khan+Bus+Stand+Karor+Lal+Isa",
  mapsEmbed:
    "https://maps.google.com/maps?q=Gulshan%20Hameed%20Sweets%20and%20Bakers%20Near%20New%20khan%20Bus%20Stand%20Karor%20Lal%20Isa&z=16&output=embed",
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Gulshan+Hameed+Sweets+and+Bakers+Near+New+Khan+Bus+Stand+Karor+Lal+Isa",
};

export function whatsappLink(message?: string) {
  const text =
    message ??
    "Assalamualaikum, I would like to place an order from Gulshan Hameed Sweets & Bakers.";
  return `https://wa.me/${site.phoneTel.replace("+", "")}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
];

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const p = (id: string, file: string, w = 1400) =>
  `https://images.pexels.com/photos/${id}/${file}?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  logo: "/images/logo.jpg",
  hero: "/images/hero-bakery.png",
  mithai: u("photo-1758910536889-43ce7b3199fd", 1600),
  gulab: p("15014919", "pexels-photo-15014919.jpeg"),
  jalebi: u("photo-1606491956689-2ea866880c84"),
  barfi: p("8887052", "pexels-photo-8887052.jpeg"),
  ladoo: p("8887055", "pexels-photo-8887055.jpeg"),
  cake: u("photo-1578985545062-69928b1d9587"),
  cakeSlice: u("photo-1565958011703-44f9829ba187"),
  celebration: u("photo-1535254973040-607b474cb50d"),
  pastry: u("photo-1486427944299-d1955d23e34d"),
  bread: u("photo-1509440159596-0249088772ff"),
  cookies: u("photo-1499636136210-6f4ee915583e"),
  bakery: u("photo-1517433670267-08bbd4be890f", 1600),
  creamRoll: u("photo-1603532648955-039310d9ed75"),
  patty: p("31357500", "pexels-photo-31357500.jpeg"),
  chickenRoll: p("37098037", "pexels-photo-37098037.jpeg"),
  sandwich: u("photo-1528735602780-2552fd46c7af"),
  samosa: u("photo-1601050690597-df0568f70950"),
  springRoll: p("34767653", "pexels-photo-34767653.jpeg"),
};

export type MenuItem = {
  name: string;
  note: string;
  category: "mithai" | "bakery" | "cakes" | "savory";
  image: string;
  tag?: string;
};

export const menuItems: MenuItem[] = [
  {
    name: "Mix mithai",
    note: "A packed assortment for gifting and guests — the mix people take by the box.",
    category: "mithai",
    image: images.mithai,
    tag: "Most asked for",
  },
  {
    name: "Gulab jamun",
    note: "Soft khoya balls in warm syrup. Best the same day, still glossy from the tray.",
    category: "mithai",
    image: images.gulab,
  },
  {
    name: "Jalebi",
    note: "Crisp coils soaked just enough. A morning sweet, and an Eid one.",
    category: "mithai",
    image: images.jalebi,
  },
  {
    name: "Barfi",
    note: "Cut khoya pieces for the box — pistachio and plain, packed by the kilo.",
    category: "mithai",
    image: images.barfi,
  },
  {
    name: "Ladoo",
    note: "Besan and motichoor ladoo, for the festival tray or a small box to take home.",
    category: "mithai",
    image: images.ladoo,
  },
  {
    name: "Celebration cake",
    note: "Birthday and occasion cakes, ordered at the counter. Give a day’s notice when you can.",
    category: "cakes",
    image: images.cake,
    tag: "Made to order",
  },
  {
    name: "Fresh cream pastry",
    note: "Cream slices for tea — the kind that disappear on the way home.",
    category: "cakes",
    image: images.cakeSlice,
  },
  {
    name: "Wedding & party cake",
    note: "Larger orders for weddings and gatherings. Ask in person for size and icing.",
    category: "cakes",
    image: images.celebration,
  },
  {
    name: "Cupcakes",
    note: "Simple iced cups for children’s parties and office trays.",
    category: "cakes",
    image: images.pastry,
  },
  {
    name: "Morning bread",
    note: "Buns and loaf for breakfast, stacked before the first buses leave the stand.",
    category: "bakery",
    image: images.bread,
    tag: "From 6am",
  },
  {
    name: "Rusk & biscuits",
    note: "Tea rusk, butter biscuits, and the dry bakery people keep in the house.",
    category: "bakery",
    image: images.cookies,
  },
  {
    name: "Cream roll",
    note: "Soft sponge rolled with cream. A bakery-case regular, not a savoury.",
    category: "bakery",
    image: images.creamRoll,
  },
  {
    name: "Chicken patty",
    note: "Flaky pastry, chicken filling, baked through the day. The patty people stop for.",
    category: "savory",
    image: images.patty,
    tag: "Bakery favourite",
  },
  {
    name: "Chicken roll",
    note: "A proper bakery roll — wrapped, filled, and meant to be eaten hot.",
    category: "savory",
    image: images.chickenRoll,
  },
  {
    name: "Spring roll",
    note: "Crisp fried rolls. Order a few with samosas if you are feeding the car.",
    category: "savory",
    image: images.springRoll,
  },
  {
    name: "Samosa",
    note: "Crisp, filled, and meant to be eaten hot. A regular on the namkeen counter.",
    category: "savory",
    image: images.samosa,
    tag: "From the fryer",
  },
  {
    name: "Sandwich",
    note: "Packed for the road — useful if you are catching a coach from the bus stand.",
    category: "savory",
    image: images.sandwich,
  },
];

export const favourites = menuItems.filter((item) =>
  ["Mix mithai", "Celebration cake", "Chicken patty", "Chicken roll"].includes(
    item.name
  )
);

export const categories = [
  {
    id: "mithai" as const,
    title: "Mithai",
    blurb: "Trays and mix boxes for Eid, weddings, and the guest who arrives unannounced.",
    image: images.mithai,
  },
  {
    id: "cakes" as const,
    title: "Cakes",
    blurb: "Birthday orders, cream pastries, and the cake you pick up the same afternoon.",
    image: images.cake,
  },
  {
    id: "bakery" as const,
    title: "Bakery",
    blurb: "Bread, rusk, cream rolls, and the daily bake.",
    image: images.bread,
  },
  {
    id: "savory" as const,
    title: "Patties & rolls",
    blurb: "Chicken patty, chicken roll, samosa, and snacks for a stop on the road.",
    image: images.patty,
  },
];

export const gallery = [
  { src: images.mithai, alt: "Mix mithai tray" },
  { src: images.patty, alt: "Chicken patties" },
  { src: images.chickenRoll, alt: "Chicken roll" },
  { src: images.cake, alt: "Celebration cake" },
  { src: images.samosa, alt: "Fresh samosas" },
  { src: images.gulab, alt: "Gulab jamun" },
];

export const reviews = [
  {
    name: "Ali Raza",
    stars: 5,
    text: "Mix mithai was fresh and packed properly. Took a box for guests the same evening.",
  },
  {
    name: "Fatima Noor",
    stars: 5,
    text: "Ordered a birthday cake. The sponge was soft, the icing was neat, and it arrived on time.",
  },
  {
    name: "Hassan Malik",
    stars: 5,
    text: "Chicken patty and chicken roll were hot. Easy stop when the family wants something savoury.",
  },
  {
    name: "Ayesha Khan",
    stars: 5,
    text: "Gulab jamun still in syrup, jalebi crisp. This is the counter we come back to.",
  },
  {
    name: "Imran Shah",
    stars: 5,
    text: "Free home delivery reached on time. Mix box was sealed well, nothing crushed.",
  },
  {
    name: "Sana Ahmed",
    stars: 5,
    text: "Morning bread and rusk for tea, cake in the evening. Fresh through the day.",
  },
];

