import IncomeData from '../MockData/MOCK_DATA_Income.json';
import ExpensesData from '../MockData/MOCK_DATA_Expenses.json';

export const fetchExpenseCategories = () => {
    console.log(ExpensesData);
    return ExpensesData;
};

export const fetchIncomeCategories = () => {
    const { incomeData } = IncomeData;

    return incomeData;
};
