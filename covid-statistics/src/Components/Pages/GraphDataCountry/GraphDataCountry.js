import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import styles from './GraphDataCountry.module.css';

export const GraphDataCountry = ({ covidCases, covidCasesDeath, covidCasesRecovered }) => {

    return (
        <div className={styles.container}>
            <div>
                {covidCases.length > 0 && <>
                    <h3>Confirmed Cases</h3>
                    {covidCases && (<>
                        <AreaChart
                            width={500}
                            height={400}
                            className={styles.area}
                            data={covidCases}
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
                            <Area type="monotone" dataKey={"positive"} stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </>)}
                </>}
            </div>
            <div>
                {covidCases.length > 0 && <>
                    <h3>Deaths</h3>
                    {covidCases && (<>
                        <AreaChart
                            width={500}
                            height={400}
                            className={styles.area}
                            data={covidCasesDeath}
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
                            <Area type="monotone" dataKey={"deaths"} stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </>)}
                </>}
            </div>
            <div>
                {covidCases.length > 0 && <>
                    <h3>Recovered</h3>
                    {covidCases && (<>
                        <AreaChart
                            width={500}
                            height={400}
                            className={styles.area}
                            data={covidCasesRecovered}
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
                            <Area type="monotone" dataKey={"recovered"} stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </>)}
                </>}
            </div>
        </div>
    )
}




