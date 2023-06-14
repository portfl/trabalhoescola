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
    

    if (e.target.textContent !== "cachoeira do urubu") {
        const answers = parseInt(sessionStorage.getItem("Respostas"));
        const newValue = answers + 1;
        sessionStorage.setItem("Respostas", newValue);
        setShowAnswers(true);
        setChoosedAnswer(e.target.textContent);
    }
    else {
        const answers = parseInt(sessionStorage.getItem("Respostas"));
        const newValue = answers + 1;
        sessionStorage.setItem("Respostas", newValue);

    
        
        const correct = parseInt(sessionStorage.getItem("Acertos"));
        const newCorrect = correct + 1;

        sessionStorage.setItem("Acertos", newCorrect);

    
        setShowAnswers(true);
    
        setChoosedAnswer(e.target.textContent);
    }

    setTimeout(() => {
        router.push("/quiz/endPage");
    }, 2000)

    console.log(e.target.textContent);

  };

  useEffect(() => {
    const Answers =  parseInt(sessionStorage.getItem("Respostas"));

    switch (Answers) {
      case 0 | NaN: {
        router.push("/quiz/1");
        break;
      }
      case 1 : {
        router.push("/quiz/2")
        break;
      }
      case 2: {
        router.push("/quiz/3")
        break;
      }
      case 3: {
        router.push("/quiz/4");
        break;
      }
      case 5: {
        router.push("/quiz/endPage")
        break;
      }
    }

    if (isNaN(Answers) || Answers === 0) {
      router.push("/quiz/1");
    } else if (Answers === 1) {
      router.push("/quiz/2");
    } else if (Answers === 2) {
      router.push("/quiz/3");
    } else if (Answers === 3) {
      router.push("/quiz/4");
    } else if (Answers === 5) {
      router.push("/quiz/endPage");
    }
  }, [])

  useEffect(() => {
    console.log(sessionStorage.getItem("Acertos"));
    console.log(sessionStorage.getItem("Respostas"));
  }, [Answers])
  return (
    <div className="h-full w-full">
      <div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-5xl font-semibold text-center">qual é o ponto turistico de maragogipe, conhecido pela famosa lenda: "quem tonha banho ali, casa aqui" ?</h1>
          <div className="flex flex-col">
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-60">
          <div className="flex gap-2 flex-col md:flex-row">
            <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${Answers ? " opacity-50 cursor-not-allowed" : ""}`} onClick={Answers ? null : checkAnswer}>
              <span>Ponta de Souza</span>
            </button>
            <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${Answers ? " opacity-50 cursor-not-allowed" : ""}`} onClick={Answers ? null : checkAnswer}>
              Porto do cajá
            </button>
          </div>
          <div className="flex gap-2 mt-2 flex-col md:flex-row">
            <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${Answers ? " opacity-50 cursor-not-allowed" : ""}`} onClick={Answers ? null : checkAnswer}>
              <span>Arraial do Cabo </span>
            </button>
            <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${Answers ? " opacity-50 cursor-not-allowed" : ""}`} onClick={Answers ? null : checkAnswer}>
              cachoeira do urubu
            </button>
          </div>
          <div className="mt-20">
            <span className={raleway.className}>5/5</span>
          </div>
          <div>
            {Answers ? <div>
                <span>Resposta Escolhida: {ChoosedAnswer}</span> <br />
                <span>Resposta Correta: cachoeira do urubu</span>
            </div> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
