import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, Select, MenuItem, FormControl, InputLabel, DialogActions } from '@material-ui/core';

const categories = [
    'Rent',
    'Health',
    'Bills',
    'Eating out',
    'Groceries',
    'Entertainment',
    'Shopping',
    'Transport',
    'Holidays',
    'Other'
];

const AddExpenseForm = ({ open, handleClose, handleExpenseAddition }) => {
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleSubmit = () => {
        // Check if all fields are filled out
        if (!category || !description || !price) {
            // If any field is empty, display an error message or handle it as per your UI/UX design
            console.log('Please fill out all fields');
            return;
        }
    
        // Handle submission logic here
        console.log('Category:', category);
        console.log('Description:', description);
        console.log('Price:', price);
    
        // Pass data back to Home component
        handleExpenseAddition(category, parseFloat(price));
    
        // Clear form fields
        setCategory('');
        setDescription('');
        setPrice('');
    
        // Close dialog
        handleClose();
    };

    // Disable the "Add" button if any of the fields are empty
    const isSubmitDisabled = !category || !description || !price;

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Expense</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        {categories.map((cat, index) => (
                            <MenuItem key={index} value={cat}>{cat}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    margin="dense"
                    label="Description"
                    fullWidth
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <TextField
                    margin="dense"
                    label="Price"
                    fullWidth
                    type="number"
                    value={price}
                    onChange={handlePriceChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary" disabled={isSubmitDisabled}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddExpenseForm;
