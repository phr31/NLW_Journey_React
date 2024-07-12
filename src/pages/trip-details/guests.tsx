import {
  CircleCheck,
  CircleDashed,
  UserCog,
} from 'lucide-react';
import Button from '../../components/button.tsx';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios.ts';
import { useEffect, useState } from 'react';

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

const Guests = () => {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [tripId]);

  return (
    <div className="space-y-6">
      <h3 className="text-zinc-50 font-semibold text-xl">Convidados</h3>
      <div className="space-y-5">
        {participants.map((participant, index) => {
          return (
            <div
              key={participant.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <h3 className="font-medium text-zinc-100 ">
                  {participant.name ?? `Participante ${index}`}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-1 max-w-[16rem]">
                  {participant.email}
                </p>
              </div>
              {participant.is_confirmed ? (
                <CircleCheck className="size-5 text-lime-300 shrink-0" />
              ) : (
                <CircleDashed className="size-5 text-zinc-400 shrink-0" />
              )}
            </div>
          );
        })}
        <Button variant="secondary">
          <UserCog className="text-zinc-200 size-5 " />
          Gerenciar convidados
        </Button>
      </div>
    </div>
  );
};

export default Guests;
