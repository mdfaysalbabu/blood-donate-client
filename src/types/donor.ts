export interface UserProfile {
  id: string;
  userId?: string;
  bio?: string;
  age?: number;
  lastDonationDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Donor {
  id: string;
  name?: string;
  email?: string;
  bloodType?: string;
  location?: string;
  availability?: boolean;
  createdAt?: string;
  updatedAt?: string;
  userProfile?: UserProfile;
  contactDetails?: {
    phone?: string;
    address?: string;
  };
}
