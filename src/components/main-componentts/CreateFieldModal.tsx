import { FunctionComponent } from "react";
import { Input } from "../util-components/ui/input";
import { Textarea } from "../util-components/ui/textarea";
import { Select, SelectItem } from "@nextui-org/select";

const CreateFieldModal: FunctionComponent = () => {
	return (
		<form className="m-0 w-full shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-white max-w-full overflow-hidden flex flex-col items-start justify-start py-[50px] px-10 box-border gap-[57.1px] leading-[normal] tracking-[normal] overflow-y-scroll">
			<section className="self-stretch flex flex-col items-start justify-start gap-[14px]">
				<img className="w-12 h-12 relative rounded-9xl" loading="lazy" alt="" src="/featured-icon1.svg" />
				<div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
					<div className="self-stretch relative text-sm leading-[20px] font-semibold font-noto-sans text-darkslateblue text-left">
						Create a New Field
					</div>
					<div className="self-stretch relative text-sm leading-[20px] font-noto-sans text-darkgray-600 text-left">
						Enter Details about your new Field
					</div>
				</div>
			</section>
			<section className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
				<div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[8px] max-w-full">
					<div className="self-stretch h-[62.8px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
						<div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
							<div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
								<div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[40px]">
									Name
								</div>
								<div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-start py-2 px-[13px] gap-[8px] max-w-full border-[1px] border-solid border-gray-300">
									<Input
										type="text"
										placeholder="Field 1"
										className="!outline-none focus:ring-0 w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-merriweather-sans text-sm text-darkslateblue min-w-[208px] max-w-full"
									/>
									<img className="h-4 w-4 relative" alt="" src="/help-icon.svg" />
								</div>
							</div>
						</div>
					</div>
					<div className="self-stretch h-[150px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
						<div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
							<div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
								<div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[76px]">
									Description
								</div>
								<Textarea
									className="bg-white h-[132px] w-auto [outline:none] self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-3.5 border-[1px] border-solid border-gray-300"
									rows={7}
									cols={19}
								/>
							</div>
							<div className="w-80 relative text-sm leading-[20px] font-text-md-semibold text-gray-600 text-left hidden">
								This is a hint text to help user.
							</div>
						</div>
					</div>
					<div className="self-stretch flex flex-col">
						<div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[76px]">
							Type
						</div>
						<Select label="Select an animal" className="max-w-xs" variant="bordered">
							<SelectItem key="text" value="text">
								Text
							</SelectItem>
							<SelectItem key="textarea" value="textarea">
								Textarea
							</SelectItem>
							<SelectItem key="checkbox" value="checkbox">
								Checkbox
							</SelectItem>
							<SelectItem key="radio" value="radio">
								Radio Button
							</SelectItem>
							<SelectItem key="select" value="select">
								Dropdown Select
							</SelectItem>
							<SelectItem key="date" value="date">
								Date Picker
							</SelectItem>
							<SelectItem key="time" value="time">
								Time Picker
							</SelectItem>
							<SelectItem key="email" value="email">
								Email
							</SelectItem>
							<SelectItem key="password" value="password">
								Password
							</SelectItem>
							<SelectItem key="file" value="file">
								File Upload
							</SelectItem>
							<SelectItem key="number" value="number">
								Number
							</SelectItem>
							<SelectItem key="tel" value="tel">
								Telephone
							</SelectItem>
							<SelectItem key="url" value="url">
								URL
							</SelectItem>
						</Select>
					</div>
					<div className="self-stretch h-[62.8px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
						<div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
							<div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
								<div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[40px]">
									Validation Regex
								</div>
								<div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-start py-2 px-[13px] gap-[8px] max-w-full border-[1px] border-solid border-gray-300">
									<Input
										type="text"
										placeholder="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
										className="!outline-none focus:ring-0 w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-merriweather-sans text-sm text-darkslateblue min-w-[208px] max-w-full"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="self-stretch h-[62.8px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
						<div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
							<div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
								<div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[40px]">
									Mask Input
								</div>
								<div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-start py-2 px-[13px] gap-[8px] max-w-full border-[1px] border-solid border-gray-300">
									<Input
										type="text"
										placeholder="*@*.com"
										className="!outline-none focus:ring-0 w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-merriweather-sans text-sm text-darkslateblue min-w-[208px] max-w-full"
									/>
									<img className="h-4 w-4 relative" alt="" src="/help-icon.svg" />
								</div>
							</div>
						</div>
					</div>
					<div className="self-stretch flex flex-row flex-wrap items-start justify-start relative gap-[13px]">
						<div className="w-[143px] my-5 flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border gap-[6px]">
							<div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[76px]">
								Required
							</div>
							<Select label="True" className="max-w-xs h-3" variant="bordered">
								<SelectItem key="text" value="text">
									Text
								</SelectItem>
								<SelectItem key="textarea" value="textarea">
									Textarea
								</SelectItem>
								<SelectItem key="checkbox" value="checkbox">
									Checkbox
								</SelectItem>
								<SelectItem key="radio" value="radio">
									Radio Button
								</SelectItem>
								<SelectItem key="select" value="select">
									Dropdown Select
								</SelectItem>
								<SelectItem key="date" value="date">
									Date Picker
								</SelectItem>
								<SelectItem key="time" value="time">
									Time Picker
								</SelectItem>
								<SelectItem key="email" value="email">
									Email
								</SelectItem>
								<SelectItem key="password" value="password">
									Password
								</SelectItem>
								<SelectItem key="file" value="file">
									File Upload
								</SelectItem>
								<SelectItem key="number" value="number">
									Number
								</SelectItem>
								<SelectItem key="tel" value="tel">
									Telephone
								</SelectItem>
								<SelectItem key="url" value="url">
									URL
								</SelectItem>
							</Select>
						</div>
						<div className="w-[143px] my-5 flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border gap-[6px]">
							<div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[76px]">
								Unique
							</div>
							<Select label="True" className="max-w-xs h-3" variant="bordered">
								<SelectItem key="text" value="text">
									Text
								</SelectItem>
								<SelectItem key="textarea" value="textarea">
									Textarea
								</SelectItem>
								<SelectItem key="checkbox" value="checkbox">
									Checkbox
								</SelectItem>
								<SelectItem key="radio" value="radio">
									Radio Button
								</SelectItem>
								<SelectItem key="select" value="select">
									Dropdown Select
								</SelectItem>
								<SelectItem key="date" value="date">
									Date Picker
								</SelectItem>
								<SelectItem key="time" value="time">
									Time Picker
								</SelectItem>
								<SelectItem key="email" value="email">
									Email
								</SelectItem>
								<SelectItem key="password" value="password">
									Password
								</SelectItem>
								<SelectItem key="file" value="file">
									File Upload
								</SelectItem>
								<SelectItem key="number" value="number">
									Number
								</SelectItem>
								<SelectItem key="tel" value="tel">
									Telephone
								</SelectItem>
								<SelectItem key="url" value="url">
									URL
								</SelectItem>
							</Select>
						</div>
						<div className="w-[143px] my-5 flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border gap-[6px]">
							<div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[76px]">
								Trim
							</div>
							<Select label="True" className="max-w-xs h-3" variant="bordered">
								<SelectItem key="text" value="text">
									Text
								</SelectItem>
								<SelectItem key="textarea" value="textarea">
									Textarea
								</SelectItem>
								<SelectItem key="checkbox" value="checkbox">
									Checkbox
								</SelectItem>
								<SelectItem key="radio" value="radio">
									Radio Button
								</SelectItem>
								<SelectItem key="select" value="select">
									Dropdown Select
								</SelectItem>
								<SelectItem key="date" value="date">
									Date Picker
								</SelectItem>
								<SelectItem key="time" value="time">
									Time Picker
								</SelectItem>
								<SelectItem key="email" value="email">
									Email
								</SelectItem>
								<SelectItem key="password" value="password">
									Password
								</SelectItem>
								<SelectItem key="file" value="file">
									File Upload
								</SelectItem>
								<SelectItem key="number" value="number">
									Number
								</SelectItem>
								<SelectItem key="tel" value="tel">
									Telephone
								</SelectItem>
								<SelectItem key="url" value="url">
									URL
								</SelectItem>
							</Select>
						</div>
						<div className="w-[143px] my-5 flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border gap-[6px]">
							<div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[76px]">
								Normalize
							</div>
							<Select label="True" className="max-w-xs h-3" variant="bordered">
								<SelectItem key="text" value="text">
									Text
								</SelectItem>
								<SelectItem key="textarea" value="textarea">
									Textarea
								</SelectItem>
								<SelectItem key="checkbox" value="checkbox">
									Checkbox
								</SelectItem>
								<SelectItem key="radio" value="radio">
									Radio Button
								</SelectItem>
								<SelectItem key="select" value="select">
									Dropdown Select
								</SelectItem>
								<SelectItem key="date" value="date">
									Date Picker
								</SelectItem>
								<SelectItem key="time" value="time">
									Time Picker
								</SelectItem>
								<SelectItem key="email" value="email">
									Email
								</SelectItem>
								<SelectItem key="password" value="password">
									Password
								</SelectItem>
								<SelectItem key="file" value="file">
									File Upload
								</SelectItem>
								<SelectItem key="number" value="number">
									Number
								</SelectItem>
								<SelectItem key="tel" value="tel">
									Telephone
								</SelectItem>
								<SelectItem key="url" value="url">
									URL
								</SelectItem>
							</Select>
						</div>
						<div className="w-[143px] my-5 flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border gap-[6px]">
							<div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[76px]">
								Lowercase
							</div>
							<Select label="True" className="max-w-xs h-3" variant="bordered">
								<SelectItem key="text" value="text">
									Text
								</SelectItem>
								<SelectItem key="textarea" value="textarea">
									Textarea
								</SelectItem>
								<SelectItem key="checkbox" value="checkbox">
									Checkbox
								</SelectItem>
								<SelectItem key="radio" value="radio">
									Radio Button
								</SelectItem>
								<SelectItem key="select" value="select">
									Dropdown Select
								</SelectItem>
								<SelectItem key="date" value="date">
									Date Picker
								</SelectItem>
								<SelectItem key="time" value="time">
									Time Picker
								</SelectItem>
								<SelectItem key="email" value="email">
									Email
								</SelectItem>
								<SelectItem key="password" value="password">
									Password
								</SelectItem>
								<SelectItem key="file" value="file">
									File Upload
								</SelectItem>
								<SelectItem key="number" value="number">
									Number
								</SelectItem>
								<SelectItem key="tel" value="tel">
									Telephone
								</SelectItem>
								<SelectItem key="url" value="url">
									URL
								</SelectItem>
							</Select>
						</div>
						<div className="w-[143px] my-5 flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border gap-[6px]">
							<div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[76px]">
								Uppercase
							</div>
							<Select label="True" className="max-w-xs h-3" variant="bordered">
								<SelectItem key="text" value="text">
									Text
								</SelectItem>
								<SelectItem key="textarea" value="textarea">
									Textarea
								</SelectItem>
								<SelectItem key="checkbox" value="checkbox">
									Checkbox
								</SelectItem>
								<SelectItem key="radio" value="radio">
									Radio Button
								</SelectItem>
								<SelectItem key="select" value="select">
									Dropdown Select
								</SelectItem>
								<SelectItem key="date" value="date">
									Date Picker
								</SelectItem>
								<SelectItem key="time" value="time">
									Time Picker
								</SelectItem>
								<SelectItem key="email" value="email">
									Email
								</SelectItem>
								<SelectItem key="password" value="password">
									Password
								</SelectItem>
								<SelectItem key="file" value="file">
									File Upload
								</SelectItem>
								<SelectItem key="number" value="number">
									Number
								</SelectItem>
								<SelectItem key="tel" value="tel">
									Telephone
								</SelectItem>
								<SelectItem key="url" value="url">
									URL
								</SelectItem>
							</Select>
						</div>
					</div>
				</div>
			</section>
			<section className="self-stretch flex flex-col items-start justify-end gap-[12px] max-w-full">
				<button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-start max-w-full">
					<div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-center py-2 px-5 max-w-full border-[1px] border-solid border-gray-300">
						<div className="relative text-base leading-[24px] font-semibold font-text-md-semibold text-gray-700 text-left inline-block min-w-[54px]">
							Cancel
						</div>
					</div>
				</button>
				<button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-start max-w-full">
					<div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-mediumaquamarine box-border overflow-hidden flex flex-row items-center justify-center py-2 px-5 max-w-full border-[1px] border-solid border-brand-600">
						<div className="relative text-base leading-[24px] font-semibold font-text-md-semibold text-white text-left inline-block min-w-[53px]">
							Create
						</div>
					</div>
				</button>
			</section>
		</form>
	);
};

export default CreateFieldModal;
