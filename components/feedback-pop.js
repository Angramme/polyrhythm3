import { use, useEffect, useMemo, useState } from 'react';
import { useTheme } from 'hooks/useTheme';
import { IoMdStarOutline, IoMdStar } from "react-icons/io";
import { Field } from 'components/field';
import { useFeedback, useFeedbackEntry } from 'hooks/useFeedback';


const Star = ({fill, ...argx}) => {
    const styles = useTheme(require('../styles/feedback.module.sass'));

    return fill ? <IoMdStar className={styles.star +' '+ styles.full_star} {...argx}/> : <IoMdStarOutline className={styles.star} {...argx}/>;
};

const Stars = ({ratingo, onRating}) => {
    const [rating, setRating] = useState(0);

    const styles = useTheme(require('../styles/feedback.module.sass'));

    return <span className={styles.stars}>
        {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill={i <= rating} onMouseEnter={()=>setRating(i)} onMouseLeave={()=>setRating(ratingo)} onClick={()=>onRating(i)}/>)}
    </span>;
}

const Select = ({title, options, other, single}) => {
    const [value, setValue] = useFeedbackEntry(title, []);
    // let [value, setValue] = useState([]);
    const styles = useTheme(require('../styles/feedback.module.sass'));

    return <div className={styles.options}>
        <span className={styles.title}>{title}</span>
        <div className={styles.options_inner}>
            {options.map((option) => <Field key={option} type="button" value={option} className={styles.select +" "+(value.includes(option) ? styles.selected : '')} onClick={()=>setValue(s=>{
                if(single) return [option];
                if(s.includes(option)) s.splice(s.indexOf(option), 1);
                else s.push(option);
                return [...s];
            })}/>)}
            {other && <Field type="text" placeholder="Other" className={styles.select}/> }
        </div>
    </div>
}

export const FeedbackPop = () => {
    const [show, setShow] = useState(false);
    // const [rating, setRating] = useState(0);
    const {rating, setRating} = useFeedback();

    const styles = useTheme(require('../styles/feedback.module.sass'));

    useEffect(() => {
        if (show) return;
        setTimeout(() => setShow(true), 1000); // after 1 minute
    }, [show]);

    return <>
        <div className={styles.container + " " + (show ? '' : styles.hide)}>
            <span className={styles.text}>
                Hey 👋! Would you recommend this metronome?
            </span>
            <span className={styles.container2}>
                <Stars ratingo={rating} onRating={(r)=>setRating(r)}/>
                {/* <Field type="button" value="Submit!" className={styles.submit}
                disabled={rating == 0}
                    onClick={()=>{}}/> */}
            </span>
        </div>
        <div className={styles.popup_container +" "+ (rating!=0 ? '':styles.hide)}>
            <div className={styles.popup_inner}>
                <h1>🎉  Thank you for your feedback!  🎉</h1>
                <h3>This really helps us improve the metronome 😊. Please tell us more!</h3>
                <div className={styles.selects}>
                    <Select title="I use this metronome for..." options={['Practice', 'Performance', 'Teaching', 'Recording', 'Composing', 'DJing', 'Music production']} other/>
                    <Select title="I am a..." options={['Conservatory student', 'Music school student', 'Private music teacher', 'Compositor', 'Producer', 'DJ', 'Professional Painist/Violist/...']} single other/>
                    <Select title="What is your age?" options={['<18yo', '18-30yo', '>30yo']} single/>
                    <Select title="How much experience do you have? (in years)" options={['<1y', '2-5y', '5-10y', '>11y']} single/>
                    {rating >= 3 ? <>
                        <Select title="Would you benefit from a mobile-app version of this website?" options={['Yes', 'No', 'Maybe']} single/>
                        <Select title="How did you hear about this web app?" options={['Google', 'Facebook', 'Instagram', 'Twitter', 'Reddit', 'Friend', 'Teacher', 'School']} other/>
                        <Select title="What is missing from this app?" options={['More features', 'Better UI/UX', 'Better performance', 'More instruments']} other/>
                        <Select title="What do you like the most about this app?" options={['ease of access', 'simplicity', 'features', 'flexibility', 'design']} other/>
                    </> : <>
                        <Select title="What were your biggest painpoints with this web app?" options={['UI/UX', 'Performance', 'Features', 'Bugs']} other/>
                    </>}
                    <textarea placeholder="Any other feedback?" className={styles.textarea}/>
                    <Field type="button" value="Submit!" style={{marginTop: '2rem'}} className={styles.submit} onClick={()=>setRating(0)}/>
                </div>
            </div>
        </div>
    </>;
}