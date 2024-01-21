import { Navbar } from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#0F0F0F]">
        <Navbar />
      <section className="h-full pt-40">{children}</section>
    </div>
  );
};

export default LandingLayout;
