import { AddPlace } from '@/components/add-place';
import { PlaceCard } from '@/components/place-card';
import { TypographyH2 } from '@/components/ui/h2';
import { PageTitle } from '@/components/ui/page-title';
import { usePlacesContext } from '@/contexts/places-context';
import { useState } from 'react';

export function PlacesToGo() {
  const { places } = usePlacesContext();
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <div className="w-[1024px] p-[48px]">
      <div className="flex border-b pb-2.5 justify-between items-center mb-4">
        <PageTitle>Lugares para visitar</PageTitle>
        <AddPlace open={openAddModal} onOpenChange={setOpenAddModal} />
      </div>
      {places.length === 0 ? (
        <TypographyH2>Não há nenhum lugar cadastrado no momento!</TypographyH2>
      ) : (
        <div className="grid grid-cols-3 gap-4 w-full">
          {places.map(({ id: placeId, placeName, countryName, targetDate }) => {
            return (
              <PlaceCard
                key={placeId}
                id={placeId}
                countryName={countryName}
                placeName={placeName}
                targetDate={targetDate}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
