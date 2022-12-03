import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { Entry } from "../../interfaces";

interface IProps extends Entry {}

export const EntryCard: FC<IProps> = ({ _id, description }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        marginBottom: 1,
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>{description}</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "end",
            padding: 2,
          }}
        >
          <Typography variant="body2">Hace treinta minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
