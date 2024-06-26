import React, { useState } from 'react';
import { List, Button, Form, Input } from 'antd';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState({});

  const handlePayment = (values) => {
    setPaymentDetails(values);
    console.log('Payment Details:', values);
    // Onay maili gönderme işlemi burada yapılabilir
  };

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.fieldName}
              description={`Kiralama Süresi: ${item.rentDuration}`}
            />
            <Button onClick={() => removeFromCart(item)}>Sepetten Çıkar</Button>
          </List.Item>
        )}
      />
      <Form onFinish={handlePayment}>
        <Form.Item name="cardNumber" label="Kart Numarası" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="expiryDate" label="Son Kullanma Tarihi" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="cvv" label="CVV" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Ödeme Yap
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Cart;
