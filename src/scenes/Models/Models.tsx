import React, { FunctionComponent, useCallback, useMemo } from "react";
import CreateFieldModelSheet from "./CreateFieldModelSheet";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
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
import { ChevronDownIcon } from "lucide-react";
import { ReactComponent as DeleteIcon } from "../../assets/mdi_delete.svg";
import { ReactComponent as EditIcon } from "../../assets/akar-icons_edit.svg";
import { ReactComponent as RowIcon } from "../../assets/Icon.svg";
import { CreateButton } from "../../components/util-components/CreateButton";
import { useNavigate } from "react-router-dom";
import { cn } from "../../components/util-components/utils";

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const columns = [
  { name: "Icon", uid: "icon" },
  { name: "Name", uid: "name", sortable: true },
  { name: "Tags", uid: "tags" },
  { name: "Description", uid: "description" },
  { name: "Created At", uid: "createdAt" },
  { name: "Edit", uid: "edit" },
  { name: "Delete", uid: "delete" },
];

const rows = [
  { name: "5", uid: "5" },
  { name: "10", uid: "10" },
  { name: "15", uid: "15" },
  { name: "20", uid: "20" },
  { name: "30", uid: "30" },
  { name: "40", uid: "40" },
  { name: "50", uid: "50" },
  { name: "75", uid: "75" },
  { name: "100", uid: "100" },
  { name: "150", uid: "150" },
  { name: "200", uid: "200" },
];

const statusOptions = [
  { name: "Type", uid: "all" },
  { name: "String", uid: "string" },
  { name: "Integer", uid: "integer" },
  { name: "Float", uid: "float" },
  { name: "Boolean", uid: "boolean" },
  { name: "File", uid: "file" },
  { name: "Enum", uid: "enum" },
  { name: "Binary", uid: "binary" },
  { name: "Array", uid: "array" },
  { name: "Date-Time", uid: "dateTime" },
  { name: "JSON", uid: "json" },
];

