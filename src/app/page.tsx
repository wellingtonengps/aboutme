import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-10 md:justify-center md:p-24 lg:p-36 xl:p-40 2xl:p-64">
        <div className="flex flex-col md:flex-row items-center">
            <Image src="/profile.svg" alt="profile" height={245} width={245}/>
            <div className="flex flex-col items-center md:items-start md:ml-20  mt-8 md:mt-0 ">
                <h1 className="text-2xl font-bold md:text-start">Wellington Pereira Silva</h1>
                <h2 className="text-1xl">Ciência da Computação</h2>
                <h2>Estagiário de Suporte</h2>
                <h2>Hospital Unimed JF</h2>
                <p className="mt-3 text-justify md:text-start">Olá, sou Wellington estudante de Ciência da Computação, estagiário em suporte de TI
                    no Hospital Unimed Juiz de Fora, com experiência em desenvolvimento Web e mobile,
                    com aptidão também em UX/UI, buscando uma oportunidade como desenvolver.</p>
            </div>
        </div>
        <div className="flex flex-col mt-8 items-center ">
            <h1 className="mb-4 text-center text-2xl">Hard-Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </main>
  );
}
