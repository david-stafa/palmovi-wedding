import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import * as motion from "motion/react-client";

export const TourModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <motion.p 
          className="text-sm text-[#BF4A47] italic font-semibold cursor-pointer inline-flex"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          -
          <motion.span 
            className="border-b-2 ml-1 border-dotted border-[#BF4A47]"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 0.3 }}
          >
            informace o prohlídce
          </motion.span>
        </motion.p>
      </DialogTrigger>
      <DialogContent className="md:p-8 md:min-w-3xl bg-[#FDF6ED] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DialogTitle className="text-2xl font-medium mb-4">
              Informace o komentované prohlídce
            </DialogTitle>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div 
              className="w-full h-58 md:h-auto md:min-w-5/12 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/cistirny.jpg"
                alt="tour-modal"
                fill
                className="rounded-2xl"
              />
            </motion.div>
            <motion.p 
              className="text-base text-[#664e27] text-justify"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
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
            </motion.p>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
