import { Pencil } from 'lucide-react';

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

type Props = {
  id: string;
  countryName: string;
  placeName: string;
  targetDate: string;
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};
export function EditPlace({
  id,
  countryName,
  placeName,
  targetDate,
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Editar local</DialogTitle>
          <DialogDescription>
            Edite este planejamento. Clique em salvar quando terminar!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="countryName" className="text-right">
              País
            </Label>
            <CountryCombobox />
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
          <DialogClose>
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
