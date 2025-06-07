"use client";

import Form from "@/components/Form/form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [isFormVisible, setIsTourVisible] = useState(false);

  return (
    <div className="bg-[#FDF6ED] ">
      <div className="flex justify-between items-center max-w-3xl mx-auto mb-5  ">
        <Image
          src="/main-image.png"
          alt="vika&martin"
          width={200}
          height={100}
        />
        <p className="text-2xl font-medium text-[#BF4A47]">20. září 2025</p>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Image
          src="/disco-ball.png"
          alt="discoBall"
          width={300}
          height={300}
          className="ml-10"
        />
        <h2 className="text-4xl font-medium leading-relaxed uppercase max-w-xs text-center">
          Budeme se brát a zveme tě na svatbu!
        </h2>
      </div>
      <div className="flex max-w-3xl mx-auto gap-6 my-10">
        <div className="w-1/2 text-md">
          <p className="text-justify">
            Ahoj milí,
            <br />
            <br />s radostí bychom Vás chtěli pozvat na naši svatbu, která
            proběhne <b>20. září 2025</b> v prostorách Staré čistírny odpadních
            vod Bubeneč (Papírenská 199/6, Praha 6).
            <br />
            <br />
            Abychom to celé mohli naplánovat tak, aby se všem dobře tančilo,
            jedlo a pilo, budeme rádi, když nám pomůžete vyplněním krátkého
            dotazníku. Podrobnější informace o celém dni budou následovat!
            <br />
            <br />
            Těšíme se na vás!
            <br />
            S láskou,
            <br />
            <br />
            <span className="text-lg text-[#BF4A47] font-medium italic">
              Vika + Martin
            </span>
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-square w-1/2">
          <Image src="/together.png" alt="together" fill />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 my-20">
        <h2 className="text-3xl font-medium">Dorazíte na naši svatbu?</h2>
        <div className="flex justify-center items-center gap-10">
          <Button
            className="bg-[#BF4A47] text-white rounded-2xl hover:bg-[#BF4A47]/80"
            size="lg"
            onClick={() => setIsTourVisible(true)}
          >
            Ano, dorazím
          </Button>
          <Button
            className="bg-[#664e27] text-white rounded-2xl hover:bg-[#664e27]/80"
            size="lg"
          >
            Ne, nedorazím
          </Button>
        </div>
      </div>
      <Form isVisible={isFormVisible} />
    </div>
  );
}
