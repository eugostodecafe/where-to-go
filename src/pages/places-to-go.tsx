import { AddCountry } from '@/components/add-country';
import { PlaceCard } from '@/components/place-card';
import { TypographyH2 } from '@/components/ui/h2';
import { PageTitle } from '@/components/ui/page-title';
import { useState } from 'react';

const placesToGo = [
  {
    id: '1',
    countryName: 'Brasil',
    placeName: 'Serra do Cipó',
    targetDate: '01/2025',
  },
  {
    id: '2',
    countryName: 'Brasil',
    placeName: 'Serra do Cipó',
    targetDate: '01/2025',
  },
  {
    id: '3',
    countryName: 'Brasil',
    placeName: 'Serra do Cipó',
    targetDate: '01/2025',
  },
];

export function PlacesToGo() {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <div className="w-[1024px] p-[48px]">
      <div className="flex border-b pb-2.5 justify-between items-center mb-4">
        <PageTitle>Lugares para visitar</PageTitle>
        <AddCountry open={openAddModal} onOpenChange={setOpenAddModal} />
      </div>
      {placesToGo.length === 0 ? (
        <TypographyH2>Não há nenhum lugar cadastrado no momento!</TypographyH2>
      ) : (
        <div className="grid grid-cols-3 gap-4 w-full">
          {placesToGo.map(
            ({ id: placeId, placeName, countryName, targetDate }) => {
              return (
                <PlaceCard
                  key={`${countryName}-${placeName}-${targetDate}`}
                  id={placeId}
                  countryName={countryName}
                  placeName={placeName}
                  targetDate={targetDate}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
}
