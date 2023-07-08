import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="flex flex-row justify-start items-center m-4 border border-gray-500 p-2 opacity-80 rounded-xl bg-slate-300">
      <h3 className="font-bold text-xl">{title}</h3>

      {isVisible === true ? (
        <button
          className="bg-amber-100 cursor-pointer border p-1 rounded-md border-black"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          hide
        </button>
      ) : (
        <button
          className="bg-amber-100 cursor-pointer border p-1 m-3 rounded-md border-black"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          show
        </button>
      )}

      {isVisible && (
        <p className="hover:bg-lime-100 shadow-xl border bg-white border-black m-3 p-1 rounded-lg">
          {description}
        </p>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      <h2 className="p-2 m-2 text-center font-bold text-2xl">Instamart</h2>

      <Section
        title={"About Instamart"}
        description={
          "Blockchain is a revolutionary technology that has gained immense popularity and is transforming various industries. At its core, blockchain is a distributed ledger that records transactions across multiple computers or nodes in a secure and transparent manner. Unlike traditional centralized systems, blockchain operates on a decentralized network, ensuring that no single entity has complete control or authority over the data. Each transaction is grouped into a block and added to a chain of previous blocks, creating an immutable and tamper-resistant record.One of the key features of blockchain is its security. Transactions on the blockchain are secured using cryptographic algorithms, making it extremely difficult for hackers to manipulate or alter the data. The decentralized nature of blockchain also eliminates the need for intermediaries, such as banks or financial institutions, resulting in faster and more cost-effective transactions. Moreover, blockchain enables transparency, as anyone with access to the network can verify and validate transactions, enhancing trust and accountability."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          setVisibleSection(visibleSection ? false : "about");
        }}
      />

      <Section
        title={"Team Instamart"}
        description={
          "Developing Web3.0 projects typically involves a collaborative effort from a multidisciplinary team with diverse skill sets. Here is an overview of how a team can work together to develop Web3.0 projects: Vision and Ideation: The team starts by brainstorming and defining the project's vision and goals. They identify the problem they aim to solve and the potential value proposition of the Web3.0 project. Research and Planning: The team conducts research on the relevant blockchain technologies, protocols, and tools suitable for the project. They analyze the market, user needs, and competition to develop a detailed project plan and roadmap. Architecture and Design: The team architects the system, considering the decentralized nature of Web3.0. They design the smart contracts, blockchain infrastructure, and user interfaces to ensure optimal performance, security, and usability."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          setVisibleSection(visibleSection ? false : "team");
        }}
      />

      <Section
        title={"Career Instamart"}
        description={
          "A career in Web3.0 is an exciting opportunity to shape the future of the internet and redefine how we interact with digital technologies. With its decentralized architecture, blockchain-based infrastructure, and enhanced user privacy, Web3.0 offers a whole new world of possibilities. As a Web3.0 professional, you'll delve into the realms of blockchain development, smart contracts, decentralized applications (DApps), and tokenization. You'll have the chance to contribute to the creation of secure and transparent platforms, enabling peer-to-peer transactions, decentralized finance (DeFi), digital identity management, and much more. With a strong foundation in cryptography, distributed systems, and blockchain protocols, you'll be at the forefront of innovation, working with cutting-edge technologies like Ethereum, Polkadot, and Solana. Your skills in programming, data analysis, and cybersecurity will be invaluable as you navigate the challenges and opportunities of this new era. Embrace a career in Web3.0, and become a catalyst for transforming the internet into a decentralized, user-centric, and trustless ecosystem."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => {
          setVisibleSection(visibleSection ? false : "career");
        }}
      />
    </>
  );
};

export default Instamart;
