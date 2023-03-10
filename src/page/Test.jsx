import {Table} from "antd";
import React, {useEffect} from "react";
import ReactApexChart from 'react-apexcharts';
import {getInfo} from "../service/authServices";
import {useSelector} from "react-redux";
export const Test = () => {
    const [data, setData] = React.useState(0);
    //["angry" ,"disgust","scared", "happy", "sad", "surprised",
    //  "neutral"]
    const [angry, setAngry] = React.useState(0);
    const [disgust, setDisgust] = React.useState(0);
    const [scared, setScared] = React.useState(0);
    const [happy, setHappy] = React.useState(0);
    const [sad, setSad] = React.useState(0);
    const [surprised, setSurprised] = React.useState(0);
    const [neutral, setNeutral] = React.useState(0);
    const [series, setSeries] = React.useState([0,0,0,0,0,0,0]);
    const mailUser = useSelector(state => state.detailUser.uid);
    useEffect(() => {
        getInfo({
            id: mailUser
        }).then(res => {
            setData(res.data);
            const angry = res.data.filter(e => e.emotion === "angry").length;
            const disgust = res.data.filter(e => e.emotion === "disgust").length;
            const scared = res.data.filter(e => e.emotion === "scared").length;
            const happy = res.data.filter(e => e.emotion === "happy").length;
            const sad = res.data.filter(e => e.emotion === "sad").length;
            const surprised = res.data.filter(e => e.emotion === "surprised").length;
            const neutral = res.data.filter(e => e.emotion === "neutral").length;
            setAngry(angry);
            setDisgust(disgust);
            setScared(scared);
            setHappy(happy);
            setSad(sad);
            setSurprised(surprised);
            setNeutral(neutral);
            setSeries([angry,disgust,scared,happy,sad,surprised,neutral]);

            })
        }, [mailUser]);


    console.log(mailUser);



    const columns = [
        {
            title: 'ID',
            dataIndex: 'Uid',
            key: 'Uid',
        },
        {
            title: 'T??n',
            dataIndex: 'name',
            key: 'name',
        },
        {
            'title': 'Ng??y',
            dataIndex: 'date',
            key: 'date',
        },{
            'title': 'Gi???',
            dataIndex: 'time',
            key: 'time',
        }, {
            dataIndex: 'emotion',
            key: 'emotion',
            render: (text) => {
                switch (text) {
                    case "angry":
                        return <div style={{color: '#008ffb'}}>T???c gi???n</div>
                    case "disgust":
                        return <div style={{color: '#00e396'}}>Gh?? t???m</div>
                    case "scared":
                        return <div style={{color: '#feb019'}}>S??? h??i</div>
                    case "happy":
                        return <div style={{color: '#ff4560'}}>Vui v???</div>
                    case "sad":
                        return <div style={{color: '#775dd0'}}>Bu???n</div>
                    case "surprised":
                        return <div style={{color: '#008ffb'}}>Ng???c nhi??n</div>
                    case 'neutral':
                        return <div style={{color: '#00e396'}}>B??nh th?????ng</div>
                    default:
                        return <div style={{color: '#feb019'}}>Kh??ng x??c ?????nh</div>
                }
            },
            'title': 'C???m x??c',
        },{
            'title': 'T??? l???',
            dataIndex: 'ratio',
            key: 'ratio',
        }
    ];

    // const dataSource = [
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 90.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:48:07', 'emotion': 'happy', 'ratio': 81.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'angry', 'ratio': 78.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 81.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 90.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 81.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'surprised', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 90.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 81.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 90.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 81.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'surprised', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 90.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 81.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'surprised', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 90.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 81.32},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'angry', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'happy', 'ratio': 89.12},
    //     {'Uid': '002', 'name': 'Ts???n Gia C?????ng', 'date': '2023-01-11', 'time': '00:49:08', 'emotion': 'neutral', 'ratio': 89.12}
    // ]
    //

    const state = {

        series: series,
        options: {
            chart: {
                width: 380,
                type: 'pie',
            },
            labels: ["T???c gi???n" ,"Gh?? t???m","S??? h??i", "Vui v???", "Bu???n", "Ng???c nhi??n",
                "B??nh th?????ng"],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },


    };
    return (
        <div className='card'>
            <div className="card-header">
                        <h3 className="card-header--title">Chi ti???t h???c sinh</h3>
            </div>
            <div className="card-body">
                <Table dataSource={data} columns={columns} />;
            </div>
            <div className="card-footer">
                <ReactApexChart options={state.options} series={state.series} type="pie" width={500} />
            </div>
        </div>
    )
}