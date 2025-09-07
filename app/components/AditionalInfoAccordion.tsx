import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AditionalInfoAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-base font-medium">
          Čas příjezdu
        </AccordionTrigger>
        <AccordionContent>
          <p className="mr-20">
            Obřad začíná v 12:30. Budeme rádi, když dorazíte mezi 11:45 až
            12:00, abychom měli čas se v klidu přivítat a vše připravit.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-base font-medium">
          Průběh dne
        </AccordionTrigger>
        <AccordionContent>
          <p className="mr-20">
            Pokud nám bude přát počasí, většina svatebního dne se odehraje venku
            – včetně obřadu, odpoledního programu i večerního posezení. Po 21.
            hodině se pak postupně přesuneme dovnitř, kde budeme pokračovat.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-base font-medium">
          Komentované prohlídky
        </AccordionTrigger>
        <AccordionContent>
          <p className="mr-20">
            Komentované prohlídky pro ty z vás, kteří v pozvánce zaškrtli, že o
            ně mají zájem, proběhnou v 15:10, 15:50 a 16:30. Pokud by někdo
            preferoval konkrétní čas, dejte nám prosím vědět.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-base font-medium">
          Co na sebe a co vzít v úvahu
        </AccordionTrigger>
        <AccordionContent>
          <p className="mr-20">
            Oblečení zvolte prosím úměrné slavnostní příležitosti. Část dne se
            bude odehrávat venku většinou na trávě a kdo si objednal
            komentovanou prohlídku, čeká ho i chladnější podzemí, kde se
            podpatky nemusí úplně hodit. A protože ke konci září už může být
            chladněji, doporučujeme přibalit si i něco teplejšího – ideálně tak,
            abyste se cítili pohodlně a zároveň vhodně ke svatebnímu dni.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-base font-medium">
          Dary
        </AccordionTrigger>
        <AccordionContent>
          <p className="mr-20">
            Pokud nás chcete obdarovat, budeme rádi za finanční příspěvek do
            začátku společného života. Na místě bude připravená truhla na obálky
            a pro fanoušky moderních technologií QR kód.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-base font-medium">
          Doprava
        </AccordionTrigger>
        <AccordionContent>
          <p className="mr-20">
            Na místo se pohodlně dostanete autem, které je možné zaparkovat na
            parkovišti v areálu. Pražští se dostanou pohodlně i pěšky či
            hromadnou dopravou. Pro hosty, kteří jedou zdaleka a nebudou mít
            vlastní odvoz, budou na místě připraveni dva řidiči, kteří vás rádi
            odvezou. Pokud byste této možnosti chtěli využít, dejte nám prosím
            dopředu vědět, ať víme, s kolika lidmi zhruba počítat.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
