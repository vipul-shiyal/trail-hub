import React from 'react'
import { Modal, Col, Row, List, Card } from 'antd'
import { IMoviesList } from '../utils/types'

type ModalProps = {
  isModalOpen: boolean
  handleModalOpen: () => void
  movieDetails: IMoviesList | null,
  posterPath: string
}

const MovieDetailsModal: React.FC<ModalProps> = (props) => {
  const { movieDetails, isModalOpen, handleModalOpen, posterPath } = props

  const handleCancel = () => {
    handleModalOpen();
  }
  const notShowingList = [
    'genres',
    'production_companies',
    'production_countries',
    'spoken_languages',
    'original_title',
    'popularity',
    'poster_path',
    'status',
    'video',
    'adult',
    'belongs_to_collection',
    'homepage',
    'id',
    'imdb_id',
    'original_language',
    'vote_count',
    'backdrop_path',
    'overview',
    'title'
  ];
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      cancelButtonProps={{ style: { display: 'none' } }}
      okButtonProps={{ style: { display: 'none' } }}
      width={1000}
    >
      <Row>
        <Col span={10}>
          <img alt="Poster" src={posterPath} />
        </Col>
        <Col span={14}>
          <h2 style={styles.title}>{movieDetails?.title}</h2>
          <p style={styles.overview}>{movieDetails?.overview}</p>
          <Row gutter={[8, 8]}>
            {movieDetails !== null &&
              Object.entries(movieDetails).map(([key, value]) => {
                if (!notShowingList.includes(key))
                  return (
                    <Col span={8}>
                      <div style={styles.content}>
                        <p style={styles.contentTitle}>{key}: </p>
                        <p>{value}</p>
                      </div>
                    </Col>
                  )
              })}
          </Row>
        </Col>
      </Row>
    </Modal>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  content: {
    display: 'flex',
  },
  contentTitle: {
    fontWeight: 'bold',
    marginRight: '5px',
  },
  overview: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '7px',
    padding: '19px',
    fontFamily: 'monospace',
  },
  title: {

  }
}

export default MovieDetailsModal
