import React from "react";
import {
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

interface ControlsBarProps {
  voice: "male" | "female";
  setVoice: (voice: "male" | "female") => void;
  onReset: () => void;
  onExport: () => void;
}

const ControlsBar: React.FC<ControlsBarProps> = ({
  voice,
  setVoice,
  onReset,
  onExport,
}) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <FormControl size="small" sx={{ minWidth: 100 }} >
      <InputLabel>Voice</InputLabel>
      <Select
        value={voice}
        label="Voice"
        sx={{ backgroundColor: "#fff" }}
        onChange={(e) => setVoice(e.target.value as "male" | "female")}
      >
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="male">Male</MenuItem>
      </Select>
    </FormControl>
    <Button
      size="small"
      variant="outlined"
      onClick={onReset}
      sx={{ backgroundColor: "#fff" }}
    >
      Reset
    </Button>
    <Button
      size="small"
      variant="outlined"
      startIcon={<PictureAsPdfIcon />}
      onClick={onExport}
      sx={{ backgroundColor: "#fff" }}
    >
      Export
    </Button>
  </Stack>
);

export default ControlsBar;
