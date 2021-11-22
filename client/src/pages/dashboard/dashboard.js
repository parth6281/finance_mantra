import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Divider, Typography } from '@mui/material';
import './dashboard.css';
import styled from '@mui/styled-engine';
import income from '../../public/images/income.jpg';
import expense from '../../public/images/expense.jpg';
import DataTable from '../../components/datagrid';

const SPaper = styled(Paper)({ backgroundColor: '#f5f5f5' });

export default function Dashboard() {
    return (
        <div class="overview">
            <Box className="overview-box-container">
                <SPaper sx={{ height: 200 }} elevation={8}>
                    <Box className="overview-box">
                        <Typography variant='h3'>Income</Typography>
                        <Typography variant='h5'>$2000</Typography>
                    </Box>
                </SPaper >
                <SPaper sx={{ height: 200, }} elevation={8} className="overview-box-wrapper">
                    <Box className="overview-box">
                        <Typography variant='h3'>Expense</Typography>
                        <Typography variant='h5'>$2000</Typography>
                    </Box>
                </SPaper >
                <SPaper sx={{ height: 200, }} elevation={8} className="overview-box-wrapper">
                    <Box className="overview-box">
                        <Typography variant='h3'>Total Savings</Typography>
                        <Typography variant='h5'>$2000</Typography>
                    </Box>
                </SPaper >
            </Box >


            <div className="recent-container">
                <h2>Recent Incomes</h2>
                <div className="recent">
                    <div>
                        <img src={income} className="img"></img>
                    </div>
                    <Box className="recent-data">
                        <DataTable />
                    </Box>
                </div>
                <h2>Recent Expenses</h2>
                <div className="recent">
                    <div>
                        <img src={expense} className="img"></img>
                    </div>
                    <div className="recent-data">
                        <DataTable />
                    </div>
                </div>
            </div>
        </div>
    )
}