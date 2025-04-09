import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your actual API URL

const api = {
    // Get overview data
    getOverview: async () => {
        try {
            const response = await axios.get(`${API_URL}/overview`);
            return response.data;
        } catch (error) {
            console.error('Error fetching overview:', error);
            throw error;
        }
    },

    // Get users data
    getUsers: async (page = 1, limit = 6) => {
        try {
            const response = await axios.get(`${API_URL}/users`, {
                params: { page, limit }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    },

    // Update user
    updateUser: async (userId, userData) => {
        try {
            const response = await axios.put(`${API_URL}/users/${userId}`, userData);
            return response.data;
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    },

    // Add new user
    addUser: async (userData) => {
        try {
            const response = await axios.post(`${API_URL}/users`, userData);
            return response.data;
        } catch (error) {
            console.error('Error adding user:', error);
            throw error;
        }
    }
};

export default api; 