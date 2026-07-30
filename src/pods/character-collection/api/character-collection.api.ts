import { CharacterItemCollectionEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];

const API_URL = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<CharacterItemCollectionEntityApi[]> => {
  const response = await fetch(`${API_URL}?page=1`);
  const data = await response.json();
  return data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((c) => c.id !== Number(id));
  return true;
};
