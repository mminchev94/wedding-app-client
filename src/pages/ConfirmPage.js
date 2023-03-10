import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import PersonInvite from "../components/PersonInvite";

function ConfirmPage() {
  const location = useLocation();
  const guest = location.state.guest;
  const [attendanceConfirmed, setAttendanceConfirmed] = useState(
    guest.attendance
  );

  const onClickAttendance = async () => {
    await axios.put(
      `https://wedding-api-alke.onrender.com/guests/${guest.password}`,
      {
        attendance: true,
      }
    );
    setAttendanceConfirmed(true);
  };

  return (
    <div className="invitation-container">
      <PersonInvite
        guest={guest}
        attendanceConfirmed={attendanceConfirmed}
        onClickAttendance={onClickAttendance}
      />
    </div>
  );
}

export default ConfirmPage;
