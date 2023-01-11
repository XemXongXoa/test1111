import {Table} from "antd";
import React, {useEffect, useState} from "react";
import {getUsers} from "../service/authServices";
import {Header} from "./Header";
import {HeaderNav} from "./HeaderNav";
import {FaBeer} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { selecUser} from "../redux/detailUserSlice";
export const Dashboard = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        getUsers({
            search : value
        }).then(res => setData(res.data))
    }, [value]);

   

    useEffect(() => {
        console.log(data);
    }, [data]);

    const handSearch = (e) => {
        setValue(e.target.value);
        console.log(value);
    }

    const navigate = useNavigate();



    const columns = [
        {
            title: 'ID',
            dataIndex: 'Uid',
            key: 'Uid',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            render: (e , record) => (
                <span onClick={
                    async () => {
                        console.log(record.Uid);
                        dispatch(selecUser(record.Uid))
                        await navigate('/detail')
                    }
                } style={{cursor: 'pointer'}}>
                Xem chi tiết
                </span>
            )
        },
    ];

    return (
        <div>
            <Header title = 'Quản lý học sinh'>
                <HeaderNav icon ={<FaBeer/>}/>
            </Header>
       <div className='card'>
          <div className="card-header">
                <span className='card-header--title'>Danh sách học sinh</span>
                <div className="input">
                    <input className='input--search' onChange={handSearch} type="text" placeholder='Tìm kiếm'/>
                </div>
          </div>
           <div className="card-body">
               <Table dataSource={data} columns={columns} />;
           </div>
       </div>
        </div>
   )
}