import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CountryCombobox } from './ui/country-combobox';
import { useState } from 'react';

type Props = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};
export function AddPlace({ open, onOpenChange }: Props) {
  const [country, setCountry] = useState('');
  const [place, setPlace] = useState('');
  const [target, setTarget] = useState('');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus /> Adicionar local
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Adicionar local</DialogTitle>
          <DialogDescription>
            Adicione um novo local. Clique em salvar quando terminar!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="countryName" className="text-right">
              País
            </Label>
            <CountryCombobox value={country} setValue={setCountry} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="placeName" className="text-right">
              Local
            </Label>
            <Input
              id="placeName"
              defaultValue="Serra do Cipó, MG"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="targetDate" className="text-right">
              Meta
            </Label>
            <Input
              id="targetDate"
              placeholder="mm/aaaa"
              defaultValue="01/2025"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className="flex gap-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fechar
            </Button>
          </DialogClose>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
