import React from 'react';

import { useJokeQuery } from '@/apis/jokeApi';

const SWR = () => {
  const { data } = useJokeQuery();
  console.log(data);
  return (
    <div>
      Joke: {data?.data?.setup} - {data?.data?.delivery}
    </div>
  );
};

export default SWR;
