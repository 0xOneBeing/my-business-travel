import Image from "next/image";
import {
  ArrowRightSquareIcon,
  Link,
  Mail,
  Notebook,
  Phone,
} from "lucide-react";

export default function AppFooter() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-purple max-w-full px-3 lg:px-10 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-pink-300">
                <Phone />
              </span>
              <span>0330 004 0520</span>
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-pink-300">
                <Mail />
              </span>
              <span>sales@good-travel.co.uk</span>
            </div>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a title="Link" href="#" className="text-pink-300 text-2xl">
              <Link />
            </a>
            <a title="Right" href="#" className="text-pink-300 text-2xl">
              <ArrowRightSquareIcon />
            </a>
            <a title="Notebook" href="#" className="text-pink-300 text-2xl">
              <Notebook />
            </a>
          </div>
        </div>

        <hr className="border-pink-300 my-6" />

        <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-300 mb-10">
          <div>
            <h3 className="text-pink-300 text-lg mb-2 font-semibold">
              Traveller emergencies
            </h3>
            <p className="text-sm text-pink-200 font-bold">
              GTM North +44(0)118 338 1924
            </p>
            <p className="text-sm text-pink-200 font-bold">
              GTM South +44(0)207 253 2530
            </p>
            <p className="text-sm">
              Travel doesn&#39;t stick to office hours, so neither do we.
            </p>
          </div>
          <div>
            <h3 className="text-pink-300 text-lg mb-2 font-semibold">
              For You
            </h3>
            <ul>
              <li>
                <a className="text-sm" href="#">
                  Partnering Finance Teams
                </a>
              </li>
              <li>
                <a className="text-sm" href="#">
                  Supporting Travellers
                </a>
              </li>
              <li>
                <a className="text-sm" href="#">
                  Supporting Travel Bookers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-pink-300 text-lg mb-2 font-semibold">
              Resources
            </h3>
            <ul>
              <li>
                <a className="text-sm" href="#">
                  Guides
                </a>
              </li>
              <li>
                <a className="text-sm" href="#">
                  Travel Templates
                </a>
              </li>
              <li>
                <a className="text-sm" href="#">
                  News
                </a>
              </li>
              <li>
                <a className="text-sm" href="#">
                  Case Studies
                </a>
              </li>
              <li>
                <a className="text-sm" href="#">
                  Corporate Travel Glossary
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-pink-300 text-lg mb-2 font-semibold">
              Get in touch
            </h3>
            <ul>
              <li>
                <a className="text-sm" href="#">
                  Meet the team
                </a>
              </li>
              <li>
                <a className="text-sm" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-sm" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="text-sm" href="#">
                  Our Foundation
                </a>
              </li>
            </ul>
            <h3 className="text-pink-300 text-lg mb-2 font-semibold mt-4">
              Newsletter
            </h3>
            <p className="text-sm">
              Follow our LinkedIn Newsletter for the latest updates.
            </p>
          </div>
        </div>

        <div className="footer-bottom px-4 text-white">
          {/* Logos Section */}
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4 pb-6">
            <div className="flex flex-wrap justify-center items-center gap-6">
              <Image
                src="/images/ATOL_Protected.png"
                alt="ATOL"
                width={60}
                height={60}
              />
              <Image
                src="/images/ABTA.png"
                alt="ABTA"
                width={100}
                height={60}
              />
              <Image src="/images/IATA.png" alt="IATA" width={80} height={60} />
              <Image src="/images/BTA.png" alt="BTA" width={100} height={60} />
              <Image
                src="/images/British_Airways.png"
                alt="British Airways"
                width={120}
                height={40}
              />
              <Image
                src="/images/Lufthansa.png"
                alt="Lufthansa"
                width={140}
                height={40}
              />
              <Image
                src="/images/ALTOUR.png"
                alt="ALTOUR"
                width={80}
                height={40}
              />
              <Image
                src="/images/Cyber_Essentials_Certified.png"
                alt="Cyber Essentials Certified"
                width={100}
                height={40}
              />
              <Image
                src="/images/JGG.png"
                alt="John Good Group"
                width={100}
                height={40}
              />
            </div>
          </div>

          {/* Address & Copyright */}
          <div className="w-full flex flex-col lg:flex-row item-start lg:item-center justify-center lg:justify-between">
            <p className="text-sm text-center">
              <span className="font-bold">📍 Head Office:</span> Quarry House,
              Hesslewood Office Park, Hessle HU13 0LH
            </p>
            <p className="text-sm text-center">
              &copy; {currentYear} Good Travel. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
