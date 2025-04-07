import React, { createContext, useContext, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

type Place = {
  id: string;
  countryName: string;
  placeName: string;
  targetDate: string;
};

type PlacesContextType = {
  places: Place[];
  addPlace: (place: Omit<Place, 'id'>) => void;
  editPlace: (
    id: string,
    updatedPlace: Omit<Place, 'id' | 'countryName'>
  ) => void;
  deletePlace: (id: string) => void;
  countries: { value: string; label: string }[];
  isLoadingCountries: boolean;
};

type Country = { name: string; full_name: string };

const PlacesContext = createContext<PlacesContextType | undefined>(undefined);

const PlacesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [places, setPlaces] = useState<Place[]>(() => {
    const storedPlaces = localStorage.getItem('places');
    return storedPlaces ? JSON.parse(storedPlaces) : [];
  });

  useEffect(() => {
    localStorage.setItem('places', JSON.stringify(places));
  }, [places]);

  const addPlace = (place: Omit<Place, 'id'>) => {
    const newPlace = { ...place, id: uuidv4() };
    setPlaces((prevPlaces) => [...prevPlaces, newPlace]);
  };

  const editPlace = (
    id: string,
    updatedPlace: Omit<Place, 'id' | 'countryName'>
  ) => {
    setPlaces((prevPlaces) =>
      prevPlaces.map((place) =>
        place.id === id ? { ...place, ...updatedPlace } : place
      )
    );
  };

  const deletePlace = (id: string) => {
    setPlaces((prevPlaces) => prevPlaces.filter((place) => place.id !== id));
  };

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
      value={{
        places,
        addPlace,
        editPlace,
        deletePlace,
        countries,
        isLoadingCountries,
      }}
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
