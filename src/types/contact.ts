// src/types/contact.ts

export interface ContactFormData {
  fullName: string;
  subject: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  subject?: string;
  email?: string;
  message?: string;
}
