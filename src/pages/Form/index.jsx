import React, { useState } from 'react';
/* import { db } from '../db';
import firebase from 'firebase/app'; */

const Form = () => {
  const [name, setName] = useState([]);
  const [surname, setSurname] = useState([]);
  const [email, setEmail] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);
  const [note, setNote] = useState([]);
  const [street, setStreet] = useState([]);
  const [city, setCity] = useState([]);
  const [postcode, setPostcode] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);

  /* useEffect(() => {
    const information = db
      .collection('customers')
      .onSnapshot((querySnapshot) => {
        setName(
          querySnapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });
    return data;
  }, []); */

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Kupuji hru Utrhčíslo</h1>
        <label>
          Jméno:{' '}
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="jmeno"
          />{' '}
        </label>
        <br />
        <label>
          Příjmení:{' '}
          <input
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
            name="prijmeni"
          />{' '}
        </label>
        <br />
        <label>
          E-mail:{' '}
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />{' '}
        </label>
        <br />
        <label>
          Telefon:{' '}
          <input
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            type="tel"
          />{' '}
        </label>
        <br />

        <label>Adresa pro doručení: </label>
        <br />
        <label>
          Ulice, č.p.:
          <input
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            type="text"
          />{' '}
        </label>
        <br />
        <label>
          Město:
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
            type="text"
          />{' '}
        </label>
        <br />
        <label>
          PSČ:
          <input
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
            type="number"
          />{' '}
        </label>
        <br />
        <label>
          Poznámka k doručení:{' '}
          <input
            value={note}
            onChange={(event) => setNote(event.target.value)}
            type=""
          />{' '}
        </label>
        <br />
        <label>
          <input
            value={termsAccepted}
            onClick={(e) => setTermsAccepted(e.target.value)}
            type="checkbox"
          />
          Souhlas se všeobecnými obchodními podmínkami
        </label>
        <button
          className="btn"
          disabled={
            name === '' ||
            surname === '' ||
            email === '' ||
            street === '' ||
            city === '' ||
            postcode === ''
              ? true
              : false
          }
          type="submit"
        >
          Pokračovat na dopravu a platbu
        </button>
      </form>
    </>
  );
};

export default Form;
