import { KeySquare } from "lucide-react";
import { ReactComponent as PlantImage } from "../../assets/Image.svg";
import { ReactComponent as BlueKeyIcon } from "../../assets/Vector-1.svg";
import { ReactComponent as RedKeyIcon } from "../../assets/Vector-2.svg";
import { ReactComponent as GreenKeyIcon } from "../../assets/Vector.svg";
import { ReactComponent as FormSubmitRightArrowIcon } from "../../assets/formkit_submit.svg";
import { ReactComponent as BrownCancelIcon } from "../../assets/grommet-icons_clear.svg";
import { ReactComponent as WhiteCancelIcon } from "../../assets/grommet-icons_clear-white.svg";

const ChooseModal = () => {
  const ModalCard = () => (
    <div className="w-full max-w-[400px] rounded-xl shadow-lg shadow-neutral-300 p-[24px] flex flex-col gap-3 border-1 hover:border-3 border-[#ccc] hover:border-[#3b8662] transition-colors">
      <div className="w-full h-40 rounded-lg overflow-hidden">
        <img
          src="/carrd-img.svg"
          alt="card-img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className=" font-merriweather-sans text-5xl font-semibold text-green-800">
          Model
        </h3>
        <div className="flex flex-row gap-2 justify-start items-center">
          <div className="flex flex-row gap-2 justify-start items-center text-[12px] text-[#81B97C] font-medium">
            <GreenKeyIcon /> Type
          </div>
          <div className="flex flex-row gap-2 justify-start items-center text-[12px] text-[#73C5D0] font-medium">
            <BlueKeyIcon /> Style
          </div>
          <div className="flex flex-row gap-2 justify-start items-center text-[12px] text-[#B9877C] font-medium">
            <RedKeyIcon /> Group
          </div>
        </div>
        <p>
          We are glad to have you onboard. Here are some tips to get you up and
          running.
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full grid grid-cols-4 gap-4">
        <ModalCard />
        <ModalCard />
        <ModalCard />
        <ModalCard />
        <ModalCard />
        <ModalCard />
        <ModalCard />
        <ModalCard />
        <ModalCard />
        <ModalCard />
        <ModalCard />
        <ModalCard />
      </div>
    </div>
  );
};

export default ChooseModal;
