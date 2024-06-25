import axios from 'axios';

const apiKey = 'dde87674464a0294ce5c6c7abb9c655d';
const apiUrl = 'https://api.imgbb.com/1/upload';

export async function uploadImage(file) {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      params: {
        key: apiKey
      }
    });

    const imageUrl = response.data.data.url;
    return imageUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Failed to upload image.');
  }
}