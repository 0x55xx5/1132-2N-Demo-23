import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import ProfileForm_xx from "./profile-form_xx";


export const metadata: Metadata = {
  title: "User Profile",
  description: "Manage your profile and account settings",
};  

const ProfilePage = async () => {
    const session = await auth();
    
    return (
        <SessionProvider session={session}>
        <div className="max-w-md mx-auto space-y-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <p>Welcome, {session?.user?.name || "Guest"}!</p>
            <p>Email: {session?.user?.email}</p>
            {/* Additional profile information can be added here */}
        </div>
        <ProfileForm_xx />
        </SessionProvider>
    );
};
export default ProfilePage;