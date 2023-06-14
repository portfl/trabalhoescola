"use client";

import React, { useEffect } from "react";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";
import Image from "next/image";
import arrow from "./icons/arrow-left.svg";
const roboto = Roboto({ subsets: ["latin"], weight: "300" });

const Page = () => {
  const router = useRouter();

  const Restart = () => {
    sessionStorage.setItem("Acertos", 0);
    sessionStorage.setItem("Respostas", 0);

    router.push("/quiz/1");
  };

  useEffect(() => {
    const Answers =  parseInt(sessionStorage.getItem("Respostas"));

    switch (Answers) {
      case 0 | NaN: {
        router.push("/quiz/1")
      }
      case 1: {
        router.push("/quiz/2");
        break;
      }
      case 2: {
        router.push("/quiz/3");
        break;
      }
      case 3: {
        router.push("/quiz/4");
        break;
      }
      case 4: {
        router.push("/quiz/5");
        break;
      }
    }
  }, [])

  return (
    <div>
      <div
        className={`flex justify-center text-center items-center flex-col ${roboto.className}`}
      >
        <div className="mt-2">
          <h1 className="text-6xl">Obrigado por responder nosso Quiz!</h1>
          <p className={`${roboto.className}`}>
            Seu Resultado Foi:{" "}
            {sessionStorage && parseInt(sessionStorage.getItem("Acertos"))}/5{" "}
          </p>
        </div>
        <p>Clique no Botão Para Reiniciar</p>
        <div className="mt-3">
          <button className="btn btn-md" onClick={Restart}>
            <Image src={arrow} />
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
