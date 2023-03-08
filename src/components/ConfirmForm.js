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
          `http://localhost:3000/guests/${pass}`
        );
        const guest = response.data.guest;
        setFormResult(`${guest}`);
        navigate(`/invitation/${pass}`, { state: { guest } });
      } catch (error) {
        setFormResult(`Невалидна парола`);
      }
    } else {
      setFormResult("Моля въведете парола в полето");
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        onChange={onChangePassword}
        value={pass}
        autoFocus
        type="text"
        placeholder="Парола..."
      />
      <button type="submit">Продължи</button>
      <p>{formResult}</p>
    </form>
  );
}

export default ConfirmForm;
