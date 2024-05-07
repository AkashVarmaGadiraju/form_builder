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
import { ChevronDownIcon } from "lucide-react";
import InputOptions from "./InputOptions";
import { Tag, TagInput } from "emblor";

const CreateFieldModal: React.FC<{ users: any; setUsers: any }> = ({
  users,
  setUsers,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Any additional logic you want to perform
  };
  const [fieldOptions, setFieldOptions]: [
    Record<string, any>,
    React.Dispatch<React.SetStateAction<Record<string, any>>>
  ] = useState({});
  const [tags, setTags] = React.useState<Tag[]>([]);
  const handleFormChange = (
    e: any,
    key: string,
    isCategory: boolean = false
  ) => {
    if (isCategory) {
      setFieldOptions({
        ...fieldOptions,
        categories: {
          ...fieldOptions.categories,
          [key]: e,
        },
      });
    } else {
      setFieldOptions({ ...fieldOptions, [key]: e });
    }
  };

  return (
    <form
      className="m-0 mt-14 w-full h-full shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-white max-w-full overflow-hidden flex flex-col items-start justify-start px-10 box-border gap-[30.1px] leading-[normal] tracking-[normal] overflow-y-scroll py-28"
      onSubmit={handleSubmit}
    >
      <section className="absolute self-stretch flex flex-row items-center align-center px-[20px] gap-2 p-auto  max-w-full w-[95%] top-0 left-0 py-12 bg-white z-50">
        <img
          className="w-16 h-16 relative rounded-9xl"
          loading="lazy"
          alt=""
          src="/featured-icon1.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-center gap-[5px]">
          <div className="self-stretch relative text-[18px] leading-[20px] font-semibold font-noto-sans text-darkslateblue text-left">
            Create a New Field
          </div>
          <div className="self-stretch relative text-[14px] leading-[20px] font-noto-sans text-darkgray-600 text-left">
            Enter Details about your new Field
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full w-full">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[6px] max-w-full px-[5px]">
          <div className="self-stretch h-[62.8px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full mb-3">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full w-full">
              <div className="flex flex-col items-start justify-start gap-[6px] w-full max-w-full">
                <div className="relative text-sm leading-[20px] font-noto-sans font-bold text-darkslateblue text-left inline-block min-w-[40px]">
                  Name
                </div>
                <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-start py-2 px-[13px] gap-[8px] max-w-full border-[1px] border-solid border-gray-300 mb-2">
                  <Input
                    type="text"
                    placeholder="Field 1"
                    id="nameInput"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 !outline-none w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-merriweather-sans text-sm text-darkslateblue] max-w-full"
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
                <div className="relative text-sm leading-[20px] font-noto-sans  font-bold text-darkslateblue text-left inline-block min-w-[76px]">
                  Description
                </div>
                <Textarea
                  className="bg-white h-[132px] w-auto [outline:none] focus-visible:ring-0 focus-visible:ring-offset-0 self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-3.5 border-[1px] border-solid border-gray-300"
                  rows={7}
                  cols={19}
                  onChange={(e) => {
                    handleFormChange(e.target.value, "description");
                  }}
                />
              </div>
              <div className="w-80 relative text-sm leading-[20px] font-text-md-semibold text-gray-600 text-left hidden">
                This is a hint text to help user.
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full mt-1">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full w-full my-2 gap-[8px]">
              <div className="text-darkslateblue font-noto-sans text-sm font-semibold leading-5">
                Type
              </div>
              <Select
                value={fieldOptions.type}
                onValueChange={(e) => {
                  handleFormChange(e, "type");
                }}
              >
                <SelectTrigger className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm hover:border-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 focus:ring-0 focus:ring-offset-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                  <SelectValue placeholder="Select a field type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
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
                      value="enum"
                    >
                      Enum
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
          <InputOptions
            handleChanges={handleFormChange}
            values={fieldOptions}
          />
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
              setUsers([
                ...users,
                {
                  ...fieldOptions,
                  id: users.length,
                  createdAt: new Date(),
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

export default CreateFieldModal;
