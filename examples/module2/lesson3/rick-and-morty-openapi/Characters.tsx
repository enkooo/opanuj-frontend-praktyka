import { useEffect, useState } from 'react';
import { DefaultApi } from './api/apis';
import { Character } from './api';

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const api = new DefaultApi();
    api.getCharacters().then((response) => {
      console.log(response);
      setCharacters(response.results!);
    });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold my-4">Characters</h1>
      {characters.map((character) => <li key={character.id}>{character.name}</li>)}
    </div>
  );
};

export default Characters;
