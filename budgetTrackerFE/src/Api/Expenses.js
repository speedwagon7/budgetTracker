import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:XXXX';

export const fetchBudjetCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/budget_categories`);

        return response.data;

    } catch (error) {
        alert('Error fetching expense categories:', error)
        console.error('Error fetching expense categories:', error);
        return [];
    }
};

export const fetchExpenses = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/expenses`);

        return response.data;

    } catch (error) {
        alert('Error fetching expenses:', error)
        console.error('Error fetching expenses:', error);
        return [];
    }
};

export const postExpense = async (postData) => {
    try {
        const response = await axios.post(`${BASE_URL}/expenses`, postData);

        return response;

    } catch (error) {
        alert('Error posting expense categories:', error)
        console.error('Error posting expense categories:', error);
        return [];
    }
};

