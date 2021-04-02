import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../Utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {RootStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css'


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean,
}
const maxLength100 = maxLengthCreator(100)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'email'} name={'email'} component={Input}
                        validate={[requiredField, maxLength100]}/>
            </div>
            <div><Field placeholder={'password'} name={'password'} type={'password'} component={Input}
                        validate={[requiredField, maxLength100]}/></div>
            <div><Field type={'checkbox'} name={'rememberMe'} component={Input}/>
                remember me
            </div>
            <div className={style.formSummaryError}>
                {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.Auth.isAuth,
        userId: state.Auth.userId
    }
}

export default connect(mapStateToProps, {login})(Login)