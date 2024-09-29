import PetStoreAPI from '../apiClient';
import { Pet } from '../types';

describe('Pet Store API Tests', () => {
  let pet: Pet;

  beforeAll(() => {
    pet = {
      id: Date.now(), // Use timestamp as a unique ID
      name: 'Rex',
      photoUrls: ['https://example.com/photo.jpg'],
      status: 'available',
    };
  });

  it('should add a new pet to the store', async () => {
    const response = await PetStoreAPI.addPet(pet);
    expect(response).toMatchObject(pet);
  });

  it('should retrieve a pet by ID', async () => {
    const response = await PetStoreAPI.getPetById(pet.id);
    expect(response).toMatchObject(pet);
  });

  it('should update an existing pet', async () => {
    pet.name = 'Max';
    const response = await PetStoreAPI.updatePet(pet);
    expect(response.name).toBe('Max');
  });

  it('should delete a pet', async () => {
    const response = await PetStoreAPI.deletePet(pet.id);
    expect(response.code).toBe(200);
  });
});
