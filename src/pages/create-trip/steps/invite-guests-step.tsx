import { ArrowRight, UserRoundPlus } from 'lucide-react';
import {} from 'react';
import Button from '../../../components/button.tsx';

interface InviteGuestsStepProps {
  openGuestModal: () => void;
  emailsToInvite: string[];
  openTripModal: () => void;
}

const InviteGuestsStep = ({
  openGuestModal,
  emailsToInvite,
  openTripModal,
}: InviteGuestsStepProps) => {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={openGuestModal}
        className="flex itens-center gap-2 flex-1"
      >
        <UserRoundPlus className="size-5 text-lg text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-400 text-lg flex-1 text-left">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1 text-left">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />
      <Button onClick={openTripModal} variant="primary">
        Confirmar viagem
        <ArrowRight className="text-lime-950 size-5 " />
      </Button>
    </div>
  );
};

export default InviteGuestsStep;