const Models: FunctionComponent = () => {
  const [fields, setUsers]: [any[], any] = React.useState([]);
  const [filterValue, setFilterValue]: [any, any] = React.useState("");
  const [selectedKeys, setSelectedKeys]: [any, any] = React.useState(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns]: [any, any] = React.useState("all");
  const [statusFilter, setStatusFilter]: [any, any] = React.useState("");
  const [rowsPerPage, setRowsPerPage]: [any, any] = React.useState(5);
  const [sortDescriptor, setSortDescriptor]: [any, any] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);
  const [selectedField, setSelectedField]: [any, any] = React.useState({});
  const navigate = useNavigate();
  const handleDialogueTrigger = (field: any) => {
    setSelectedField(field);
  };

  const handleModelConfig = (model: any) => {
    navigate("/models/edit");
  };

  const handleDeleteField = () => {
    setUsers(fields.filter((field) => field?.id !== selectedField?.id));
  };

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;
    let viscolArray = [...Array.from(visibleColumns), "icon", "edit", "delete"];
    return columns.filter((column) => viscolArray.includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...fields];

    if (filterValue) {
      filteredUsers = filteredUsers.filter((field) =>
        (field.name as string).toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    if (statusFilter?.anchorKey && statusFilter.anchorKey !== "all") {
      filteredUsers = filteredUsers.filter(
        (field) => field.type === statusFilter.anchorKey
      );
    }

    return filteredUsers;
  }, [fields, filterValue, statusFilter]);

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

  const renderCell = React.useCallback((field: any, columnKey: any) => {
    const cellValue = field[columnKey];

    switch (columnKey) {
      case "icon":
        return <RowIcon />;
      case "name":
        return field.name;
      case "tags":
        let categories = [
          "green",
          "geekblue",
          "green",
          "geekblue",
          "green",
          "geekblue",
          "green",
          "geekblue",
          "green",
          "geekblue",
          "green",
          "geekblue",
        ];
        if (field.tags) {
          categories = [];
          for (let tags in field.tags) {
            if (field.tags[tags]) {
              categories.push(field.tags[tags]);
            }
          }
        }
        return (
          <div className="flex flex-row gap-3 w-[400px] overflow-x-scroll styled-scrollbar">
            {categories.map((e: string) => (
              <div className="border-[#B7EB8F] bg-[#F6FFED] border-1 px-2 py-1 rounded-md">
                <p className="text-[#52C41A]">{capitalize(e)}</p>
              </div>
            ))}
          </div>
        ); // Render the actual tags value
      case "description":
        return field.description || "No Description Given";
      case "edit":
        return (
          <div>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onClick={() => {
                handleModelConfig(field);
              }}
            >
              <EditIcon />
            </Button>
          </div>
        );
      case "createdAt":
        return field.createdAt.toISOString().slice(0, 19).replace("T", " ");
      case "delete":
        return (
          <DialogTrigger asChild>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onClick={() => {
                handleDialogueTrigger(field);
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
    setPage(1);
    setRowsPerPage(Number(e.target.value));
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
  console.log(fields.length);
  let tableData = [];
  return (
    <main className="w-[90%] h-[100%] flex flex-col items-start justify-start box-border max-w-full mx-auto pb-auto pt-16 mq825:p-[20px] mq825:box-border mq1250:p-[20px] mq1250:box-border">
      <section className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full h-[95%]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full text-left text-11xl text-darkslateblue font-roboto">
          <h1 className="m-0 relative text-inherit font-semibold font-merriweather-sans inline-block text-[30px]">
            Model List
          </h1>
          <form className="m-0 self-stretch h-[55px] flex flex-row items-start justify-start gap-[9px] max-w-full">
            <div className="h-[56.4px] flex-1 rounded-8xs bg-ghostwhite box-border flex flex-row items-center justify-start pt-3.5 px-[18px] pb-[14.4px] gap-[18.6px] w-fit border-[1px] border-solid border-gainsboro  hover:text-[#7373B7] hover:bg-ghostwhite hover:border-[#7373B7]">
              <img
                className="h-[19px] w-[18px] relative z-[2]"
                alt=""
                src="/create-field-button.svg"
              />
              <input
                className="w-full [border:none] placeholder-silver [outline:none] bg-[transparent] h-[20.5px] flex flex-col items-start justify-start px-0 pb-0 box-border font-noto-sans font-semibold text-sm text-gray-300 hover:text-[#7373B7] hover:bg-ghostwhite hover:border-[#7373B7]"
                placeholder="Search..."
                type="text"
                id="fieldSearch"
                onChange={(event) => {
                  onSearchChange(event.target.value);
                }}
              />
            </div>
            <div className="flex flex-row justify-end gap-[9px]">
              <Dropdown>
                <DropdownTrigger className="hidden sm:flex">
                  <Button
                    endContent={<ChevronDownIcon className="text-small" />}
                    variant="flat"
                    className="relative text-sm font-semibold font-noto-sans text-silver text-left min-w-[33px] shrink-0 z-[1] h-[57px] w-[188.7px] rounded-8xs bg-ghostwhite box-border flex flex-row items-start justify-between pt-[18.4px] pb-[17.6px] pr-[17px] pl-[17.4px] gap-[20px] border-[1px] border-solid border-gainsboro hover:text-[#7373B7] hover:bg-ghostwhite hover:border-[#7373B7]"
                  >
                    {capitalize(
                      statusFilter?.anchorKey &&
                        statusFilter.anchorKey !== "all"
                        ? statusFilter.anchorKey
                        : "Type"
                    )}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Table Columns"
                  closeOnSelect={true}
                  selectedKeys={statusFilter}
                  selectionMode="single"
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
                  onSelectionChange={(value) => {
                    setVisibleColumns(value);
                  }}
                >
                  {columns
                    .filter(
                      (column) =>
                        !["Edit", "Delete", "Icon"].includes(column.name)
                    )
                    .map((column) => (
                      <DropdownItem key={column.uid} className="capitalize">
                        {capitalize(column.name)}
                      </DropdownItem>
                    ))}
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownTrigger className="hidden sm:flex">
                  <Button
                    endContent={<ChevronDownIcon className="text-small" />}
                    variant="flat"
                    className="relative text-sm font-semibold font-noto-sans text-silver text-left min-w-[33px] shrink-0 z-[1] h-[57px] w-[94px] rounded-8xs bg-ghostwhite box-border flex flex-row items-start justify-between pt-[18.4px] pb-[17.6px] pr-[17px] pl-[17.4px] gap-[20px] border-[1px] border-solid border-gainsboro hover:text-[#7373B7] hover:bg-ghostwhite hover:border-[#7373B7]"
                  >
                    {rowsPerPage}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Table Rows"
                  closeOnSelect={true}
                  selectionMode="single"
                  selectedKeys={[rowsPerPage + ""]}
                  onSelectionChange={(e: any) => {
                    setRowsPerPage(Number(e.currentKey));
                  }}
                >
                  {rows.map((row, i) => (
                    <DropdownItem
                      key={row.uid}
                      value={row.name}
                      className="capitalize"
                    >
                      {row.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <div className="h-full w-[162.4px] flex flex-col items-start justify-start px-0 pb-0 box-border">
                <CreateButton
                  title={"Create Model"}
                  sheetContent={
                    <CreateFieldModelSheet users={fields} setUsers={setUsers} />
                  }
                />
              </div>
            </div>
          </form>
        </div>
        <Dialog>
          {filteredItems.length <= 0 ? (
            <div className="self-stretch rounded-3xs bg-gray-200 box-border flex flex-col items-center justify-start pt-[240px] pb-[245px] pr-5 pl-[21px] gap-[16px] max-w-full text-center text-base text-darkslateblue font-noto-sans border-[1px] border-dashed border-seagreen h-full">
              <div className="w-[1471px] h-[772px] relative rounded-3xs bg-gray-200 box-border hidden max-w-full border-[1px] border-dashed border-seagreen" />
              <div className="w-[352.4px] flex flex-row items-start justify-center max-w-full">
                <img
                  className="h-12 w-12 relative rounded-9xl z-[1]"
                  loading="lazy"
                  alt=""
                  src="/featured-icon.svg"
                />
              </div>
              <div className="w-[352.4px] flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative leading-[24px] font-semibold z-[1]">
                    Nothing found
                  </div>
                  <div className="self-stretch relative text-sm leading-[20px] text-darkgray-200 z-[1]">
                    Your search did not match any existing record. Please try
                    again or create add a new vendor.
                  </div>
                </div>
                <div className="flex flex-row items-center w-full justify-center gap-[12px] text-left text-sm text-darkgray-100 font-merriweather-sans mq450:flex-wrap">
                  <button
                    className="cursor-pointer w-[50%] pt-[16.1px] px-3.5 pb-[16.9px] bg-white self-stretch h-full rounded-8xs box-border flex flex-row items-center justify-center gap-[15.5px] border-[1px] border-solid border-lightgray"
                    onClick={() => {
                      onSearchChange("");
                      (
                        document.getElementById(
                          "fieldSearch"
                        ) as HTMLInputElement
                      ).value = "";
                    }}
                  >
                    <b className="w-full relative text-sm inline-block font-merriweather-sans shrink-0 z-[1] text-center align-bottom">
                      Clear Selction
                    </b>
                  </button>
                  {/* rounded-8xs bg-white flex flex-row items-start justify-start py-3.5 pr-[35.6px] pl-[43.4px] whitespace-nowrap z-[1] border-[1px] border-solid border-lightgray h-full */}
                  <CreateButton
                    title={"Create Model"}
                    sheetContent={
                      <CreateFieldModelSheet
                        users={fields}
                        setUsers={setUsers}
                      />
                    }
                  />
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
                {(column) => {
                  return (
                    <TableColumn
                      key={column.uid}
                      align={column.uid === "actions" ? "center" : "start"}
                      allowsSorting={column.sortable}
                      className={cn(
                        column.name === "Category" && "w-[400px]",
                        column.name === "Created At" && "w-[10%]"
                      )}
                    >
                      {column.name}
                    </TableColumn>
                  );
                }}
              </TableHeader>
              <TableBody items={sortedItems} className="">
                {(item) => (
                  <TableRow
                    key={item.id}
                    onClick={(event) => {
                      navigate("/models/relations");
                    }}
                  >
                    {(columnKey) => (
                      <TableCell
                        className={
                          columnKey === "tags"
                            ? "w-[25%]"
                            : columnKey === "description"
                            ? "w-[35%]"
                            : columnKey === "createdAt"
                            ? "w-fit"
                            : ""
                        }
                      >
                        {renderCell(item, columnKey)}
                      </TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
          <DialogContent className="rounded-9xl sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-[#0C1F51]">Delete</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-[#0C1F51]">
              Are you sure you want to delete this Field?
            </DialogDescription>
            <DialogFooter className="justify-end">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="flat"
                  size="sm"
                  className="bg-[#fff]"
                >
                  Close
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="solid"
                  size="sm"
                  className="bg-[#4FB697] text-[#fff]"
                  onClick={handleDeleteField}
                >
                  Delete
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </main>
  );
};

export default Models;
