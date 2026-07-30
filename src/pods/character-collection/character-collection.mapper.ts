import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapCharacterItemCollectionFromApiToVm = (
  character: apiModel.CharacterItemCollectionEntityApi
): viewModel.CharacterItemCollectionEntityVM => ({
  id: String(character.id),
  name: character.name,
  image: character.image,
  species: character.species,
  status: character.status,
});
