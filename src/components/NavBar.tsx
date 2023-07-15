import Image from "next/image";
import Container from "@/components/Container";
import Link from "next/link";
import { NAV_LINKS } from "@/utils/constants";
import { anton, firaSans } from "@/lib/fonts";
import Menu from "@/icons/Menu";
import { useState } from "react";

interface Props {
  showLinks?: boolean;
}

const NavBar = ({ showLinks = true }: Props) => {
  const [areLinksVisible, setAreLinksVisible] = useState(false);
  return (
    <div className="z-[100] backdrop-blur-lg shadow-md sticky top-0 w-full">
      <Container>
        <div className="py-4 px-6 flex items-center justify-between relative">
          <Link
            href="/"
            className="flex items-center gap-[4px] hover:underline"
          >
            <Image
              src="/images/favicon.png"
              alt="Calculator"
              width={40}
              height={40}
            />
            <h1
              className={`text-3xl font-bold ${anton.className} text-slate-300`}
            >
              FUSION
            </h1>
          </Link>
          {/* Links */}
          {showLinks && (
            <>
              <div
                className={`flex-col transition-all ${
                  areLinksVisible ? "flex" : "hidden"
                } md:opacity-100 md:flex-row gap-4 bg-slate-800 md:bg-transparent absolute md:static top-[72px] right-2 p-4 md:p-0 rounded-[4px] shadow-md md:shadow-none`}
              >
                {NAV_LINKS.map((link) => (
                  <li className="list-none" key={link.id}>
                    <Link
                      href={link.link}
                      className={`hover:underline ${firaSans.className} text-slate-300`}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </div>

              <div
                className={`block md:hidden cursor-pointer`}
                onClick={() => setAreLinksVisible((prev) => !prev)}
              >
                <Menu color="rgb(203 213 225)" size="24" />
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
