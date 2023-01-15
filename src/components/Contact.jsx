import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts';
import BeatLoader from 'react-spinners/BeatLoader';

export const Contact = ({ id, onClick, name, number }) => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <ListItem
      divider
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onClick(id)}>
          {!isLoading && <DeleteIcon />}
          <BeatLoader color="#36d7b7" size={6} loading={isLoading} />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      ,
      <ListItemText primary={name} secondary={number} />
    </ListItem>
  );
};
