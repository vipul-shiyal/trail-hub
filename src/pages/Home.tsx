import React, { useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Row, Col, Pagination } from 'antd';
import type { PaginationProps } from 'antd';
import { NavLink } from "react-router-dom";
import MoviesList from '../components/MoviesList';
import { fetchShowsList, searchMovie, fetchTrendingShows } from '../services/movies';
import SearchInput from '../components/SearchInput';
import { IMoviesList } from '../utils/types';

const { Header, Content, Footer } = Layout;


const Home: React.FC = () => {
  const [movieLists, setMovieLists] = useState<IMoviesList[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  //for layout color
  const {
    token: { colorBgContainer },
  } = theme.useToken();

 useEffect(() => {
  getShowsList('movie');
 }, []);

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrentPage(page);
  };

 const getShowsList = async(showType: string) => {
    try {
      const resp = await fetchShowsList(showType, currentPage);
      setMovieLists(resp.data?.results)
    } catch (error) {
      console.log('error', error);
    }
 }
 const getTrendingShows = async(mediaType: string) => {
    try {
      const resp = await fetchTrendingShows(mediaType);
      setMovieLists(resp.data?.results)
    } catch (error) {
      console.log('error', error);
    }
 }

 const handleSearchMovie = async(searchQuery: string) => {
  try {
    const resp = await searchMovie({ searchQuery });;
    setMovieLists(resp.data?.results)
  } catch (error) {
    console.log('error', error);
  }
 }

 const items = [
  {
    label: (
      <span onClick={() => getShowsList('movie')} >Movies</span>
    ),
    key: 'movie',
  },
  {
    label: (
      <span onClick={() => getShowsList('tv')} >TV Show</span>
    ),
    key: 'tv',
  },
  {
    label: 'Trending',
    key: 'trending',
    children: [
      {
        label: <span onClick={() => getTrendingShows('movie')}>Movie</span>,
        key: 'trending-movie',
      },
      {
        label: <span onClick={() => getTrendingShows('tv')} >TV Show</span>,
        key: 'trending-tv',
      },
    ],
  },
  {
    label: (
      <NavLink to="/watch-list">Add Watch Later</NavLink>
    ),
    key: 'watch-later',
  },
];


  return (
    <Layout>
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', display: 'flex', alignItems: 'center', }}>
      <div
        style={{
          float: 'left',
          width: 120,
          height: 31,
          marginRight: '24px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <NavLink to="/"> TrailHub</NavLink>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
        style={{width: '75%'}}
      />
      <SearchInput onSearch={handleSearchMovie}/>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 380, background: colorBgContainer}}>
        <Row gutter={[8, 8]}>
          {movieLists.map((list,i) => (
            <Col span={4}>
              <MoviesList 
                movie={list} 
                key={i}
              />
            </Col>
          ))}    
        </Row>  
        {movieLists.length > 0 && <Pagination current={currentPage} onChange={onChange} total={30} /> }
      </div>
      
    </Content>
    <Footer style={{ textAlign: 'center' }}>Design ©2023 Created by TrailHub</Footer>
  </Layout>
  );
}

export default Home;