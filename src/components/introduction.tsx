import styles from '../components/introduction.module.css'

const Introduction = ()=> {
    return (
        <div className={styles.int}>
            <h3 className={styles.title}>Somos expertos en...</h3>
            <p className={styles.text}>Transformación digital, software, ciberseguridad y análisis de datos. Colaboramos estrechamente, ofreciendo soluciones tecnológicas que no solo superan desafíos actuales, sino que también anticipan cambios futuros. Nuestra consultora IT guía hacia la excelencia digital, asegurando liderazgo en el dinámico panorama tecnológico. Creamos la hoja de ruta para el éxito sostenible.</p>
        </div>
    )
}

export default Introduction;