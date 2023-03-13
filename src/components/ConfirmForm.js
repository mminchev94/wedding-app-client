import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingInvite from "./LoadingInvite";

function ConfirmForm() {
  const navigate = useNavigate();

  const [pass, setPass] = useState("");
  const [formResult, setFormResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangePassword = (e) => {
    setPass(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (pass) {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://nice-ruby-wildebeest-cape.cyclic.app/guests/${pass}`
        );
        const { guest } = response.data;
        setFormResult(`${guest.names}`);
        navigate(`/invitation/${pass}`, { state: { guest } });
      } catch (error) {
        setFormResult(`Невалидна парола`);
      } finally {
        setIsLoading(false);
      }
    } else {
      setFormResult("Моля въведете парола в полето");
    }
  };

  return isLoading ? (
    <LoadingInvite />
  ) : (
    <form className="invite-form" onSubmit={onSubmitForm}>
      <input
        className="invite-input"
        onChange={onChangePassword}
        value={pass}
        type="text"
        placeholder="Парола..."
      />
      <button className="invite-button" type="submit">
        Продължи
      </button>
      <p className="form-result">{formResult}</p>
    </form>
  );
}

export default ConfirmForm;
