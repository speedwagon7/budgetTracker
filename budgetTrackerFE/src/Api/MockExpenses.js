import IncomeData from '../MockData/MOCK_DATA_Income.json';
import ExpensesData from '../MockData/MOCK_DATA_Expenses.json';

export const fetchExpenseCategories = () => {
    const { expensesData } = ExpensesData;

    console.log(expensesData);

    return expensesData;
};

export const fetchIncomeCategories = () => {
    const { incomeData } = IncomeData;

    return incomeData;
};
