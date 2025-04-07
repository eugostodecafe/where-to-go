import { Header } from './components/ui/header.tsx';
import { Countries } from './pages/countries.tsx';

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center align-center">
        <Countries />
      </main>
    </>
  );
}

export default App;
