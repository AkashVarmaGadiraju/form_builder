import { KeySquare } from "lucide-react";
import { ReactComponent as PlantImage } from "../../assets/Image.svg";
import { ReactComponent as BlueKeyIcon } from "../../assets/Vector-1.svg";
import { ReactComponent as RedKeyIcon } from "../../assets/Vector-2.svg";
import { ReactComponent as GreenKeyIcon } from "../../assets/Vector.svg";
import { ReactComponent as FormSubmitRightArrowIcon } from "../../assets/formkit_submit.svg";
import { ReactComponent as BrownCancelIcon } from "../../assets/grommet-icons_clear.svg";
import { ReactComponent as WhiteCancelIcon } from "../../assets/grommet-icons_clear-white.svg";

const ChooseModal = () => {
  const demoItems = [
    {
      title: "Model 1",
      content:
        "We're glad to have you onboard. Here are some quick tips to get you up and running",
      tags: [
        {
          title: "Type",
          Icon: <KeySquare className="w-4 h-4" />,
        },
      ],
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-2">
        <h1>Choose an Existing Model</h1>
        <p>Choose from our Template Library to set a parent child hierarchy.</p>
      </div>
      <div className="grid md:grid-cols-2 sm: grid-cols-3 gap-2">
        <div></div>
        <div className="flex flex-row gap-2 justify-start items-center">
          <div className="flex flex-row gap-2 justify-start items-center text-[9px] text-[#81B97C] font-medium">
            <GreenKeyIcon /> Type
          </div>
          <div className="flex flex-row gap-2 justify-start items-center text-[9px] text-[#73C5D0] font-medium">
            <BlueKeyIcon /> Style
          </div>
          <div className="flex flex-row gap-2 justify-start items-center text-[9px] text-[#B9877C] font-medium">
            <RedKeyIcon /> Group
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseModal;
