import React from "react";
import useForm from "react-hook-form";
import "./Formtilmeld.css";

export default function TilmeldLang() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => alert(data);
  console.log(errors);

  return (
    <div>
      <div className="herotilmeld1">
        <img src="./billeder/foto.jpg" alt="" />
        <img src="./billeder/adventuresport.jpg" alt="" />
        <img src="./billeder/e-musik.jpg" alt="" />
      </div>
      <div className="herotilmeld2">
        <img src="./billeder/dans.jpg" alt="" />
        <img src="./billeder/sangskriver.jpg" alt="" />
      </div>
      <div className="midcontent">
        <div className="Formcontainer">
          <form className="sygForm" onSubmit={handleSubmit(onSubmit)}>
            <h2 style={{ padding: "50px 0 30px" }}>Tilmelding Lange kurser</h2>
            <label className="label" htmlFor="Valg af elevhold (semester):">
              Valg af elevhold (semester):
            </label>
            <select
              name="Valg af elevhold (semester):"
              ref={register({ required: true })}
            >
              <option value="Efterårs-semester 2019, 18. august til 14. december 2019, 17 uger">
                Efterårs-semester 2019, 18. august til 14. december 2019, 17
                uger
              </option>
              <option value="Efterårs-semester 2019, 15 september til 14. december 2019, 13 uger">
                Efterårs-semester 2019, 15 september til 14. december 2019, 13
                uger
              </option>
              <option value="Forårs-semester 2020, 19 januar til 13. juni 2020, 21 uger">
                Forårs-semester 2020, 19 januar til 13. juni 2020, 21 uger
              </option>
              <option value="Forårs-semester 2020, 23. februar til 13. juni 2020, 16 uger">
                Forårs-semester 2020, 23. februar til 13. juni 2020, 16 uger
              </option>
            </select>

            <label className="label" htmlFor="Valg af linjefag:">
              Valg af linjefag:
            </label>
            <select name="Valg af linjefag:" ref={register({ required: true })}>
              <option value="Foto">Foto</option>
              <option value="Sangskriver">Sangskriver</option>
              <option value="E-musik">E-musik</option>
              <option value="Dans">Dans</option>
              <option value="Adventuresport">Adventuresport</option>
            </select>

            <label className="label" htmlFor="Navn">
              Navn:
            </label>
            <input
              type="text"
              placeholder="Navn"
              name="Navn"
              ref={register({
                validate: value => value !== "Navn",
                required: true,
                maxLength: 20,
                pattern: /[A-Åa-å]/i
              })}
            />
            {errors.Navn && <p>du hedder ik Navn</p>}

            <label className="label" htmlFor="Efternavn">
              Efternavn:
            </label>
            <input
              type="text"
              placeholder="Efternavn"
              name="Efternavn"
              ref={register({ required: true, maxLength: 50 })}
            />

            <label className="label" htmlFor="Adresse">
              Adresse:
            </label>
            <input
              type="text"
              placeholder="Adresse"
              name="Adresse"
              ref={register({ required: true })}
            />

            <label className="label" htmlFor="Postnr">
              Postnr:
            </label>
            <input
              type="number"
              placeholder="Postnr"
              name="Postnr"
              ref={register({
                required: true,
                maxLength: 4,
                pattern: /[0-9]\d{4}/i
              })}
            />

            <label className="label" htmlFor="By">
              By:
            </label>
            <input
              type="text"
              placeholder="By"
              name="By"
              ref={register({ required: true, min: 2, pattern: /[A-Åa-å]/i })}
            />

            <label className="label" htmlFor="Telefonnummer (uden landekode)">
              Telefonnummer (uden landekode):
            </label>
            <input
              type="tel"
              placeholder="Telefonnummer (uden landekode)"
              name="Telefonnummer (uden landekode)"
              ref={register({
                required: true,
                maxLength: 12,
                pattern: /[0-9]\d{8}/i
              })}
            />

            <label className="label" htmlFor="Email">
              Email:
            </label>
            <input
              type="email"
              placeholder="Email"
              name="Email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />

            <label className="label" htmlFor="Bemærkninger(1000 tegn)">
              Bemærkninger(1000 tegn):
            </label>
            <textarea
              name="Bemærkninger(1000 tegn)"
              ref={register({ required: true, maxLength: 1000 })}
            />

            <label className="label" htmlFor="Tilvalg af studietur">
              Tilvalg af studietur:
            </label>
            <select name="Tilvalg af studietur" ref={register}>
              <option value="Jeg ønsker ikke studietur">
                Jeg ønsker ikke studietur
              </option>
              <option value="Tyskland Berlin">Tyskland Berlin</option>
              <option value="USA New York City">USA New York City</option>
            </select>

            <input className="submitbtn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
