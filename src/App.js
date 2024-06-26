import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Profile from './pages/Profile';
import RentField from './pages/RentField';
import Login from './pages/Login';
import FilterFields from './pages/FilterFields';
import Cart from './pages/Cart';
import FieldsInCity from './pages/FieldsInCity';

const { Header, Content } = Layout;

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><a href="/profile">Profil Oluştur</a></Menu.Item>
            <Menu.Item key="2"><a href="/rent">Halı Saha Kirala</a></Menu.Item>
            <Menu.Item key="3"><a href="/filter">Zaman Aralığına Göre Filtrele</a></Menu.Item>
            <Menu.Item key="4"><a href="/cart">Sepet</a></Menu.Item>
            <Menu.Item key="5"><a href="/fields">Şehirdeki Halı Sahaları</a></Menu.Item>
            <Menu.Item key="6"><a href="/login">Giriş Yap</a></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/rent" component={RentField} />
            <Route path="/filter" component={FilterFields} />
            <Route path="/cart" component={Cart} />
            <Route path="/fields" component={FieldsInCity} />
            <Route path="/login">
              <Login setAuth={setAuth} />
            </Route>
            <Route path="/" exact>
              <h1>Hali Saha Rezervasyon Sistemine Hoş Geldiniz</h1>
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
