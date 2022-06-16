import { Row, Col, Select, Table } from "antd";
import axios from "axios";
import {io} from 'socket.io-client'
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectPriceSource,
  selectPrices,
  selectTicker,
  updatePriceSource,
  updatePrices,
  updateTicker
} from "./stockSlice";
import styles from "./Stock.module.css";

const { Option } = Select;

function Stock() {
  const dispatch = useDispatch();

  
  const [dataSource, setDataSource] = useState([])
  const [selectedTicket, setSelectedTicket] = useState(null)

  const priceSources = useSelector(selectPriceSource);
  const tickers = useSelector(selectTicker);
  const prices = useSelector(selectPrices);



  useEffect(() => {
    getSourceData();
    sockets()
  }, []);

  useEffect(() => {
    const mapAgain = new Map(Object.entries(prices));

    const seletcedPrices = mapAgain.get(selectedTicket)

    if(seletcedPrices) {
    
      setDataSource(seletcedPrices)
    }else{
      setDataSource([])
    }
    
  }, [prices, selectedTicket]);


  const getSourceData = async () => {
    const resSources = await axios.get("http://localhost:4000/stock/sources");
    dispatch(updatePriceSource(resSources?.data))

    const resPrices = await axios.get("http://localhost:4000/stock/sources/prices");
    dispatch(updatePrices(resPrices?.data))
  };

  const sockets =() => {
    const socket = io('http://localhost:3001')
    socket.on('connect', ()=>console.log(socket.id))
    socket.on('connect_error', ()=>{
      setTimeout(()=>socket.connect(),5000)
    })
   socket.on('prices', (data)=> dispatch(updatePrices(data)))
   socket.on('disconnect',()=> dispatch(updatePrices([])))
  }

  const handleChangePriceSource = (value) => {
    const res = priceSources?.filter(res=> res.source === value)
    dispatch(updateTicker(res[0].tickers))
  };

  const handleChangeTickers = (value) => {
    setSelectedTicket(value)
  }

  const columns = [
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  return (
    <Row
      className={styles.container}
      type="flex"
      justify="center"
      align="middle"
    >
      <Col>
        <Row justify="space-between">
          <>Price source</>
          <Select onChange={handleChangePriceSource} className={styles.selectWidth}>
            {priceSources?.map((res) => (
              <Option value={res?.source}>{res?.source}</Option>
            ))}
          </Select>
        </Row>

        <Row justify="space-between">
          <>Ticker</>
          <Select  onChange={handleChangeTickers}  className={styles.selectWidth}>
            {tickers?.map((res) => (
              <Option value={res}>{res}</Option>
            ))}
          </Select>
        </Row>

        <Row>
          <Table
            columns={columns}
            dataSource={selectedTicket ? 
              
              dataSource?.map((res, index) => {
              return {
                key: index + 1,
                time: res.time,
                price: res.price,
              };
            }) : []
          
          }
            pagination={false}
          />
        </Row>
      </Col>
    </Row>
  );
}

export default Stock;
