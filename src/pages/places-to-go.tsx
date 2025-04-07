import { AddCountry } from '@/components/add-country';
import { TypographyH2 } from '@/components/ui/h2';
import { PageTitle } from '@/components/ui/page-title';
import { useState } from 'react';

const countries = [];

export function PlacesToGo() {
  const [openAddModal, setOpenAddModal] = useState(false);
  return (
    <div className="w-[1024px] p-[48px]">
      <div className="flex border-b pb-2.5 justify-between items-center mb-4">
        <PageTitle>Lugares para visitar</PageTitle>
        <AddCountry open={openAddModal} onOpenChange={setOpenAddModal} />
      </div>
      {countries.length === 0 ? (
        <TypographyH2>Não há nenhum lugar cadastrado no momento!</TypographyH2>
      ) : (
        <>asdasdas</>
      )}
    </div>
  );
}
