// All business facts on this site come from hunterranchgolf.com (captured
// 2026-09-01) or cited third-party sources. Do not edit values without a source.

export const BIZ = {
  name: "Hunter Ranch Golf Course",
  restaurant: "The Hunter Ranch Bar & Grill",
  address: "4041 Highway 46 East, Paso Robles, CA 93446",
  street: "4041 Highway 46 East",
  city: "Paso Robles",
  state: "CA",
  zip: "93446",
  phone: "(805) 237-7444",
  phoneHref: "tel:8052377444",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Hunter+Ranch+Golf+Course+4041+Highway+46+East+Paso+Robles+CA+93446",
  currentSite: "https://www.hunterranchgolf.com/",
};

export const LINKS = {
  teeTimes: "https://hunter-ranch-golf-course.play.teeitup.golf/",
  shop: "https://foreupshops.1-2-1marketing.com/hunterranchgolf/",
  careers: "https://hunterranchgolf.isolvedhire.com/",
  facebook: "https://www.facebook.com/hunterranchgolfcourse/",
  instagram: "https://www.instagram.com/hunterranch/",
  twitter: "https://twitter.com/hunterranchgolf",
  youtube: "https://www.youtube.com/embed/wV8WIhMGRmA",
  pgaJuniors: "https://www.pga.com/",
};

export const HOURS = [
  { label: "Golf Shop", value: "7am – Dusk" },
  { label: "Restaurant (Mon–Thu)", value: "8am – 5pm" },
  { label: "Restaurant (Fri–Sun)", value: "7am – 5pm" },
  { label: "Office", value: "8am – 5pm" },
];

export const STATS = [
  { value: 72, label: "Par", suffix: "" },
  { value: 6744, label: "Yards", suffix: "" },
  { value: 1994, label: "Established", suffix: "" },
  { value: 4.5, label: "Stars, Golf Digest", suffix: "★", decimals: 1 },
];

export const PRAISE = [
  {
    quote:
      "The best course on the Central Coast.... Great elevation changes and scenery… well worth the trip.... the best kept secret in California.",
    source: "Golf Digest, Best Places to Play",
  },
  {
    quote:
      "Immaculate greens... Best kept secret in California ... Through blue oaks and vineyards on rolling hills... Play this course at least once ... Fast greens and scenic",
    source: "Player Comments, Golf Digest Best Places to Play",
  },
  {
    quote:
      "Greens were in great shape, always the highlight of the course rolling medium/fast and smooth … Overall really good conditions. Highly recommend.",
    source: "rgm2525, Greenskeeper.org player review, May 2026",
  },
];

export const AWARDS = [
  "4 to 4½ Star Rating, Golf Digest, Best Places to Play",
  "Top 10 Customer Satisfaction Facility, National Golf Foundation, 2002",
  'Golf Value "Worth the Green Fee" Award for Central California, Greenskeeper.org',
  "California Top 50, California Golf, 1999",
  "Paso Robles Beautification Award",
];

export type RateRow = { item: string; a: string; b?: string; note?: string };

export const RATES_NON_MEMBER: RateRow[] = [
  { item: "18 Holes", a: "$115", b: "$135" },
  { item: "9 Holes", a: "$62", b: "$72" },
  { item: "Twilight (times vary by season)", a: "$65", b: "$85" },
  { item: "Late Bird (9 holes – times vary)", a: "$44", b: "$48" },
  { item: "Active Military with ID ($20 cart fee)", a: "$51", b: "$63" },
];

export const RATES_RENTALS: RateRow[] = [
  { item: "18 Holes – Standard Set", a: "$60", note: "Two sleeves of golf balls included" },
  { item: "9 Holes – Standard Set", a: "$25", note: "Golf balls not included" },
];

export const RATES_MEMBER: RateRow[] = [
  { item: "18 Holes", a: "$51", b: "$63" },
  { item: "Twilight (1 hr. before non-member)", a: "$35", b: "$40" },
  { item: "9 Holes", a: "$29", b: "$34" },
  { item: "9 Hole Late Bird (1 hour earlier)", a: "$22", b: "$26" },
];

export const RATES_MEMBER_CART: RateRow[] = [
  { item: "18 Holes", a: "$22", b: "$22" },
  { item: "Twilight (up to 18 holes)", a: "$20", b: "$20" },
  { item: "9 Holes", a: "$16", b: "$16" },
];

