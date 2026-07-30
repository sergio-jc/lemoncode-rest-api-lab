import React from 'react';
import { Formik, Form } from 'formik';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { formValidation } from './character.validations';
import { CharacterEntityVm } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: CharacterEntityVm;
  onSave: (character: CharacterEntityVm) => void;
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

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <div className={classes.detail}>
            <img
              className={classes.image}
              src={character.image}
              alt={character.name}
            />
            <div className={classes.info}>
              <Typography variant="h4" component="h1">
                {character.name}
              </Typography>
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
              {/* <TextFieldComponent
                name="bestSentence"
                label="Best sentence"
                multiline={true}
                rows={3}
              />
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button> */}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
