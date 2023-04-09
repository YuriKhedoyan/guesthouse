import { Outlet } from "react-router-dom";

function CurrentRooms() {
  let { roomId } = useParams();

  return (
    <>
      <h3>Requested topic ID: {roomId}</h3>

      <Outlet />
    </>
  );
}
