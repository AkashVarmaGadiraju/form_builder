import React, { FunctionComponent, useState } from "react";
import { Input } from "../../components/util-components/ui/input";
import { Textarea } from "../../components/util-components/ui/textarea";
import { Select, SelectItem } from "@nextui-org/select";
import { SheetClose } from "../../components/util-components/ui/sheet";
import { ReactComponent as CarbonIcon } from "../../assets/carbon_area-custom.svg";
import { ReactComponent as DownIndicatorIcon } from "../../assets/teenyicons_down-solid.svg";
import { ReactComponent as JSONIcon } from "../../assets/Group 4124.svg";
import { ReactComponent as CheckFileIcon } from "../../assets/Group 4125.svg";
import { ReactComponent as CancelFileIcon } from "../../assets/Group 4126.svg";
import { ReactComponent as HomeIcon } from "../../assets/majesticons_home.svg";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Home,
  LucideIcon,
  LucideProps,
  Slash,
} from "lucide-react";
import { BreadcrumbItem, Button, Checkbox } from "@nextui-org/react";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/util-components/ui/breadcrumbs";
import { swapElements } from "../../utils/util";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CustomBreadcrumb from "../../components/util-components/Breadcrumb";

const EditModel: FunctionComponent = () => {
  const [selectedFields, setSelectedFields]: [any, any] = useState([]);
  const [chosenField, setChosenField]: [any, any] = useState(null);
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
  function allowDrop(ev: any) {
    ev.preventDefault();
  }

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
    droppableDestination: Record<string, any>
  ) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

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
      let result = move(availableFields, selectedFields, source, destination);

      setAvailableFields(result.availableFields);
      setSelectedFields(result.selectedFields);
    } else if (source.droppableId === "selectedFields") {
      let result = move(selectedFields, availableFields, source, destination);

      setAvailableFields(result.availableFields);
      setSelectedFields(result.selectedFields);
    }
  };
  return (
    <div className="dot-pattern h-full px-10 font-merriweather-sans">
      <p className="flex flex-row h-39 items-center flex-shrink-0 text-gray-400 font-merriweather-sans gap-2 text-[23px] font-bold mb-3 py-3">
        <ArrowLeft /> <span className="">Back</span>
      </p>
      <div className="flex flex-row mt-10 w-full h-[86%] gap-3">
        <DragDropContext onDragEnd={onDragEnd}>
          {!chosenField ? (
            <Droppable droppableId="availableFields">
              {(provided) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="inline-flex w-[400px] h-full py-[25px] px-[30px] pb-[65px] flex-col items-start gap-13 flex-shrink-0 rounded-lg border border-solid border-[#C0E6DD] bg-[#F7FAFF]"
                  >
                    <div>
                      <CustomBreadcrumb
                        items={[
                          { icon: HomeIcon as LucideIcon, href: "/" },
                          { title: "Components", href: "/components" },
                          { title: "Breadcrumb", href: "/breadcrumb" },
                        ]}
                      />
                    </div>
                    <div className="py-[25px] px-[30px] pl-2 gap-[13px] flex flex-col">
                      <div className="flex flex-row justify-between">
                        <p className="text-blue-900 font-merriweather-sans text-[20px] font-semibold">
                          Insert Fields
                        </p>
                        <div className="flex w-[102px] h-[32px] gap-[5px]">
                          <JSONIcon />
                          <CheckFileIcon />
                          <CancelFileIcon />
                        </div>
                      </div>
                      <div className="text-gray-500 font-inherit text-[13px] font-normal leading-22">
                        Drag and Drop a field type to get started. Various
                        Design Elements and Button Elements can also be used to
                        provide more context.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full my-2 gap-[13px]">
                      <div className="text-green-800 font-sans text-base font-bold leading-5">
                        Filter
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Select
                          placeholder="Select"
                          className="max-w-xs w-24"
                          size="sm"
                          variant="bordered"
                        >
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
                        <Select
                          placeholder="Select"
                          className="max-w-xs w-24"
                          size="sm"
                          variant="bordered"
                        >
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
                        <Select
                          placeholder="Select"
                          className="max-w-xs w-24"
                          size="sm"
                          variant="bordered"
                        >
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
                    <div className="w-full h-[70%] overflow-y-scroll scrollbar-hide flex flex-col gap-[13px] z-50 py-5">
                      <div className="text-green-800 font-sans text-base font-bold leading-5">
                        Fields
                      </div>
                      {availableFields.map((e: any, index: number) => {
                        return (
                          <Draggable
                            key={e.id}
                            draggableId={e.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                draggable={true}
                                className="field w-full h-[46px] p-4 flex items-center gap-2.5 flex-shrink-0 rounded-lg border border-dashed border-[#B79848] bg-[#FFFBEB] text-green-800 font-bold font-sans text-sm justify-start"
                              >
                                <div className="flex flex-row gap-3 w-full">
                                  <CarbonIcon /> {e.name}
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
          ) : (
            <div className="inline-flex w-[400px] h-full py-[25px] px-[30px] pb-[65px] flex-col items-start gap-13 flex-shrink-0 rounded-lg border border-solid border-[#C0E6DD] bg-[#F7FAFF]">
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
                      <BreadcrumbLink href="/components">
                        Components
                      </BreadcrumbLink>
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
                  <p className="text-blue-900 font-roboto text-[22px] font-semibold">
                    Insert Fields
                  </p>
                  <div className="flex w-[102px] h-[32px] gap-[5px]">
                    <JSONIcon />
                    <CheckFileIcon />
                    <CancelFileIcon />
                  </div>
                </div>
                <div className="text-gray-500 font-roboto text-xs font-normal leading-22">
                  Drag and Drop a field type to get started. Various Design
                  Elements and Button Elements can also be used to provide more
                  context.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full my-2 gap-[13px]">
                <div className="self-stretch h-[62.8px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mb-3 w-[48%]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                      <div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[40px]">
                        Field Name
                      </div>
                      <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg box-border overflow-hidden flex flex-row items-center justify-start py-2 px-[13px] gap-[8px] max-w-full border-[1px] border-solid  bg-[#E9EEF6] border-[#C3D6F4] mb-2">
                        <Input
                          type="text"
                          placeholder="Field 1"
                          id="nameInput"
                          className="!outline-none focus:ring-0 w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-merriweather-sans text-sm text-darkslateblue min-w-[208px] max-w-full"
                        />
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/help-icon.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[62.8px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mb-3 w-[48%]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                      <div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[40px]">
                        Place Holder Text
                      </div>
                      <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg  box-border overflow-hidden flex flex-row items-center justify-start py-2 px-[13px] gap-[8px] max-w-full border-[1px] border-solid  bg-[#E9EEF6] border-[#C3D6F4] mb-2">
                        <Input
                          type="text"
                          placeholder="Field 1"
                          id="nameInput"
                          className="!outline-none focus:ring-0 w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-merriweather-sans text-sm text-darkslateblue min-w-[208px] max-w-full"
                        />
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/help-icon.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mb-3">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[40px]">
                      Instructions
                    </div>
                    <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-[#E9EEF6] box-border overflow-hidden flex flex-row items-center justify-start py-2 px-[13px] gap-[8px] max-w-full border-[1px] border-solid border-[#C3D6F4] mb-2">
                      <Input
                        type="text"
                        placeholder="Hello World"
                        value="Hello World"
                        id="nameInput"
                        className="!outline-none focus:ring-0 w-full [border:none] [outline:none] bg-[transparent] h-[215px] flex-1 flex flex-row items-center justify-start font-merriweather-sans text-sm text-darkslateblue min-w-[208px] max-w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[62.8px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mb-3">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[40px]">
                      Range
                    </div>
                    <div className="flex flex-row items-center justify-start py-2 gap-[8px]">
                      <Input
                        type="text"
                        placeholder="Min"
                        id="nameInput"
                        className="w-[30%] rounded-md border border-solid border-blue-200 bg-blue-50 shadow-xs"
                      />

                      <Input
                        type="text"
                        placeholder="Max"
                        id="nameInput"
                        className="w-[30%] rounded-md border border-solid border-blue-200 bg-blue-50 shadow-xs"
                      />

                      <Select
                        label="Select"
                        className="max-w-xs w-[30%]"
                        size="sm"
                        variant="bordered"
                      >
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
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full my-2 gap-[13px]">
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mb-3 w-[48%]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                      <div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[40px]">
                        Input Type
                      </div>
                      <Select
                        label="Select"
                        className="max-w-xs w-full"
                        size="sm"
                        variant="bordered"
                      >
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
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mb-3 w-[48%]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                      <div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[40px]">
                        Field
                      </div>
                      <Select
                        label="Select"
                        className="max-w-xs w-full"
                        size="sm"
                        variant="bordered"
                      >
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
                      <Select
                        label="Select"
                        className="max-w-xs w-full"
                        size="sm"
                        variant="bordered"
                      >
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
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full my-2 gap-[13px]">
                <div className="self-stretch h-[62.8px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mb-3 w-[48%]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                      <div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[40px]">
                        Field
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" className="accent-[#C3D6F4]" />
                        <label
                          htmlFor="terms"
                          className="text-black font-merriweather-sans text-[12px] font-light leading-24"
                        >
                          Mandatory
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" className="accent-[#C3D6F4]" />
                        <label
                          htmlFor="terms"
                          className="text-black font-merriweather-sans text-[12px] font-light leading-24"
                        >
                          Allow Negative Values
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" className="accent-[#C3D6F4]" />
                        <label
                          htmlFor="terms"
                          className="text-black font-merriweather-sans text-[12px] font-light leading-24"
                        >
                          No Duplicate
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[62.8px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mb-3 w-[48%]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                      <div className="relative text-sm leading-[20px] font-noto-sans text-darkslateblue text-left inline-block min-w-[40px]">
                        Country Pin
                      </div>
                      <Select
                        label="Select"
                        className="max-w-xs w-full"
                        size="sm"
                        variant="bordered"
                      >
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
              </div>
            </div>
          )}
          <Droppable droppableId="selectedFields">
            {(provided) => {
              return (
                <div
                  className="flex-grow h-full flex-shrink-0 rounded-lg border border-solid border-[#C0E6DD] bg-[#F7FAFF] p-20 gap-3 flex flex-col"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {selectedFields.map((e: any, index: number) => {
                    return (
                      <Draggable
                        key={e.id}
                        draggableId={e.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="w-full h-[50px] p-4 flex items-center gap-2.5 flex-shrink-0 rounded-lg border border-dashed border-seagreen bg-gray-200 text-green-800 font-bold font-sans text-sm justify-between "
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <div className="flex flex-row gap-3 w-full">
                              <CarbonIcon /> {e.name}
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  <div>
                    <div></div>
                    <div className="w-[100%] h-[50px] flex-shrink-0 rounded-lg bg-[#ebedf1] "></div>
                  </div>
                </div>
              );
            }}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default EditModel;
