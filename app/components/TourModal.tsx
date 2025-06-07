import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export const TourModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <p className="text-sm text-[#BF4A47] italic font-semibold ml-1">
          {" "}
          -{" "}
          <span className="border-b-2 border-dotted border-[#BF4A47]">
            informace
          </span>
        </p>
      </DialogTrigger>
      <DialogContent className="min-w-3xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium mb-4">
            Informace o komentované prohlídce
          </DialogTitle>
          <DialogDescription className="flex flex-row gap-8 w-full">
            <div className="min-w-5/12 relative">
              <Image
                src="/cistirny.jpg"
                alt="tour-modal"
                fill
                className="rounded-2xl"
              />
            </div>
            <p className="text-base text-[#664e27]">
              Stará čistírna odpadních vod v Bubenči je industriální skvost
              postavený v roce 1906, tedy z doby, kdy se ještě všechno točilo na
              páru. Čistila vodu pro celou Prahu až do roku 1967 a dnes je z ní
              národní kulturní památka zařazena na indikativním seznamu UNESCO.
              <br />
              <br />
              A protože tenhle prostor rozhodně stojí za zkouknutí, nabízíme vám
              možnost krátké komentované prohlídky – mrknete do kotelny,
              strojovny a nakonec se svezete na prámu pod zemí.
              <br />
              <br />
              Celé to zabere cca 35 minut a je to fakt zážitek!
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
