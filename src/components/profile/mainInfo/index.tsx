import { AboutMe } from "../about/aboutMe";

const nombre = {
    h1: {
        width: '12em',
        height: '70px',
        fontSize: '38px',
        lineHeight: '29px',
        letterSpacing: '0.16em',
        marginLeft: '230px',
    }
}

const descCorta = {
    p: {
        width: '57em',
        fontWeight: 'normal',
        paddingLeft:'38%',
        fontSize: '24px',
        lineHeight: '29px',
        letterSpacing: '0.16em'
    }
}

export function MainInfo() {
    return(
        <div className='animate__animated animate__backInUp'>
            <div style={{marginLeft:'10px'}}>
                <div style={{position: 'relative'}}>
                    <h1 style={nombre.h1}>Claudio Chuhaicura</h1>
                    <div style={{position:'relative'}}>
                        <p style={descCorta.p}>Desarrollador Full Stack enamorado del aprendizaje y el crecimiento profesional.</p>
                    </div>   
                </div>
            </div>

            <div>
                <AboutMe />
            </div>
        </div>
        
        
    );
}