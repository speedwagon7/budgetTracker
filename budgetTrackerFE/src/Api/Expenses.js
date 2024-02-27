import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:XXXX';

export const fetchInterviewQuestions = async (postData) => {
    try {
        const response = await axios.get(`${BASE_URL}/generate_questions`, postData);

        return response.data;

    } catch (error) {
        alert('Error fetching expense categories:', error)
        console.error('Error fetching expense categories:', error);
        return [];
    }
};

