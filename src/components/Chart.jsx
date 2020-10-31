import React, {useState, useEffect} from 'react';
import { useTheme } from '@material-ui/core/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import './component.style.css'
import axios from 'axios'
// Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];

export default function Chart() {
  const theme = useTheme();
  const [data, setData] = useState([])
  return (
    <table className="size">
      <thead className = "spacing">
      <tr>
        <th>순위</th>
        <th className ="movietitle">영화명</th>
        <th id="change">변동폭</th>
      </tr>
    </thead>
      <tr>
        <td><img src="https://ssl.pstatic.net/imgmovie/2007/img/common/bullet_r_r01.gif" alt="01" width="14" height="13"/></td>
        <td>테넷</td>
        <td><img src="https://ssl.pstatic.net/imgmovie/2007/img/common/icon_na_1.gif" alt="na" width="7" height="10" class="arrow"/></td>
        <td>0</td>
      </tr>
      <tr>
        <td><img src="https://ssl.pstatic.net/imgmovie/2007/img/common/bullet_r_r02.gif" alt="02" width="14" height="13"/></td>
        <td>폰조</td>
        <td><img src="https://ssl.pstatic.net/imgmovie/2007/img/common/icon_up_1.gif" alt="up" width="7" height="10" class="arrow"/></td>
        <td>4</td>
      </tr>
      <tr>
        <td><img src="https://ssl.pstatic.net/imgmovie/2007/img/common/bullet_r_r03.gif" alt="03" width="14" height="13"/></td>
        <td>담보</td>
        <td><img src="https://ssl.pstatic.net/imgmovie/2007/img/common/icon_down_1.gif" alt="down" width="7" height="10" class="arrow"/></td>
        <td>1</td>
      </tr>
      <tr>
        <td><img src="https://ssl.pstatic.net/imgmovie/2007/img/common/bullet_r_r04.gif" alt="04" width="14" height="13"/></td>
        <td>삼진그룹 영어토익반</td>
        <td><img src="https://ssl.pstatic.net/imgmovie/2007/img/common/icon_up_1.gif" alt="up" width="7" height="10" class="arrow"/></td>
        <td>2</td>
      </tr>
      <tr>
        <td><img src="https://ssl.pstatic.net/imgmovie/2007/img/common/bullet_r_r05.gif" alt="05" width="14" height="13"/></td>
        <td>소리도 없이</td>
        <td><img src="https://ssl.pstatic.net/imgmovie/2007/img/common/icon_up_1.gif" alt="up" width="7" height="10" class="arrow"/></td>
        <td>5</td>
      </tr>
    </table>
    // <React.Fragment>
    //   <Title>Today</Title>
    //   <ResponsiveContainer>
    //     <LineChart
    //       data={data}
    //       margin={{
    //         top: 16,
    //         right: 16,
    //         bottom: 0,
    //         left: 24,
    //       }}
    //     >
    //       <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
    //       <YAxis stroke={theme.palette.text.secondary}>
    //         <Label
    //           angle={270}
    //           position="left"
    //           style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
    //         >
    //           Sales ($)
    //         </Label>
    //       </YAxis>
    //       <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
    //     </LineChart>
    //   </ResponsiveContainer>
    // </React.Fragment>
  );
}