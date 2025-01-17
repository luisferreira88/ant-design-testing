import React from 'react';
import './index.css';
import { Select } from 'antd';
import Segmented from 'antd/lib/segmented';

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const App: React.FC = () => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Segmented<string>
      style={{
        borderRadius: 0,
        border: '1px solid #d9d9d9',
        height: 32,
        boxSizing: 'border-box',
      }}
      options={['Views', 'Forms']}
      onChange={(value) => {
        console.log(value); // string
      }}
    />
    <Select
      style={{ width: '100%' }}
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'tom',
          label: 'Tom',
        },
      ]}
    />
  </div>
);

export default App;
