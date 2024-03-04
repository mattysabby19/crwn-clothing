import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../Utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up.form.component';

const SignIn = () =>{

const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDetails = await createUserDocumentFromAuth(user);
    console.log(userDetails);
    
}

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                sigin in with google popup
            </button>
            <SignUpForm></SignUpForm>
        </div>
    )

}
export default SignIn;