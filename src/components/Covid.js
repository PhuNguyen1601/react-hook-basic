import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);
    useEffect(() => {
        axios
            .get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
            .then((res) => {
                let data = res && res.data ? res.data : [];
                if (data && data.length > 0) {
                    data.map((item) => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    });
                }
                setDataCovid(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <table>
            <thead>
                <tr>
                    <th>Confirmed</th>
                    <th>Country</th>
                    <th>Date</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
            </thead>
            <tbody>
                {dataCovid &&
                    dataCovid.length > 0 &&
                    dataCovid.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.Confirmed}</td>
                                <td>{item.Country}</td>
                                <td>{item.Date}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default Covid;
