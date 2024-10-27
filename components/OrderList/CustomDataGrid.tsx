import { colors } from "@/utils/constants";
import { Box, Pagination } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Image from "next/image";

const CustomDataGrid = () => {
  const { theme, activeFg } = useContext(ThemeContext);
  const [pageNo, setPageNo] = useState(1);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const pageLimit = 10;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNo(value);
  };

  const productStatus = [
    "in Progress",
    "Complete",
    "Pending",
    "Approved",
    "Rejected",
  ];

  const statusColor = {
    ["in Progress"]: { text: colors.inProgressText, dot: colors.inProgressDot },
    Complete: { text: colors.completedText, dot: colors.completedDot },
    Pending: {
      text: colors.pendingText,
      dot: colors.pendingDot,
    },
    Approved: {
      text: colors.approvedText,
      dot: colors.approvedDot,
    },
    Rejected: {
      text:
        theme === "dark" ? colors.fontInactiveLight : colors.fontInactiveDark,
      dot:
        theme === "dark" ? colors.fontInactiveLight : colors.fontInactiveDark,
    },
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const orderList =
    Array(120)
      ?.fill(0)
      ?.map((_, index) => ({
        id: `#CM${9801 + index}`,
        user: `Natali Craig${index + 1}`,
        project: `Landing Page${index + 1}`,
        address: `Meadow Lane Oakland${index + 1}`,
        date: `${index + 1} hour ago`,
        status: `${productStatus?.[index % productStatus?.length]}`,
      })) || [];

  const columns: GridColDef<(typeof orderList)[number]>[] = [
    {
      field: "id",
      headerName: "Order ID",
      width: 90,
      editable: false,
      type: "number",
      renderCell: (data) => (
        <div className="h-full w-full flex justify-center items-center">
          <p>{data?.row.id}</p>
        </div>
      ),
    },
    {
      field: "user",
      headerName: "User",
      width: 150,
      editable: true,
      type: "string",
      renderCell: (data) => (
        <div className="h-full w-full flex justify-center items-center">
          <Image
            src={`/contacts/contact${Math.ceil(Math.random() * 6)}.png`}
            alt="avatar"
            width={30}
            height={30}
          />
          <p className="ml-1">{data?.row.user}</p>
        </div>
      ),
    },
    {
      field: "project",
      headerName: "Project",
      width: 120,
      editable: true,
      type: "string",
      renderCell: (data) => (
        <div className="h-full w-full flex justify-center items-center">
          <p>{data?.row.project}</p>
        </div>
      ),
    },
    {
      field: "address",
      headerName: "Address",
      type: "string",
      width: 130,
      editable: true,
      renderCell: (data) => (
        <div className="h-full w-full flex justify-center items-center">
          <p>{data?.row.address}</p>
        </div>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      type: "string",
      width: 170,
      editable: true,
      renderCell: (data) => (
        <div className="h-full w-full flex justify-center items-center">
          <p>{data?.row.date}</p>
        </div>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 130,
      editable: true,
      renderCell: (data) => {
        const status = data?.row?.status;
        const { dot, text } = statusColor?.[status];
        return (
          <div className="h-full w-full flex justify-center items-center gap-1.5">
            <div
              className={`h-2 w-2 rounded-full`}
              style={{ backgroundColor: dot }}
            />
            <div>
              <p style={{ color: text }}>{status}</p>
            </div>
          </div>
        );
      },
    },
  ];

  const noOfPage =
    orderList?.length % pageLimit === 0
      ? orderList?.length / pageLimit
      : orderList?.length / pageLimit + 1;

  useEffect(() => {
    const currentPageData = orderList?.slice(
      (pageNo - 1) * pageLimit,
      pageNo * pageLimit
    );
    setCurrentPageRows(currentPageData);
  }, [pageNo, JSON.stringify(orderList)]);

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <DataGrid
        rows={currentPageRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        hideFooterPagination
        sx={{ overflow: "scroll" }}
      />
      <Pagination
        count={noOfPage}
        page={pageNo}
        onChange={handleChange}
        shape="rounded"
        sx={{ position: "absolute", right: 10, bottom: 10, color: activeFg }}
        defaultPage={1}
      />
    </Box>
  );
};

export default CustomDataGrid;
