import { Label } from "@radix-ui/react-dropdown-menu";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export interface HeaderDataProps {
  label: string;
  href: string;
}

// index.ts
export const headerData: HeaderDataProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about-us",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Cars",
    href: "/cars",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export interface FooterItemDataProps {
  title: string;
  items: { label: string; href: string }[];
}

export const footerData: FooterItemDataProps[] = [
  {
    title: "ABOUT",
    items: [
      { label: "How it works", href: "#" },
      { label: "Featured", href: "#" },
    ],
  },

  {
    title: "COMMUNITY",
    items: [
      { label: "Events", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

export type SocialMediaType = {
  icon: React.ElementType;
  label: string;
  url: string; // Sosyal medya sayfasına yönlendirme için URL eklendi
};

export const SocialMediaData: SocialMediaType[] = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    url: "https://www.facebook.com",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    url: "https://www.twitter.com",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "https://www.instagram.com",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    url: "https://www.linkedin.com",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    url: "https://www.youtube.com",
  },
];

export type SliderProps = {
  label: string;
  description: string;
  image: string;
  href: string;
};

export const sliderData: SliderProps[] = [
  {
    label: "Discover the most beatuiful place around.",
    description: "Travel with luxury and comfort on your next trip.",
    image: "/slider/slider1.jpg",
    href: "/",
  },
];

export interface CarProps {
  id: number;
  name: string;
  year: number;
  type: string;
  imageUrl: string;
  passengers: number;
  doors: number;
  bags: string;
  transmission: string;
  pricePerDay: number;
}

export const carsData: CarProps[] = [
  {
    id: 1,
    name: "Toyota Corolla",
    year: 2022,
    type: "Sedan",
    imageUrl: "/cars/1.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 60,
  },
  {
    id: 2,
    name: "Honda Civic",
    year: 2023,
    type: "Compact Car",
    imageUrl: "/cars/2.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 65,
  },
  {
    id: 3,
    name: "Ford Mustang",
    year: 2023,
    type: "Crossover",
    imageUrl: "/cars/3.png",
    passengers: 4,
    doors: 2,
    bags: "1 bags",
    transmission: "Manual",
    pricePerDay: 120,
  },
  {
    id: 4,
    name: "Chevrolet Tahoe",
    year: 2022,
    type: "SUV",
    imageUrl: "/cars/4.png",
    passengers: 7,
    doors: 4,
    bags: "3 bags",
    transmission: "Automatic",
    pricePerDay: 110,
  },
  {
    id: 5,
    name: "Tesla Model 3",
    year: 2023,
    type: "Electric",
    imageUrl: "/cars/5.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 100,
  },
  {
    id: 6,
    name: "BMW X5",
    year: 2022,
    type: "Sports",
    imageUrl: "/cars/6.png",
    passengers: 5,
    doors: 4,
    bags: "3 bags",
    transmission: "Automatic",
    pricePerDay: 120,
  },
  {
    id: 7,
    name: "Audi A6",
    year: 2022,
    type: "Luxury Car",
    imageUrl: "/cars/7.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 90,
  },
  {
    id: 8,
    name: "Mercedes-Benz GLC",
    year: 2023,
    type: "SUV",
    imageUrl: "/cars/8.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 130,
  },
  {
    id: 9,
    name: "Hyundai Tucson",
    year: 2022,
    type: "Coupe",
    imageUrl: "/cars/9.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 75,
  },
  {
    id: 10,
    name: "Volkswagen Passat",
    year: 2022,
    type: "Sports",
    imageUrl: "/cars/10.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 70,
  },
  {
    id: 11,
    name: "Kia Sportage",
    year: 2023,
    type: "SUV",
    imageUrl: "/cars/11.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 80,
  },
  {
    id: 12,
    name: "Nissan Altima",
    year: 2023,
    type: "Sedan",
    imageUrl: "/cars/12.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 68,
  },
  {
    id: 13,
    name: "Subaru Outback",
    year: 2022,
    type: "Wagon",
    imageUrl: "/cars/13.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 85,
  },
  {
    id: 14,
    name: "Jeep Wrangler",
    year: 2023,
    type: "SUV",
    imageUrl: "/cars/14.png",
    passengers: 4,
    doors: 4,
    bags: "2 bags",
    transmission: "Manual",
    pricePerDay: 95,
  },
  {
    id: 15,
    name: "Mazda CX-5",
    year: 2023,
    type: "SUV",
    imageUrl: "/cars/15.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 78,
  },
  {
    id: 16,
    name: "Lexus RX",
    year: 2022,
    type: "SUV",
    imageUrl: "/cars/16.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 140,
  },
  {
    id: 17,
    name: "Porsche 911",
    year: 2023,
    type: "Sports",
    imageUrl: "/cars/17.png",
    passengers: 2,
    doors: 2,
    bags: "1 Large",
    transmission: "Automatic",
    pricePerDay: 300,
  },
  {
    id: 18,
    name: "Ferrari Roma",
    year: 2023,
    type: "Luxury Car",
    imageUrl: "/cars/18.png",
    passengers: 2,
    doors: 2,
    bags: "1 Small",
    transmission: "Automatic",
    pricePerDay: 450,
  },
  {
    id: 19,
    name: "Chevrolet Camaro",
    year: 2023,
    type: "Crossover",
    imageUrl: "/cars/19.png",
    passengers: 4,
    doors: 2,
    bags: "2 bags",
    transmission: "Manual",
    pricePerDay: 150,
  },
  {
    id: 20,
    name: "Range Rover Evoque",
    year: 2023,
    type: "SUV",
    imageUrl: "/cars/20.png",
    passengers: 5,
    doors: 4,
    bags: "2 bags",
    transmission: "Automatic",
    pricePerDay: 180,
  },
];

export interface HomeTypesCar {
  type: string;
  image: string;
}

export const homeTypesData: HomeTypesCar[] = [
  { type: "Sport Car", image: "/types/sport.jpg" },
  { type: "Convertible Car", image: "/types/convertible2.jpg" },
  { type: "Sedan Car", image: "/types/sedan.jpg" },
  { type: "Luxury Car", image: "/types/luxury.jpg" },
];
export interface ServiceItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const servicesData: ServiceItemProps[] = [
  {
    id: 1,
    title: "Car Rental with Driver",
    description:
      "Experience a hassle-free journey with our premium car rental service, complete with professional drivers. Ideal for business trips, events, or sightseeing.",
    image: "/service/services1.svg",
  },
  {
    id: 2,
    title: "Airport Transfers",
    description:
      "Enjoy a smooth and timely transfer from the airport to your destination with our reliable airport transfer service. Comfort and punctuality guaranteed.",
    image: "/service/2.png",
  },
  {
    id: 3,
    title: "Corporate Services",
    description:
      "Enhance your corporate image with our executive chauffeur services, providing luxury and discretion for business professionals on the go.",
    image: "/service/services2.svg",
  },
  {
    id: 4,
    title: "Event Transportation",
    description:
      "Ensure your special event runs smoothly with our tailored transportation solutions, accommodating individual and group travel needs.",
    image: "/service/4.png",
  },
];

export interface TestimonialProps {
  id: number;
  name: string;
  company: string;
  review: string;
  avatar: string;
}

export const testimonialsData: TestimonialProps[] = [
  {
    id: 1,
    name: "John Doe",
    company: "Acme Inc.",
    review:
      "This product is amazing! It helped my business grow significantly. Highly recommend to others.",
    avatar: "/avatars/avatar1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Tech Solutions",
    review:
      "I am so satisfied with the results. The customer service was also great.",
    avatar: "/avatars/avatar2.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "Web Corp",
    review:
      "Excellent customer support and seamless experience. Definitely a game-changer.",
    avatar: "/avatars/avatar3.jpg",
  },
  {
    id: 4,
    name: "Bob Brown",
    company: "Marketing Pro",
    review:
      "This has made our workflow so much easier. A must-have tool for any business.",
    avatar: "/avatars/avatar4.jpg",
  },
  {
    id: 5,
    name: "Charlie Davis",
    company: "Creative Works",
    review:
      "Absolutely love it! It has helped us grow exponentially and increase productivity.",
    avatar: "/avatars/avatar5.jpg",
  },
  {
    id: 6,
    name: "Diana Green",
    company: "Design Masters",
    review:
      "Amazing service. Highly recommend! It made our work so much more efficient.",
    avatar: "/avatars/avatar6.jpg",
  },
];

export interface LogoProps {
  image: string;
}

export const logoData: LogoProps[] = [
  { image: "/logo/l1.png" },
  { image: "/logo/l2.png" },
  { image: "/logo/l3.png" },
  { image: "/logo/l4.png" },
  { image: "/logo/l5.png" },
];

export interface MissionProps {
  image: string;
  title: string;
  keys: string;
}

export const missionData: MissionProps[] = [
  { image: "/types/types1.jpg", title: "Our Vision", keys: "vision" },
  { image: "/types/types2.jpg", title: "Our Misson", keys: "mission" },
  { image: "/types/types3.jpg", title: "Our Approach", keys: "approach" },
];

export interface AccordionDataProps {
  value: string; // value tipi string olmalı
  question: string; // 'questions' -> 'question'
  answer: string;
}

export const accordionData: AccordionDataProps[] = [
  {
    value: "item-1",
    question: "What documents are required to rent a car?",
    answer:
      "You need a valid driver's license, a credit card, and an ID or passport.",
  },
  {
    value: "item-2",
    question: "Is there a mileage limit for rented cars?",
    answer:
      "Most of our cars come with unlimited mileage. However, some premium vehicles may have mileage limits.",
  },
  {
    value: "item-3",
    question: "Can I rent a car without a credit card?",
    answer:
      "Unfortunately, a credit card is required for security purposes when renting a car.",
  },
  {
    value: "item-4",
    question: "What happens if I return the car late?",
    answer:
      "Late returns may incur additional charges. Please contact us in advance if you anticipate a delay.",
  },
  {
    value: "item-5",
    question: "Are there additional charges for young drivers?",
    answer: "Drivers under the age of 25 may be subject to an additional fee.",
  },
];
