import styles from '../components/PokeCard/PokeCard.module.css'
export const speciesIcon = (type) => {
    let image = '';
    let color = '';
    switch(type) {
        case 'grass':
            image = '/images/leaf.png';
            color = `${styles.grass}`
        break;

        case 'fire':
            image = '/images/fire.png';
            color = `${styles.fire}`
        break;

        case 'water':
            image = '/images/water.png';
            color = `${styles.water}`
        break;

        case 'bug':
            image = '/images/bug.png';
            color = `${styles.bug}`
        break;

        case 'normal':
            image = '/images/normal.png';
            color = `${styles.normal}`
        break;

        case 'poison':
            image = '/images/poison.png';
            color = `${styles.poison}`
        break;

        case 'electric':
            image = '/images/electric.png';
            color = `${styles.electric}`
        break;

        case 'fairy':
            image = '/images/fairy.png';
            color = `${styles.fairy}`
        break;

        case 'ground':
            image = '/images/ground.png';
            color = `${styles.ground}`
        break;

        case 'fighting':
            image = '/images/fighting.png';
            color = `${styles.fighting}`
        break;

        case 'rock':
            image = '/images/rock.png';
            color = `${styles.rock}`
        break;

        case 'psychic':
            image = '/images/psychic.png';
            color = `${styles.psychic}`
        break;

        case 'ghost':
            image = '/images/ghost.png';
            color = `${styles.ghost}`
        break;

        case 'ice':
            image = '/images/ice.png';
            color = `${styles.ice}`
        break;

        case 'dragon':
            image = '/images/dragon.png';
            color = `${styles.dragon}`
        break;

        case 'dark':
            image = '/images/dark.png';
            color = `${styles.dark}`
        break;

        case 'steel':
            image = '/images/steel.png';
            color = `${styles.steel}`
        break;

        default:
            image = '/images/default.png';
            color = `${styles.normal}`
        break;
    }
    return [image, color];
}