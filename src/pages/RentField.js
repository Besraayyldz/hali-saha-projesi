import React, { useState } from 'react';
import { Form, Input, DatePicker, Button } from 'antd';

const RentField = () => {
  const [rentDetails, setRentDetails] = useState({});

  const handleSubmit = (values) => {
    setRentDetails(values);
    console.log('Field Rented:', values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="field" label="Halı Saha Adı" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="rentDuration" label="Kiralama Süresi (Saat)" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="date" label="Tarih" rules={[{ required: true }]}>
        <DatePicker showTime />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Kirala
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RentField;
