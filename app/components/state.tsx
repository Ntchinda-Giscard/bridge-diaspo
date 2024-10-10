import { Divider, Group, Stack } from '@mantine/core';
import classes from '../css/stat.module.css';
import {stats} from "./stats-into";
import cx from 'clsx'
function StatSection() {
    return ( 
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <div className = {cx(['flex flex-col gap-2 md:gap-0 md:flex-row  p-5', classes.stats])}>
            {
                stats.map((s, index) => (
                    <div className="flex flex-row"  key={s?.label}>
                        <div className="flex flex-col">
                            <p className={classes.stats_value}> {s?.value} </p>
                            <p className={classes.stat_label}> {s?.label} </p>
                        </div>
                        <Divider 
                            style={{ display: index === 4 ? 'none' : 'block'  }} 
                            // style ={{ display: 'none' }}
                            mx={15} 
                            orientation="vertical" 
                        />
                    </div>
                    
                ))
            }
        </div>
    </div> );
}

export default StatSection;