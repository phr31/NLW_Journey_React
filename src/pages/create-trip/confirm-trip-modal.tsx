import { Mail, User, X } from 'lucide-react';
import { FormEvent } from 'react';
import Button from '../../components/button.tsx';

interface ConfirmTripModalProps {
  closeTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerEmail: (email: string) => void;
  setOwnerName: (name: string) => void;
}

const ConfirmTripModal = ({
  closeTripModal,
  createTrip,
  setOwnerEmail,
  setOwnerName,
}: ConfirmTripModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-lg text-white font-semibold">
              Confirmar criação da viagem
            </p>
            <button type="button" onClick={closeTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm ">
            Para concluir a criação da viagem para{' '}
            <span className="text-zinc-100 font-semibold">
              Florianópolis, Brasil
            </span>{' '}
            nas datas de{' '}
            <span className="text-zinc-100 font-semibold">
              16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>
        <form onSubmit={createTrip} className="space-y-3">
          <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              onChange={(event) => setOwnerName(event.target.value)}
              type="text"
              name="text"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="text-zinc-400 size-5" />
            <input
              onChange={(event) => setOwnerEmail(event.target.value)}
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <Button variant="primary" size="full" type="submit">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmTripModal;
