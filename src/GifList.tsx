import { useState } from 'react';
import styled  from 'styled-components';
import { Link } from 'react-router-dom';
import type { TrendingResponse } from './types';
import { getTrendingGifsUrl, getSearchGifsUrl } from './api';
import { useFetch } from './hooks';
import Gif from './Gif';
import './App.css';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  // grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    // grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StyledInput = styled.input`
  width: 300px;
`;

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px;
  gap: 8px;
`;

function GifList() {
  const [url, setUrl] = useState(getTrendingGifsUrl());
  const { loading, data } = useFetch<TrendingResponse>(url);
  const [search, setSearch] = useState('');

  const onSearch: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (search === '') {
      setUrl(getTrendingGifsUrl());
    } else {
      setUrl(getSearchGifsUrl(search));
    }
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        <StyledInputContainer>
          <StyledInput value={search} onChange={event => setSearch(event.target.value)} />
          <button type="submit">Search!</button>
        </StyledInputContainer>
        {loading ? <p>Loading...</p> : null}
      </form>
      {data ? (
        <Grid>
          {data.data.map(item => (
            <Link key={item.id} to={`/gif/${item.id}`}>
              <div>
                <Gif src={item.images.fixed_height.url} alt={item.title} />
              </div>
            </Link>
          ))}
        </Grid>
      ): null}
    </div>
  );
}

export default GifList;
