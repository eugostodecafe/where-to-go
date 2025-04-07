import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { EditPlace } from '@/components/edit-place';
import { useState } from 'react';

type Props = {
  id: string;
  countryName: string;
  placeName: string;
  targetDate: string;
};

export function PlaceCard(props: Props) {
  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center mb-4">
          <p className="text-xl">{props.countryName}</p>
          <div className="flex gap-2">
            <EditPlace
              {...props}
              open={openEditModal}
              onOpenChange={setOpenEditModal}
            />
            <Button variant="outline" onClick={() => {}}>
              <Trash />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Local: {props.placeName}</p>
        <p>Meta: {props.targetDate}</p>
      </CardContent>
    </Card>
  );
}
