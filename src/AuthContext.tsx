import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, signInWithGoogle, logOut, onAuthStateChanged, FirebaseUser, db, doc, getDoc, setDoc, handleFirestoreError, OperationType } from './firebase';

interface AuthContextType {
  user: FirebaseUser | null;
  loading: boolean;
  role: 'admin' | 'client' | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<'admin' | 'client' | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        // Fetch user profile to get role
        const userRef = doc(db, 'users', firebaseUser.uid);
        try {
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            setRole(userDoc.data().role as 'admin' | 'client');
          } else {
            // Create default profile
            const defaultRole = firebaseUser.email === "rdub@fullstackwoo.day" ? 'admin' : 'client';
            const newUser = {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              photoURL: firebaseUser.photoURL,
              role: defaultRole
            };
            await setDoc(userRef, newUser);
            setRole(defaultRole);
          }
        } catch (error) {
          handleFirestoreError(error, OperationType.GET, `users/${firebaseUser.uid}`);
        }
      } else {
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const signOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, role, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
