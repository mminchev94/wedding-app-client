import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import PersonalInvite from "../components/PersonalInvite";

function ConfirmPage() {
  const location = useLocation();
  const guest = location.state.guest;
  const [attendanceConfirmed, setAttendanceConfirmed] = useState(
    guest.attendance
  );

  const onClickAttendance = async () => {
    await axios.put(
      `https://nice-ruby-wildebeest-cape.cyclic.app/guests/${guest.password}`,
      {
        attendance: true,
      }
    );
    setAttendanceConfirmed(true);
  };

  return (
    <div className="invitation-container">
      <PersonalInvite
        guest={guest}
        attendanceConfirmed={attendanceConfirmed}
        onClickAttendance={onClickAttendance}
      />
    </div>
  );
}

export default ConfirmPage;
