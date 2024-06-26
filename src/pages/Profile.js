import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const Profile = () => {
  const [profile, setProfile] = useState({});

  const handleSubmit = (values) => {
    setProfile(values);
    console.log('Profile Created:', values);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item name="name" label="İsim" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Profil Oluştur
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Profile;
