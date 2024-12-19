import './style.scss';
import { useState } from 'react';
import { FormButton } from '@plantamera/form-button';

export const SignForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form was submitted');
    console.log(formData);

    //Skicka data till backend via fetch eller axios.
  };

  return (
    <form className='signForm' onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        placeholder='Användarnamn'
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type='password'
        name='password'
        placeholder='Lösenord'
        value={formData.password}
        onChange={handleChange}
        required
      />
      <FormButton
        type='submit'
        onClick={() => handleSubmit}
        title='Skapa konto'
      />
    </form>
  );
};
