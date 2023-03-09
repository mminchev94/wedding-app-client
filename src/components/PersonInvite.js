function PersonInvite(props) {
  return (
    <div className="inv-rows">
      <span className="inv-row">
        {props.guest.isFemale ? "Скъпа" : "Скъпи"} {props.guest.names},
      </span>
      <span className="inv-row">
        Ние
        <strong>
          <span className="names"> Владимира и Милен</span>
        </strong>
        ,
      </span>
      <span className="inv-row">и нашите родители с удоволствие Ви каним</span>
      <span className="inv-row">
        да бъдете наши гости на сватбеното ни тържество на
      </span>
      <span className="inv-row">02.09.2023г. в гр. Добрич.</span>
      <span className="inv-row">
        Нека заедно превърнем този ден в празник на любовта!
      </span>
      <span className="inv-row">
        Кумуват: <strong>Атанас и Анелия</strong>
      </span>
      <span className="inv-row">
        Моля потвърдете вашето присъствие до 31.07.2023г.
      </span>
      {props.attendanceConfirmed ? (
        <span>Благодарим, че ще присъствате на нашия празник!</span>
      ) : (
        <button onClick={props.onClickAttendance} className="button">
          Потвърждавам
        </button>
      )}
    </div>
  );
}

export default PersonInvite;
