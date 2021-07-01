
import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../hooks/useTheme';

function eval_math_expr (exp) {
    let reg = /(?:[a-z$_][a-z0-9$_]*)|(?:[;={}\[\]"'!&<>^\\?:])/ig,
        valid = true,
        res = null;
    exp = exp.replace(reg, function ($0) {
        // If the name is a direct member of Math, allow
        if (Math.hasOwnProperty($0)) return "Math."+$0;
        // Otherwise the expression is invalid
        else valid = false;
    });
    
    if (!valid) return null;
    try { res = eval(exp); } catch (e) { return null; };
    return res;
}

export default function Field({className, type, style, onInput, ...args}){
    const styles = useTheme(require('../styles/field.module.sass'));

    let ref = useRef();

    const [wrong, setWrong] = useState(false);

    useEffect(()=>{
        if(args.defaultValue == null || args.defaultValue == undefined) return;
        ref.current.value = args.defaultValue;
    }, [args.defaultValue]);

    return <div className={className} style={style}>
        {args.name ? 
            <div className={styles.title}>{args.name}</div>
            : ''
        }
        <input 
            ref={ref} 
            {...args}
            type={type == 'number' ? 'text' : type}
            className={
                styles.field 
                +(type ? ' '+styles['type-'+type] : '')
                +(wrong ? ' '+styles.wrong : '')}
            onInput={(...X)=>{
                const x = X[0].target;
                let val = x.value;
                
                if(type == 'number'){
                    const exp = eval_math_expr(x.value);
                    if(exp == null || exp == undefined) return setWrong(true);
                    if(args.min && exp < Number(args.min)) return setWrong(true);
                    if(args.max && exp > Number(args.max)) return setWrong(true);
                    if(args.step && exp % Number(args.step) != 0) return setWrong(true);
                    val = exp;
                }

                if(wrong) setWrong(false);

                onInput(val);
            }}
            ></input>
    </div>
}