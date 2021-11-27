import Image from "next/image";
import logo from "../public/logo.png";
import avatar1 from "../public/avatar_1.png";
import header_monkey from "../public/header_monkey.png";
import Link from "next/link";
import data from "../data/people.js";
import submonkey1 from "../public/sub_monkey_1.png";
import golden from "../public/golden_ticket.png";
import mouse from "../public/mouse.png";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-900 w-full">
      <div className="flex justify-between items-center p-4 bg-gray-900 w-full h-auto">
        <Image src={logo} alt="logo" />
        <div className="flex gap-6 text-white items-center">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Features</a>
          </Link>
          <Link href="/">
            <a>Roadmap</a>
          </Link>
          <Link href="/">
            <a>Team</a>
          </Link>
          <Link href="/">
            <button
              id="head_btn"
              className="bg-gradient-to-r from-purple-600 to-purple-500 p-2 rounded-sm"
            >
              Join our discord
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full p-2 flex gap-2">
        <div className="w-1/2 h-screen relative overflow-hidden">
          <div className="w-3/5 h-4/5 rounded-full bg-purple-800 -left-24 top-26 bg-opacity-10 absolute"></div>
          <Image
            width={789}
            height={789}
            src={header_monkey}
            alt="header_monkey"
          />
        </div>
        <div className="w-1/2 h-auto  flex justify-center items-center relative overflow-hidden">
          <div className="w-3/5 h-3/5 absolute rounded-full bg-purple-800 -right-16 -top-24 bg-opacity-25"></div>
          <div className="flex flex-col gap-4 items-center w-10/12">
            <div className="flex p-2">
              <p className="text-white text-6xl font-sans font-extrabold tracking-widest">
                EXCLUSIVE
              </p>
            </div>
            <div className="text-white font-roboto text-2xl -mt-4 flex justify-end w-4/5 tracking-widest">
              <p id="text">newest NFT release</p>
            </div>
            <div className="flex text-center">
              <p className="text-white">
                The BILLIONAIRE CLUB is a private collection of 10 000
                billionaire apes NFTs—unique digital collectibles. The apes are
                stored as ERC-721 tokens on the Ethereum blockchain and hosted
                on IPFS. Reveal on October 20th.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <input
                className="bg-gray-900 p-2 text-white outline-white rounded-sm text-center"
                type="text"
                name="email"
                placeholder="your@email.com"
              />
              <Link href="/">
                <button
                  id="head_btn"
                  className="bg-gradient-to-r from-purple-600 to-purple-500 p-2 px-6 rounded-sm text-white"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dotted bg-no-repeat w-full h-full">
        <div className="flex justify-start items-center mt-6 p-6">
          <div className="w-4/5 h-auto flex flex-col gap-4 items-start p-2">
            <div>
              <p id="text" className="text-6xl font-semibold">
                Collections
              </p>
            </div>
            <div>
              <p className="text-white">
                With more than 180+ hand drawn traits, each NFT is unique and
                comes with a membership to an exclusive group of successful
                investors. Join an ambitious ever-growing community with
                multiple benefits and utilities.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center relative">
          <div className="w-1/2 h-full rounded-full bg-purple-800 -right-0 top-32 bg-opacity-10 absolute"></div>
          <div className="w-4/5 h-auto flex gap-6 flex-wrap justify-center">
            {data.map((box) => {
              return (
                <div
                  key={data.id}
                  className="bg-gray-600 w-3/12 h-auto text-white border-2 border-gray-700 p-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Image src={avatar1} alt="avatar" />
                      <p>@{box.username}</p>
                    </div>
                    <p>{box.stars}</p>
                  </div>
                  <div className="p-2">
                    <Image src={submonkey1} alt="user" />
                  </div>
                  <div className="flex justify-between items-center">
                    <p>
                      Current bid <br /> {box.current_bid}
                    </p>
                    <p>
                      Ending in <br /> {box.ending}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="bg" className="w-full h-96 p-2 mt-40 flex items-center">
          <div className="w-1/2 p-6 flex flex-col gap-6">
            <div>
              <p className="text-4xl text-yellow-300 font-semibold">
                The Golden Guests
              </p>
            </div>
            <div>
              <p className="text-white">
                The Golden Guests edition by the Billionaire Club are the rarest
                NFTs. They are all hand drawn and have no element in common with
                the regular collection.
              </p>
            </div>
            <div>
              <Link href="/">
                <button className="w-full p-2 bg-purple-900 text-white shadow-2xl">
                  Join us to register for the Presale
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <Image width={648} height={648} src={golden} alt="ticket" />
          </div>
        </div>
        <div className="w-full h-80 flex justify-center items-center">
          <div className="text-white text-center text-lg">
            <p id="text" className="text-4xl font-semibold">
              Get Aped with Us!
            </p>
            <div className="flex justify-center items-center gap-2 mt-2">
              <div className="border-b-2 border-purple-800">
                <p className="text-lg">Sign up for our newsletter</p>
              </div>
              <Image src={mouse} alt="mouse" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <div className="w-4/5 border-t-2 border-purple-100 flex items-center justify-between text-gray-500 p-2">
              <div className="flex gap-2 items-center">
                <Image src={logo} alt="logo" />
                <Link href="/">
                  <a>Terms of Service</a>
                </Link>
                <Link href="/">
                  <a>Privacy Policy</a>
                </Link>
              </div>
              <div className="flex gap-6 items-center p-2">
                <Link href="/">
                <a><FaDiscord /></a>
                </Link>
                <Link href="/">
                <a><FaFacebook /></a>
                </Link>
                <Link href="/">
                <a><FaInstagram /></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
