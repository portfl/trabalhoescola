"use client";

import React, { useEffect, useState } from "react";
import { Raleway } from "next/font/google";
import { useRouter } from "next/navigation";

const raleway = Raleway({ subsets: ["latin"], weight: "500" });

const page = () => {
  const [Answers, setShowAnswers] = useState(false);

  const [ChoosedAnswer, setChoosedAnswer] = useState("");

  const router = useRouter();

  const checkAnswer = (e) => {
    if (e.target.textContent === "Dendê e marisco") {
      sessionStorage.setItem("Acertos", 1);
      sessionStorage.setItem("Respostas", 1);

      setShowAnswers(true);

      setChoosedAnswer(e.target.textContent);
    } else {
      sessionStorage.setItem("Acertos", 0);
      sessionStorage.setItem("Respostas", 1);

      setShowAnswers(true);

      setChoosedAnswer(e.target.textContent);
    }

    setShowAnswers(true);

    setChoosedAnswer(e.target.textContent);

    console.log(e.target.textContent);

    setTimeout(() => {
        router.push("/quiz/2");
    }, 2000)
  };

    useEffect(() => {
      const Answers =  parseInt(sessionStorage.getItem("Respostas"));

      switch (Answers) {
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
        case 5: {
          router.push("/quiz/endPage")
          break;
        }
      }
    }, [])
  useEffect(() => {
    console.log(parseInt(sessionStorage.getItem("Acertos")));
    console.log(parseInt(sessionStorage.getItem("Respostas")));
  }, [Answers]);


  return (
    <div className="h-full w-full">
      <div>
        <div className="flex justify-center items-center flex-col ">
          <h1 className="text-5xl font-semibold text-center">
            Quais os principais ingredientes da culinaria Maragojipana?
          </h1>
          <div className="flex flex-col">
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-60">
          <div className="flex gap-2 flex-col md:flex-row">
            <button
              className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${
                Answers ? " opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={Answers ? null : checkAnswer}
            >
              Teste 1
            </button>
            <button
              className={`w-60 h-10 rounded-lg btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ${
                Answers ? " opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={Answers ? null : checkAnswer}
            >
              Teste 2
            </button>
          </div>
          <div className="flex gap-2 mt-2 flex-col md:flex-row">
            <button
              className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${
                Answers ? " opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={Answers ? null : checkAnswer}
            >
              Dendê e marisco
            </button>
            <button
              className={` w-60 h-10 rounded-lg  btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ${
                Answers ? " opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={Answers ? null : checkAnswer}
            >
              Teste 4
            </button>
          </div>
          <div className="mt-20">
            <span className={raleway.className}>1/5</span>
          </div>
          <div>
            {Answers ? (
              <div>
                <span>Resposta Escolhida: {ChoosedAnswer}</span> <br />
                <span>Resposta Correta: Dendê e marisco</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
