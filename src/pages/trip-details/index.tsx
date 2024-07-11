import { Plus } from 'lucide-react';
import { useState } from 'react';
import CreateActivityModal from './create-activity-modal.tsx';
import ImportantLinks from './important-links.tsx';
import Guests from './guests.tsx';
import Activities from './activities.tsx';
import DestinationAndDateHeader from './destination-and-date-header.tsx';
import Button from '../../components/button.tsx';

const TripDetailsPage = () => {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);
  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }
  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />
      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-zinc-50 text-3xl font-semibold">Atividades</p>
            <Button onClick={openCreateActivityModal} variant="primary">
              <Plus className="text-lime-950 size-5 " />
              Cadastrar atividade
            </Button>
          </div>
          <Activities />
        </div>
        <div className="w-88 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800" />
          <Guests />
        </div>
      </main>
      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
};

export default TripDetailsPage;
