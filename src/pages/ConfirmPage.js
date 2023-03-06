import ConfirmForm from "../components/ConfirmForm";
function ConfirmPage() {
  return (
    <div className="invite-container">
      <span>
        Скъпи гости,
        <br /> попълнете в полето паролата, която Ви е предоставен от
        младоженците, за да получите вашата персонализирана покана!
      </span>
      <ConfirmForm />
    </div>
  );
}

export default ConfirmPage;
