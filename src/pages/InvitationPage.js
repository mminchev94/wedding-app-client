import { useLocation } from "react-router-dom";

function InvitationPage() {
  const location = useLocation();
  const guest = location.state.guest;

  return (
    <div class="invitation-container">
      <span>Скъпи, {guest}</span>
    </div>
  );
}

export default InvitationPage;
