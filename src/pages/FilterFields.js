import React, { useState } from 'react';
import { Form, DatePicker, Button, List } from 'antd';

const FilterFields = () => {
  const [fields, setFields] = useState([]);
  const [filteredFields, setFilteredFields] = useState([]);

  const handleFilter = (values) => {
    const availableFields = fields.filter(field => {
      // Uygun zaman aralığını kontrol etme
      return true; // Örnek filtreleme koşulu
    });
    setFilteredFields(availableFields);
  };

  return (
    <div>
      <Form onFinish={handleFilter}>
        <Form.Item name="date" label="Tarih" rules={[{ required: true }]}>
          <DatePicker showTime />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Filtrele
          </Button>
        </Form.Item>
      </Form>
      <List
        itemLayout="horizontal"
        dataSource={filteredFields}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.fieldName}
              description={`Uygun Zaman: ${item.availableTime}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default FilterFields;
