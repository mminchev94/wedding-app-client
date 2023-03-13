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
  const [isLoading, setIsLoading] = useState(false);

  const onClickAttendance = async () => {
    try {
      await axios.put(
        `https://nice-ruby-wildebeest-cape.cyclic.app/guests/${guest.password}`,
        {
          attendance: true,
        }
      );
      setAttendanceConfirmed(true);
      isLoading(true);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="invitation-container">
      <PersonalInvite
        isLoading={isLoading}
        guest={guest}
        attendanceConfirmed={attendanceConfirmed}
        onClickAttendance={onClickAttendance}
      />
    </div>
  );
}

export default ConfirmPage;
