import PetStoreAPI from '../apiClient';
import { Pet } from '../types';

describe('Pet Store API Tests', () => {
  let pet: Pet;

  beforeEach(() => {
    pet = {
      id: Date.now(), // Use timestamp as a unique ID
      name: 'Rex',
      photoUrls: ['https://example.com/photo.jpg'],
      status: 'available',
    };
  });

  afterEach(async () => {
    // Clean up by deleting the pet if it was added during tests
    await PetStoreAPI.deletePet(pet.id).catch(() => {});
  });

  it('should add a new pet to the store', async () => {
    const response = await PetStoreAPI.addPet(pet);
    expect(response).toMatchObject(pet);
  });

  it('should retrieve a pet by ID', async () => {
    await PetStoreAPI.addPet(pet);
    const response = await PetStoreAPI.getPetById(pet.id);
    expect(response).toMatchObject(pet);
  });

  it('should update an existing pet', async () => {
    await PetStoreAPI.addPet(pet);
    pet.name = 'Max';
    const response = await PetStoreAPI.updatePet(pet);
    expect(response.name).toBe('Max');
  });

  it('should delete a pet', async () => {
    await PetStoreAPI.addPet(pet);
    const response = await PetStoreAPI.deletePet(pet.id);
    expect(response.code).toBe(200);
  });

  it('should fail to add a pet with missing name', async () => {
    const invalidPet = {
      id: Date.now(),
      photoUrls: ['https://example.com/photo.jpg'],
      status: 'available',
    } as Partial<Pet>;

    await expect(PetStoreAPI.addPet(invalidPet as Pet)).rejects.toThrow(
      "Missing required fields: 'name' and 'photoUrls'"
    );
  });

  it('should fail to add a pet with missing photo URLs', async () => {
    const invalidPet = {
      id: Date.now(),
      name: 'Buddy',
      status: 'available',
    } as Partial<Pet>;

    await expect(PetStoreAPI.addPet(invalidPet as Pet)).rejects.toThrow(
      "Missing required fields: 'name' and 'photoUrls'"
    );
  });

  it('should return an error when retrieving a non-existent pet', async () => {
    const nonExistentPetId = -99999999; // Assuming this ID doesn't exist
    await expect(PetStoreAPI.getPetById(nonExistentPetId)).rejects.toThrow('Pet not found');
  });

  it('should return an error when updating a non-existent pet', async () => {
    const nonExistentPet: Pet = {
      id: -99999999,
      name: 'Ghost',
      photoUrls: ['https://example.com/photo.jpg'],
      status: 'available',
    };
    await expect(PetStoreAPI.updatePet(nonExistentPet)).rejects.toThrow('Pet not found');
  });

  it('should return an error when deleting a non-existent pet', async () => {
    const nonExistentPetId = -99999999; // Assuming this ID doesn't exist
    await expect(PetStoreAPI.deletePet(nonExistentPetId)).rejects.toThrow('Pet not found');
  });

  it('should validate the API response format when adding a pet', async () => {
    const response = await PetStoreAPI.addPet(pet);
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('name');
    expect(response).toHaveProperty('photoUrls');
    expect(response).toHaveProperty('status');
  });
});
