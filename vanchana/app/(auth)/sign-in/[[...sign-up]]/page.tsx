import {SignIn} from "@clerk/nextjs";
import React from "react";

export default function Page() {
    return <SignIn afterSignInUrl={"/dashboard"} afterSignUpUrl={"/dashboard"}/>;
}