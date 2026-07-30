export interface CharacterItemCollectionEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentence?: string;
}

export interface CharacterItemCollectionEntityApiListResponse {
  info: {
    count: number;
  };
  results: CharacterItemCollectionEntityApi[];
}
