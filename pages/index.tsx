import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Layout } from "../components/layouts";
import { EntriesList } from "../components/ui";

export default function HomePage() {
  return (
    <Layout title="Home Page | Open Jira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} lg={4}>
          <Card
            sx={{
              height: "calc(100vh - 100px)",
            }}
          >
            <CardHeader title="Pendientes" />
            <CardContent>
              <EntriesList status="pending" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <Card
            sx={{
              height: "calc(100vh - 100px)",
            }}
          >
            <CardHeader title="En Progreso" />
            <CardContent>
              <EntriesList status="in-progress" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <Card
            sx={{
              height: "calc(100vh - 100px)",
            }}
          >
            <CardHeader title="Completadas" />
            <CardContent>
              <EntriesList status="completed" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
