import NavbarSection from "../components/sections/Navbar"
import LoginForm from "./components/LoginForm";
import FooterSection from "../components/sections/Footer"

export default function LoginPage() {
  return (
      <>
        {/* Content Wrapper */}
        <div className="flex flex-col min-h-screen">
          <NavbarSection />
          <main className="flex-grow flex items-center justify-center w-full">
              <LoginForm />
          </main>
          <FooterSection />
        </div>
      </>
    );
}