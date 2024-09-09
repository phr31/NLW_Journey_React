import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react';
import Button from '../../../components/button.tsx';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  closeGuestInput: () => void;
  openGuestInput: () => void;
  setDestination: (destination: string) => void;
  setRange: (dates: DateRange | undefined) => void;
  range: DateRange | undefined;
}

const DestinationAndDateStep = ({
  isGuestInputOpen,
  closeGuestInput,
  openGuestInput,
  setDestination,
  setRange,
  range,
}: DestinationAndDateStepProps) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }
  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  const displayedDate =
    range && range.from && range.to
      ? format(range.from, "d' de 'LLL")
          .concat(' até ')
          .concat(format(range.to, "d' de 'LLL"))
      : null;

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex itens-center gap-2 flex-1">
        <MapPin className="size-5 text-lg text-zinc-400" />
        <input
          onChange={(event) => setDestination(event.target.value)}
          disabled={isGuestInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />
      </div>
      <button
        disabled={isGuestInputOpen}
        onClick={openDatePicker}
        className="flex itens-center gap-2 text-left w-[240px]"
      >
        <Calendar className="size-5 text-lg text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayedDate || 'Quando?'}
        </span>
      </button>
      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-lg text-white font-semibold">
                  Selecione a data:
                </p>
                <button type="button" onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <DayPicker mode="range" selected={range} onSelect={setRange} />
            </div>
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800" />
      {isGuestInputOpen ? (
        <Button onClick={closeGuestInput} variant="secondary">
          Alterar local/data
          <Settings2 className="text-zinc-200 size-5 " />
        </Button>
      ) : (
        <Button onClick={openGuestInput} variant="primary">
          Continuar
          <ArrowRight className="text-lime-950 size-5 " />
        </Button>
      )}
    </div>
  );
};

export default DestinationAndDateStep;
