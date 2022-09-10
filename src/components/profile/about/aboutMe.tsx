import { NavIcons } from "../../iconBar/navIcons";

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
    }
}

export function AboutMe() {
    return (
        <div>
            <h1 style={about.title}>Acerca de mí</h1>
            
            <p style={about.description}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />

            <NavIcons />
        </div>
    );
}