import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { Input } from "../../components/util-components/ui/input";
import { Textarea } from "../../components/util-components/ui/textarea";
import { Select, SelectItem } from "@nextui-org/select";
import { SheetClose } from "../../components/util-components/ui/sheet";
import { ReactComponent as CarbonIcon } from "../../assets/carbon_area-custom.svg";
import { ReactComponent as DownIndicatorIcon } from "../../assets/teenyicons_down-solid.svg";
import { ReactComponent as JSONIcon } from "../../assets/Group 4124.svg";
import { ReactComponent as CheckFileIcon } from "../../assets/Group 4125.svg";
import { ReactComponent as CancelFileIcon } from "../../assets/Group 4126.svg";
import { ArrowLeft, Check, ChevronDown, Slash } from "lucide-react";
import { BreadcrumbItem, Button, Checkbox } from "@nextui-org/react";
import backgroundImage from "../../assets/Dot Grid.svg";
import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/util-components/ui/breadcrumbs";
import { swapElements } from "../../utils/util";
import { ReactComponent as PlantImage } from "../../assets/Image.svg";
import { ReactComponent as BlueKeyIcon } from "../../assets/Vector-1.svg";
import { ReactComponent as RedKeyIcon } from "../../assets/Vector-2.svg";
import { ReactComponent as GreenKeyIcon } from "../../assets/Vector.svg";
import { ReactComponent as FormSubmitRightArrowIcon } from "../../assets/formkit_submit.svg";
import { ReactComponent as BrownCancelIcon } from "../../assets/grommet-icons_clear.svg";
import { ReactComponent as WhiteCancelIcon } from "../../assets/grommet-icons_clear-white.svg";
import { Stage, Layer, Rect } from "react-konva";
import { Html } from "react-konva-utils";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ModelRelations: FunctionComponent = () => {
	const divRef: {
		current: any;
	} = useRef(null);
	const [selectedFields, setSelectedFields]: [any, any] = useState([]);
	const [availableFields, setAvailableFields]: [any, any] = useState([
		{
			name: "Check Box",
			id: 1,
		},
		{
			name: "Currency",
			id: 2,
		},
		{
			name: "Currency 2",
			id: 3,
		},
		{
			name: "Currency 3",
			id: 4,
		},
		{
			name: "Input",
			id: 5,
		},
		{
			name: "Input 2",
			id: 6,
		},
		{
			name: "Input 3",
			id: 7,
		},
		{
			name: "Input 4",
			id: 8,
		},
		{
			name: "Input 5",
			id: 9,
		},
		{
			name: "Input 6",
			id: 10,
		},
	]);
	const stage: any = useRef(undefined);
	function allowDrop(ev: any) {
		ev.preventDefault();
	}

	const mouseLocation = useRef({ x: 0, y: 0 });

	const logMousePosition = (e: any) => {
		// these are the cordinates of your current pointer position
		mouseLocation.current.x = e.clientX;
		mouseLocation.current.y = e.clientY;
	};
	useEffect(() => {
		window.addEventListener("mousemove", logMousePosition);
		return () => {
			window.removeEventListener("mousemove", logMousePosition);
		};
	}, []);

	function dragStart(e: any, id: any, event?: string) {
		e.dataTransfer.setData("id", id);
		e.dataTransfer.setData("event", event || "add");
		e.dropEffect = "move";
	}

	function removeSelected(ev: any) {
		const id = Number(ev.dataTransfer.getData("id"));
		const droppedField = selectedFields.find((e: any) => e.id === id);
		if (droppedField) {
			setAvailableFields([...availableFields, { ...droppedField }]);
			setSelectedFields(selectedFields.filter((e: any) => e.id !== id));
		}
	}

	function dropOnChild(ev: any, pos: number) {
		ev.preventDefault();
		const id = Number(ev.dataTransfer.getData("id"));
		const event = ev.dataTransfer.getData("event");
		if (event === "add") {
			const droppedField = availableFields.find((e: any) => e.id === id);
			if (droppedField) {
				setSelectedFields([...selectedFields, { ...droppedField, pos: pos }]);
				setAvailableFields(availableFields.filter((e: any) => e.id !== id));
			}
		} else if (event === "move") {
			const droppedField = selectedFields.find((e: any) => e.id === id);
			let index = selectedFields.indexOf(droppedField);
			let modSelectedFields = [...selectedFields];
			modSelectedFields = modSelectedFields.map((e, i) => {
				e.pos = i;
				return e;
			});
			swapElements(modSelectedFields, index, pos);
			setSelectedFields(modSelectedFields);
		}
	}

	const move = (
		source: any[],
		destination: any[],
		droppableSource: Record<string, any>,
		droppableDestination: Record<string, any>,
		cord?: boolean
	) => {
		const sourceClone = Array.from(source);
		const destClone = Array.from(destination);
		const [removed] = sourceClone.splice(droppableSource.index, 1);

		if (cord) {
			const div = document.getElementById("dropbox");
			const divRect = div!.getBoundingClientRect();
			const x = Math.max(0, Math.min(mouseLocation.current.x - divRect.left, divRect.left + divRect.width));
			const y = Math.max(0, Math.min(mouseLocation.current.y - divRect.top, divRect.top + divRect.height));
			removed["cord"] = { x, y };
		}

		destClone.splice(droppableDestination.index, 0, removed);

		const result: Record<string, any> = {};
		result[droppableSource.droppableId] = sourceClone;
		result[droppableDestination.droppableId] = destClone;

		return result;
	};

	const onDragEnd = (result: any) => {
		const { source, destination } = result;
		if (!destination) return;

		if (source.droppableId === destination.droppableId) {
			const items = Array.from(availableFields);
			const [reorderedItem] = items.splice(source.index, 1);
			items.splice(destination.index, 0, reorderedItem);

			setAvailableFields(items);
		} else if (source.droppableId === "availableFields") {
			let result = move(availableFields, selectedFields, source, destination, true);

			setAvailableFields(result.availableFields);
			setSelectedFields(result.selectedFields);
		} else if (source.droppableId === "selectedFields") {
			let result = move(selectedFields, availableFields, source, destination, true);

			setAvailableFields(result.availableFields);
			setSelectedFields(result.selectedFields);
		}
	};
	return (
		<div className="bg-pattern bg-repeat h-full w-full px-10 bg-[#FCFCFF]" style={{ backgroundImage: `url(${backgroundImage})` }}>
			<p className="flex flex-row h-39 items-center flex-shrink-0 text-gray-400 font-roboto text-26 font-bold mb-3 py-3">
				<ArrowLeft /> Back
			</p>
			<div className="flex flex-row mt-10 w-full h-[86%] gap-3">
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="availableFields">
						{(provided) => {
							return (
								<div
									ref={provided.innerRef}
									{...provided.droppableProps}
									className="inline-flex w-[400px] h-[86vh] py-[25px] px-[30px] pb-[65px] flex-col items-start gap-13 flex-shrink-0 rounded-lg border border-solid border-[#C0E6DD] bg-[#F7FAFF]"
								>
									<div>
										<Breadcrumb>
											<BreadcrumbList>
												<BreadcrumbItem>
													<BreadcrumbLink href="/">Home</BreadcrumbLink>
												</BreadcrumbItem>
												<BreadcrumbSeparator>
													<Slash />
												</BreadcrumbSeparator>
												<BreadcrumbItem>
													<BreadcrumbLink href="/components">Components</BreadcrumbLink>
												</BreadcrumbItem>
												<BreadcrumbSeparator>
													<Slash />
												</BreadcrumbSeparator>
												<BreadcrumbItem>
													<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
												</BreadcrumbItem>
											</BreadcrumbList>
										</Breadcrumb>
									</div>
									<div className="py-[25px] px-[30px] pl-2 gap-[13px] flex flex-col">
										<div className="flex flex-row justify-between">
											<p className="text-blue-900 font-roboto text-[22px] font-semibold">Add Relations</p>
											<div className="flex w-[102px] h-[32px] gap-[5px]">
												<JSONIcon />
												<CheckFileIcon />
												<CancelFileIcon />
											</div>
										</div>
										<div className="text-gray-500 font-roboto text-xs font-normal leading-22">
											Drag and Drop a field type to get started. Various Design Elements and Button Elements can also be used to
											provide more context.
										</div>
									</div>
									<div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full my-2 gap-[13px]">
										<div className="text-green-800 font-sans text-base font-bold leading-5">Filter</div>
										<div className="flex flex-row justify-start gap-[13px] w-full">
											<Select label="Select" className="max-w-xs w-24" size="sm" variant="bordered">
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
											<Select label="Select" className="max-w-xs w-24" size="sm" variant="bordered">
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
									<div className="w-full h-[70%] overflow-y-scroll flex flex-col gap-[13px]">
										<div className="text-green-800 font-sans text-base font-bold leading-5">Existing Models</div>
										{availableFields.map((item: any, index: number) => {
											return (
												<Draggable key={item.id} draggableId={item.id.toString()} index={index}>
													{(provided: any) => (
														<div
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
															className="field w-full h-[46px] p-4 flex items-center gap-2.5 flex-shrink-0 rounded-lg border border-dashed border-[#B79848] bg-[#FFFBEB] text-green-800 font-bold font-sans text-sm justify-start"
														>
															<div className="flex flex-row gap-3 w-full">
																<CarbonIcon /> {item.name}
															</div>
														</div>
													)}
												</Draggable>
											);
										})}
									</div>
								</div>
							);
						}}
					</Droppable>
					<Droppable droppableId="selectedFields">
						{(provided: any) => (
							<div
								ref={provided.innerRef}
								{...provided.droppableProps}
								className="flex-grow h-full flex-shrink-0 rounded-lg gap-[20%] relative"
								id="dropbox"
							>
								<div className="flex flex-col w-[286px] h-[413px] p-[24px] items-center rounded-lg border border-solid border-gray-300 bg-white shadow-md gap-[11px]">
									<div>
										<PlantImage />
									</div>
									<div>
										<h2 className="text-green-800 font-roboto text-[18px] font-bold h-[29px]">Model Name</h2>
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
										<div className="text-gray-600 font-inter text-[14px] font-normal leading-20 self-stretch">
											We’re glad to have you onboard. Here are some quick tips to get you up and running.
										</div>
									</div>
									<div className="flex flex-row flex-wrap max-w-[262px] gap-3">
										<div className="flex-auto flex w-[45%] h-[26px] p-[15px] items-center gap-[10px] flex-shrink-0 rounded-md border border-dashed border-[#9A5945] bg-[#FFF3EB]">
											<FormSubmitRightArrowIcon />{" "}
											<p className="text-[#9A5945] font-merriweather-sans text-4xs font-bold">Collection 1</p>
										</div>
										<div className="flex-auto flex w-[45%] h-[26px] p-[15px] items-center gap-[10px] flex-shrink-0 rounded-md border border-dashed border-[#9A5945] bg-[#FFF3EB]">
											<BrownCancelIcon />{" "}
											<p className="text-[#9A5945] font-merriweather-sans text-4xs font-bold">Collection 2</p>
										</div>
										<div className="flex-auto flex w-[45%] max-w-[47.5%] h-[26px] p-[15px] items-center gap-[10px] flex-shrink-0 rounded-md border border-dashed border-[#92A1D7] bg-[#B9C5F0]">
											<WhiteCancelIcon />{" "}
											<p className="text-[#F4F4F4] font-merriweather-sans text-4xs font-bold">Collection 3</p>
										</div>
									</div>
								</div>
								{(selectedFields || []).map((e: any) => {
									return (
										<div
											className={`flex flex-col w-[20vh] h-[20vh] items-center rounded-lg border border-solid border-gray-300 bg-white shadow-md gap-[11px] p-[24px] absolute top-[${e.cord.y}px] left-[${e.cord.x}px]`}
										>
											<div>
												<h2 className="text-green-800 font-roboto text-[14px] font-bold">{e.name}</h2>
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
											<div className="flex flex-row flex-wrap max-w-[262px] gap-[6px]">
												<div className="flex-auto flex w-full h-[26px] p-[15px] items-center gap-[10px] flex-shrink-0 rounded-md border border-dashed border-[#9A5945] bg-[#FFF3EB]">
													<FormSubmitRightArrowIcon />
													<p className="text-[#9A5945] font-merriweather-sans text-[12px] font-bold">Collection 1</p>
												</div>
												<div className="flex-auto flex w-full h-[26px] p-[15px] items-center gap-[10px] flex-shrink-0 rounded-md border border-dashed border-[#9A5945] bg-[#FFF3EB]">
													<BrownCancelIcon />{" "}
													<p className="text-[#9A5945] font-merriweather-sans text-[12px] font-bold">Collection 2</p>
												</div>
												<div className="flex-auto flex w-full h-[26px] p-[15px] items-center gap-[10px] flex-shrink-0 rounded-md border border-dashed border-[#92A1D7] bg-[#B9C5F0]">
													<WhiteCancelIcon />{" "}
													<p className="text-[#F4F4F4] font-merriweather-sans text-[12px] font-bold">Collection 3</p>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		</div>
	);
};

export default ModelRelations;
