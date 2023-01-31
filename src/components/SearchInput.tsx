import React from 'react';
import { Input, Row, Col  } from 'antd';

const { Search } = Input;

type Props = {
  onSearch: (searchQuery: string) => void
}

const SearchInput = ({ onSearch }: Props) => {
  
  return (
    <Row  style={{width: '25%'}}>
      <Col span={24} style={{display: 'flex'}}>
        <Search 
          placeholder="Search Movies" 
          allowClear 
          onSearch={onSearch}
        />
      </Col>
    </Row>
  )
}

export default SearchInput;