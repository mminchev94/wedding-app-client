import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ConfirmForm() {
  const navigate = useNavigate();

  const [pass, setPass] = useState("");
  const [formResult, setFormResult] = useState("");

  const onChangePassword = (e) => {
    setPass(e.target.value);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (pass) {
      try {
        const response = await axios.get(
          `https://nice-ruby-wildebeest-cape.cyclic.app/guests/${pass}`
        );
        const { guest } = response.data;
        setFormResult(`${guest.names}`);
        navigate(`/invitation/${pass}`, { state: { guest } });
      } catch (error) {
        setFormResult(`Невалидна парола`);
      }
    } else {
      setFormResult("Моля въведете парола в полето");
    }
  };

  return (
    <form className="invite-form" onSubmit={onSubmitForm}>
      <input
        className="invite-input"
        onChange={onChangePassword}
        value={pass}
        autoFocus
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
