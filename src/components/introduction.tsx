import styles from '../components/introduction.module.css'

const Introduction = ()=> {
    return (
        <section className="mt-16 px-10 md:px-20">
            <div className={styles.int+" max-w-7xl m-auto"}>
                <h3 className={styles.title}>Somos expertos en...</h3>
                <p className={styles.text}>Transformación digital, software, ciberseguridad y análisis de datos. Colaboramos estrechamente, ofreciendo soluciones tecnológicas que no solo superan desafíos actuales, sino que también anticipan cambios futuros. Nuestra consultora IT guía hacia la excelencia digital, asegurando liderazgo en el dinámico panorama tecnológico. Creamos la hoja de ruta para el éxito sostenible.</p>
            </div>
        </section>
    )
}

export default Introduction;