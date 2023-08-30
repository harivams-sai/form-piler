import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { startCase, uniq } from 'lodash';
import { SubmissionsQuery } from '../gql/graphql';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Toolbar = styled.div`
  background: #eee;
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 15px;
`;

const Button = styled.div`
  background: black;
  border-radius: 8px;
  border: none;
  color: white;
  padding: 12px;
  width: 250px;
  cursor: pointer;
  &:hover {
    background: #333;
  }
`;

const Dashboard: React.FC = () => {
  const { data, loading, error } = useQuery<SubmissionsQuery>(gql`
    query Submissions {
      submissions {
        id
        submittedAt
        data
      }
    }
  `);

  const [generateSubmissions] = useMutation(
    gql`
      mutation GenerateSubmissions($count: Int!) {
        queueSubmissionGeneration(count: $count)
      }
    `,
    { variables: { count: 5 },
    onCompleted: () => {
      window.location.reload();
    }, }
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  const submissions = data?.submissions || []; // Handle potential undefined submissions

  const dynamicColumns = uniq(
    submissions.flatMap((s) => Object.keys(s?.data || {}))
  ).map((field) => ({
    field,
    headerName: startCase(field),
    width: 200,
    valueGetter: (params: GridValueGetterParams) => `${params.row.data[field]}`,
  }));

  const staticColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'submittedAt', headerName: 'Submitted', width: 200 },
  ];

  const columns: GridColDef[] = [...staticColumns, ...dynamicColumns];

  return (
    <Container>
      <Toolbar>
        <Button onClick={() => generateSubmissions()}>
          Generate Submission
        </Button>
      </Toolbar>
      <DataGrid
        rows={submissions}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </Container>
  );
};

export default Dashboard;
