'use client';
import BigCard from "@/components/BigCard/BigCard";
import RoomModalContent from "@/components/RoomModalContent/RoomModalContent";
import ScreenModal from "@/components/ScreenModal/ScreenModal";
import SmallCard from "@/components/SmallCard/SmallCard";
import { getRooms } from "@/services/roomServices";
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation";

export default function Home() {
  const [openedModal, setOpenedModal] = useState(null);
  const [rooms, setRooms] = useState([]);

  const router = useRouter()

  useEffect(() => {
    fetchRooms();
  }, [])

  async function fetchRooms(){
    const response = await getRooms();

    if(response.ok){
      const rooms = await response.json();
      setRooms(rooms);
    }
  }

  function validateUserIsLogged(){
    const user = localStorage.getItem('user');

    if(!user){
      router.push('/');
    }
  }

  return (
            <main className="flex min-h-screen gap-4 flex-grow flex-col items-center justify-start p-6">
            {Boolean(openedModal) && <ScreenModal onClose={() => setOpenedModal(null)}>
            <RoomModalContent
                number={openedModal.number}
                roomCapacity={openedModal.studentsCapacity}
                onClose={() => setOpenedModal(null)}
                descriptionOfFail={openedModal.inoperatedResources.join(", ")}
            />
            </ScreenModal>}
            <div className="flex-shrink gap-4 flex justify-between min-w-full">
            <BigCard />
            <BigCard variant="orange" />
            <BigCard />
            </div>
            <div className="gap-3 flex-wrap flex items-start min-w-full">
            {rooms.map(room => <SmallCard
                key={room._id}
                number={room.number}
                variant={room.inoperatedResources.length ? "orange" : "green"}
                onClick={() => setOpenedModal(room)}
            />)}
            </div>
        </main>
  );
}