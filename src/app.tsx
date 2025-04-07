import { Header } from '@/components/ui/header.tsx';
import { PlacesProvider } from '@/contexts/places-context.tsx';
import { PlacesToGo } from '@/pages/places-to-go.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <PlacesProvider>
        <main className="flex justify-center align-center">
          <PlacesToGo />
        </main>
      </PlacesProvider>
    </QueryClientProvider>
  );
}

export default App;
