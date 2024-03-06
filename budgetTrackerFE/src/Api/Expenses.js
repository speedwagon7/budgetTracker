import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const fetchBudgetCategories = async () => {
    try {
        // const response = await axios.get(`${BASE_URL}/budget_categories`);

        // return response.data;
        const jwt = localStorage.getItem("jwt")
        const data = await fetch(`${BASE_URL}/categories`, {
            "method" : "GET",
            "headers" : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${jwt}`
            }
        }).then((response) =>{
            if (response.status == 200) {
                return response.json()
            }
            throw response
        }).catch((response) =>{
            console.log(response)
        })
        return data

    } catch (error) {
        alert('Error fetching expense categories:', error)
        console.error('Error fetching expense categories:', error);
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

