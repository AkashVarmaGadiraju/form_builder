import React from "react";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "../../components/util-components/ui/sheet";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	sheetContent: any;
	sheetContentClasses?: string;
}

const CreateButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, type, sheetContent, sheetContentClasses, title, ...props }, ref) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button className="cursor-pointer pt-[16.1px] px-3.5 pb-[16.9px] bg-mediumaquamarine self-stretch h-full rounded-8xs box-border flex flex-row items-center justify-start gap-[15.5px] border-[1px] border-solid border-mediumaquamarine">
					<img className="h-[15.8px] w-[14.8px] relative z-[1]" alt="" src="/vector-4.svg" />
					<b className="w-[93.9px] relative text-sm inline-block font-merriweather-sans text-white text-left shrink-0 z-[1]">{title}</b>
				</button>
			</SheetTrigger>

			<SheetContent className={"p-0 " + (sheetContentClasses || "")}>{sheetContent}</SheetContent>
		</Sheet>
	);
});
CreateButton.displayName = "CreateButton";

export { CreateButton };
