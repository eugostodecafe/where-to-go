import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';

type Props = {
  countryName: string;
  placeName: string;
  targetDate: string;
};

export function PlaceCard({ countryName, targetDate, placeName }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center mb-4">
          <p className="text-xl">{countryName}</p>
          <div className="flex gap-2">
            <Button>
              <Pencil />
            </Button>
            <Button variant="outline">
              <Trash />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Local: {placeName}</p>
        <p>Meta: {targetDate}</p>
      </CardContent>
    </Card>
  );
}
