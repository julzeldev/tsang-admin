import React, { useState, useEffect } from 'react';
import {
  Box,
  List,
  CircularProgress,
  Typography,
  Divider,
  Drawer,
} from '@mui/material';
import { getProperties, deleteProperty } from '../../api/properties';
import { Property } from '../../types/properties';
import SearchBar from '../../components/SearchBar';
import PropertyListItem from './PropertyListItem';
import PropertyEditForm from './PropertyEditForm';

interface PropertyListProps {
  properties: Property[];
  displaySearchBar?: boolean;
}

const PropertyList: React.FC<PropertyListProps> = ({
  properties,
  displaySearchBar = false,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [propertyList, setPropertyList] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // Search term state
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false); // Drawer state
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  ); // Selected property

  // Fetch properties from the API when the component mounts
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const fetchedProperties = await getProperties();
        setPropertyList(fetchedProperties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Update the property list when the `properties` prop changes
  useEffect(() => {
    if (properties.length > 0) {
      setPropertyList(properties);
    }
  }, [properties]);

  // Handle the search input change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  // Filter the property list based on the search term
  const filteredProperties = propertyList.filter((property) =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDetail = (property: Property) => {
    console.log('Detail clicked for:', property);
    // Add logic for viewing property details
  };

  const handleEdit = (property: Property) => {
    setSelectedProperty(property); // Set the selected property to edit
    setDrawerOpen(true); // Open the drawer
  };

  const handleDelete = async (property: Property) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete the property: ${property.name}?`
    );

    if (!isConfirmed) {
      return;
    }

    if (!property._id) {
      console.error('Failed to delete property: Property ID is undefined');
      return;
    }

    try {
      await deleteProperty(property._id);
      // Remove the deleted property from the list
      setPropertyList((prevList) =>
        prevList.filter((item) => item._id !== property._id)
      );
      console.log(`Property ${property.name} deleted successfully`);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Failed to delete property: ${error.message}`);
      } else {
        console.error('Failed to delete property: An unknown error occurred');
      }
    }
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
    setSelectedProperty(null); // Reset selected property
  };

  const handleSave = () => {
    // Add your save logic here for editing the property
    console.log('Save clicked');
    setDrawerOpen(false); // Close the drawer after saving
  };

  return (
    <Box sx={{ py: 2 }}>
      {/* Search bar for filtering properties */}
      {displaySearchBar && (
        <Box sx={{ mb: 1 }}>
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
        </Box>
      )}

      {loading && (
        <Box display='flex' justifyContent='center' alignItems='center'>
          <CircularProgress />
        </Box>
      )}

      {!loading && filteredProperties.length === 0 ? (
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Typography variant='h6'>No properties found</Typography>
        </Box>
      ) : (
        <List>
          {filteredProperties.map((property) => (
            <React.Fragment key={property._id}>
              <PropertyListItem
                property={property}
                handleDetail={handleDetail}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}

      {/* Drawer for editing the property */}
      <Drawer anchor='right' open={drawerOpen} onClose={handleCloseDrawer}>
        <Box sx={{ width: 325, p: 1 }}>
          {selectedProperty && (
            <PropertyEditForm
              property={selectedProperty}
              onEdit={handleSave}
              editable={false}
              onCancel={handleCloseDrawer}
            />
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default PropertyList;
