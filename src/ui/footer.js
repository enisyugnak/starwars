import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer className="border-base-300 text-neutral-content border-t bg-slate-700/50 px-10 py-4">
        <div className="flex min-h-10 items-center justify-between align-middle">
          <div className="text-sm">
            <span className="hidden sm:inline">
              Educational project with
              <a
                href="https://swapi.py4e.com/"
                target="_blank"
                className="text-white transition duration-300 ease-in hover:text-sky-500"
              >
                {" "}
                SWAPI{" "}
              </a>
              api by
            </span>
            <span>
              <a className="text-white"> SelfLearner</a>
            </span>
          </div>
          <nav className="md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://github.com/enisyugnak"
                target="_blank"
                className="text-white transition duration-300 ease-in hover:text-sky-500"
              >
                <FaGithub className="size-6" />
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
