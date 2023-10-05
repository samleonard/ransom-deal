import { Box, BoxProps } from "@mui/joy";

function Main(props: BoxProps) {
  return (
    <Box
      className="main"
      {...props}
      sx={[
        {
          p: 2,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

export default Main;
