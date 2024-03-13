import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
// import { Button, Dialog, DialogTitle, DialogContent, TextField, Select, MenuItem, FormControl, InputLabel, DialogActions } from '@material-ui/core';

const categories = [
  [2,"Rent"],
  [3,"Health"],
  [4,"Bills"],
  [1,"Eating out"],
  [5,"Groceries"],
  [6,"Entertainment"],
  [7,"Shopping"],
  [8,"Transport"],
  [9,"Holidays"],
  [10,"Other"]
];

const AddExpenseForm = ({ open, handleClose, handleExpenseAddition }) => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

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
      console.log("Please fill out all fields");
      return;
    }
    
    fetch('http://localhost:8080/expense/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${localStorage.getItem("jwt")}` // adjust content type based on your API
        // Add any other headers your API requires, such as authorization headers
      },
      body: JSON.stringify({
        //to change budget category
        "category": {id: category},
        "title": description,
        "price" : price
       }), // replace with your POST data
    })
    .then(response => {
      if (response.ok) {
        console.log('Post request successful');
        return
      } else {
        console.error('Post request failed');
      }
    })
    .catch(error => {
      console.error('Error during POST request:', error);
    });

    // Handle submission logic here
    console.log("Category:", category);
    console.log("Description:", description);
    console.log("Price:", price);

    // Pass data back to Home component
    handleExpenseAddition(category, parseFloat(price));

    // Clear form fields
    setCategory("");
    setDescription("");
    setPrice("");

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
          <Select value={category} onChange={(event) => handleCategoryChange(event)}>
            {categories.map((cat, index) => (
              <MenuItem key={index} value={cat[0]}>
                {cat[1]}
              </MenuItem>
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
        <Button
          onClick={handleSubmit}
          color="primary"
          disabled={isSubmitDisabled}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddExpenseForm;
