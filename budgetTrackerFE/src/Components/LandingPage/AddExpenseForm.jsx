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

const AddExpenseForm = ({ open, handleClose }) => {
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
    // Handle submission logic here
    console.log('Category:', category);
    console.log('Description:', description);
    console.log('Price:', price);
    // Clear form fields
    setCategory('');
    setDescription('');
    setPrice('');
    // Close dialog
    handleClose();
  };

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
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddExpenseForm;
