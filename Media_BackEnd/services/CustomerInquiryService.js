// services/CustomerInquiryService.js
import CustomerInquiry from '../models/CustomerInquiry.js';

export const createCustomerInquiry = async (data) => {
  const { customer_name, customer_email, message } = data;

  // Basic validation
  if (!customer_name || !customer_email || !message) {
    throw new Error("All fields are required.");
  }

  return CustomerInquiry.create({
    customer_name,
    customer_email,
    message,
  });
};

export const getAllCustomerInquiries = async () => {
  return CustomerInquiry.findAll();
};

export const findCustomerInquiryById = async (id) => {
  return CustomerInquiry.findByPk(id);
};

export const updateCustomerInquiry = async (id, data) => {
  const inquiry = await findCustomerInquiryById(id);
  if (!inquiry) {
    throw new Error("Inquiry not found");
  }
  
  return inquiry.update(data);
};

export const deleteCustomerInquiry = async (id) => {
  const inquiry = await findCustomerInquiryById(id);
  if (!inquiry) {
    throw new Error("Inquiry not found");
  }
  
  return inquiry.destroy();
};
