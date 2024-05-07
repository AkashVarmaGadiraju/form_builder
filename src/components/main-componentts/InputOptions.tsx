import { Input } from "../util-components/ui/input";
import { Checkbox } from "../util-components/ui/checkbox";

const InputOptions: React.FC<{ handleChanges: (e: any, key: string, isCategory?: boolean) => void; values: Record<string, any> }> = ({
	handleChanges,
	values,
}) => {
	return (
		<>
			{values.type === "string" && (
				<div className="self-stretch flex flex-row flex-wrap items-start justify-between relative pb-10 gap-[12px]">
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-bold leading-5">Length</div>
						<Input
							type="number"
							placeholder="20"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "length");
							}}
						/>
					</div>
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">Default String</div>
						<Input
							type="text"
							placeholder="Default String"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "defaultValue");
							}}
						/>
					</div>
					<div className="w-[45%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="required-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "required", true);
								}}
							/>
							<label htmlFor="required-check" className="text-darkslateblue font-noto-sans text-sm">
								Is Required?
							</label>
						</div>
					</div>
					<div className="w-[45%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="unique-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "unique", true);
								}}
							/>
							<label htmlFor="unique-check" className="text-darkslateblue font-noto-sans text-sm">
								Is Unique?
							</label>
						</div>
					</div>
				</div>
			)}
			{values.type === "integer" && (
				<div className="self-stretch flex flex-row flex-wrap items-start justify-between relative pb-10 gap-[12px]">
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">Default Value</div>
						<Input
							type="number"
							placeholder="Default Value"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "validationRegex");
							}}
						/>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="required-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "required", true);
								}}
							/>
							<label htmlFor="required-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Required?
							</label>
						</div>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="unique-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "unique", true);
								}}
							/>
							<label htmlFor="unique-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Unique?
							</label>
						</div>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="unique-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "autoIncrement", true);
								}}
							/>
							<label htmlFor="unique-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Auto-Increment
							</label>
						</div>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="unique-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "unsigned", true);
								}}
							/>
							<label htmlFor="unique-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Unsigned?
							</label>
						</div>
					</div>
				</div>
			)}
			{values.type === "float" && (
				<div className="self-stretch flex flex-row flex-wrap items-start justify-between relative pb-10 gap-[12px]">
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">Default Value</div>
						<Input
							type="number"
							placeholder="Default Value"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "default");
							}}
						/>
					</div>
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">Precision</div>
						<Input
							type="number"
							placeholder="Default Value"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "precision");
							}}
						/>
					</div>
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">Scale</div>
						<Input
							type="number"
							placeholder="Default Value"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "scale");
							}}
						/>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="required-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "required", true);
								}}
							/>
							<label htmlFor="required-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Required?
							</label>
						</div>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="unique-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "unique", true);
								}}
							/>
							<label htmlFor="unique-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Unique?
							</label>
						</div>
					</div>
				</div>
			)}
			{values.type === "boolean" && (
				<div className="self-stretch flex flex-row flex-wrap items-start justify-between relative pb-10 gap-[12px]">
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">Default Value</div>
						<Input
							type="number"
							placeholder="Default Value"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "validationRegex");
							}}
						/>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="required-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "required", true);
								}}
							/>
							<label htmlFor="required-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Required?
							</label>
						</div>
					</div>
				</div>
			)}
			{values.type === "file" && (
				<div className="self-stretch flex flex-row flex-wrap items-start justify-between relative pb-10 gap-[12px]">
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">Max Size</div>
						<Input
							type="number"
							placeholder="20"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "maxSize");
							}}
						/>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="required-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "required", true);
								}}
							/>
							<label htmlFor="required-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Required?
							</label>
						</div>
					</div>
				</div>
			)}
			{values.type === "enum" && (
				<div className="self-stretch flex flex-row flex-wrap items-start justify-between relative pb-10 gap-[12px]">
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-bold leading-5">Length</div>
						<Input
							type="number"
							placeholder="20"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "validationRegex");
							}}
						/>
					</div>
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">Default Value</div>
						<Input
							type="number"
							placeholder="Default Value"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "validationRegex");
							}}
						/>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="required-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "required", true);
								}}
							/>
							<label htmlFor="required-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Required?
							</label>
						</div>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="unique-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "unique", true);
								}}
							/>
							<label htmlFor="unique-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Unique?
							</label>
						</div>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="unique-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "autoIncrement", true);
								}}
							/>
							<label htmlFor="unique-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Auto-Increment
							</label>
						</div>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="unique-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "unsigned", true);
								}}
							/>
							<label htmlFor="unique-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Unsigned?
							</label>
						</div>
					</div>
				</div>
			)}
			{values.type === "binary" && (
				<div className="self-stretch flex flex-row flex-wrap items-start justify-between relative pb-10 gap-[12px]">
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-bold leading-5">Length</div>
						<Input
							type="number"
							placeholder="20"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "length");
							}}
						/>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="required-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "required", true);
								}}
							/>
							<label htmlFor="required-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Required?
							</label>
						</div>
					</div>
				</div>
			)}
			{values.type === "array" && (
				<div className="self-stretch flex flex-row flex-wrap items-start justify-between relative pb-10 gap-[12px]">
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-bold leading-5">Length</div>
						<Input
							type="number"
							placeholder="20"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "length");
							}}
						/>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="required-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "required", true);
								}}
							/>
							<label htmlFor="required-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Required?
							</label>
						</div>
					</div>
				</div>
			)}
			{values.type === "dateTime" && (
				<div className="self-stretch flex flex-row flex-wrap items-start justify-between relative pb-10 gap-[12px]">
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">Default Value</div>
						<Input
							type="date"
							placeholder="Default Value"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "default");
							}}
						/>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="required-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "required", true);
								}}
							/>
							<label htmlFor="required-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Required?
							</label>
						</div>
					</div>
				</div>
			)}
			{values.type === "json" && (
				<div className="self-stretch flex flex-row flex-wrap items-start justify-between relative pb-10 gap-[12px]">
					<div className="w-full flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px]">
						<div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">Default Value</div>
						<Input
							type="number"
							placeholder="Default Value"
							className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:focus:ring-offset-gray-800"
							onChange={(e) => {
								handleChanges(e, "default");
							}}
						/>
					</div>
					<div className="w-[46%] flex flex-col items-start justify-start py-0 pl-0 box-border gap-[8px] mt-3">
						<div className="flex items-center space-x-2">
							<Checkbox
								id="required-check"
								className="border-gray-300"
								onCheckedChange={(e) => {
									handleChanges(e, "required", true);
								}}
							/>
							<label htmlFor="required-check" className="text-darkslateblue font-noto-sans text-[13px]">
								Is Required?
							</label>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default InputOptions;
