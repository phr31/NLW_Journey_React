import { Calendar, Clock, Tag, X } from 'lucide-react';
import Button from '../../components/button.tsx';

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

const CreateActivityModal = ({
  closeCreateActivityModal,
}: CreateActivityModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-lg text-white font-semibold">
              Cadastrar atividade
            </p>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm ">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>
        <form className="space-y-3">
          <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              type="text"
              name="text"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 w-full">
              <Calendar className="size-5 text-lg text-zinc-400" />
              <input
                placeholder="Qual a data?"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
              />
            </div>
            <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Clock className="size-5 text-lg text-zinc-400" />
              <input
                placeholder="Horario"
                onFocus={(e) => (e.target.type = 'time')}
                onBlur={(e) => (e.target.type = 'text')}
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
              />
            </div>
          </div>
        </form>
        <Button
          type="submit"
          variant='primary'
          size='full'
        >
          Salvar atividade
        </Button>
      </div>
    </div>
  );
};

export default CreateActivityModal;
