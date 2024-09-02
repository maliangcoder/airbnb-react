import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import { Pagination } from "@mui/material";

const EntirePagination = memo((props) => {
  return (
    <PaginationWrapper>
      <Pagination count={10}/>
    </PaginationWrapper>
  );
});

export default EntirePagination;
