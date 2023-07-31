// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://randomuser.me/api/';

// Función para obtener libros desde la API de OpenLibra
export const getLibros = async (categoria, cantidad) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/?categoria=${categoria}&num_items=${cantidad}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    throw error;
  }
};
