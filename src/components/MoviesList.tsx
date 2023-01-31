import React, { useState } from 'react';
import { Card, Rate } from 'antd';
import MovieDetailsModal from './MovieDetailsModal';
import { IMoviesList } from '../utils/types';
import { URL_IMG,IMG_SIZE_LARGE } from '../utils/const';
import { fetchShowDetails } from '../services/movies'


const { Meta } = Card;

type Props = {
  movie: IMoviesList
}

const MoviesList: React.FC<Props> = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [movieDetails, setMovieDetails] = useState<IMoviesList | null>(null);

  const hadnleClick = async(event: React.MouseEvent<HTMLDivElement>, id: number) => {
    
    try {
      const resp = await fetchShowDetails(id);
      setMovieDetails(resp.data);
      setIsModalOpen(true);
    } catch (error) {
      console.log('error', error);
    }
  }


  const posterPath = URL_IMG + IMG_SIZE_LARGE + movie?.poster_path;
  const rateValue = (movie?.vote_average * 5) / 10;
  return (
    <div 
      style={{ margin: '1rem' }}
      key={movie.id}
    >
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="Poster" src={posterPath} />}
            onClick={(e) => hadnleClick(e, movie.id)}
            key={movie.id}
        >
          <Meta title={movie.title ? movie.title : movie.name} description={<Rate disabled defaultValue={rateValue === 0 ? 1 : rateValue } />} />
        </Card>
        {isModalOpen && 
          <MovieDetailsModal 
            isModalOpen={isModalOpen}
            movieDetails={movieDetails}
            posterPath={posterPath}
            handleModalOpen={() => setIsModalOpen(false)}
          />
        }
    </div>
  );
}

export default MoviesList;