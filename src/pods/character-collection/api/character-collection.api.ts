import { CharacterItemCollectionEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';


const API_URL = '/api/character';

export const getCharacterCollection = async (): Promise<
  CharacterItemCollectionEntityApi[]
> => {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  return data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  // characterCollection = characterCollection.filter((c) => c.id !== Number(id));
  return true;
};
