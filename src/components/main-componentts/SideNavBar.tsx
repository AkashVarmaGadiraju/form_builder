import { FunctionComponent } from "react";

const SideNavBar: FunctionComponent = () => {
	return (
		<div className="absolute w-[81px] bg-lavender box-border overflow-hidden shrink-0 flex flex-col items-end justify-between pt-[25px] px-5 pb-[33px] text-left text-4xs text-steelblue font-monoton border-[1px] border-solid border-cornflowerblue mq825:pb-5 mq825:box-border mq1250:pt-5 mq1250:pb-[21px] mq1250:box-border h-full">
			<div className="flex flex-col items-start justify-start gap-[1.6px] flex-shrink-0">
				<img className="w-[48px] h-[50.4px] relative object-cover z-[1]" loading="lazy" alt="" src="/forrmlogo-1@2x.png" />
				<div className="flex flex-row items-start justify-center py-0 pr-0.5 pl-[3px]">
					<div className="relative inline-block min-w-[33px] z-[1] text-center">NOVA</div>
				</div>
			</div>
			<div className="flex flex-col items-end justify-end gap-[36.7px] flex-grow">
				<img className="w-[30.9px] h-6 relative z-[1]" loading="lazy" alt="" src="/field-menu-button.svg" />
				<div className="flex flex-row items-start justify-end py-0 pr-[1.9px] pl-0.5">
					<img className="h-7 w-[27px] relative z-[1]" loading="lazy" alt="" src="/model-menu-button.svg" />
				</div>
				<div className="flex flex-row items-start justify-end py-0 pr-[5.9px] pl-1">
					<img className="h-[26px] w-[21px] relative z-[1]" loading="lazy" alt="" src="/template-menu-button.svg" />
				</div>
				<div className="flex flex-row items-start justify-end py-0 pr-[4.9px] pl-[3px]">
					<img className="h-6 w-[23px] relative z-[1]" loading="lazy" alt="" src="/settings-menu-button.svg" />
				</div>
			</div>
		</div>
	);
};

export default SideNavBar;
