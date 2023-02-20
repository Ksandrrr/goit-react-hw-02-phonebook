import Style from '../../Phonebook.module.css';

const PhoneList = ({ items, delateContacts }) => {
  const elements = items.map(({ name, number, id }) => (
    <li key={id} className={Style.list}>
      {name} ({number})
      <button onClick={() => delateContacts(id)} className={Style.btnDelate}>
        Delete
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
};
export default PhoneList;
