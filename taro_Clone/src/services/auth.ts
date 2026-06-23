import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const signUp = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return { success: 200, user: userCredential.user };
    } catch (error: any) {
        return { success: 400, message: error.message };
    }
};

const signIn = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: 200, user: userCredential.user };
    } catch (error: any) {
        return { success: 400, message: error.message, code: error.code };
    }
};

const signOut = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        throw error;
    }
};

export { signUp, signIn, signOut };
