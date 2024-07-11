import { CircleCheck } from 'lucide-react';

const Activities = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-zinc-300 text-xl font-semibold">Dia 17</span>
          <span className="text-zinc-500 text-xs">Sábado</span>
        </div>
        <span className="text-zinc-500 text-sm">
          Nenhuma atividade cadastrada nessa data.
        </span>
      </div>
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-zinc-300 text-xl font-semibold">Dia 18</span>
          <span className="text-zinc-500 text-xs">Domingo</span>
        </div>
        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape justify-between flex">
            <div className="flex gap-3 items-center">
              <CircleCheck className="size-5 text-lime-300" />
              <span className="text-zinc-300 text-base">Corrida de Kart</span>
            </div>
            <span className="text-zinc-400 text-base">14:00h</span>
          </div>
        </div>
      </div>
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-zinc-300 text-xl font-semibold">Dia 19</span>
          <span className="text-zinc-500 text-xs">Segunda-feira</span>
        </div>
        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape justify-between flex">
            <div className="flex gap-3 items-center">
              <CircleCheck className="size-5 text-lime-300" />
              <span className="text-zinc-300 text-base">Corrida de Kart</span>
            </div>
            <span className="text-zinc-400 text-base">14:00h</span>
          </div>
          <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape justify-between flex">
            <div className="flex gap-3 items-center">
              <CircleCheck className="size-5 text-lime-300" />
              <span className=" text-zinc-300 text-base">Corrida de Kart</span>
            </div>
            <span className="text-zinc-400 text-base">14:00h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
