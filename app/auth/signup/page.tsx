import classes from "@/app/auth/login/css/login.module.css";
import cx from 'clsx';
import LoginForm from "../components/login-form";
import SignUpForm from "@/app/auth/components/signup-form";

export default function Login(){


    return(
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <p className={classes.formTitle}> Formulaire {"d'inscription"} </p>
            <SignUpForm />
        </div>
    )
}