import Head from "next/head";
import Image from "next/image";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { ColorButton } from "@components/ColorButton";
import { useState } from "react";
import { getImage } from "@components/utils";

export default function Home() {
  const [chosen, setChosen] = useState(0);
  const handleClick = () => {
    const val = Math.ceil(Math.random() * 4);
    console.log("val", val);
    setChosen(val);
  };

  return (
    <div className="container">
      <Head>
        <title>Wybieramy ubrania</title>
        <meta name="description" content="Tosia wybiera ubrania" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome Tosia!" />
        <ColorButton variant="contained" onClick={handleClick}>
          Losowanie
        </ColorButton>

        {chosen ? (
          <div>
            <Image src={getImage(chosen)} alt="me" width="128" height="128" />
          </div>
        ) : (
          <></>
        )}
      </main>

      <Footer />
    </div>
  );
}
