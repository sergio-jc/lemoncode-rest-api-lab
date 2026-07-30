import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CharacterItemCollectionEntityVM } from '../character-collection.vm';
import * as classes from './character-card.styles';
import { Link } from 'react-router-dom';
import { linkRoutes } from '#core/router/routes.js';

interface Props {
  character: CharacterItemCollectionEntityVM;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const getStatusColor = (status: string): 'success' | 'error' | 'default' => {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'success';
    case 'dead':
      return 'error';
    default:
      return 'default';
  }
};

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete } = props;

  return (
    <Card
      className={classes.card}
      component={Link}
      to={linkRoutes.characterDetail(character.id)}
      style={{ textDecoration: 'none' }}
    >
      <CardMedia
        className={classes.media}
        image={character.image}
        title={character.name}
      />
      <CardHeader title={character.name} className={classes.header} />
      <CardContent className={classes.content}>
        <div className={classes.chips}>
          <Chip
            label={character.species}
            size="small"
            variant="outlined"
            color="primary"
          />
          <Chip
            label={character.status}
            size="small"
            color={getStatusColor(character.status)}
          />
        </div>
      </CardContent>
      {/* <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};
