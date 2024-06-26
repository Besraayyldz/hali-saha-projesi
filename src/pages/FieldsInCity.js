import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import axios from 'axios';

const FieldsInCity = () => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    axios.get('your_kaggle_data_api_url')
      .then(response => setFields(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <List
      itemLayout="horizontal"
      dataSource={fields}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={item.fieldName}
            description={`Şehir: ${item.city}`}
          />
        </List.Item>
      )}
    />
  );
};

export default FieldsInCity;