export const RANGE_BALLS = [
  { size: "Small", price: "$6", amount: "30 balls*" },
  { size: "Medium", price: "$11", amount: "60 balls*" },
  { size: "Large", price: "$15", amount: "90 balls*" },
];

export const RANGE_KEYS = [
  { paid: "$50", loaded: "$65" },
  { paid: "$100", loaded: "$140" },
  { paid: "$150", loaded: "$220" },
];

export type MenuItem = { name: string; price: string; desc?: string };
export type MenuSection = { title: string; note?: string; items: MenuItem[] };

export const MENU: MenuSection[] = [
  {
    title: "Breakfast",
    note: "Served until 11am",
    items: [
      { name: "Breakfast Burrito", price: "$13.00", desc: "Your choice of ham or bacon, wrapped in a large flour tortilla with scrambled eggs, home fries, and cheddar & jack cheeses, served with salsa fresca." },
      { name: "Club Benedict", price: "$16.00", desc: "Grilled english muffin layered with grilled ham, bacon, and poached eggs, smothered in hollandaise sauce." },
      { name: "Bacon & Eggs", price: "$13.00", desc: "Two slices of thick-cut bacon served with two eggs and your choice of toast." },
      { name: "Buttermilk Pancakes (3)", price: "$8.00", desc: "Add: whipped cream and bananas + $2.00" },
      { name: "Egg Sandwich", price: "$11.00", desc: "Your choice of ham or bacon with fried eggs, melted cheddar & jack cheeses, between two slices of toast." },
      { name: "Easy Eggs & Toast", price: "$8.00", desc: "Two eggs cooked however you like, served with your choice of toast." },
      { name: "Biscuits & Gravy", price: "$6.00" },
    ],
  },
  {
    title: "Add-Ons & Sides",
    items: [
      { name: "Fruit", price: "$4.00" },
      { name: "Egg", price: "$2.00" },
      { name: "Bacon", price: "$5.00" },
      { name: "Toast", price: "$2.50" },
      { name: "Home Fries", price: "$3.00" },
      { name: "Biscuit", price: "$1.50" },
    ],
  },
  {
    title: "Starters",
    items: [
      { name: "Onion Rings", price: "$8.00", desc: "Sweet white onions hand dipped in our beer batter, deep fried, and served with ranch dressing." },
      { name: "Coconut Shrimp", price: "$11.00", desc: "Served with our Thai orange chili sauce." },
      { name: "California Sliders", price: "$12.00", desc: "Three mini burgers come lightly seasoned and topped with bacon, melted cheddar cheese, onion, lettuce, tomato and mayo." },
      { name: "Nachos", price: "$11.00", desc: "Black beans, house-made corn tortilla chips, cheddar and jack cheeses, finished with jalapeño slices, diced onions, sour cream, guacamole and house-made salsa. Add: chicken + $4.00" },
      { name: "Chicken Wings", price: "$12.00" },
      { name: "Cheese Sticks", price: "$11.00" },
      { name: "Jalapeño Poppers", price: "$11.00" },
      { name: "Chips & Salsa", price: "$5.00", desc: "Add guacamole $2.00" },
    ],
  },
  {
    title: "Salads",
    items: [
      { name: "Southwestern Salad", price: "$16.00", desc: "A crispy tortilla shell filled with chopped romaine lettuce, homemade black beans, shredded cheddar and jack cheeses, topped with avocado, tomato, red onions, cilantro, black olives, sour cream and salsa fresca. Served with chipotle ranch dressing on the side." },
      { name: "The Composed Cobb", price: "$16.00", desc: "Fresh garden greens topped with grilled chicken, Cristina's bacon, bleu cheese crumbles, tomatoes, hardboiled egg, avocado, red onions, black olives, served with your choice of dressing." },
      { name: "House Salad", price: "$10.00", desc: "Choice of tossed Caesar or sweet mixed greens." },
      { name: "Asian Salad", price: "$13.00", desc: "Fresh sweet greens and cabbage tossed with a sesame mandarin dressing, layered with mandarin oranges, toasted sesame seeds, almonds and crispy wontons." },
      { name: "Caesar Salad", price: "$13.00" },
    ],
  },
  {
    title: "Meals",
    items: [
      { name: "Hot Dog", price: "$8.00" },
      { name: "Chicken Strips", price: "$14.00" },
      { name: "Fish & Chips", price: "$16.00" },
    ],
  },
  {
    title: "Sandwiches",
    items: [
      { name: "BLT Sandwich", price: "$15.00", desc: "Thick cut smoked bacon stacked on our homemade roll layered with lettuce, tomato and mayo. Add avocado $1.50" },
      { name: "Philly Dip Sandwich", price: "$17.00", desc: "Thinly sliced marinated and grilled tri tip layered with grilled onions, grilled red peppers and melted provolone on our fresh baked roll. Served with au jus." },
      { name: "Tri Tip Sandwich", price: "$16.00", desc: "Marinated tri tip grilled to perfection, thinly sliced and piled high on our homemade roll." },
      { name: "Cheese Burger", price: "$16.00", desc: "1/3 pound angus burger, served on our brioche roll with mayo, lettuce, tomato and onion. Make it your own: add avocado $1.50, bacon $1.50, grilled jalapeño chilis $1.50 or fried egg $1.50" },
      { name: "Club Sandwich", price: "$16.00", desc: "Triple stacked roasted turkey, bacon, cheddar cheese, lettuce, tomato, and mayo on your choice of grilled bread." },
      { name: "Fish Tacos", price: "$16.00", desc: "Beer battered Icelandic cod fried to a golden brown, wrapped in warm corn tortillas and topped with a creamy chipotle sauce, fresh cilantro, green cabbage, cheddar & jack cheese and lime. Served with black beans and chips." },
      { name: "Chicken Sandwich", price: "$17.00", desc: "Grilled chicken breast, bacon, avocado slices, lettuce, tomato, red onions and melted Swiss cheese, served on our roll with mayo." },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Sodas", price: "$3.00" },
      { name: "Iced Tea", price: "$3.00" },
      { name: "Flavored Tea", price: "$3.00" },
      { name: "Hot Tea", price: "$3.00" },
      { name: "Coffee", price: "$3.00" },
      { name: "Sports Drinks", price: "$4.00" },
      { name: "Energy Drinks", price: "$5.00" },
      { name: "Pure Leaf", price: "$4.00" },
    ],
  },
  {
    title: "Kids",
    items: [
      { name: "Cod & Fries", price: "$7.00" },
      { name: "Chicken Strips & Fries", price: "$8.00" },
      { name: "Grilled Cheese & Fries", price: "$6.00" },
      { name: "Sliders & Fries", price: "$9.00" },
    ],
  },
  {
    title: "Pets",
    items: [
      { name: "Chopped Burger", price: "$5.00" },
      { name: "Grilled Chicken", price: "$5.00" },
      { name: "Grilled Hot Dog", price: "$5.00" },
      { name: "Sliders & Fries", price: "$6.00" },
    ],
  },
];

