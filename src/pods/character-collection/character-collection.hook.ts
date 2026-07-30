import * as React from 'react';
import { CharacterItemCollectionEntityVM } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapCharacterItemCollectionFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterItemCollectionEntityVM[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>
      setCharacterCollection(mapToCollection(result, mapCharacterItemCollectionFromApiToVm))
    );
  };

  return { characterCollection, loadCharacterCollection };
};
