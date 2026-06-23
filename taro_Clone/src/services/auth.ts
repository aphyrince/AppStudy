import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const signUp = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            return {
                success: 200,
            };
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return {
                success: 400,
                message: errorMessage,
                code: errorCode,
            };
        });
};

const signIn = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // const user = userCredential.user;
            return { success: 200 };
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return {
                success: 400,
                message: errorMessage,
                code: errorCode,
            };
        });
};

const signOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        throw error;
    }
};

export { signUp, signIn, signOut };
