// import { Chip } from "@mui/material";
// import Stack from "@mui/material/Stack";
import { Chip, Stack, Paper, Slider, Box } from "@mui/material";
import { Done } from "@mui/icons-material";

export default function Home() {
  console.log(
    `
██╗  ██╗███████╗██╗     ██╗      ██████╗ ██╗    ██╗    ██╗
██║  ██║██╔════╝██║     ██║     ██╔═══██╗██║    ██║    ██║
███████║█████╗  ██║     ██║     ██║   ██║██║ █╗ ██║    ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║██║███╗██║    ╚═╝
██║  ██║███████╗███████╗███████╗╚██████╔╝╚███╔███╔╝    ██╗
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝  ╚══╝╚══╝     ╚═╝
                                          
`
  );

  return (
    <>
      <div className="flex justify-center gap-2 ">
        <div className="w-[40%] h-[85vh]  flex flex-col justify-center">
          <h3 className="text-blue-600 font-black text-5xl">Move faster</h3>
          <h3 className="font-black text-5xl">
            with intuitive
            <br /> React UI tools
          </h3>
          <span className="mt-4">
            MUI offers a comprehensive suite of free UI tools to help you ship
            new features faster. Start with Material UI, our fully-loaded
            component library, or bring your own design system to our
            production-ready components.
          </span>
        </div>
        {/* mui 컨텐츠 부분  */}
        <div className="w-[60%] ">
          {/* ----------관심 분야 */}
          <Paper
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 1,
              marginBottom: 2,
            }}
            component="ul"
          >
            <Chip label="React" color="primary" />

            <Box sx={{ width: 450, padding: 2 }}>
              <Slider
                aria-label="Custom marks"
                defaultValue={50}
                step={10}
                valueLabelDisplay="auto"
                marks={[
                  {
                    value: 0,
                    label: "0°C",
                  },
                  {
                    value: 20,
                    label: "20°C",
                  },
                  {
                    value: 50,
                    label: "50°C",
                  },
                  {
                    value: 100,
                    label: "100°C",
                  },
                ]}
              />
            </Box>
          </Paper>

          {/* ----------------------사용 스킬 */}
          <Stack direction="row" spacing={1}>
            <div className="flex gap-2 bg-amber-200 justify-center">
              <Chip label="Nextjs" color="success" />
              <Chip label="Typescript" color="success" variant="outlined" />
              <Chip label="Nginx" color="success" variant="outlined" />
            </div>
            <div>
              <Box sx={{ backgroundColor: "#f5f5f5", padding: 2 }}>
                <h2>안농아농</h2>
              </Box>
            </div>
          </Stack>
        </div>
      </div>
    </>
  );
}
