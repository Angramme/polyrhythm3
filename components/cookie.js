import { useCookie } from "hooks/useCookie";
import { useTheme } from "hooks/useTheme";
import { Field } from "components/field";

export function CookieConsent({}){
    const styles = useTheme(require("styles/cookie.module.sass"));
    const {accepted, setAccepted} = useCookie();
    return <div className={`${styles.container} ${accepted ? styles.accepted : ''}`}>
        Hey! This website uses cookies 🍪 to improve the user experience.
        {/* <button onClick={() => setAccepted(true)}>Accept</button> */}
        <Field type="button" value="Accept Cookies" style={{marginTop: '1rem'}}  onClick={()=>setAccepted(true)}/>
    </div>
} 