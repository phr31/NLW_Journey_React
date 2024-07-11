import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';
import React from 'react';
import Button from '../../../components/button.tsx';

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  closeGuestInput: () => void;
  openGuestInput: () => void;
}

const DestinationAndDateStep = ({
  isGuestInputOpen,
  closeGuestInput,
  openGuestInput,
}: DestinationAndDateStepProps) => {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex itens-center gap-2 flex-1">
        <MapPin className="size-5 text-lg text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />
      </div>
      <div className="flex itens-center gap-2">
        <Calendar className="size-5 text-lg text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          placeholder="Quando?"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
        />
      </div>
      <div className="w-px h-6 bg-zinc-800" />
      {isGuestInputOpen ? (
        <Button
          onClick={closeGuestInput}
          variant='secondary'
        >
          Alterar local/data
          <Settings2 className="text-zinc-200 size-5 " />
        </Button>
        
      ) : (
        <Button
          onClick={openGuestInput}
          variant='primary'
        >
          Continuar
          <ArrowRight className="text-lime-950 size-5 " />
        </Button>
      )}
    </div>
  );
};

export default DestinationAndDateStep;
