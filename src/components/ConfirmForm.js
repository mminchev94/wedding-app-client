import { useState } from "react";

function ConfirmForm() {
  const [pass, setPass] = useState("");

  const onChangePassword = (e) => {
    setPass(e.target.value);
  };
  return (
    <form>
      <input
        onChange={onChangePassword}
        value={pass}
        autoFocus
        type="text"
        placeholder="Парола..."
      />
      <button type="submit">Продължи</button>
    </form>
  );
}

export default ConfirmForm;
