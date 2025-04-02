"use client";

import Link from 'next/link';


import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  console.log(user);

  

  return (
    <div>
      <h1>week 9</h1>
      <p>
        {user ? (
          <button onClick={firebaseSignOut}>Sign Out</button>
        ) : (
          <button onClick={gitHubSignIn}>Sign In</button>
        )}
      </p>

      {user && (<p> welcome {user.displayName}! Your email address is {user.email}. And you look like : < img src ={user.photoURL}  alt={user.displayName}/> <Link href="/week-9/shopping-list">Visit the Landing page.</Link>. </p> )}
    </div>
  );
}