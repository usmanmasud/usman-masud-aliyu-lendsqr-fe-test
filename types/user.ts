export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  hasLoan: boolean;
  hasSavings: boolean;
  
  // Personal Information
  fullName: string;
  bvn: string;
  gender: "Male" | "Female";
  maritalStatus: "Single" | "Married" | "Divorced" | "Widowed";
  children: string;
  typeOfResidence: string;
  
  // Education and Employment
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
  
  // Socials
  twitter: string;
  facebook: string;
  instagram: string;
  
  // Guarantor
  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
  
  // Financial
  accountBalance: number;
  accountNumber: string;
  bankName: string;
  tier: number;
}
