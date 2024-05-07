import React, { FunctionComponent, useCallback, useMemo } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/util-components/ui/sheet";
import CreateFieldModal from "../../components/main-componentts/CreateFieldModal";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/util-components/ui/dialog";
import { ChevronDownIcon, Copy, PlusIcon, SearchIcon } from "lucide-react";
import { ReactComponent as DeleteIcon } from "../../assets/mdi_delete.svg";
import { ReactComponent as EditIcon } from "../../assets/akar-icons_edit.svg";
import { ReactComponent as RowIcon } from "../../assets/Icon.svg";
import { ReactComponent as DocumentIcon } from "../../assets/FileText.svg";
import { Label } from "@radix-ui/react-select";
import ChooseModal from "../ChooseModal";

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const columns = [
  { name: "Icon", uid: "icon" },
  { name: "Name", uid: "name", sortable: true },
  { name: "Category", uid: "category" },
  { name: "Status", uid: "status" },
  { name: "Description", uid: "description" },
  { name: "Edit", uid: "edit" },
  { name: "Delete", uid: "delete" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const FormList: FunctionComponent = () => {
  const [users, setUsers]: [any[], any] = React.useState([]);
  const [filterValue, setFilterValue]: [any, any] = React.useState("");
  const [selectedKeys, setSelectedKeys]: [any, any] = React.useState(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns]: [any, any] = React.useState("all");
  const [statusFilter, setStatusFilter]: [any, any] = React.useState("all");
  const [rowsPerPage, setRowsPerPage]: [any, any] = React.useState(5);
  const [sortDescriptor, setSortDescriptor]: [any, any] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);
  const [selectedUser, setSelectedUser]: [any, any] = React.useState({});

  const handleDialogueTrigger = (user: any) => {
    setSelectedUser(user);
  };

  const handleDeleteField = () => {
    let selectedField = selectedUser;
    setUsers(users.filter((field) => field.id !== selectedField.id));
  };

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [
      ...users.filter((field) =>
        filterValue
          ? (field.email as string)
              .toLowerCase()
              .includes(filterValue.toLowerCase())
          : true
      ),
    ];

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: any, b: any) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "icon":
        return <RowIcon />;
      case "name":
        return user.email;
      case "category":
        return (
          <div className="flex flex-row gap-3">
            <div className="border-[#B7EB8F] bg-[#F6FFED] border-1 px-2 py-1 rounded-md">
              <p className="text-[#52C41A]">green X</p>
            </div>
            <div className="border-[#ADC6FF] bg-[#F0F5FF] border-1 px-2 py-1 rounded-md">
              <p className="text-[#2F54EB]">geekblue X</p>
            </div>
          </div>
        ); // Render the actual category value
      case "status":
        return (
          <div className="flex flex-row justify-start items-center gap-2">
            <p>Style Reference</p>
            <DocumentIcon />
          </div>
        ); // Render the actual status value
      case "description":
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod";
      case "edit":
        return (
          <div>
            <Button isIconOnly size="sm" variant="light">
              <EditIcon />
            </Button>
          </div>
        );
      case "delete":
        return (
          <DialogTrigger asChild>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onClick={() => {
                handleDialogueTrigger(user);
              }}
            >
              <DeleteIcon />
            </Button>
          </DialogTrigger>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e: any) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value: any) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);
  console.log(users.length);
  let tableData = [];
  return (
    <main className="w-[90%] h-[100%] flex flex-col items-start justify-start box-border max-w-full mx-auto pb-auto pt-16 overflow-y-auto scrollbar-hide">
      <section className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full h-[95%]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full text-left text-11xl text-darkslateblue font-roboto">
          <div className="flex flex-col font-merriweather-sans">
            <h1 className=" text-[30px] text-blue-950 font-bold">
              Choose an Existing Model
            </h1>
          </div>
          <form className="m-0 self-stretch h-[55px] flex flex-row items-start justify-start gap-[9px] max-w-full">
            <div className="h-[56.4px] flex-1 rounded-8xs bg-ghostwhite box-border flex flex-row items-start justify-start pt-3.5 px-[18px] pb-[14.4px] gap-[18.6px] max-w-[calc(100%_-_695px)] border-[1px] border-solid border-gainsboro  hover:text-[#7373B7] hover:bg-ghostwhite hover:border-[#7373B7]">
              <div className="h-[56.4px] w-[782px] relative rounded-8xs bg-ghostwhite box-border hidden max-w-full border-[1px] border-solid border-gainsboro" />
              <img
                className="h-[26px] w-[25px] relative z-[2]"
                alt=""
                src="/create-field-button.svg"
              />
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[20.5px] flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0 box-border font-noto-sans font-semibold text-sm text-gray-300  hover:text-[#7373B7] hover:bg-ghostwhite hover:border-[#7373B7]"
                placeholder="Search..."
                type="text"
                onChange={(event) => {
                  onSearchChange(event.target.value);
                }}
              />
            </div>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                  className="relative text-sm font-semibold font-noto-sans text-silver text-left min-w-[33px] shrink-0 z-[1] h-[57px] w-[188.7px] rounded-8xs bg-ghostwhite box-border flex flex-row items-start justify-between pt-[18.4px] pb-[17.6px] pr-[17px] pl-[17.4px] gap-[20px] border-[1px] border-solid border-gainsboro hover:text-[#7373B7] hover:bg-ghostwhite hover:border-[#7373B7]"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                  className="relative text-sm font-semibold font-noto-sans text-silver text-left min-w-[33px] shrink-0 z-[1] h-[57px] w-[188.7px] rounded-8xs bg-ghostwhite box-border flex flex-row items-start justify-between pt-[18.4px] pb-[17.6px] pr-[17px] pl-[17.4px] gap-[20px] border-[1px] border-solid border-gainsboro hover:text-[#7373B7] hover:bg-ghostwhite hover:border-[#7373B7]"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <button className="cursor-pointer p-0 bg-ghostwhite h-[55px] w-[55px] relative rounded-8xs box-border border-[1px] border-solid border-[#7373B7]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-ghostwhite box-border hidden border-[1px] border-solid border-whitesmoke" />
              <img
                className="absolute top-[4px] left-[4px] w-12 h-12 overflow-hidden z-[1]"
                alt=""
                src="/bxsgrid.svg"
              />
            </button>
            <button className="cursor-pointer p-0 bg-ghostwhite h-[55px] w-[55px] relative rounded-8xs box-border border-[1px] border-solid">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-ghostwhite box-border hidden border-[1px] border-solid border-whitesmoke" />
              <img
                className="absolute h-[58.18%] w-[58.18%] top-[21.82%] right-[20%] bottom-[20%] left-[21.82%] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/vector-3.svg"
              />
            </button>
            <div className="h-[53px] w-[162.4px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="cursor-pointer pt-[16.1px] px-3.5 pb-[16.9px] bg-mediumaquamarine self-stretch h-[53px] rounded-8xs box-border flex flex-row items-start justify-start gap-[15.5px] border-[1px] border-solid border-mediumaquamarine">
                    <img
                      className="h-[51px] w-[162.4px] relative rounded-8xs hidden"
                      alt=""
                      src="/rectangle-6.svg"
                    />
                    <img
                      className="h-[15.8px] w-[14.8px] relative z-[1]"
                      alt=""
                      src="/vector-4.svg"
                    />
                    <b className="w-[93.9px] relative text-sm inline-block font-merriweather-sans text-white text-left shrink-0 z-[1]">
                      Create Form
                    </b>
                  </button>
                </SheetTrigger>
                <SheetContent className="px-0 overflow-scroll !pb-0">
                  <CreateFieldModal users={users} setUsers={setUsers} />
                </SheetContent>
              </Sheet>
            </div>
          </form>
        </div>
        <ChooseModal />
        {/* <Dialog>
					{users.length <= 0 ? (
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
									<Sheet>
										<SheetTrigger asChild>
											<button className="cursor-pointer [border:none] pt-[16.1px] px-3.5 pb-[16.9px] bg-[transparent] w-[162.4px] flex flex-row items-start justify-start box-border relative gap-[15.5px] z-[1]">
												<img
													className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full"
													alt=""
													src="/rectangle-6.svg"
												/>
												<img className="h-[15.8px] w-[14.8px] relative z-[1]" alt="" src="/vector-4.svg" />
												<b className="w-[93.9px] relative text-sm inline-block font-merriweather-sans text-white text-left shrink-0 z-[1]">
													Create Form
												</b>
											</button>
										</SheetTrigger>
										<SheetContent className="p-0 overflow-scroll">
											<CreateFieldModal users={users} setUsers={setUsers} />
										</SheetContent>
									</Sheet>
								</div>
							</div>
						</div>
					) : (
						<Table
							aria-label="Example table with custom cells, pagination and sorting"
							isHeaderSticky
							bottomContent={bottomContent}
							bottomContentPlacement="outside"
							classNames={{
								wrapper: "max-h-[382px] p-0",
							}}
							selectedKeys={selectedKeys}
							selectionMode="none"
							sortDescriptor={sortDescriptor}
							onSortChange={setSortDescriptor}
						>
							<TableHeader columns={headerColumns} className="p-0">
								{(column) => (
									<TableColumn
										key={column.uid}
										align={column.uid === "actions" ? "center" : "start"}
										allowsSorting={column.sortable}
										className={column.name === "description" ? "max-w-3" : ""}
									>
										{column.name}
									</TableColumn>
								)}
							</TableHeader>
							<TableBody emptyContent={"No users found"} items={sortedItems} className="">
								{(item) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
							</TableBody>
						</Table>
					)}
					<DialogContent className="rounded-9xl sm:max-w-md">
						<DialogHeader>
							<DialogTitle className="text-[#0C1F51]">Delete</DialogTitle>
						</DialogHeader>
						<DialogDescription className="text-[#0C1F51]">Are you sure you want to delete this Form?</DialogDescription>
						<DialogFooter className="justify-end">
							<DialogClose asChild>
								<Button type="button" variant="flat" size="sm" className="bg-[#fff]">
									Close
								</Button>
							</DialogClose>
							<DialogClose asChild>
								<Button type="button" variant="solid" size="sm" className="bg-[#4FB697] text-[#fff]" onClick={handleDeleteField}>
									Delete
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog> */}
      </section>
    </main>
  );
};

export default FormList;
