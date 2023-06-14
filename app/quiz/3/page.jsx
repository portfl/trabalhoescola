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
    

    if (e.target.textContent !== "Forró do Cais") {
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
        router.push("/quiz/4")
    }, 1000)
  };

  useEffect(() => {
    const Answers =  parseInt(sessionStorage.getItem("Respostas"));

    if (isNaN(Answers) || Answers === 0) {
      router.push("/quiz/1");
    } else if (Answers === 1) {
      router.push("/quiz/2");
    } else if (Answers === 3) {
      router.push("/quiz/4");
    } else if (Answers === 4) {
      router.push("/quiz/5");
    } else if (Answers === 5) {
      router.push("/quiz/endPage");
    }
  }, [])




  return (
    <div className="h-full w-full">
      <div>
        <div className="flex justify-center items-center flex-col ">
          <h1 className="text-5xl font-semibold text-center">Qual a principal festa de largo da cidade no São João?</h1>
          <div className="flex flex-col">
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-60">
          <div className="flex gap-2 flex-col md:flex-row">
            <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${Answers ? " opacity-50 cursor-not-allowed" : ""}`} onClick={Answers ? null : checkAnswer}>
              <span>folia de Reis</span>
            </button>
            <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${Answers ? " opacity-50 cursor-not-allowed" : ""}`} onClick={Answers ? null : checkAnswer}>
              boiadeira
            </button>
          </div>
          <div className="flex gap-2 mt-2 flex-col md:flex-row">
            <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${Answers ? " opacity-50 cursor-not-allowed" : ""}`} onClick={Answers ? null : checkAnswer}>
              <span>Forró do Cais </span>
            </button>
            <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${Answers ? " opacity-50 cursor-not-allowed" : ""}`} onClick={Answers ? null : checkAnswer}>
              cateretê
            </button>
          </div>
          <div className="mt-20">
            <span className={raleway.className}>3/5</span>
          </div>
          <div>
            {Answers ? <div>
                <span>Resposta Escolhida: {ChoosedAnswer}</span> <br />
                <span>Resposta Correta: Forró do Cais</span>
            </div> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
