import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeBirth = (event) => {
    setBirth(event.target.value);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeBio = (event) => {
    setBio(event.target.value);
  };

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="이름"
          onChange={handleChangeName}
          value={name}
        />
      </div>
      <div>
        <input type="date" onChange={handleChangeBirth} value={birth} />
      </div>
      <div>
        <select onChange={handleChangeCountry} value={country}>
          <option>국적을 선택해주세요</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea onChange={handleChangeBio} value={bio}></textarea>
      </div>
    </form>
  );
};

export default Register;
