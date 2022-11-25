import { NavIcons } from "../../iconBar/navIcons";
import '../../../assets/css/stylesAboutMe.css'

const about = {
    title: {
        width: '12em',
        height: '70px',
        fontSize: '38px',
        lineHeight: '29px',
        letterSpacing: '0.16em',
        marginLeft: '230px',
    },
    description: {
        width: '57em',
        fontWeight: 'normal',
        paddingLeft:'38%',
        fontSize: '24px',
        lineHeight: '29px',
        letterSpacing: '0.16em'
    },
    subtitle: {
        width: '12em',
        height: '70px',
        fontSize: '24px',
        lineHeight: '29px',
        letterSpacing: '0.16em',
        marginLeft: '28%'
    }
}

export function AboutMe() {
    return (
        <div>
            <h1 style={about.title} className='gradient-text'>Acerca de mí</h1>
            
            <p style={about.description}> 
                Desarrollador apasionado por la creación de nuevos productos digitales,
                mi pasión comienza desde pequeño al intentar modificar un videojuego, mi favorito hasta el momento.<br></br>
                Siempre intentando generar soluciones o provechos de lo que se puede lograr para los demás a través de la tecnología.
            </p>
            <br />
                <p style={about.subtitle} className='gradient-text'>
                    Actualidad
                </p>
            <NavIcons />
        </div>
    );
}