import React, { createContext, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

type Place = {
  id: string;
  countryName: string;
  placeName: string;
  targetDate: string;
};

type PlacesContextType = {
  places: Place[];
  setPlaces: React.Dispatch<React.SetStateAction<Place[]>>;
  countries: { value: string; label: string }[];
  isLoadingCountries: boolean;
};

type Country = { name: string; full_name: string };

const PlacesContext = createContext<PlacesContextType | undefined>(undefined);

const PlacesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [places, setPlaces] = useState<Place[]>([]);

  const { data: countries = [] as Country[], isLoading: isLoadingCountries } =
    useQuery({
      queryKey: ['countries'],
      queryFn: async () => {
        const response = await fetch('http://localhost:3000/countries');
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        return data.map((country: Country) => ({
          value: country.name,
          label: country.full_name,
        }));
      },
    });

  return (
    <PlacesContext.Provider
      value={{ places, setPlaces, countries, isLoadingCountries }}
    >
      {children}
    </PlacesContext.Provider>
  );
};

const usePlacesContext = () => {
  const context = useContext(PlacesContext);
  if (!context) {
    throw new Error('usePlacesContext must be used within a PlacesProvider');
  }
  return context;
};

export { usePlacesContext, PlacesProvider };
export type { Place, Country };
