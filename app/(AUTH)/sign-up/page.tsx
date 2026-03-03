import SignUpPage from "@/components/SignUpPage"
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create a new account to access exclusive features and personalized content. Join our community today and start enjoying all the benefits of being a member!",
};

const page = () => {
  return (
    <SignUpPage />
  )
}
export default page