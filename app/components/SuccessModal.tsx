import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CircleCheck } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  const handleClose = () => {
    scrollToTop();
    onClose();
  };

  const scrollToTop = () => {
    // Add a small delay to ensure the form is rendered before scrolling
    setTimeout(() => {
      document.getElementById("header")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="">
        <CircleCheck
          color="#BF4A47"
          size={70}
          className="mx-auto"
          strokeWidth={1.3}
        />
        <DialogHeader>
          <DialogTitle className="text-center text-lg">
            <span className="font-medium text-[#664e27]">
              Děkujeme za vyplnění formuláře.
            </span>
            <div className="text-xl mt-4">Těšíme se na vás!</div>
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={handleClose}
            className="bg-[#664e27] text-white rounded-2xl hover:bg-[#664e27]/80"
          >
            Zavřít
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
