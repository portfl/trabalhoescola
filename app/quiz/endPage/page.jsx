"use client";

import React, { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";
import Image from "next/image";
import arrow from "./icons/arrow-left.svg";
const roboto = Roboto({ subsets: ["latin"], weight: "300" });

const Page = () => {
  const [value, setValue] = useState(null);

  const router = useRouter();

  const Restart = () => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem("Acertos", 0);
      sessionStorage.setItem("Respostas", 0);
  
      router.push("/quiz/1");
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const Answers =  parseInt(sessionStorage.getItem("Respostas"));

      if (isNaN(Answers) || Answers === 0) {
       return router.push("/quiz/1");
      } else if (Answers === 1) {
        return router.push("/quiz/2");
      } else if (Answers === 2) {
        return router.push("/quiz/3");
      } else if (Answers === 3) {
        return router.push("/quiz/4");
      } else if (Answers === 4) {
        return router.push("/quiz/5");
      }

      setValue(Answers);
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
            Seu Resultado Foi: {value}/5
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
