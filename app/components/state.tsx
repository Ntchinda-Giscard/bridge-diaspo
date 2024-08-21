import { Divider, Group, Stack } from '@mantine/core';
import classes from '../css/stat.module.css';
import {stats} from "./stats-into";
import cx from 'clsx'
function StatSection() {
    return ( <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
    <div className = {cx(['flex flex-row p-5', classes.stats])}>
        {
            stats.map((s) => (
                <Group>
                    <Stack>
                        <p className={classes.stats_value}> {s?.value} </p>
                        <p className={classes.stat_label}> {s?.label} </p>
                    </Stack>
                    <Divider mx={15} orientation="vertical" />
                </Group>
                
            ))
        }
    </div>
    </div> );
}

export default StatSection;