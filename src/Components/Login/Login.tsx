import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";

type LoginPropsType = {}

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'login'} name={'login'} component={'input'}/></div>
            <div><Field placeholder={'password'} name={'password'} component={'input'}/></div>
            <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/>remember me</div>
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

    }
    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login