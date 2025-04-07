import logo from '@/assets/logo.png';

export function Header() {
  const altText =
    'Flat vector logo showing Earth in green and blue tones, surrounded by travel-related icons including a red passport, a vintage suitcase, and a location pin, symbolizing global adventure and trip planning';
  return (
    <header className="bg-accent p-4 flex items-center">
      <img src={logo} alt={altText} className="h-14 w-auto" />
    </header>
  );
}