export const HOTELS = [
  { name: "Allegretto Vineyard Resort", phone: "805.369.2502", note: "Book online or call" },
  { name: "La Quinta Inn by Wyndham", phone: "805.239.3004", note: "Call to book" },
  { name: "Best Western Plus Black Oak", phone: "805.238.4740", note: "Book online or call" },
  { name: "Holiday Inn Express", phone: "805.238.6500", note: "Call to book" },
];

export const OUTINGS_SERVICES = [
  "Up to one year advance bookings",
  "We'll set up a fun 4-person Scramble, complete with an innovative handicap system, or any other format you desire",
  "A Rules and Information sheet for every player covering the day's activities",
  "We'll create your 4-somes if you haven't already",
  'Scorecards for each player or group based on format, with "stroke holes" indicated if necessary',
  "Printed cart signs with player names and hole assignments — complete with your business, theme or event logo",
  'Golf carts set up with boxed lunches, iced beverages, tee prizes and/or "goodie bags"',
  "Range balls provided, plus access to the 3-hole par-3 course, practice bunker and putting greens",
  "Specialty-hole setups — innovative choices like Closest-To-Pin in two shots, plus hole-in-one packages",
  'Complete scoring with "old school" calligraphy scoreboards, recaps and summaries of the day\'s winners',
  "Golf-shop discounts to build the perfect prize table",
  "Customized meal and drink options from our culinary team",
];

export const NAV = [
  { href: "/course", label: "The Course" },
  { href: "/rates", label: "Rates & Membership" },
  { href: "/restaurant", label: "Bar & Grill" },
  { href: "/events", label: "Events & Outings" },
  { href: "/specials", label: "Specials" },
  { href: "/contact", label: "Contact" },
];
