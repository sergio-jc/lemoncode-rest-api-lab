import { CharacterEntityApi } from './character.api-model';
import { Lookup } from '#common/models';
import { mockCharacter } from './character.mock-data';

const API_URL = '/api/character';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();
  return data;
};

export const getCities = async (): Promise<Lookup[]> => {
  return [];
};

export const saveCharacter = async (character: CharacterEntityApi): Promise<boolean> => {
  const response = await fetch(`${API_URL}/${character.id}`, {
    method: 'PUT',
    body: JSON.stringify(character),
  });
  return response.ok;
};
