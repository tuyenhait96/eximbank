import React, { Component } from 'react';
import styled from 'styled-components';
import { tableData } from '../data/dataCard';

const TableStyled = styled.div`
    padding: 0 40px;
    .align-right{
        text-align: right;
        font-weight: bold;
    }
    table{
        user-select: none;
        padding: 0;
        margin: 0;
        border-radius: 5px;
        width: 100%;
        display: block;
        thead {
            background-color: #1aa4e5;
            tr {
                th{
                    font-family: RobotoMedium;
                    font-size: 12px;
                    font-weight: 500;
                    color: #ffffff;
                    border: none;
                    padding: 0;
                    height: 40px;
                    line-height: 40px;
                    width: 8%;
                    &:first-child{
                        border-top-left-radius: 5px;
                        padding-left: 40px;
                    }
                    &:last-child{
                        border-top-right-radius: 5px;
                        padding-right: 40px;
                        text-align: right;
                    }
                }
            }
        }

        td{
            border: none;
            box-shadow: inset 0px -1px 0 0 #008bcc;
            font-family: Roboto;
            font-size: 14px;
            font-weight: 300;
            line-height: 2.89;
            color: #ffffff;
            padding: 0;
            font-family: RobotoLight; 
        }
        
        tbody{
            height: 240px;
            overflow-y: scroll;
            display: block;
            padding: 0 40px;
            background-image: linear-gradient(121deg, #00a1e4, #005d98);
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            scrollbar-width: thin;
            scrollbar-color: rgba(255, 255, 255, 0.5) #005d98;
            tr{
                &:last-child{
                    td{
                        width: 3%;
                    }
                }
            }
        }
    }
`

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: tableData
        }
    }
    
    render() {
        return (
            <TableStyled>
                <table className="table" cellPadding = '0' cellSpacing = '0'>
                    <thead>
                        <tr className = 'table-head'>
                            <th>DATE</th>
                            <th>TYPE</th>
                            <th>DETAILS</th>
                            <th>DEPOSITS</th>
                            <th>WITHDRAWALS</th>
                            <th>BALANCEL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((item, i) =>
                                <tr key = {i} className = 'table-body'>
                                    <td>{item.date}</td>
                                    <td>{item.type}</td>
                                    <td>{item.detail}</td>
                                    <td>{item.deposit}</td>
                                    <td>{item.withdrawal}</td>
                                    <td className = 'align-right'>{item.balance}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </TableStyled>
        );
    }
}

export default Table;