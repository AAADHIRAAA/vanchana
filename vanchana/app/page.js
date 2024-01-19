import Image from 'next/image'
import {
  RedirectToSignIn,
  SignInButton,
  SignIn,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/nextjs";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mx-auto">
      <>
              
         
                <SignIn afterSignInUrl={"/dashboard"} afterSignUpUrl={"/dashboard"}/>

             
                <UserButton afterSignOutUrl="/" />
            

            </>
    </main>
  )
}
