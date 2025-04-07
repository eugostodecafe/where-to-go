'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { usePlacesContext } from '@/contexts/places-context';
import { toast } from 'sonner';

type Props = {
  value: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

export function CountryCombobox({ value, setValue }: Props) {
  const { countries } = usePlacesContext();
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          disabled={!setValue}
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? countries.find((country) => country.value === value)?.label
            : 'Selecione o país...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            disabled={!setValue}
            placeholder="Busque pelo país..."
          />
          <CommandList>
            <CommandEmpty>Carregando países</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  id="countryName"
                  key={country.value}
                  value={country.value}
                  disabled={!setValue}
                  onSelect={(currentValue) => {
                    if (!setValue) {
                      toast('Não é possível editar o país!');
                      return;
                    }
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === country.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {country.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
