const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (userData) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error('El correo ya está registrado');
  }
  const user = new User(userData);
  await user.save();
  return { message: 'Usuario registrado correctamente' };
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Credenciales inválidas');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Credenciales inválidas');
  }

  const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '2h'
  });

  return { token };
};

const updatePassword = async (userId, currentPassword, newPassword) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('Usuario no encontrado');

  const isMatch = await bcrypt.compare(currentPassword, user.password);
  if (!isMatch) throw new Error('Contraseña actual incorrecta');

  user.password = newPassword;
  await user.save();
  return { message: 'Contraseña actualizada correctamente' };
};

const updateEmail = async (userId, newEmail) => {
  const existing = await User.findOne({ email: newEmail });
  if (existing) throw new Error('Ese correo ya está en uso');

  const user = await User.findByIdAndUpdate(userId, { email: newEmail }, { new: true });
  return { message: 'Correo actualizado correctamente', email: user.email };
};

module.exports = {
  registerUser,
  loginUser,
  updatePassword,
  updateEmail
};
