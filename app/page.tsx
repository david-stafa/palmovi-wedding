"use client";

import Form from "@/components/Form/form";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import * as motion from "motion/react-client";

export default function Page() {
  const [isFormVisible, setIsTourVisible] = useState(false);

  const scrollToForm = () => {
    setIsTourVisible(true);
    // Add a small delay to ensure the form is rendered before scrolling
    setTimeout(() => {
      document.getElementById('form')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 200);
  };

  return (
    <motion.div
      className="bg-[#FDF6ED] p-4 md:p-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      {/* Header */}
      <motion.div
        className="flex justify-between items-center max-w-3xl mx-auto mb-5"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="relative w-[170px] h-[75px] md:w-[200px] md:h-[100px] overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/main-image.png"
            alt="vika&martin"
            fill
            className="hidden md:block"
          />
          <Image
            src="/main-image-date.png"
            alt="vika&martin-date"
            fill
            className="block md:hidden"
          />
        </motion.div>
        <motion.p
          className="text-xl md:text-2xl font-medium text-[#BF4A47] hidden md:block"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          20. září 2025
        </motion.p>
      </motion.div>
      {/* Disco + text */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <motion.div
          className="relative w-42 h-42 md:w-[300px] md:h-[300px] overflow-hidden"
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ rotate: 180 }}
        >
          <Image src="/disco-ball.png" alt="discoBall" fill />
        </motion.div>
        <motion.h2
          className="text-2xl md:text-4xl font-medium leading-relaxed uppercase max-w-xs text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
            type: "spring",
            bounce: 0.4,
          }}
        >
          Budeme se brát a zveme tě na svatbu!
        </motion.h2>
      </div>
      {/* Text + photo*/}
      <motion.div
        className="flex flex-col md:flex-row max-w-3xl mx-auto gap-10 my-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          className="w-full md:w-1/2 text-md"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {/* Text */}
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
            <span className="text-lg text-[#BF4A47] font-medium italic flex items-center gap-2">
              Vika + Martin <HeartIcon className="w-5 h-5" strokeWidth={2} />
            </span>
          </p>
        </motion.div>
        {/* Photo */}
        <motion.div
          className="relative rounded-2xl overflow-hidden aspect-square w-full md:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image src="/together-with-legs-2.png" alt="together" fill />
        </motion.div>
      </motion.div>
      {/* Buttons */}
      <motion.div
        className="flex flex-col justify-center items-center gap-10 mt-15 mb-10 md:my-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <motion.h2
          className="text-2xl font-medium"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          Dorazíte na naši svatbu?
        </motion.h2>
        <motion.div
          className="flex justify-center items-center gap-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-[#BF4A47] text-white rounded-2xl hover:bg-[#BF4A47]/80"
              size="lg"
              onClick={scrollToForm}
            >
              Ano, dorazím
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-[#664e27] text-white rounded-2xl hover:bg-[#664e27]/80"
              size="lg"
            >
              Ne, nedorazím
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      <Form isVisible={isFormVisible} />
    </motion.div>
  );
}
