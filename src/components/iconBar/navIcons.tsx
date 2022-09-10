import iconTs from '../../assets/icons/typescript.svg';
import iconJs from '../../assets/icons/js.svg';

const styleIcon = {
    bg: {
        backgroundColor: '#D5CBC9',
        borderStyle: 'solid',
        borderWidth: '20px',
        borderRadius: '30px'
    },
    img: {
        maxWidth: '50%',
        width: '250px',
        height: '250px',
        paddingLeft: '10%',

    },
    js: {
        paddingLeft: '5%'
    },
    tamanhoNav: {
        marginLeft: '20px'
    }
}
export function NavIcons() {
    return(
        <div>
            <h2>soy una imagen</h2>
            <div style={styleIcon.tamanhoNav}>
                <div style={styleIcon.bg}>
                    <img src={iconTs} style={styleIcon.img} />
                    <img src={iconJs} style={styleIcon.js}/>
                </div>
            </div>
            
            
        </div>
    )
}