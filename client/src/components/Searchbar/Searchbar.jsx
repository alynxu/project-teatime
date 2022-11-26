import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';


const Searchbar = () => (
  <Select
    showSearch
    style={{ width: 300 }}
    placeholder="What are you looking for?"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Oolong Tea',
      },
      {
        value: '2',
        label: 'Black Tea',
      },
      {
        value: '3',
        label: 'Green Tea',
      },
      {
        value: '4',
        label: 'Latte',
      },
      {
        value: '5',
        label: 'Iced Americano',
      },
      {
        value: '6',
        label: 'Strawberry Frappuccino',
      },
    ]}
  />
);

export default Searchbar;