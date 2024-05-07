import { ChevronDownIcon } from "lucide-react";
import InputOptions from "./InputOptions";
import { Tag, TagInput } from "emblor";

import React, { FunctionComponent, useState } from "react";
import { Input } from "../util-components/ui/input";
import { Textarea } from "../util-components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../util-components/ui/select";
import { SheetClose } from "../util-components/ui/sheet";
import { ReactComponent as CarbonIcon } from "../../assets/carbon_area-custom.svg";
import { Button } from "@nextui-org/react";
import { capitalize } from "../../scenes/FieldList/FieldList";

const CreateFieldGroupModal: React.FC<{ groups: any; setGroups: any }> = ({
  groups,
  setGroups,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Any additional logic you want to perform
  };
  const [searchValue, setSearchValue]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  const [typeFilter, setTypeFilter]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState("");
  const [groupOptions, setGroupOptions]: [
    Record<string, any>,
    React.Dispatch<React.SetStateAction<Record<string, any>>>
  ] = useState({});

  const handleFormChange = (
    e: any,
    key: string,
    isCategory: boolean = false
  ) => {
    if (isCategory) {
      setGroupOptions({
        ...groupOptions,
        categories: {
          ...groupOptions.categories,
          [key]: e,
        },
      });
    } else {
      setGroupOptions({ ...groupOptions, [key]: e });
    }
  };

  const onSearchChange = React.useCallback((value: string) => {
    if (value) {
      setSearchValue(value);
    } else {
      setSearchValue("");
    }
  }, []);

  const [groupFields, setGroupFields]: any = useState({
    selectedFields: [
      {
        name: "field 1",
        type: "string",
      },
      {
        name: "field 2",
        type: "integer",
      },
      {
        name: "field 3",
        type: "float",
      },
      {
        name: "field 4",
        type: "boolean",
      },
    ],
    availableFields: [
      {
        name: "field 5",
        type: "file",
      },
      {
        name: "field 6",
        type: "binary",
      },
      {
        name: "field 7",
        type: "array",
      },
      {
        name: "field 8",
        type: "dateTime",
      },
      {
        name: "field 9",
        type: "json",
      },
    ],
  });

  const handleSelectGroupField = (field: any) => {
    const modGroupFields = { ...groupFields };
    modGroupFields.availableFields = modGroupFields.availableFields.filter(
      (e: any) => field.name !== e.name
    );
    modGroupFields.selectedFields.push(field);
    setGroupFields(modGroupFields);
  };

  const handleDeselectGroupField = (field: any) => {
    const modGroupFields = { ...groupFields };
    modGroupFields.selectedFields = modGroupFields.selectedFields.filter(
      (e: any) => field.name !== e.name
    );
    modGroupFields.availableFields.push(field);
    setGroupFields(modGroupFields);
  };

  return (
    <form
      className="m-0 mt-14 w-full h-full shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-white max-w-full overflow-hidden flex flex-col items-start justify-start px-10 box-border gap-[30.1px] leading-[normal] tracking-[normal] overflow-y-scroll py-28  pb-[250px]"
      onSubmit={handleSubmit}
    >
      <section className="absolute self-stretch flex flex-row items-center align-center px-[40px] gap-2 p-auto  max-w-full w-[95%] top-0 left-0 py-12 bg-white z-50">
        <img
          className="w-16 h-16 relative rounded-9xl"
          loading="lazy"
          alt=""
          src="/featured-icon1.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
          <div className="self-stretch relative text-[18px] leading-[20px] font-semibold font-noto-sans text-darkslateblue text-left">
            Create a New Group
          </div>
          <div className="self-stretch relative text-[14px] leading-[20px] font-noto-sans text-darkgray-600 text-left">
            Enter Details about your new Group
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full w-full">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[6px] max-w-full">
          <div className="self-stretch h-[62.8px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mb-3">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                <div className="relative text-sm leading-[20px] font-noto-sans font-bold text-darkslateblue text-left inline-block min-w-[40px]">
                  Name
                </div>
                <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-start py-2 px-[13px] gap-[8px] max-w-full border-[1px] border-solid border-gray-300 mb-2">
                  <Input
                    type="text"
                    placeholder="Field 1"
                    id="nameInput"
                    className="!outline-none focus:ring-0 w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-merriweather-sans text-sm text-darkslateblue min-w-[208px] max-w-full focus-visible:ring-0 focus-visible:ring-offset-0"
                    onChange={(e) => {
                      handleFormChange(e.target.value, "name");
                    }}
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
          <div className="self-stretch h-[150px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="relative text-sm leading-[20px] font-noto-sans font-bold text-darkslateblue text-left inline-block min-w-[40px]">
                  Description
                </div>
                <Textarea
                  className="bg-white h-[132px] w-auto [outline:none] self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-3.5 border-[1px] border-solid border-gray-300 focus:ring-0 focus:ring-offset-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  rows={7}
                  cols={19}
                  onChange={(e) => {
                    handleFormChange(e.target.value, "name");
                  }}
                />
              </div>
              <div className="w-80 relative text-sm leading-[20px] font-text-md-semibold text-gray-600 text-left hidden">
                This is a hint text to help user.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-[14px] px-0 pb-0 box-border max-w-full gap-3">
            <div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">
              Selected Fields
            </div>
            <div className="w-full gap-2 flex flex-row max-h-[236px] flex-wrap">
              {groupFields.selectedFields.map((e: any) => {
                return (
                  <Button
                    className="w-max px-3 py-2 flex items-center gap-2.5 flex-shrink-0 rounded-lg border border-dashed border-seagreen bg-gray-200 text-green-800 font-semibold font-sans text-sm justify-between"
                    onClick={() => {
                      handleDeselectGroupField(e);
                    }}
                    disableAnimation={false}
                    disableRipple={true}
                  >
                    <div className="flex flex-row gap-3">
                      <CarbonIcon /> {e.name}
                    </div>
                    {/* <Check /> */}
                  </Button>
                );
              })}
            </div>
            <div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">
              Available Fields
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full gap-[8px]">
              <div className="flex flex-row justify-between w-full gap-[12px]">
                <div className="h-[48px] w-[40%] flex-1 rounded-8xs bg-ghostwhite box-border flex flex-row items-center justify-start pt-3.5 px-[18px] pb-[14.4px] gap-[12.6px] max-w-xs border-[1px] border-solid border-gainsboro  hover:text-[#7373B7] hover:bg-ghostwhite hover:border-[#7373B7]">
                  <img
                    className="h-[14px] w-[13px] relative z-[2]"
                    alt=""
                    src="/create-field-button.svg"
                  />
                  <input
                    className="w-full [border:none] [outline:none] bg-[transparent] h-[20.5px] flex flex-col items-start justify-start px-0 pb-0 box-border font-noto-sans font-semibold text-sm text-gray-300  hover:text-[#7373B7] hover:bg-ghostwhite hover:border-[#7373B7]"
                    placeholder="Search..."
                    type="text"
                    onChange={(event) => {
                      onSearchChange(event.target.value);
                    }}
                  />
                </div>
                <Select
                  value={typeFilter}
                  onValueChange={(e) => {
                    setTypeFilter(e);
                  }}
                >
                  <SelectTrigger className="w-[30%] py-[23px] flex items-center justify-between rounded-md border border-gray-300 bg-white py-auto px-3 shadow-sm hover:border-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 focus:ring-0 focus:ring-offset-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectGroup>
                      <SelectItem
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        value="type"
                      >
                        Type
                      </SelectItem>
                      <SelectItem
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        value="string"
                      >
                        String
                      </SelectItem>
                      <SelectItem
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        value="integer"
                      >
                        Integer
                      </SelectItem>
                      <SelectItem
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        value="float"
                      >
                        Float
                      </SelectItem>
                      <SelectItem
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        value="boolean"
                      >
                        Boolean
                      </SelectItem>
                      <SelectItem
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        value="file"
                      >
                        File
                      </SelectItem>
                      <SelectItem
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        value="binary"
                      >
                        Binary
                      </SelectItem>
                      <SelectItem
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        value="array"
                      >
                        Array
                      </SelectItem>
                      <SelectItem
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        value="dateTime"
                      >
                        Date-Time
                      </SelectItem>
                      <SelectItem
                        className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        value="json"
                      >
                        JSON
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full gap-3 flex flex-col max-h-[236px] h-[236px] overflow-y-scroll">
              {groupFields.availableFields
                .filter((e: any) =>
                  searchValue ? e.name.includes(searchValue) : true
                )
                .filter((e: any) =>
                  typeFilter && typeFilter !== "type"
                    ? e.type === typeFilter
                    : true
                )
                .map((e: any) => {
                  return (
                    <Button
                      className="w-full h-[50px] p-4 flex items-center gap-2.5 flex-shrink-0 rounded-lg border border-dashed border-[#B79848] bg-[#FFFBEB] text-green-800 font-bold font-sans text-sm justify-between"
                      onClick={() => {
                        handleSelectGroupField(e);
                      }}
                      disableAnimation={false}
                      disableRipple={true}
                    >
                      <div className="flex flex-row gap-3">
                        <CarbonIcon /> {e.name}
                      </div>
                      {capitalize(e.type)}
                    </Button>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <section className="absolute self-stretch flex flex-row items-start justify-between max-w-full gap-[10px] w-[96%] bottom-0 left-0 bg-white p-10 border-t-2 border-seagreen border-dashed">
        <SheetClose asChild>
          <button className="cursor-pointer [border:none] p-0 bg-white self-stretch rounded-lg flex flex-row items-start justify-start max-w-full w-[50%]">
            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-center py-2 px-5 max-w-full border-[1px] border-solid border-gray-300">
              <div className="relative text-base leading-[24px] font-semibold font-text-md-semibold text-gray-700 text-left inline-block min-w-[54px]">
                Cancel
              </div>
            </div>
          </button>
        </SheetClose>
        <SheetClose asChild>
          <button
            onClick={() => {
              const nameInput = document.getElementById(
                "nameInput"
              ) as HTMLInputElement;
              setGroups([
                ...groups,
                {
                  ...groupOptions,
                  id: groups.length,
                  createdAt: new Date(),
                  selectedFields: groupFields.selectedFields,
                },
              ]);
            }}
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch rounded-lg flex flex-row items-start justify-start max-w-full w-[50%]"
          >
            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-mediumaquamarine box-border overflow-hidden flex flex-row items-center justify-center py-2 px-5 max-w-full border-[1px] border-solid border-brand-600">
              <div className="relative text-base leading-[24px] font-semibold font-text-md-semibold text-white text-left inline-block min-w-[53px]">
                Create
              </div>
            </div>
          </button>
        </SheetClose>
      </section>
    </form>
  );
};

export default CreateFieldGroupModal;
