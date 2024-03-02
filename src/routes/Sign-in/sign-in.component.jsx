import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../Utils/firebase/firebase.utils';


const SignIn = () =>{

const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDetails = await createUserDocumentFromAuth(user);
    
}

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                sigin in with google popup
            </button>
        </div>
    )

}
export default SignIn;