import { ListItem, ListItemText } from '@mui/material';
import ActionMenu from '../../components/ActionMenu';
import { Property } from '../../types/properties';

interface Props {
  property: Property;
  handleDetail: (property: Property) => void;
  handleEdit: (property: Property) => void;
  handleDelete: (property: Property) => void;
}

const PropertyListItem: React.FC<Props> = ({
  property,
  handleDetail,
  handleEdit,
  handleDelete,
}) => {
  console.log('PropertyListItem:', property);
  return (
    <ListItem
      sx={{ py: 3 }}
      secondaryAction={
        <ActionMenu
          onDetail={() => handleDetail(property)}
          onEdit={() => handleEdit(property)}
          onDelete={() => handleDelete(property)}
        />
      }
    >
      <ListItemText
        primary={property.name}
        secondary={property.propertyEmail || 'No email assigned'}
      />
    </ListItem>
  );
};

export default PropertyListItem;
