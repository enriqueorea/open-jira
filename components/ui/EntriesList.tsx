import { List, Paper } from "@mui/material";
import React, { FC, useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";
import { ENTRY_STATUS } from "../../interfaces";
import { EntryCard, NewEntry } from "./";

interface IProps {
  status: ENTRY_STATUS;
}

export const EntriesList: FC<IProps> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  return (
    <div className="">
      <Paper
        elevation={24}
        sx={{
          height: "calc(100vh - 250px)",
          overflow: "auto",
          background: "transparent",
        }}
      >
        <List sx={{ opacity: 1, padding: "0 10px" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} {...entry} />
          ))}
          {status === "pending" && <NewEntry />}
        </List>
      </Paper>
    </div>
  );
};
