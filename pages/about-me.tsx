import styles from "../styles/AboutMe.module.scss";

function AboutMe() {
  return (
    <div className={styles.aboutMeSection}>
      <h1>¿Quién se esconde tras alBBa?</h1>
      <div className={styles.aboutMeCard}>
        <p>
          Detras de alBBa se encuentra Alba Molera. Vivo en Belalcázar, un
          pequeño pueblo de la provincia de Córdoba pero con mucho encanto. Soy
          una amante de los gatos, los cuales me trasmiten tranquilidad. Entre
          mis aficiones se encuentran pasear por la naturaleza y disfrutar de
          ella, y cómo no la costura, la cual me inculcó desde muy pequeña mi
          bisabuela, ya que siempre he sido muy curiosa y me ha gustado aprender
          todo lo que veía a mi alrededor.
        </p>
        <p>
          Licenciada en Biología, la cual ha sido mi vocación desde pequeña y,
          tras no encontrar el trabajo deseado de ello, decido hace un año
          comenzar a estudiar programación informática, ya que desde siempre me
          ha llamado la atención este mundo. Todo esto, unido a mi interes por
          seguir aprendiendo, ha echo que una mi afición por la costura con la
          creación de mi pagina web en la cual poder ofrecer los productos que
          realizo, no sólo a las personas más cercanas a mi entorno, sino a toda
          aquella persona que le guste y quiera disfrutar de mis productos.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
