import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const history = useHistory();

  const handleLogin = (values) => {
    setAuth(true);
    history.push('/');
  };

  return (
    <Form onFinish={handleLogin}>
      <Form.Item name="username" label="Kullanıcı Adı" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Şifre" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Giriş Yap
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
