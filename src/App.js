import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

const CartScreen = () => <h1>Your Cart</h1>;
const LoginScreen = () => <h1>Sign In</h1>;

const App = () => {
  return (
    <>
      <Header /> { }
      <main className="py-3">
        <Container>
          <HomeScreen />
          <Routes>
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
