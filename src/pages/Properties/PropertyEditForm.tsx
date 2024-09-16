import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import { Property } from '../../types/properties';

interface PropertyEditFormProps {
  property: Property;
  onEdit: (updatedProperty: Property) => void;
  onCancel: () => void;
  editable?: boolean;
}

const PropertyEditForm: React.FC<PropertyEditFormProps> = ({
  property,
  onEdit,
  onCancel,
  editable = true,
}) => {
  const [isEditable, setIsEditable] = useState(editable);
  const [formData, setFormData] = useState({
    name: property.name,
    apartmentListUrl: property.apartmentListUrl,
    multimediaPath: property.multimediaPath,
    propertyEmail: property.propertyEmail,
    typeOfBuilding: property.typeOfBuilding,
  });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onEdit(formData);
  };

  // Prevent form submission when switching to edit mode
  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEditable(true);
  };

  return (
    <Box component='form' onSubmit={handleSubmit} sx={{ p: 2 }}>
      <Typography variant='h6' gutterBottom>
        Edit Property
      </Typography>

      {/* Name */}
      <TextField
        label='Property Name'
        variant='outlined'
        name='name'
        value={formData.name}
        onChange={handleInputChange}
        required
        fullWidth
        margin='normal'
        disabled={!isEditable}
      />

      {/* Apartment List URL */}
      <TextField
        label='Apartment List URL'
        variant='outlined'
        name='apartmentListUrl'
        value={formData.apartmentListUrl}
        onChange={handleInputChange}
        required
        fullWidth
        margin='normal'
        disabled={!isEditable}
      />

      {/* Multimedia Path */}
      <TextField
        label='Multimedia Path'
        variant='outlined'
        name='multimediaPath'
        value={formData.multimediaPath}
        onChange={handleInputChange}
        required
        fullWidth
        margin='normal'
        disabled={!isEditable}
      />

      {/* Property Email */}
      <TextField
        label='Property Email'
        variant='outlined'
        name='propertyEmail'
        value={formData.propertyEmail}
        onChange={handleInputChange}
        required
        fullWidth
        margin='normal'
        disabled={!isEditable}
      />

      {/* Type of Building */}
      <TextField
        label='Type of Building'
        variant='outlined'
        name='typeOfBuilding'
        value={formData.typeOfBuilding}
        onChange={handleInputChange}
        required
        fullWidth
        margin='normal'
        disabled={!isEditable}
      />

      <Stack spacing={2} direction='row' sx={{ mt: 2 }}>
        {/* Toggle Edit Button */}
        {!isEditable ? (
          <Button
            variant='contained'
            color='primary'
            onClick={handleEditClick}
            fullWidth
            sx={{ mt: 2 }}
          >
            Edit
          </Button>
        ) : (
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            sx={{ mt: 2 }}
          >
            Save
          </Button>
        )}
        <Button
          variant='contained'
          color='warning'
          fullWidth
          sx={{ mt: 2 }}
          onClick={onCancel}
        >
          Cancel
        </Button>
      </Stack>
    </Box>
  );
};

export default PropertyEditForm;
