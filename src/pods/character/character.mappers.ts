import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: String(character.id),
  name: character.name,
  image: character.image,
  species: character.species,
  status: character.status,
  bestSentence: character.bestSentence ?? '',
});

export const mapCharacterFromVmToApi = (
  character: viewModel.CharacterEntityVm
): apiModel.CharacterEntityApi =>
  (({
    id: Number(character.id),
    name: character.name,
    image: character.image,
    species: character.species,
    status: character.status,
    bestSentence: character.bestSentence,
  } as unknown) as apiModel.CharacterEntityApi);
