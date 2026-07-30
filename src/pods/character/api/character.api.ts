import { CharacterEntityApi } from './character.api-model';
import { Lookup } from '#common/models';
import { mockCharacter } from './character.mock-data';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  return mockCharacter;
};

export const getCities = async (): Promise<Lookup[]> => {
  return [];
};

export const saveCharacter = async (character: CharacterEntityApi): Promise<boolean> => {
  return true;
};
