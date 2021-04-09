import React from 'react';
import styled from 'styled-components';

type GifProps = {
  src: string;
  alt: string;
}

const StyledImage = styled.img`
  max-width: 100;
`;

const Gif: React.FC<GifProps> = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />
};

export default Gif;
