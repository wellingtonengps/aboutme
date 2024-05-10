import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col justify-between p-10 md:justify-center md:px-24 lg:px-36 xl:px-52 2xl:px-64">
            <div className="flex flex-col md:flex-row items-center">
                <Image src="/profile.svg" alt="profile" height={220} width={220}/>
                <div className="flex flex-col items-center md:items-start md:ml-16  mt-8 md:mt-0 ">
                    <h1 className="text-2xl font-bold md:text-start mb-2">Wellington Pereira Silva</h1>
                    <div className="flex flex-row gap-3">
                        <Image src="/school_icon.svg" alt="school icon" height={26} width={26}/>
                        <h2>Ciência da Computação</h2>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Image src="/work_icon.svg" alt="school icon" height={26} width={26}/>
                        <h2>Estagiário de Suporte</h2>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Image src="/apartment_icon.svg" alt="school icon" height={26} width={26}/>
                        <h2>Hospital Unimed Dr. Hugo Borges</h2>
                    </div>

                    <p className="mt-3 text-justify md:text-start">Olá, sou Wellington estudante de Ciência da
                        Computação,
                        estagiário em suporte de TI
                        no Hospital Unimed Juiz de Fora, com experiência em desenvolvimento Web e mobile,
                        com aptidão também em UX/UI, buscando uma oportunidade como desenvolver.</p>
                </div>
            </div>
            <div className="flex flex-col mt-8 items-center ">
                <h1 className="mb-4 text-center text-2xl">Experiências</h1>
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
            <div className="flex flex-col mt-8 items-center ">
                <h1 className="mb-4 text-center text-2xl">Projetos</h1>

            </div>
            <div className="flex flex-col mt-8 items-center ">
                <h1 className="mb-4 text-center text-2xl">Contatos</h1>

            </div>
        </main>
    );
}
