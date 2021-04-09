import { Link, useParams } from 'react-router-dom';
import type { DetailResponse } from './types';
import { getGifDetailsUrl } from './api';
import { useFetch } from './hooks';
import Gif from './Gif';

type Params = {
  query: string;
}

const GifDetails = () => {
  const { query } = useParams<Params>();
  const { loading, data } = useFetch<DetailResponse>(getGifDetailsUrl(query));

  if (loading || !data) {
    return <div>Loading...</div>
  }

  const gif = data.data;

  return (
    <div>
      <Link to="/">Back to home</Link>
      <div>
        <Gif src={gif.images.original.url} alt={gif.title} />
        <p>{gif.title}</p>
        <p>uploaded by {gif.username}</p>
        <p>rating: {gif.rating}</p>
      </div>
    </div>
  )
};

export default GifDetails;
