import { AddCountry } from '@/components/add-country';
import { PageTitle } from '@/components/ui/page-title';
import { useState } from 'react';

export function Countries() {
  const [openAddModal, setOpenAddModal] = useState(false);
  return (
    <div className="w-[1024px] p-[48px]">
      <div className="flex border-b pb-2.5 justify-between items-center">
        <PageTitle>Lugares para visitar</PageTitle>
        <AddCountry open={openAddModal} onOpenChange={setOpenAddModal} />
      </div>
    </div>
  );
}
