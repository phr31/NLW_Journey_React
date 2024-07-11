import { Link2, Plus } from 'lucide-react';
import Button from '../../components/button.tsx';

const ImportantLinks = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-zinc-50 font-semibold text-xl">Links importantes</h3>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h3 className="font-medium text-zinc-100 ">Reserva do AirBnB</h3>
            <a
              href="#"
              className="text-xs text-zinc-400 line-clamp-1 max-w-[16rem] hover:text-zinc-200 "
            >
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h3 className="font-medium text-zinc-100 ">Reserva do AirBnB</h3>
            <a
              href="#"
              className="text-xs text-zinc-400 line-clamp-1 max-w-[16rem] hover:text-zinc-200 "
            >
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
        <Button variant="secondary">
          <Plus className="text-zinc-200 size-5 " />
          Cadastrar novo link
        </Button>
      </div>
    </div>
  );
};

export default ImportantLinks;
