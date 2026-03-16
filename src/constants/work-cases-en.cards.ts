import type { WorkCasesCardType } from '@/types/work-cases-card.type';

import Changer from '@/../public/cases/changer.png';
import ChestVape from '@/../public/cases/chestvape.png';
import Dirom from '@/../public/cases/dirom.png';
import Estet from '@/../public/cases/estet.png';
import Linia from '@/../public/cases/linia.png';
import NovaClub from '@/../public/cases/novaclub.png';
import SpeakEasy from '@/../public/cases/speakEasy.png';

export const WORK_CASES_CARDS_EN: WorkCasesCardType[] = [
  {
    order: 1,
    name: 'DIROM',
    slug: 'dirom',
    description:
      'Telegram e-commerce bot for automating construction materials orders in Ukraine',
    imageSrc: Dirom.src,
    points: [
      { number: '20%', label: 'Orders via chatbot' },
      { number: '0', label: 'Manager calls needed' },
      { number: '24/7', label: 'Store availability' },
    ],
    fullDescription:
      'DIROM is a chain of construction materials stores in Ukraine that needed to automate their ordering process and reduce the workload on managers. Darobots developed a full-featured Telegram e-commerce bot where customers can browse the product catalog, place orders, and track their status — all without a single phone call.\n\nThe bot is integrated with the company\'s internal CRM system, enabling automatic synchronization of stock levels, prices, and order statuses. Customers receive instant notifications about order status changes, while managers get structured requests with all the necessary data.',
    challenge:
      'DIROM managers spent a significant portion of their working hours handling repetitive orders over the phone. Customers were forced to wait on hold, leading to lost potential sales. The company needed a convenient ordering channel that works 24/7 without requiring manager involvement.',
    solution:
      'Darobots built a Telegram bot with a complete product catalog, shopping cart, order processing system, and CRM integration. The bot automatically handles orders, sends confirmations to customers, and passes structured data to managers for fulfillment.',
    results: [
      '20% of all orders now come through the chatbot',
      'Zero manager calls needed for standard orders',
      'The store is available for orders 24/7',
      'Average order time reduced from 15 to 3 minutes',
    ],
    technologies: ['Node.js', 'Telegram Bot API', 'PostgreSQL', 'CRM Integration'],
    platform: 'Telegram',
  },
  {
    order: 2,
    name: '2345 Support Hotline',
    slug: '2345',
    description: 'Multi-platform psychological support chatbot for Ukrainian government hotline',
    imageSrc: Linia.src,
    points: [
      { number: '20,000+', label: 'Users in the first week' },
      { number: '50+', label: 'Psychologists working simultaneously' },
      { number: '100%', label: 'Data confidentiality and security' },
    ],
    fullDescription:
      'The 2345 Support Hotline is a Ukrainian social project for psychological assistance that required a scalable solution to connect people with professional psychologists. Darobots created a multi-platform system that operates simultaneously on Telegram, Viber, and on the web, ensuring maximum audience reach across Ukraine.\n\nThe system automatically distributes inquiries among available psychologists, taking into account their specialization and current workload. A built-in queuing system ensures that no inquiry goes unanswered. All data is encrypted and stored in accordance with the highest privacy standards.',
    challenge:
      'The organization provided psychological support through a phone line that could not handle the volume of inquiries. People waited on hold for 30-40 minutes, and many simply gave up. A system was needed that could serve thousands of people simultaneously while maintaining complete confidentiality.',
    solution:
      'Darobots developed a multi-platform chatbot with an intelligent inquiry routing system. The bot operates on Telegram, Viber, and the website. It collects initial information, determines the urgency of the inquiry, and connects the person with the appropriate specialist. An admin panel allows coordination of 50+ psychologists.',
    results: [
      'Over 20,000 users in the first week of operation',
      'More than 50 psychologists working simultaneously through a single system',
      '100% confidentiality and security of personal data',
      'Average wait time reduced from 40 minutes to 5 minutes',
    ],
    technologies: ['Node.js', 'Telegram Bot API', 'Viber API', 'WebSocket', 'PostgreSQL', 'Redis'],
    platform: 'Telegram, Viber, Web',
  },
  {
    order: 3,
    name: 'SpeakEasy',
    slug: 'speakeasy',
    description: 'Marketing chatbot for an English language school in Ukraine',
    imageSrc: SpeakEasy.src,
    points: [
      { number: '100%', label: 'Accuracy in English level detection' },
      { number: '-40%', label: 'Teacher workload reduction' },
      { number: 'x2', label: 'Increase in new students' },
    ],
    fullDescription:
      'SpeakEasy is an English language school in Ukraine that was looking for a way to automate the process of attracting new students and determining their proficiency level. Darobots created a marketing chatbot that conducts interactive English level testing, provides personalized recommendations for study programs, and automatically books trial lessons.\n\nThe bot uses an adaptive testing algorithm: depending on the user\'s answers, question difficulty is automatically adjusted. This allows accurate level determination from A1 to C2 in just 10-15 minutes. After testing, the bot suggests an appropriate study program and books a free trial lesson.',
    challenge:
      'SpeakEasy teachers spent 30-40 minutes per new student to determine their English level. Many potential students declined to enroll due to the lengthy onboarding process. The school needed a fast and accurate solution for mass testing and attracting new students.',
    solution:
      'Darobots built a Telegram bot with an adaptive English level testing system. The bot conducts the test in a conversational format, determines the level, and automatically selects the appropriate study program. Integration with Google Sheets and the school\'s CRM ensures automatic data transfer for new students.',
    results: [
      '100% accuracy in English level detection (confirmed by teachers)',
      'Teacher workload reduced by 40%',
      'Number of new students doubled',
      'New student onboarding time reduced from 40 to 15 minutes',
    ],
    technologies: ['Node.js', 'Telegram Bot API', 'Google Sheets API', 'CRM Integration'],
    platform: 'Telegram',
  },
  {
    order: 4,
    name: 'CHANGER',
    slug: 'changer',
    description: 'Telegram Mini App for premium car rental booking in Ukraine',
    imageSrc: Changer.src,
    points: [
      { number: '100%', label: 'Fleet rented via chatbot' },
      { number: '80%', label: 'Bookings without a manager' },
      { number: '+50%', label: 'Customer LTV increase' },
    ],
    fullDescription:
      'CHANGER is a premium car rental service in Ukraine that needed a modern booking solution. Darobots developed a Telegram Mini App — a full-featured web application inside Telegram where customers can browse available vehicles, select rental dates, see real-time pricing, and complete bookings in just a few clicks.\n\nThe Mini App is integrated with the fleet management system: real-time vehicle availability, dynamic pricing based on season and rental duration, and automatic contract generation. Customers can re-rent vehicles through saved history, which significantly increased repeat bookings.',
    challenge:
      'CHANGER processed bookings manually through managers in messengers. This led to scheduling errors, double bookings, and lost customers who didn\'t want to wait for a response. The company needed an automated system that would work quickly and without errors.',
    solution:
      'Darobots created a Telegram Mini App with a vehicle catalog, booking system, availability calendar integration, and automatic document generation. Customers see available cars in real time, select dates, and receive instant booking confirmation.',
    results: [
      '100% of the fleet rented through the chatbot',
      '80% of bookings happen entirely without manager involvement',
      'Customer LTV increased by 50% thanks to convenient repeat bookings',
      'Booking errors reduced to zero',
    ],
    technologies: ['React', 'Telegram Mini App', 'Node.js', 'Telegram Bot API', 'PostgreSQL'],
    platform: 'Telegram Mini App',
  },
  {
    order: 5,
    name: 'Dr Estet Vel',
    slug: 'dr-estet-vel',
    description: 'Appointment automation chatbot for a cosmetic clinic in Ukraine',
    imageSrc: Estet.src,
    points: [
      { number: '40%', label: 'Appointments via bot' },
      { number: '-80%', label: 'Admin workload reduction' },
      { number: '100%', label: 'Scalability readiness' },
    ],
    fullDescription:
      'Dr Estet Vel is a chain of cosmetic clinics in Ukraine that wanted to automate client appointment scheduling and reduce the workload on administrators. Darobots developed a chatbot that allows clients to independently select a service, specialist, convenient time, and book an appointment without any phone calls.\n\nThe bot is synchronized with doctor schedules and the clinic\'s accounting system. It automatically sends appointment reminders, which significantly reduced the number of missed appointments. The system also collects post-visit feedback, helping the clinic improve service quality.',
    challenge:
      'Dr Estet Vel administrators spent up to 80% of their working hours on phone calls for client appointments. During peak hours, the phone line was constantly busy, and the clinic was losing potential clients. The company needed to automate the routine appointment process while maintaining a personal approach.',
    solution:
      'Darobots built a Telegram bot with a full appointment cycle: service selection, specialist selection, and time booking. The bot is integrated with doctor schedules, automatically sends reminders, and collects reviews. The system architecture allows easy scaling to new clinic branches.',
    results: [
      '40% of all appointments now come through the chatbot',
      'Administrator workload reduced by 80%',
      'System fully ready for scaling to new branches',
      'Missed appointments reduced by 35% thanks to automatic reminders',
    ],
    technologies: ['Node.js', 'Telegram Bot API', 'Google Calendar API', 'PostgreSQL'],
    platform: 'Telegram',
  },
  {
    order: 6,
    name: 'ChestVape',
    slug: 'chestvape',
    description: 'Digital loyalty program chatbot for a retail store chain in Ukraine',
    imageSrc: ChestVape.src,
    points: [
      { number: 'x3', label: 'Revenue growth during promotions' },
      { number: '+120%', label: 'Customer LTV increase' },
      { number: '80%', label: 'Automated query handling' },
    ],
    fullDescription:
      'ChestVape is a retail store chain in Ukraine that needed a modern loyalty program to replace outdated plastic cards. Darobots developed a chatbot with a digital bonus card, a points accrual and redemption system, personalized promotions, and push notifications about special offers.\n\nThe bot automatically segments customers by purchase frequency and average receipt, enabling targeted promotional offers. An admin panel allows store chain owners to create promotions, track campaign effectiveness, and analyze customer behavior in real time.',
    challenge:
      'ChestVape used plastic discount cards that customers frequently lost or forgot. The chain had no feedback channel with customers and couldn\'t run targeted promotions. A digital loyalty program with direct customer communication capabilities was needed.',
    solution:
      'Darobots built a Telegram bot with a digital bonus card, points system, personalized promotions, and analytics. An admin panel allows managing promotions, segmenting the audience, and sending targeted offers. POS system integration ensures automatic points accrual.',
    results: [
      'Revenue tripled during promotional campaigns',
      'Customer LTV increased by 120%',
      '80% of customer queries handled automatically',
      'Eliminating plastic cards saved the chain significant costs',
    ],
    technologies: ['Node.js', 'Telegram Bot API', 'PostgreSQL', 'POS Integration', 'Admin Panel'],
    platform: 'Telegram',
  },
  {
    order: 7,
    name: 'NOVA CLUB',
    slug: 'nova-club',
    description: 'Subscription management chatbot for a business community in Ukraine',
    imageSrc: NovaClub.src,
    points: [
      { number: '2', label: 'Weeks to profitability' },
      { number: '100%', label: 'Subscription and payment automation' },
      { number: '+60%', label: 'Customer LTV growth' },
    ],
    fullDescription:
      'NOVA CLUB is a private business community in Ukraine that needed to automate subscription management, payments, and content access. Darobots developed a chatbot that fully automates the subscriber lifecycle: from registration and payment to renewal reminders and access management for private channels.\n\nThe system is integrated with payment services and automatically manages access to private Telegram channels and chats. The bot sends subscription expiration reminders, offers special renewal conditions, and collects analytics on subscriber retention.',
    challenge:
      'NOVA CLUB administrators manually tracked payments, added and removed members from private channels. As the community grew, this became impossible to manage: errors occurred, people gained access without payment, and those who paid sometimes waited hours. Full automation was needed.',
    solution:
      'Darobots created a Telegram bot with automatic subscription management, payment system integration, automatic access control for private channels, and a reminder system. An admin panel displays analytics on subscribers, revenue, and retention.',
    results: [
      'The bot paid for itself within 2 weeks of launch',
      '100% automation of subscriptions and payments',
      'Customer LTV increased by 60% thanks to automatic reminders',
      'Administrators freed up 15+ hours per week',
    ],
    technologies: ['Node.js', 'Telegram Bot API', 'Payment Gateway', 'PostgreSQL'],
    platform: 'Telegram',
  },
];
