// controllers/CustomerInquiryController.js
import {
  createCustomerInquiry,
  getAllCustomerInquiries,
  findCustomerInquiryById,
  updateCustomerInquiry,
  deleteCustomerInquiry,
} from '../services/CustomerInquiryService.js';

export const createInquiry = async (req, res) => {
  try {
    const newInquiry = await createCustomerInquiry(req.body);
    res.status(201).json(newInquiry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getInquiries = async (req, res) => {
  try {
    const inquiries = await getAllCustomerInquiries();
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateInquiry = async (req, res) => {
  const { id } = req.params;
  try {
    await updateCustomerInquiry(id, req.body);
    res.status(200).json({ message: 'Inquiry updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteInquiry = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteCustomerInquiry(id);
    res.status(200).json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
