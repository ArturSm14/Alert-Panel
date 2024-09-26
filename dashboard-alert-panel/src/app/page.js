'use client';
import BigCard from "@/components/BigCard/BigCard";
import RoomModalContent from "@/components/RoomModalContent/RoomModalContent";
import ScreenModal from "@/components/ScreenModal/ScreenModal";
import SmallCard from "@/components/SmallCard/SmallCard";
import { URL_API } from "@/utils/constans";
import { useEffect, useState } from "react";

export default function Home() {
  const [openedModal, setOpenedModal] = useState(null);
  const [rooms, setRooms] = useState([]);


  useEffect(() => {
    fetchRooms();
  }, [])

  async function fetchRooms() {
    const response = await fetch(`${URL_API}/room`);
    const data = await response.json();
    setRooms(data);
  }

  return (
    <main className="flex min-h-screen gap-4 flex-grow flex-col items-center justify-start p-6">
      {Boolean(openedModal) && <ScreenModal onClose={() => setOpenedModal(null)}>
        <RoomModalContent roomCapacity={openedModal.studentsCapacity} descriptionOfFail={openedModal.inoperatedResources.join(",")} number={openedModal.number} onClose={() => setOpenedModal(null)} />
      </ScreenModal>}
      <div className="flex-shrink gap-4 flex justify-between min-w-full">
        <BigCard />
        <BigCard variant="orange" />
        <BigCard />
      </div>
      <div className="gap-3 flex-wrap flex items-start min-w-full">
        {rooms.map(room => 
          <SmallCard 
            key={room._id} 
            number={room.number} 
            variant={room.inoperatedResources.length ? "orange" : "green"} 
            onClick={() => setOpenedModal(room)}
          />)}
      </div>
    </main>
  );
}
