import axios from 'axios';
import { Pet, ApiResponse } from './types';
import dotenv from 'dotenv';
dotenv.config();

const BASE_URL = process.env.API_BASE_URL;

class PetStoreAPI {
  static async addPet(pet: Pet): Promise<Pet> {
    const response = await axios.post(`${BASE_URL}/pet`, pet, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  }

  static async getPetById(petId: number): Promise<Pet> {
    const response = await axios.get(`${BASE_URL}/pet/${petId}`);
    return response.data;
  }

  static async updatePet(pet: Pet): Promise<Pet> {
    const response = await axios.put(`${BASE_URL}/pet`, pet, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  }

  static async deletePet(petId: number): Promise<ApiResponse> {
    const response = await axios.delete(`${BASE_URL}/pet/${petId}`);
    return response.data;
  }
}

export default PetStoreAPI;
