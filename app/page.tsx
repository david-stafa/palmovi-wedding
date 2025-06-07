import Form from "@/components/Form/form";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#FDF6ED]">
      <div className="flex justify-start items-center container mx-auto">
        <Image
          src="/main-image.png"
          alt="vika&martin"
          width={200}
          height={100}
          className="ml-10"
        />
      </div>
      <div className="flex justify-center items-center gap-5">
        <Image
          src="/disco-ball.png"
          alt="discoBall"
          width={300}
          height={300}
          className="ml-10"
        />
        <h2 className="text-4xl  font-medium leading-relaxed uppercase max-w-xs text-center">
          Budeme se brát a zveme tě na svatbu!
        </h2>
      </div>
      <div className="flex max-w-3xl mx-auto gap-10 my-10">
        <div className="w-1/2 text-md">
          <p>
            Ahoj milí,
            <br />
            <br />s radostí bychom Vás chtěli pozvat na naši svatbu, která
            proběhne <b>20. září 2025</b> v prostorách Staré čistírny odpadních
            vod Bubeneč (Papírenská 199/6, Praha 6).
            <br />
            <br />
            Abychom to celé mohli naplánovat tak, aby se všem dobře tančilo,
            jedlo a bavilo, budeme rádi, když nám pomůžete vyplněním krátkého
            dotazníku. Podrobnější informace o celém dni budou následovat!
            <br />
            <br />
            Těšíme se na vás! S láskou,
            <br />
            Vika + Martin
          </p>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-square w-1/2">
          <Image src="/together.png" alt="together" fill />
        </div>
      </div>
      <Form />
    </div>
  );
}
