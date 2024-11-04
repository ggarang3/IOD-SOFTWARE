// controllers/staffController.js
import Staff from "../models/Staff.js";
import bcrypt from "bcryptjs";

export const createStaff = async (req, res) => {
  const { username, password, email, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const staff = await Staff.create({
      username,
      password: hashedPassword,
      email,
      role,
    });
    res.status(201).json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.findAll();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateStaff = async (req, res) => {
  const { id } = req.params;
  const { username, email, role } = req.body;
  try {
    await Staff.update({ username, email, role }, { where: { staff_id: id } });
    res.json({ message: "Staff updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteStaff = async (req, res) => {
  const { id } = req.params;
  try {
    await Staff.destroy({ where: { staff_id: id } });
    res.json({ message: "Staff deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
