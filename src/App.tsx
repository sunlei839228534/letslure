import styled from 'styled-components';
import './App.css';
import { Footer } from './components'

function App() {
  return (
    <div className="App">
      <ScreenView />
      <Footer />
    </div>
  );
}

export default App;


const ScreenView = styled.div`
    height: calc(100vh - 48px);
    width: 100%;
    background: #232832
`