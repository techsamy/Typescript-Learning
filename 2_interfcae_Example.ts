interface AuthForm {
    name: string,
    submitButtonText: string,
    onReset: (e: any) => void;
    onSubmit: (e: any) => void;
}

const loginForm: AuthForm = {
    name: "Login Form",
    submitButtonText: "Login",
    onReset: (e) => {
        // Some inmportant code.    
    },
    onSubmit: (e) => {
        // SOme impt code
    },
}

console.log(loginForm);