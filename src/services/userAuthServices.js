export const userAuthActions = {
  googleSignUp,
};
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {GOOGLE_API_KEY} from '@env';
GoogleSignin.configure({
  webClientId: GOOGLE_API_KEY,
});
async function googleSignUp() {
  try {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
    const {additionalUserInfo, user} = await auth().signInWithCredential(
      googleCredential,
    );
    const {isNewUser, providerId} = additionalUserInfo;
    return {isNewUser, user, providerId};
  } catch (error) {
    return {error};
  }
}
