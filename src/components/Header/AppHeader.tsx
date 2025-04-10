import Image from "next/image";

export default function AppHeader() {
  return (
    <header className="bg-white text-[var(--primary)] p-4 fixed w-full">
      <nav>
        <Image
          width={150}
          height={100}
          alt="Brand Logo"
          src="/images/brand-logo.webp"
        />
        {/* <h1 className="text-2xl font-bold">Good Travel Management</h1> */}
      </nav>
    </header>
  );
}
