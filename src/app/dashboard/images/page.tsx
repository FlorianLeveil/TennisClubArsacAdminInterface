'use client';
import * as React from 'react';
import type {Metadata} from 'next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import {Plus as PlusIcon} from '@phosphor-icons/react/dist/ssr/Plus';
import {Pencil as PencilIcon} from '@phosphor-icons/react/dist/ssr/Pencil';
import {Modal} from '@mui/base/Modal';
import ModalUnstyled from '@/components/core/modal'
import FilesDropzone from '@/components/core/modal'

import dayjs from 'dayjs';

import {config} from '@/config';
import type {Integration} from '@/components/dashboard/integrations/integrations-card';
import {IntegrationCard} from '@/components/dashboard/integrations/integrations-card';
import {CompaniesFilters} from '@/components/dashboard/integrations/integrations-filters';

// export const metadata = {title: `Images | Dashboard | ${config.site.name}`} satisfies Metadata;

const integrations = [
    {
        id: 'INTEG-004',
        title: 'Slack',
        description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
        logo: '/assets/logo-slack.png',
        installs: 857,
        updatedAt: dayjs().subtract(50, 'minute').subtract(3, 'hour').toDate(),
    },
    {
        id: 'INTEG-003',
        title: 'Lyft',
        description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
        logo: '/assets/logo-lyft.png',
        installs: 406,
        updatedAt: dayjs().subtract(7, 'minute').subtract(4, 'hour').subtract(1, 'day').toDate(),
    },
    {
        id: 'INTEG-002',
        title: 'GitHub',
        description: 'GitHub is a web-based hosting service for version control of code using Git.',
        logo: '/assets/logo-github.png',
        installs: 835,
        updatedAt: dayjs().subtract(31, 'minute').subtract(4, 'hour').subtract(5, 'day').toDate(),
    },
    {
        id: 'INTEG-001',
        title: 'Squarespace',
        description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
        logo: '/assets/logo-squarespace.png',
        installs: 435,
        updatedAt: dayjs().subtract(25, 'minute').subtract(6, 'hour').subtract(6, 'day').toDate(),
    },
] satisfies Integration[];

export default function Page(): React.JSX.Element {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        console.log("TRUE")
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Stack spacing={3}>
            <Stack direction="row" spacing={3}>
                <Stack spacing={1} sx={{flex: '1 1 auto'}}>
                    <Typography variant="h4">Images</Typography>

                </Stack>
                <div>
                    <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)"/>} variant="contained">
                        Add
                    </Button>
                </div>
                <div>
                    <Button startIcon={<PencilIcon fontSize="var(--icon-fontSize-md)"/>} variant="contained"
                            color="success" onClick={handleOpen}>
                        Éditer
                    </Button>
                    <ModalUnstyled open={open} handleClose={handleClose}>
                        <h2>
                            Test de la modal
                        </h2>
                        <FilesDropzone/>
                    </ModalUnstyled>
                </div>
            </Stack>
            <CompaniesFilters/>
            <Grid container spacing={3}>
                {integrations.map((integration) => (
                    <Grid key={integration.id} lg={4} md={6} xs={12}>
                        <IntegrationCard integration={integration}/>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Pagination count={3} size="small"/>
            </Box>
        </Stack>
    );
}
