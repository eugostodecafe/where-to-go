import { Header } from './components/ui/header.tsx';
import { PlacesToGo } from './pages/places-to-go.tsx';

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center align-center">
        <PlacesToGo />
      </main>
    </>
  );
}

export default App;
