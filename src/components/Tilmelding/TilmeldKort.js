import React from "react";
import useForm from "react-hook-form";
import "./Formtilmeld.css";

export default function TilmeldKort() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => alert(data);
  console.log(errors);

  return (
    <div>
      <div className="herotilmeld3">
        <img src="./billeder/danske film.jpg" alt="" />
        <img src="./billeder/kor sang og musik.jpg" alt="" />
        <img src="./billeder/jagt og natur.jpg" alt="" />
        <img src="./billeder/Havkajak.jpg" alt="" />
      </div>
      <div className="herotilmeld3">
        <img src="./billeder/krimi virkelighed og fiktion.jpg" alt="" />
        <img src="./billeder/mad paa dansk.jpg" alt="" />
        <img src="./billeder/oelbrygning.jpg" alt="" />
        <img src="./billeder/yoga og wellness.jpg" alt="" />
      </div>
      <div className="midcontent">
        <div className="Formcontainer">
          <form className="sygForm" onSubmit={handleSubmit(onSubmit)}>
            <h2 style={{ padding: "50px 0 30px" }}>Tilmelding Lange kurser</h2>

            <label className="label" htmlFor="Valg af kursus (KorteKurser)">
              Valg af kursus (KorteKurser)
            </label>
            <select
              name="Valg af kursus (KorteKurser)"
              ref={register({ required: true })}
            >
              <option value="Dansk Filmhistorie">Dansk Filmhistorie</option>
              <option value="Havkajak">Havkajak</option>
              <option value="Jagt og natur">Jagt og natur</option>
              <option value="Kor sang og musik">Kor sang og musik</option>
              <option value="Krimi virkelighed og fiktion">
                Krimi virkelighed og fiktion
              </option>
              <option value=" Mad på dansk"> Mad på dansk</option>
              <option value="Ølbrygning">Ølbrygning</option>
              <option value="Yoga og Wellness">Yoga og Wellness</option>
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
              type="tel"
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
            <input className="submitbtn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
