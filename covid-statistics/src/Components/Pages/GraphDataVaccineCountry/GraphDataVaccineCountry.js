import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import styles from './GraphDataVaccineCountry.module.css';

export const GraphDataVaccineCountry = ({ vaccine }) => {
    return (
        <div className={styles.container}>
            <div>
                {vaccine.length > 0 && <>
                    <h3>Simple Vaccine Timeline</h3>
                    {vaccine && (<>
                        <AreaChart
                            width={500}
                            height={400}
                            className={styles.area}
                            data={vaccine}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey={"date"} />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey={"vaccine"} stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </>)}
                </>}
            </div>
        </div>
    )
}
