export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialPrint {
  id: string;
  senderName: string;
  senderRole: string;
  time: string;
  date: string;
  paymentConfirmedText: string;
  memberAreaText: string;
  messageText: string;
  verified: boolean;
}

export interface BonusItem {
  id: string;
  title: string;
  originalPrice: string;
  imageType: 'certificate' | 'games' | 'exercises';
  description: string;
}
