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
import { toast } from 'sonner';
import { usePlacesContext } from '@/contexts/places-context';

type Props = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};
export function AddPlace({ open, onOpenChange }: Props) {
  const { countries, addPlace } = usePlacesContext();
  const [country, setCountry] = useState('');
  const [place, setPlace] = useState('');
  const [target, setTarget] = useState('');

  function handleSubmit() {
    const errors: string[] = [];

    if (countries.findIndex((c) => c.value === country) === -1) {
      errors.push('País inválido.');
    }

    if (place.trim().length < 3) {
      errors.push('O local deve ter pelo menos 3 caracteres.');
    }

    const [month, year] = target.split('/').map(Number);
    const currentDate = new Date();
    const targetDate = new Date(year, month - 1);

    if (
      isNaN(month) ||
      isNaN(year) ||
      month < 1 ||
      month > 12 ||
      targetDate <= currentDate
    ) {
      errors.push(
        'A meta deve estar no formato mm/aaaa e ser uma data futura.'
      );
    }

    if (errors.length > 0) {
      errors.forEach((error) => toast(error));
      return;
    }

    addPlace({
      countryName: country,
      placeName: place,
      targetDate: target,
    });

    setCountry('');
    setPlace('');
    setTarget('');
    onOpenChange(false);
  }

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
              placeholder="Serra do Cipó, MG"
              value={place}
              onChange={(e) => setPlace(e.currentTarget.value)}
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
              value={target}
              onChange={(e) => setTarget(e.currentTarget.value)}
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
          <Button onClick={handleSubmit}>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
