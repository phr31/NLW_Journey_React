import { FormEvent, useState } from 'react';
import InviteGuestsModal from './invite-guests-modal.tsx';
import ConfirmTripModal from './confirm-trip-modal.tsx';
import DestinationAndDateStep from './steps/destination-and-date-step.tsx';
import InviteGuestsStep from './steps/invite-guests-step.tsx';
import { DateRange } from 'react-day-picker';
import { api } from '../../lib/axios.ts';
import { useNavigate } from 'react-router-dom';

function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([] as any);

  const [destination, setDestination] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [range, setRange] = useState<DateRange | undefined>();

  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  function openGuestInput() {
    setIsGuestInputOpen(true);
  }
  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }
  function openGuestModal() {
    setIsGuestModalOpen(true);
  }
  function closeGuestModal() {
    setIsGuestModalOpen(false);
  }
  function openTripModal() {
    setIsConfirmTripModalOpen(true);
  }
  function closeTripModal() {
    setIsConfirmTripModalOpen(false);
  }
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();
    if (!email) {
      return;
    }
    if (emailsToInvite.includes(email)) {
      return;
    }
    setEmailsToInvite([...emailsToInvite, email]);
    event.currentTarget.reset();
  }
  function removeEmailFromInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email: string) => email !== emailToRemove,
    );
    setEmailsToInvite(newEmailList);
  }
  async function createTrip(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      console.log(destination);
      console.log(emailsToInvite);
      console.log(range);
      console.log(ownerName);
      console.log(ownerEmail);

      if (!destination) {
        return;
      }
      if (!range?.from || !range?.to) {
        return;
      }
      if (emailsToInvite.length === 0) {
        return;
      }
      if (!ownerName || !ownerEmail) {
        return;
      }

      const response = await api.post('/trips', {
        destination: destination,
        starts_at: range.from,
        ends_at: range.to,
        emails_to_invite: emailsToInvite,
        owner_name: ownerName,
        owner_email: ownerEmail,
      });
      const { tripId } = response.data;

      navigate(`/trips/${tripId}`);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="./public/Logo.png" alt="plann.er" />
          <p className="text-zinc-300 text-lg ">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestInputOpen={isGuestInputOpen}
            closeGuestInput={closeGuestInput}
            openGuestInput={openGuestInput}
            setDestination={setDestination}
            range={range}
            setRange={setRange}
          />

          {isGuestInputOpen && (
            <InviteGuestsStep
              openGuestModal={openGuestModal}
              emailsToInvite={emailsToInvite}
              openTripModal={openTripModal}
            />
          )}
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você utomaticamente concorda{' '}
          <br /> com nossos{' '}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{' '}
          e{' '}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
      {isGuestModalOpen && (
        <InviteGuestsModal
          closeGuestModal={closeGuestModal}
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          removeEmailFromInvite={removeEmailFromInvite}
        />
      )}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeTripModal={closeTripModal}
          createTrip={createTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  );
}

export default CreateTripPage;
