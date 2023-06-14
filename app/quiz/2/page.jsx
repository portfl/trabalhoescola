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
    

    if (e.target.textContent !== "Samba de Roda") {
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
        router.push("/quiz/3")
    }, 1000)

    console.log(e.target.textContent);

  };
  useEffect(() => {
    const Answers =  parseInt(sessionStorage.getItem("Respostas"));

    switch (Answers) {
      case 0 | NaN: {
        router.push("/quiz/1");
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
    console.log(sessionStorage.getItem("Acertos"));
    console.log(sessionStorage.getItem("Respostas"));
  }, [Answers])
  return (
    <div className="h-full w-full">
      <div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-5xl font-semibold text-center">Qual a mais antiga tradição musical de Maragogipe?</h1>
          <div className="flex flex-col">
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-60">
          <div className="flex gap-2 flex-col md:flex-row">
            <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${Answers ? " opacity-50 cursor-not-allowed" : ""}`} onClick={Answers ? null : checkAnswer}>
              Samba de Roda
            </button>
            <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${Answers ? " opacity-50 cursor-not-allowed" : ""}`} onClick={Answers ? null : checkAnswer}>
              Teste 2
            </button>
          </div>
          <div className="flex gap-2 mt-2 flex-col md:flex-row">
            <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${Answers ? " opacity-50 cursor-not-allowed" : ""}`} onClick={Answers ? null : checkAnswer}>
              Teste 3 
            </button>
            <button className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-60 h-10 rounded-lg ${Answers ? " opacity-50 cursor-not-allowed" : ""}`} onClick={Answers ? null : checkAnswer}>
              Teste 4
            </button>
          </div>
          <div className="mt-20">
            <span className={raleway.className}>2/5</span>
          </div>
          <div>
            {Answers ? <div>
                <span>Resposta Escolhida: {ChoosedAnswer}</span> <br />
                <span>Resposta Correta: Samba de Roda</span>
            </div> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
