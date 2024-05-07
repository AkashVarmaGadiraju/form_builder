import { Button } from "@nextui-org/react";
import { FunctionComponent, useEffect, useState } from "react";
import { ReactComponent as FieldIcon } from "../../assets/field-menu-button.svg";
import { ReactComponent as GroupIcon } from "../../assets/model-menu-button.svg";
import { ReactComponent as TemplateIcon } from "../../assets/template-menu-button.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settings-menu-button.svg";

import { redirect, useLocation, useNavigate } from "react-router-dom";

const SideNavBar: FunctionComponent = () => {
	const [currentRoute, setCurrentRoute] = useState("fields");
	const location = useLocation();
	const navigate = useNavigate();
	const { hash, pathname, search } = location;
	useEffect(() => {
		console.log(pathname);
		switch (currentRoute) {
			case "fields":
				navigate("/");
				break;
			case "groups":
				navigate("/groups");
				break;
			case "models":
				navigate("/models");
				break;
			case "forms":
				navigate("/forms");
				break;
			default:
				navigate("/");
		}
	}, [currentRoute]);

	return (
		<div className="absolute w-[81px] bg-lavender box-border overflow-hidden shrink-0 flex flex-col items-center justify-between pt-[25px] px-0 pb-[33px] text-left text-4xs text-steelblue font-monoton border-[1px] border-solid border-cornflowerblue mq825:pb-5 mq825:box-border mq1250:pt-5 mq1250:pb-[21px] mq1250:box-border h-full">
			<div className="flex flex-col items-center justify-start gap-[1.6px] flex-shrink-0">
				<img className="w-[48px] h-[50.4px] relative object-cover z-[1]" loading="lazy" alt="" src="/forrmlogo-1@2x.png" />
				<div className="flex flex-row items-start justify-center py-0 pr-0.5 pl-[3px]">
					<div className="relative inline-block min-w-[33px] z-[1] text-center">NOVA</div>
				</div>
			</div>
			<div className="flex flex-col justify-end items-end gap-[18px] flex-grow">
				<Button
					className="bg-transparent hover:brightness-105"
					variant="solid"
					onClick={() => {
						setCurrentRoute("fields");
					}}
				>
					<FieldIcon className="w-[30.9px] h-6 relative" fill="#000" />
				</Button>
				<Button
					className="bg-transparent hover:brightness-50"
					variant="solid"
					onClick={() => {
						setCurrentRoute("groups");
					}}
				>
					<div className="flex flex-row items-start justify-end">
						<GroupIcon className="h-7 w-[27px] relative" />
					</div>
				</Button>
				<Button
					className="bg-transparent hover:brightness-50"
					variant="solid"
					onClick={() => {
						setCurrentRoute("models");
					}}
				>
					<div className="flex flex-row items-start justify-end">
						<TemplateIcon className="h-[26px] w-[21px] relative" />
					</div>
				</Button>
				<Button
					className="bg-transparent hover:brightness-50"
					variant="solid"
					onClick={() => {
						setCurrentRoute("forms");
					}}
				>
					<div className="flex flex-row items-start justify-end">
						<SettingsIcon className="h-6 w-[23px] relative" />
					</div>
				</Button>
			</div>
		</div>
	);
};

export default SideNavBar;
