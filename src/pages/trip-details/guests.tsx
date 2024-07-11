import { CircleCheck, CircleDashed, UserCog } from 'lucide-react';
import Button from '../../components/button.tsx';

const Guests = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-zinc-50 font-semibold text-xl">Convidados</h3>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h3 className="font-medium text-zinc-100 ">Dr. Rita Pacocha</h3>
            <p className="text-sm text-zinc-400 line-clamp-1 max-w-[16rem]">
              lacy.stiedemann@gmail.com
            </p>
          </div>

          <CircleCheck className="size-5 text-lime-300 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <h3 className="font-medium text-zinc-100 ">Dr. Rita Pacocha</h3>
            <p className="text-sm text-zinc-400 line-clamp-1 max-w-[16rem]">
              lacy.stiedemann@gmail.com
            </p>
          </div>

          <CircleDashed className="size-5 text-zinc-400 shrink-0" />
        </div>
        <Button variant="secondary">
          <UserCog className="text-zinc-200 size-5 " />
          Gerenciar convidados
        </Button>
      </div>
    </div>
  );
};

export default Guests;
