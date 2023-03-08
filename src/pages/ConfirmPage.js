import ConfirmForm from "../components/ConfirmForm";
function ConfirmPage() {
  return (
    <div className="invite-container">
      <span>
        Скъпи гости,
        <br /> попълнете в полето паролата, която ви е предоставена от
        младоженците, за да получите вашата персонална покана!
      </span>
      <ConfirmForm />
    </div>
  );
}

export default ConfirmPage;
