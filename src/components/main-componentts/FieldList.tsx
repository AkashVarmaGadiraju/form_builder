import { FunctionComponent } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../util-components/ui/sheet";
import CreateFieldModal from "./CreateFieldModal";

const FieldList: FunctionComponent = () => {
	return (
		<main className="w-[90%] h-[100%] flex flex-col items-start justify-start box-border max-w-full mx-auto pb-20 pt-24 mq825:p-[20px] mq825:box-border mq1250:p-[20px] mq1250:box-border">
			<section className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full mq825:gap-[21px]">
				<div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full text-left text-11xl text-darkslateblue font-roboto">
					<h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[127px] mq450:text-lg mq825:text-5xl">
						Field List
					</h1>
					<form className="m-0 self-stretch h-[55px] flex flex-row items-start justify-start gap-[9px] max-w-full">
						<div className="h-[56.4px] flex-1 rounded-8xs bg-ghostwhite box-border flex flex-row items-start justify-start pt-3.5 px-[18px] pb-[14.4px] gap-[18.6px] max-w-[calc(100%_-_695px)] border-[1px] border-solid border-gainsboro">
							<div className="h-[56.4px] w-[782px] relative rounded-8xs bg-ghostwhite box-border hidden max-w-full border-[1px] border-solid border-gainsboro" />
							<img className="h-[26px] w-[25px] relative z-[2]" alt="" src="/create-field-button.svg" />
							<input
								className="w-[60.9px] [border:none] [outline:none] bg-[transparent] h-[20.5px] flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0 box-border font-noto-sans font-semibold text-sm text-gray-300"
								placeholder="Search.."
								type="text"
							/>
						</div>
						<div className="h-[57px] w-[188.7px] rounded-8xs bg-ghostwhite box-border flex flex-row items-start justify-between pt-[18.4px] pb-[17.6px] pr-[17px] pl-[17.4px] gap-[20px] border-[1px] border-solid border-gainsboro">
							<div className="h-[57px] w-[188.7px] relative rounded-8xs bg-ghostwhite box-border hidden border-[1px] border-solid border-gainsboro" />
							<div className="relative text-sm font-semibold font-noto-sans text-silver text-left inline-block min-w-[33px] shrink-0 z-[1]">
								Type
							</div>
							<div className="flex flex-col items-start justify-start pt-[4.6px] px-0 pb-0">
								<img className="w-4 h-2.5 relative z-[1]" alt="" src="/vector-1.svg" />
							</div>
						</div>
						<div className="h-[57px] w-[188.7px] rounded-8xs bg-ghostwhite box-border flex flex-row items-start justify-between pt-[18.4px] pb-[17.6px] pr-[17px] pl-[17.4px] gap-[20px] border-[1px] border-solid border-gainsboro">
							<div className="h-[57px] w-[188.7px] relative rounded-8xs bg-ghostwhite box-border hidden border-[1px] border-solid border-gainsboro" />
							<div className="relative text-sm font-semibold font-noto-sans text-silver text-left inline-block min-w-[33px] shrink-0 z-[1]">
								Type
							</div>
							<div className="flex flex-col items-start justify-start pt-[4.6px] px-0 pb-0">
								<img className="w-4 h-2.5 relative z-[1]" alt="" src="/vector-1.svg" />
							</div>
						</div>
						<button className="cursor-pointer p-0 bg-ghostwhite h-[55px] w-[55px] relative rounded-8xs box-border border-[1px] border-solid border-whitesmoke">
							<div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-ghostwhite box-border hidden border-[1px] border-solid border-whitesmoke" />
							<img className="absolute top-[4px] left-[4px] w-12 h-12 overflow-hidden z-[1]" alt="" src="/bxsgrid.svg" />
						</button>
						<div className="h-[55px] w-[55px] relative rounded-8xs bg-ghostwhite box-border border-[1px] border-solid border-whitesmoke">
							<div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-ghostwhite box-border hidden border-[1px] border-solid border-whitesmoke" />
							<img
								className="absolute h-[58.18%] w-[58.18%] top-[21.82%] right-[20%] bottom-[20%] left-[21.82%] max-w-full overflow-hidden max-h-full z-[1]"
								loading="lazy"
								alt=""
								src="/vector-3.svg"
							/>
						</div>
						<div className="h-[53px] w-[162.4px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
							<Sheet>
								<SheetTrigger asChild>
									<button className="cursor-pointer pt-[16.1px] px-3.5 pb-[16.9px] bg-mediumaquamarine self-stretch h-[53px] rounded-8xs box-border flex flex-row items-start justify-start gap-[15.5px] border-[1px] border-solid border-mediumaquamarine">
										<img className="h-[51px] w-[162.4px] relative rounded-8xs hidden" alt="" src="/rectangle-6.svg" />
										<img className="h-[15.8px] w-[14.8px] relative z-[1]" alt="" src="/vector-4.svg" />
										<b className="w-[93.9px] relative text-sm inline-block font-merriweather-sans text-white text-left shrink-0 z-[1]">
											Create Field
										</b>
									</button>
								</SheetTrigger>
								<SheetContent className="px-0">
									<CreateFieldModal />
								</SheetContent>
							</Sheet>
						</div>
					</form>
				</div>
				<div className="self-stretch rounded-3xs bg-gray-200 box-border flex flex-col items-center justify-start pt-[240px] pb-[245px] pr-5 pl-[21px] gap-[16px] max-w-full text-center text-base text-darkslateblue font-noto-sans border-[1px] border-dashed border-seagreen mq450:pt-[120px] mq450:pb-[118px] mq450:box-border mq825:pt-[184px] mq825:pb-[181px] mq825:box-border">
					<div className="w-[1471px] h-[772px] relative rounded-3xs bg-gray-200 box-border hidden max-w-full border-[1px] border-dashed border-seagreen" />
					<div className="w-[352.4px] flex flex-row items-start justify-center max-w-full">
						<img className="h-12 w-12 relative rounded-9xl z-[1]" loading="lazy" alt="" src="/featured-icon.svg" />
					</div>
					<div className="w-[352.4px] flex flex-col items-start justify-start gap-[24px] max-w-full">
						<div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
							<div className="self-stretch relative leading-[24px] font-semibold z-[1]">Nothing found</div>
							<div className="self-stretch relative text-sm leading-[20px] text-darkgray-200 z-[1]">
								Your search did not match any existing record. Please try again or create add a new vendor.
							</div>
						</div>
						<div className="flex flex-row items-start justify-start gap-[12px] text-left text-sm text-darkgray-100 font-merriweather-sans mq450:flex-wrap">
							<div className="rounded-8xs bg-white flex flex-row items-start justify-start pt-3.5 pb-[15px] pr-[35.6px] pl-[43.4px] whitespace-nowrap z-[1] border-[1px] border-solid border-lightgray">
								<div className="h-[51px] w-[178px] relative rounded-8xs bg-white box-border hidden border-[1px] border-solid border-lightgray" />
								<div className="relative inline-block min-w-[99px] whitespace-nowrap z-[1]">Clear Selection</div>
							</div>
							<button className="cursor-pointer [border:none] pt-[16.1px] px-3.5 pb-[16.9px] bg-[transparent] w-[162.4px] flex flex-row items-start justify-start box-border relative gap-[15.5px] z-[1]">
								<img
									className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full"
									alt=""
									src="/rectangle-6.svg"
								/>
								<img className="h-[15.8px] w-[14.8px] relative z-[1]" alt="" src="/vector-4.svg" />
								<b className="w-[93.9px] relative text-sm inline-block font-merriweather-sans text-white text-left shrink-0 z-[1]">
									Create Field
								</b>
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default FieldList;
