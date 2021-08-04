import RDropdown from 'react-dropdown'

import rstyles from '../styles/dropdown.module.sass'
import { useTheme } from '../hooks/useTheme'

export default function Dropdown({...props}){
    const styles = useTheme(rstyles);

    return <RDropdown 
        {...props}
        controlClassName={styles.control}
        menuClassName={styles.menu}
        placeholderClassName={styles.placeholder}
        />
}