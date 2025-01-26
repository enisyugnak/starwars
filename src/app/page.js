import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center">
      <main>
        <Image
          className="dark:invert"
          src="/star-wars-logo.png"
          alt="logo"
          width={180}
          height={38}
          priority
        />
      </main>
    </div>
  );
}
