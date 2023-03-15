import styles from './SubmitButtom.module.css'

function SubmitButton({text}){

    return(
        <div className={styles.form_control}>
            <button className={styles.btn}>{text}</button>    
        </div>
    )
}

export default SubmitButton