import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { useShowLoader } from 'hooks/useShowLoader';
import CircularProgress from '@mui/material/CircularProgress';
import Highlighter from 'react-highlight-words';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter';
import Tooltip from '@mui/material/Tooltip';

export const Contact = ({ id, onClick, name, number }) => {
  const { isLoaderVisible, showLoader } = useShowLoader();
  const filter = useSelector(selectFilter);

  const handleOnClick = () => {
    showLoader();
    onClick(id);
  };

  return (
    <ListItem
      divider
      secondaryAction={
        <Tooltip title="Delete">
          <IconButton edge="end" aria-label="delete" onClick={handleOnClick}>
            {isLoaderVisible ? <CircularProgress size={25} /> : <DeleteIcon />}
          </IconButton>
        </Tooltip>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Highlighter
            searchWords={[filter]}
            autoEscape={true}
            textToHighlight={name}
          />
        }
        secondary={number}
      />
    </ListItem>
  );
};
