import { Property } from '../types/properties';

const apiUrl = import.meta.env.VITE_API_URL;

// Function to upload a file
export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${apiUrl}/properties/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('File upload failed');
  }

  return await response.json();
};

// Function to create a new property
export const createProperty = async (property: Property): Promise<Property> => {
  const response = await fetch(`${apiUrl}/properties`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(property),
  });

  if (!response.ok) {
    throw new Error('Failed to create property');
  }

  return await response.json();
};

// Function to get a single property by ID
export const getProperty = async (id: string): Promise<Property> => {
  const response = await fetch(`${apiUrl}/properties/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch property with id: ${id}`);
  }

  return await response.json();
};

// Function to update a property by ID
export const updateProperty = async (id: string, property: Property) => {
  const response = await fetch(`${apiUrl}/properties/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(property),
  });

  if (!response.ok) {
    throw new Error(`Failed to update property with id: ${id}`);
  }

  return await response.json();
};

// Function to delete a property by ID
export const deleteProperty = async (id: string) => {
  const response = await fetch(`${apiUrl}/properties/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Failed to delete property with id: ${id}`);
  }

  return await response.json();
};

// Function to get all properties
export const getProperties = async (): Promise<Property[]> => {
  const response = await fetch(`${apiUrl}/properties`);

  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }

  return await response.json();
};
