import { Box } from "@mui/material";

const ListOrder = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Box>pesanan kamu</Box>
        <Box>search</Box>
      </Box>
    </>
  );
};

export default ListOrder;
