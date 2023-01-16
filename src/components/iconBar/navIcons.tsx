import iconTs from '../../assets/icons/typescript.svg';
import iconJs from '../../assets/icons/js.svg';
import iconAngular from '../../assets/icons/angular-icon.svg';

const styleIcon = {
    bg: {
        backgroundColor: 'rgb(16 15 15 / 50%)',
        borderWidth: '20px',
        borderRadius: '30px'
    },
    img: {
        maxWidth: '100%',
        width: '200px',
        height: '200px',
        paddingLeft: '10%',
        paddingTop:'10%',

    },
    js: {
        paddingLeft: '5%'
    },
    tamanhoNav: {
        marginTop: '3%',
        marginLeft: '20%',
        marginRight: '20%'
    }
}
export function NavIcons() {
    return(
        <div>
            <div style={styleIcon.tamanhoNav}>
                <div style={styleIcon.bg}>
                    <img src={iconJs} style={styleIcon.img}/>
                    <img src={iconAngular} style={styleIcon.img} />
                </div>
            </div>
            
            
        </div>
    )
}