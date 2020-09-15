import React, {Component} from 'react';
import {
    Layout,
    Skeleton,
    Descriptions,
    Divider,
    notification,
    List,
    Tag,
    Avatar,
    Row,
    Col,
    Statistic,
    Button,
    Modal,
    ConfigProvider,
    Input,
    Rate,
    message, Form, InputNumber, Radio, Progress
} from "antd";

import {WaterWave, Pie} from 'ant-design-pro/lib/Charts';
import 'ant-design-pro/dist/ant-design-pro.css';
import SelectAccount from "./component/SelectAccount"
import BigNumber from "bignumber.js"
import serojs from "serojs"

import "./App.css"
import copy from "copy-text-to-clipboard";
import QRCode from "qrcode";
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import Language from "./Lang"
import identicon from "identicon.js"
import Contract from "./component/contract"
// import popup from 'popup-js-sdk'
import seropp from 'sero-pp'
import axios from 'axios';
import Head from './head.png'
import vip_l from './vip_l.png'
import vip_n from './vip_n.png'

let ct = new Contract();
let Lang = new Language();
const {Header, Content, Footer} = Layout;



let contract = serojs.callContract(ct.abi, ct.address);

let decimal = new BigNumber(10).pow(18);
const {Countdown} = Statistic;

const openNotificationWithIcon = (type, message, desc) => {
    notification[type]({
        message: message,
        description: <p style={{wordBreak: 'normal', whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>{desc}</p>,
        duration: null,
    });
};


const InvestForm = Form.create({name: 'form_in_modal2'})(
    class extends React.Component {

        state = {
            confirmLoading: false,
            estimateReturn: 0,
            estimateLevel: 0,
            ticket: 0.000000,
            amount: 0.000000,
            total: 0.000000,
            minInvest:100//start
        }

        staticTotal() {
            let that = this;
            setTimeout(function () {
                let times = that.props.times;
                let total = new BigNumber(that.state.amount);

                let estimateLevel = 2;
                if (times > 0) {
                    estimateLevel = times;
                } else {
                    if (parseFloat(that.state.amount) >= 5000) {
                        estimateLevel = 3
                    }
                }

                that.setState({
                    total: total.toFixed(6),
                    estimateLevel: estimateLevel
                })
            }, 10)
        }

        render() {
            const {visible, rate, sero, onCancel, onCreate, form, referId,mprate} = this.props;
            const {getFieldDecorator, setFieldsValue} = form;

            setTimeout(function () {
                if (referId && referId !== 0) {
                    setFieldsValue({"ReferId": referId});
                }
            }, 100)

            let that = this;
            return (
                <Modal
                    visible={visible}
                    title={Lang[that.props.lang].account.modal.invest.title}
                    onCancel={onCancel}
                    onOk={() => {
                        this.setState({
                            confirmLoading: true
                        });
                        setTimeout(function () {
                            onCreate(function (res) {
                                that.setState({
                                    confirmLoading: res
                                });
                            });
                        }, 10)
                    }}
                    confirmLoading={this.state.confirmLoading}
                >
                    <Form layout="vertical">
                        <Form.Item label={Lang[that.props.lang].account.modal.invest.referId}>
                            {getFieldDecorator(`ReferId`, {
                                rules: [{required: true, message: `Please Input Refer Id`}],
                            })(<Input style={{width: '60%'}} disabled={!(!referId || referId === 0)}
                                      placeholder={referId ? referId : ""} autoComplete="off"/>)}
                        </Form.Item>
                        <Form.Item
                            label={`${Lang[that.props.lang].account.modal.invest.amount} (Available Balance: ${sero} SERO)`}>
                            {getFieldDecorator('AmountSero', {
                                rules: [{required: true, message: `Please Input Amount! `}],
                            })(<InputNumber min={that.state.minInvest} precision={6} max={parseFloat(sero)} step={100}
                                            style={{width: '60%'}} onChange={(v) => {
                                that.setState({amount: v})
                                that.staticTotal();
                            }} allowClear placeholder="0.000000" autoComplete="off"/>)}
                            <br/>SERO ({'min '+that.state.minInvest+'SERO'})
                        </Form.Item>
                        <p>{Lang[that.props.lang].account.modal.invest.estimate}: <span
                            style={{color: 'rgb(216, 0, 38)'}}>{that.state.amount}</span> (SERO) x <span
                            style={{color: 'rgb(216, 0, 38)'}}>{that.state.estimateLevel} </span>(Times) = <strong
                            style={{color: 'rgb(216, 0, 38)'}}>{new BigNumber(that.state.amount).multipliedBy(that.state.estimateLevel).toFixed(6)} </strong>SERO
                        </p>

                        <p>{Lang[that.props.lang].account.modal.invest.total} : <strong
                            style={{color: 'rgb(216, 0, 38)'}}>{this.state.total}</strong> SERO
                            <strong
                                style={{color: 'rgb(216, 0, 38)'}}>{new BigNumber(this.state.total).div(10).times(mprate).toFixed(6)}</strong> CDOT</p>
                    </Form>
                </Modal>
            );
        }
    },
);


const BuyTokenForm = Form.create({name: 'form_in_modal3'})(
    class extends React.Component {

        state = {
            confirmLoading: false,
            estimateReturn: 0,
            estimateLevel: 0,
            ticket: 0.000000,
            amount: 0.000000,
            total: 0.000000,
            buy_amount: 0.000000,
            ct_conversionRate:0.00
        }

        render() {
            const {visible, rate, sero, onCancel, onCreate, form, referId, conversionRate} = this.props;
            const {getFieldDecorator, setFieldsValue} = form;

            console.log('conversionRate',conversionRate)

            let that = this;
            return (
                <Modal
                    visible={visible}
                    title={Lang[that.props.lang].account.button.exchange}
                    onCancel={onCancel}
                    onOk={() => {
                        this.setState({
                            confirmLoading: true
                        });
                        setTimeout(function () {
                            onCreate(function (res) {
                                that.setState({
                                    confirmLoading: res
                                });
                            });
                        }, 10)
                    }}
                    confirmLoading={this.state.confirmLoading}
                >
                    <Form layout="vertical">
                        <Form.Item
                            label={`${Lang[that.props.lang].account.button.exchange} (Available Balance: ${sero} SERO)`}>
                            {getFieldDecorator('Amount', {
                                rules: [{required: true, message: `Please Input Amount! `}],
                            })(<InputNumber min={0} precision={6} max={parseFloat(sero)} step={100}
                                            style={{width: '60%'}} onChange={(v) => {
                                that.setState({amount: v});
                                console.log('reset amount',v)
                            }} allowClear placeholder="0.000000" autoComplete="off"/>)}
                            <br/>SERO
                        </Form.Item>
                        <p>{Lang[that.props.lang].account.button.exchange}: <span
                            style={{color: 'rgb(216, 0, 38)'}}>{that.state.amount}</span> (SERO) x <span
                            style={{color: 'rgb(216, 0, 38)'}}>{conversionRate} </span>(rate) = <strong
                            style={{color: 'rgb(216, 0, 38)'}}>{new BigNumber(that.state.amount).times(conversionRate).toFixed(6)} </strong>CDOT
                        </p>

                        <p>{Lang[that.props.lang].account.modal.invest.total} : <strong
                            style={{color: 'rgb(216, 0, 38)'}}>{this.state.amount}</strong> SERO</p>
                    </Form>
                </Modal>
            );
        }
    },
);

const WithDrawTokenForm = Form.create({name: 'form_in_modal4'})(
    class extends React.Component {

        state = {
            confirmLoading: false,
            estimateReturn: 0,
            estimateLevel: 0,
            ticket: 0.000000,
            amount: 0.000000,
            total: 0.000000,
            buy_amount: 0.000000,
            hascdot:0.000000
        }

        render() {
            const {visible, rate, sero, onCancel, onCreate, form, referId, hascdot} = this.props;
            const {getFieldDecorator, setFieldsValue} = form;

            // setTimeout(function () {
            //     if (referId && referId !== 0) {
            //         setFieldsValue({"ReferId": referId});
            //     }
            // }, 100)

            let that = this;
            return (
                <Modal
                    visible={visible}
                    title={Lang[that.props.lang].account.button.withdraw}
                    onCancel={onCancel}
                    onOk={() => {
                        this.setState({
                            confirmLoading: true
                        });
                        setTimeout(function () {
                            onCreate(function (res) {
                                that.setState({
                                    confirmLoading: res
                                });
                            });
                        }, 10)
                    }}
                    confirmLoading={this.state.confirmLoading}
                >
                    <Form layout="vertical">
                        <Form.Item
                            label={`${Lang[that.props.lang].account.title.total} (${hascdot} CDOT)`}>
                            {getFieldDecorator('Amount', {
                                rules: [{required: true, message: `Please Input Amount! `}],
                            })(<InputNumber min={0} precision={6} max={parseFloat(hascdot)} step={100}
                                            style={{width: '60%'}} onChange={(v) => {
                                that.setState({amount: v});
                                // that.setState({buy_amount: v});
                                console.log('reset amount',v)
                            }} allowClear placeholder="0.000000" autoComplete="off"/>)}
                            <br/> CDOT
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);

const PaymentTokenForm = Form.create({name: 'form_in_modal5'})(
    class extends React.Component {

        state = {
            confirmLoading: false,
            estimateReturn: 0,
            estimateLevel: 0,
            ticket: 0.000000,
            amount: 0.000000,
            total: 0.000000,
            buy_amount: 0.000000,
            hascdot:0.000000
        }

        render() {
            const {visible, rate, sero, onCancel, onCreate, form, referId, hascdot, accountcdot} = this.props;
            const {getFieldDecorator, setFieldsValue} = form;

            // setTimeout(function () {
            //     if (referId && referId !== 0) {
            //         setFieldsValue({"ReferId": referId});
            //     }
            // }, 100)

            let that = this;
            return (
                <Modal
                    visible={visible}
                    title={Lang[that.props.lang].account.button.deposit}
                    onCancel={onCancel}
                    onOk={() => {
                        this.setState({
                            confirmLoading: true
                        });
                        setTimeout(function () {
                            onCreate(function (res) {
                                that.setState({
                                    confirmLoading: res
                                });
                            });
                        }, 10)
                    }}
                    confirmLoading={this.state.confirmLoading}
                >
                    <Form layout="vertical">
                        <Form.Item
                            label={`${Lang[that.props.lang].account.title.total} (${accountcdot} CDOT)`}>
                            {getFieldDecorator('Amount', {
                                rules: [{required: true, message: `Please Input Amount! `}],
                            })(<InputNumber min={0} precision={6} max={parseFloat(accountcdot)} step={10}
                                            style={{width: '60%'}} onChange={(v) => {
                                that.setState({amount: v});
                                // that.setState({buy_amount: v});
                                console.log('reset amount',v)
                            }} allowClear placeholder="0.000000" autoComplete="off"/>)}
                            <br/> CDOT
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);


const CommunityPermForm = Form.create({name: 'form_in_modal6'})(
    class extends React.Component {

        state = {
            confirmLoading: false,
            estimateReturn: 0,
            estimateLevel: 0,
            ticket: 0.000000,
            amount: 0.000000,
            total: 0.000000,
            buy_amount: 0.000000,
            hascdot:0.000000
        }

        render() {
            const {visible, rate, sero, onCancel, onCreate, form, referId, hascdot, accountcdot} = this.props;
            const {getFieldDecorator, setFieldsValue} = form;


            let that = this;
            return (
                <Modal
                    visible={visible}
                    title={Lang[that.props.lang].project.leaguesetting}
                    onCancel={onCancel}
                    onOk={() => {
                        this.setState({
                            confirmLoading: true
                        });
                        setTimeout(function () {
                            onCreate(function (res) {
                                that.setState({
                                    confirmLoading: res
                                });
                            });
                        }, 10)
                    }}
                    confirmLoading={this.state.confirmLoading}
                >
                    <Form layout="vertical">
                        <Form.Item label={Lang[that.props.lang].project.leaguesetting}>
                            {getFieldDecorator(`refereeCode`, {
                                rules: [{required: true, message: `Please Input refereeCode Id`}],
                            })(<Input style={{width: '60%'}} autoComplete="off" placeholder={Lang[that.props.lang].project.refereecode}/>)}
                        </Form.Item>
                        <span>{Lang[that.props.lang].project.settinginfo}</span>
                    </Form>
                </Modal>
            );
        }
    },
);

class ContentPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            showAccountSelect: false,
            showDeposit: false,
            showBuyToken:false,
            showWithDrawToken:false,
            showPaymentToken:false,
            showCommunityPerm:false,
            showInvest: false,
            showShareProfit: false,
            showWithdraw: false,

            modal1Visible: false,

            currentAccount: {},
            balanceSero: 0,

            ct_id: 0,
            ct_details: {},

            lang: "zh_CN",
            showMarketsetting:"none"
        }
    }

    componentWillMount() {
        // let lang = localStorage.getItem("lang");
        // if (!lang) {
        //     lang = "zh_CN";
        //     localStorage.setItem("lang", "zh_CN");
        // }
        // this.setState({
        //     lang: lang,
        // })
        let that = this;
        seropp.init(ct.dapp, function (res) {

            console.log('seroppinit',res)
            if (res) {
                that.showSelectAccount();
                if (!that.state.showAccountSelect) {
                    setTimeout(function () {
                        that.getDetail();
                        that.getContractSeroBalance();
                        that.getContractTokenBalance();
                        that.getMarketAdmin();
                        // that.getPre();
                        that.getConversionRate();
                    }, 3000)
                }
                seropp.getInfo(function (info) {
                    localStorage.setItem("lang", info.language);
                    that.setState({
                        lang: info.language,
                        nodeAddress: info.rpc
                    })
                });

                setInterval(function () {
                    that.getDetail();
                    that.getContractSeroBalance();
                    that.getContractTokenBalance();
                    that.getMarketAdmin();
                    // that.getPre();
                    that.getConversionRate();
                    if (that.state.currentAccount.PK) {
                        that.getAccount(that.state.currentAccount.PK)
                    }
                }, 60 * 1000)
            }
        });
    }

    showSelectAccount() {

        if (!this.state.currentAccount.PK) {
            let pk = localStorage.getItem("accountPk");
            if (pk) {
                this.getAccount(pk)
                this.setState({
                    loading: false
                })
            } else {
                this.setState({
                    showAccountSelect: true
                })
            }
        }
    }

    showDeposit() {

        this.setState({
            showDeposit: true
        })

        let canvas = document.getElementById('qrImg')
        QRCode.toCanvas(canvas, this.state.currentAccount.MainPKr, function (error) {
            if (error) console.error(error)
            console.log('success!');
        })
    }


    selectAccount = ac => {
        this.setState({
            currentAccount: ac,
            showAccountSelect: false,
            loading: false
        });
        localStorage.setItem("accountPk", ac.PK);
        window.location.reload();

    }

    hiddenAccount = () => {
        this.setState({
            showAccountSelect: false,
        });
    }

    onChange = checked => {
        this.setState({loading: !checked});
    };

    getContractSeroBalance() {
        let that = this;
        that.callMethod("balanceOfSero", [], function (res) {
            if (res) {
                console.log('balanceOfSero',new BigNumber(res).dividedBy(decimal).toFixed(6))
                that.setState({
                    ct_balanceOfSero: new BigNumber(res, 10).dividedBy(decimal).toFixed(6),
                })
            }
        })
    }

    getContractTokenBalance() {
        let that = this;
        that.callMethod("balanceOfToken", [], function (res) {
            if (res) {
                that.setState({
                    ct_balanceOfToken: new BigNumber(res, 10).dividedBy(decimal).toFixed(6),
                })
            }
        })
    }


    //exhangerate
    getConversionRate(){
        let that = this;
        that.callMethod("conversionRate", [], function (res) {
            if (res) {
                that.setState({
                    ct_conversionRateSero: new BigNumber(res[0], 10).dividedBy(decimal).toString(),
                    ct_conversionRateCdot: new BigNumber(res[1], 10).dividedBy(decimal).toString(),
                    ct_conversionRate:new BigNumber(res[1], 10).dividedBy(decimal).div(new BigNumber(res[0], 10).dividedBy(decimal)).toString()
                })
            }
        })
    }

    //marketAddress
    getMarketAdmin(){
        let that = this;
        that.callMethod("getMarketAdmin", [], function (res) {
            if (res) {
                console.log('marketadmin',res);
                that.postSeroRpc("sero_getFullAddress", [[res]], function(res2){
                    if(res2.result){
                        that.setState({
                            marketAddress:res2.result[res],
                            showMarketsetting:that.state.currentAccount.MainPKr == res2.result[res] ? 'block':'none'
                        })
                    }
                });

            }
        })
    }

    postSeroRpc(_method, _params, callback) {
        let data = {
            id: 0,
            jsonrpc: "2.0",
            method: _method,
            params: _params,
        };
        axios.post(this.state.nodeAddress + "/rpc", data).then(function (response) {
            let data = response.data
            if (callback) {
                callback(data);
            }
        }).catch(function (error) {
            console.log("req error: ",error)
        })
    }

    //pullup
    getAccount(pk) {
        let that = this;
        seropp.getAccountDetail(pk, function (currentAccount) {
            let balanceSero = 0;
            let balanceCdot = 0;
            let balanceObj = currentAccount.Balance;
            balanceObj.forEach(function (value, currency) {
                if (currency === 'SERO') {
                    balanceSero = new BigNumber(value).dividedBy(decimal).toFixed(6);
                }
                if (currency === 'CDOT') {
                    balanceCdot = new BigNumber(value).dividedBy(decimal).toFixed(6);
                }
            });

            let data = new identicon(pk, 200).toString();
            currentAccount["avatar"] = "data:image/png;base64," + data;
            that.setState({
                currentAccount: currentAccount,
                balanceSero: balanceSero,
                balanceCdot: balanceCdot,
            });
        });
    }


    //=== contract

    getDetail() {
        let that = this;
        let res = that.callMethod("details", [], function (res) {
            console.log('getDetails',res)
            let detail = {
                referId: "",
                largeAreaId: "",
                largeAreaTotal: new BigNumber("0").dividedBy(decimal).toFixed(6),
                amount: new BigNumber("0").dividedBy(decimal).toFixed(6),
                returnAmount: new BigNumber("0").dividedBy(decimal).toFixed(6),
                achievement: new BigNumber("0").dividedBy(decimal).toFixed(6),
                recommendNum: parseInt(new BigNumber("0").toString(10)),
                profitLevel: parseInt(new BigNumber("0").toString(10)),
                value: new BigNumber("0").dividedBy(decimal).toFixed(6),
                star: parseInt(new BigNumber("0").toString(10)),
                isKing: false,
            }
            if (res !== "0x0") {
                if (res) {
                    let data = res;
                    detail = {
                        referId: data[0] == 'JFVVW2ITNSJHF' ? "" : data[0],
                        largeAreaId: data[1] == 'JFVVW2ITNSJHF' ? "" : data[1],
                        largeAreaTotal: new BigNumber(data[2]).dividedBy(decimal).toFixed(6),
                        amount: new BigNumber(data[3]).dividedBy(decimal).toFixed(6),
                        returnAmount: new BigNumber(data[4]).dividedBy(decimal).toFixed(6),
                        achievement: new BigNumber(data[5]).dividedBy(decimal).toFixed(6),
                        recommendNum: parseInt(new BigNumber(data[6]).toString(10)),
                        profitLevel: parseInt(new BigNumber(data[7]).toString(10)),
                        value: new BigNumber(data[8]).dividedBy(decimal).toFixed(6),
                        star: parseInt(new BigNumber(data[9]).toString(10)),
                        isKing: data[10],
                    }

                }

            }
            that.callMethod("id", [], function (id) {
                detail["id"] = (id == "JFVVW2ITNSJHF" ? "" : id);
                that.callMethod("detailsOfIncome", [], function (detailsOfIncome) {
                    console.log('detailsOfIncome',detailsOfIncome);
                    detail["detailsOfIncome"] = detailsOfIncome;
                    that.callMethod("calcuStaticProfit", [], function (calcuStaticProfit) {
                        if (calcuStaticProfit === '0x') {
                            calcuStaticProfit = "0";
                        }
                        console.log('calcuStaticProfit', new BigNumber(calcuStaticProfit).toString())
                        // detail["dayProfit"] = new BigNumber(calcuStaticProfit).dividedBy(decimal).toFixed(6);
                        detail["dayProfit"] = new BigNumber(calcuStaticProfit).toString();

                        console.log("dayProfit", detail["dayProfit"].toString());
                        that.setState({
                            ct_details: detail
                        })
                    });

                });
            });

        });

    }


    callMethod(_method, args, callback) {

        let packData = contract.packData(_method, args);
        let callParams = {
            from: this.state.currentAccount.MainPKr,
            to: ct.address,
            data: packData
        };

        seropp.call(callParams, function (callData, error) {
            if (error) {
                console.log("error::", error);
            } else {
                let res = contract.unPackData(_method, callData);
                callback(res);
            }
        });
    }

    executeMethod(_method, args, value, cy, password, callback) {
        let that = this;

        let packData = contract.packData(_method, args);
        let executeData = {
            from: that.state.currentAccount.PK,
            to: ct.address,
            value: "0x" + value,//SERO
            data: packData,
            gas_price: "0x" + new BigNumber("1000000000").toString(16),
            cy: cy,
        };
        let estimateParam = {
            from: that.state.currentAccount.MainPKr,
            to: ct.address,
            value: "0x" + value,//SERO
            data: packData,
            gas_price: "0x" + new BigNumber("1000000000").toString(16),
            cy: cy,
        };
        // executeData["gas"] = pullup.sero.estimateGas(estimateParam);
        seropp.estimateGas(estimateParam, function (gas, error) {
            if (error) {
                message.error(error);
            } else {
                executeData["gas"] = gas;
                seropp.executeContract(executeData, function (res) {
                    callback(res);
                });
            }
        });
    }


    handleCancel = () => {
        this.setState({
            showDeposit: false
        })
    }

    //====  buyCdot begin
    handleBuyTokenCancel = () => {
        this.setState({showBuyToken: false});
    };

    saveBuyTokenFormRef = formRef => {
        this.formRefbuy = formRef;
    };

    handleBuyTokenCreate = (cb) => {
        let that = this;
        const {form} = this.formRefbuy.props;
        console.log('form',form);
        form.validateFields((err, values) => {
            if (err) {
                if (cb) {
                    cb(false)
                }
                return;
            }
            let amount = form.getFieldValue("Amount");
            // let amount = that.state.buy_amount;
            console.log('amount',amount)
            try {
                this.executeMethod("buyToken", [], new BigNumber(amount).multipliedBy(decimal).toString(16), "SERO", '', function (res) {
                    if (res) {
                        form.resetFields();
                        that.setState({showBuyToken: false});
                        setTimeout(function () {
                            openNotificationWithIcon('success', 'Successful', `${Lang[that.state.lang].toast.tx}${res}`)
                        }, 3000)
                    }
                    if (cb) {
                        cb(false)
                    }
                });
            } catch (err) {
                if (err) {
                    message.error(err.message);
                } else {
                    message.error("request SERO Node error:[" + err.message + "]");
                }
                if (cb) {
                    cb(false)
                }
            }

        });
    };
    //====  buyCdot end

    //====  Invest begin
    handleInvestCancel = () => {
        this.setState({showInvest: false});
    };

    handleInvestCreate = (cb) => {
        let that = this;
        const {form} = this.formRef2.props;
        form.validateFields((err, values) => {
            if (err) {
                if (cb) {
                    cb(false)
                }
                return;
            }
            let amountSero = form.getFieldValue("AmountSero");
            // let ticketSero=form.getFieldValue("TicketSero");
            let referId = form.getFieldValue("ReferId");
            let password = form.getFieldValue("Password");


            if (that.state.ct_details.referId) {
                referId = that.state.ct_details.referId;
            }
            if (new BigNumber(amountSero).comparedTo(new BigNumber(this.state.balanceSero)) > 0) {
                if (cb) {
                    cb(false)
                }
                message.warn(Lang[that.state.lang].toast.lessAmount);
            } else if (parseFloat(amountSero) < 10) {
                if (cb) {
                    cb(false)
                }
                message.warn(Lang[that.state.lang].toast.minInvest);
            } else {
                try {
                    this.executeMethod("invest", [referId], new BigNumber(amountSero).multipliedBy(decimal).toString(16), "SERO", password, function (res) {
                        if (res) {
                            form.resetFields();
                            that.setState({showInvest: false});
                            setTimeout(function () {
                                openNotificationWithIcon('success', 'Successful', `${Lang[that.state.lang].toast.tx}${res}`)
                            }, 3000)
                        }
                        if (cb) {
                            cb(false)
                        }
                    });
                } catch (err) {
                    if (err) {
                        message.error(err.message);
                    } else {
                        message.error("request SERO Node error:[" + err.message + "]");
                    }
                    if (cb) {
                        cb(false)
                    }
                }
            }
        });
    };


    saveInvestFormRef = formRef => {
        this.formRef2 = formRef;
    };


    //====  Invest end

    //==== withdrawToken
    handleWithDrawTokenCancel = () => {
        this.setState({showWithDrawToken: false});
    };

    saveWithDrawTokenFormRef = formRef => {
        this.formRefwd = formRef;
    };

    handleWithDrawTokenCreate = (cb) => {
        let that = this;
        const {form} = this.formRefwd.props;
        console.log('form',form);
        form.validateFields((err, values) => {
            if (err) {
                if (cb) {
                    cb(false)
                }
                return;
            }
            let amount = form.getFieldValue("Amount");
            // let amount = that.state.buy_amount;
            console.log('amount',amount)
            console.log('amount',new BigNumber(amount).multipliedBy(decimal).toString())
            try {
                this.executeMethod("withdrawToken", [new BigNumber(amount).multipliedBy(decimal).toString()], 0, "SERO", '', function (res) {
                    if (res) {
                        form.resetFields();
                        that.setState({showWithDrawToken: false});
                        setTimeout(function () {
                            openNotificationWithIcon('success', 'Successful', `${Lang[that.state.lang].toast.tx}${res}`)
                        }, 3000)
                    }
                    if (cb) {
                        cb(false)
                    }
                });
            } catch (err) {
                if (err) {
                    message.error(err.message);
                } else {
                    message.error("request SERO Node error:[" + err.message + "]");
                }
                if (cb) {
                    cb(false)
                }
            }

        });
    };

    //==== withdrawToken end

    //==== paymentToken
    handlePaymentTokenCancel = () => {
        this.setState({showPaymentToken: false});
    };

    savePaymentTokenFormRef = formRef => {
        this.formRefpm = formRef;
    };

    handlePaymentTokenCreate = (cb) => {
        let that = this;
        const {form} = this.formRefpm.props;
        console.log('form',form);
        form.validateFields((err, values) => {
            if (err) {
                if (cb) {
                    cb(false)
                }
                return;
            }
            let amount = form.getFieldValue("Amount");
            // let amount = that.state.buy_amount;
            console.log('amount',amount)
            console.log('amount',new BigNumber(amount).multipliedBy(decimal).toString())
            try {
                this.executeMethod("paymentToken", [], new BigNumber(amount).multipliedBy(decimal).toString(16), "CDOT", '', function (res) {
                    if (res) {
                        form.resetFields();
                        that.setState({showPaymentToken: false});
                        setTimeout(function () {
                            openNotificationWithIcon('success', 'Successful', `${Lang[that.state.lang].toast.tx}${res}`)
                        }, 3000)
                    }
                    if (cb) {
                        cb(false)
                    }
                });
            } catch (err) {
                if (err) {
                    message.error(err.message);
                } else {
                    message.error("request SERO Node error:[" + err.message + "]");
                }
                if (cb) {
                    cb(false)
                }
            }

        });
    };

    //==== paymentToken end


    //==== CommunityPerm
    handleCommunityPermCancel = () => {
        this.setState({showCommunityPerm: false});
    };

    saveCommunityPermFormRef = formRef => {
        this.formRefco = formRef;
    };

    handleCommunityPermCreate = (cb) => {
        let that = this;
        const {form} = this.formRefco.props;
        console.log('form',form);
        form.validateFields((err, values) => {
            if (err) {
                if (cb) {
                    cb(false)
                }
                return;
            }
            let refereeCode = form.getFieldValue("refereeCode");
            try {
                this.executeMethod("setCommunityPerm", [refereeCode], "0", "SERO", '', function (res) {
                    if (res) {
                        form.resetFields();
                        that.setState({showCommunityPerm: false});
                        setTimeout(function () {
                            openNotificationWithIcon('success', 'Successful', `${Lang[that.state.lang].toast.tx}${res}`)
                        }, 3000)
                    }
                    if (cb) {
                        cb(false)
                    }
                });
            } catch (err) {
                if (err) {
                    message.error(err.message);
                } else {
                    message.error("request SERO Node error:[" + err.message + "]");
                }
                if (cb) {
                    cb(false)
                }
            }

        });
    };

    //==== CommunityPerm end

    shareProfit() {
        let that = this;
        try {
            this.executeMethod("triggerStaticProfit", [], "0", "SERO", '', function (res) {
                if (res) {
                    openNotificationWithIcon('success', 'Successful', `${Lang[that.state.lang].toast.tx}${res}`)
                } else {
                    if (res.error) {
                        message.error(res.error.message);
                    } else {
                        message.error("request SERO Node error:[" + res + "]");
                    }
                }
            });
        } catch (err) {
            if (err) {
                message.error(err.message);
            } else {
                message.error("request SERO Node error:[" + err.message + "]");
            }
        }

    }

    withdraw() {
        let that = this;
        try {
            this.executeMethod("withdrawBalance", [], "0", "SERO", '', function (res) {
                if (res) {
                    openNotificationWithIcon('success', 'Successful', `${Lang[that.state.lang].toast.tx}${res}`)
                } else {
                    if (res.error) {
                        message.error(res.error.message);
                    } else {
                        message.error("request SERO Node error:[" + res + "]");
                    }
                }
            });
        } catch (err) {
            if (err) {
                message.error(err.message);
            } else {
                message.error("request SERO Node error:[" + err.message + "]");
            }
        }
    }

    showRules = () => {
        let that = this;
        Modal.info({
            title: <span style={{color: "#f3ba44", fontWeight: "600"}}>{Lang[that.state.lang].project.rule}</span>,
            okText: "OK",
            icon:"",
            content: <div>
                <span style={{'whiteSpace':'pre-wrap', color: "#FFFFFF"}}>{Lang[that.state.lang].toast.rule}</span>
                <br/>
            </div>
        })
    }
    //==== Buy Ticket begin


    //==== Buy Ticket end

    render() {
        const {loading, showAccountSelect, currentAccount} = this.state;
        let accountName = currentAccount.PK;
        let that = this;
        let staticReward = that.state.ct_details.detailsOfIncome ? new BigNumber(that.state.ct_details.detailsOfIncome[0]).dividedBy(decimal).toFixed(2) : 0;
        let recommendReward = that.state.ct_details.detailsOfIncome ? new BigNumber(that.state.ct_details.detailsOfIncome[1]).dividedBy(decimal).toFixed(2) : 0;
        let nobilityReward = that.state.ct_details.detailsOfIncome ? new BigNumber(that.state.ct_details.detailsOfIncome[2]).dividedBy(decimal).toFixed(2) : 0;
        let vipReward = that.state.ct_details.detailsOfIncome ? new BigNumber(that.state.ct_details.detailsOfIncome[3]).dividedBy(decimal).toFixed(2) : 0;
        let communityReward = that.state.ct_details.detailsOfIncome?new BigNumber(that.state.ct_details.detailsOfIncome[4]).dividedBy(decimal).toFixed(2):0;
        let currentStaticReward = that.state.ct_details.detailsOfIncome?new BigNumber(that.state.ct_details.detailsOfIncome[5]).dividedBy(decimal).toFixed(2):0;
        let currentIncome = that.state.ct_details.detailsOfIncome ? new BigNumber(that.state.ct_details.detailsOfIncome[6]).dividedBy(decimal).toFixed(2):0;;
        let staticTimestamp = that.state.ct_details.detailsOfIncome ? that.state.ct_details.detailsOfIncome[7] : 0;
        let updateTimestamp = that.state.ct_details.detailsOfIncome ? that.state.ct_details.detailsOfIncome[8] : 0;
        let ManageReward = new BigNumber(nobilityReward).plus(new BigNumber(communityReward)).toFixed(2);

        // console.log('incomere:');
        // console.log(staticReward)
        // console.log(recommendReward)
        // console.log(nobilityReward)
        // console.log(vipReward)
        // console.log(communityReward)
        // console.log(currentStaticReward)
        // console.log(currentIncome)
        // console.log(new BigNumber(staticTimestamp).toString())
        // console.log(new BigNumber(updateTimestamp).toString())


        const salesPieData = [
            {
                x: Lang[this.state.lang].account.title.staticReward,
                y: parseFloat(staticReward),
            },
            {
                x: Lang[this.state.lang].account.title.recommendReward,
                y: parseFloat(recommendReward),
            },
            {
                x: Lang[this.state.lang].account.title.nobilityReward,
                y: parseFloat(nobilityReward),
            },
            {
                x: Lang[this.state.lang].account.title.vipReward,
                y: parseFloat(vipReward),
            },

        ];

        // const showChart = parseFloat(staticReward) > 0 || parseFloat(recommendReward) > 0 || parseFloat(nobilityReward) > 0 || parseFloat(vipReward) > 0
        const showChart =false;

        const countDown = nextShareTime();//正式
        // const countDown = new Date(staticTimestamp* 1000).getTime() + 0.5 * 60 * 60 * 1000;//测试30分钟


        let totalReturnDay = this.state.ct_balanceOfSero ? new BigNumber(this.state.ct_balanceOfSero).dividedBy(30).toFixed(6) : "0";
        let returnPercent = 0;

        if (this.state.ct_details.returnAmount && parseFloat(this.state.ct_details.returnAmount) > 0) {
            let a = parseFloat(this.state.ct_details.returnAmount);
            let b = new BigNumber(this.state.ct_details.amount).multipliedBy(this.state.ct_details.profitLevel).toString(10);
            returnPercent = (a * 100 / parseFloat(b)).toFixed(2);
        }

        let showCountDown = new Date(staticTimestamp * 1000).getUTCDate() === parseInt(new Date().getUTCDate());
        // let showCountDown = new Date(countDown).getTime() > new Date().getTime();


        return (
            <div className="App" style={{marginTop: '0px'}}>
                <div className="header-n">
                    <img src={Head} width={"100%"}/>
                    <span style={{
                        float: "left",
                        padding: "15px",
                        position: "relative",
                        top: "-222px",
                        color: "#f3ba44",
                        fontWeight: "600"
                    }} onClick={this.showRules.bind(this)}>{Lang[this.state.lang].project.rule}</span>

                    <span style={{
                        padding: "15px",
                        position: "absolute",
                        top: "-7px",
                        color: "#f3ba44",
                        fontWeight: "600",
                        left: "65px",
                        display:this.state.showMarketsetting,
                    }} onClick={()=>{this.setState({showCommunityPerm: true})}}>{Lang[this.state.lang].project.leaguesetting}</span>
                </div>
                <div className="content-n">
                    <div className="account-n">
                        <div style={{
                            fontSize: '18px',
                            margin: "15px 5px",
                            color: '#fff',
                            textAlign: 'center',
                            textIndent: '-2em'
                        }}>{Lang[this.state.lang].account.title.utxo}</div>
                        <div className={"account-nr"}>
                            <Row>
                                <Col span={12}>

                                    <List.Item.Meta
                                        title={
                                            <span style={{color:'#fff'}}>{accountName ? accountName.slice(0, 10) + "..." + accountName.slice(-10) : ""}</span>
                                        }
                                        description={<Rate count={4}
                                                           value={this.state.ct_details.star ? this.state.ct_details.star : 0}
                                                           disabled/>}
                                    />
                                    <img src={this.state.ct_details.isKing ? vip_l : vip_n} style={{position: 'absolute',
                                        marginTop: '-24px',
                                        right: '10px',
                                        width: '25px'}}/>
                                </Col>
                                <Col span={8} style={{textAlign: 'right', float:'right'}}>
                                    <Button type={"primary"}
                                            style={{borderRadius: '45px',
                                                background: 'linear-gradient(to right, #d42edf 0%,#6b1fcf 100%)',
                                                border: '0'}}
                                            onClick={() => {
                                                this.setState({
                                                    showAccountSelect: true
                                                })
                                            }}>{Lang[this.state.lang].account.title.swith}</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <p style={{textAlign: 'center', marginTop: '5px', color: '#fff', fontSize: '18px'}}>
                                        {this.state.balanceSero} <br/>SERO
                                    </p>
                                </Col>
                                <Col span={12}>
                                    <p style={{textAlign: 'center', marginTop: '5px', color: '#fff', fontSize: '18px'}}>
                                        {this.state.balanceCdot} <br/>CDOT
                                    </p>
                                </Col>

                            </Row>
                            <p style={{textAlign: 'center'}}>
                                <Button type={"primary"} onClick={() => this.showDeposit()}
                                        style={{borderRadius: '45px',
                                            background: 'linear-gradient(to right, #88aafb 0%,#6790fa 100%)',
                                            border: '0'}}>{Lang[this.state.lang].account.button.deposit}</Button>
                            </p>
                        </div>
                    </div>

                    <h2 style={{
                    textAlign: 'center',
                    fontSize: '16px',
                    color: '#fff',
                    marginTop: '10px'
                }}>{Lang[this.state.lang].account.title.contract}</h2>

                    <div className={"contract-tn"}>
                        <div className={"contract-dn"}>
                            <div className="contract-n">
                                <div>
                                    <Row>
                                        <small style={{textAlign: 'center', marginTop: '5px', color: '#fff',display:'block'}}>当前可用(CDOT)</small>
                                        <p style={{textAlign: 'center', marginTop: '5px', color: '#fff', fontSize: '18px'}}>
                                            {this.state.ct_balanceOfToken} CDOT
                                        </p>
                                    </Row>
                                    <Row>
                                        <Col span={8} style={{textAlign:'center'}}>
                                            <Button
                                                    type={"primary"} onClick={() => {
                                                this.setState({showBuyToken: true})
                                            }}
                                            style={{borderRadius: '45px',
                                                background: 'linear-gradient(to right, #88aafb 0%,#6790fa 100%)',
                                                border: '0'}}>{Lang[this.state.lang].account.button.exchange}</Button>
                                        </Col>
                                        <Col span={8} style={{textAlign:'center'}}>
                                            <Button
                                                    type={"primary"} onClick={() => this.setState({showPaymentToken: true})}
                                                    style={{borderRadius: '45px',
                                                        background: 'linear-gradient(to right, #88aafb 0%,#6790fa 100%)',
                                                        border: '0'}}>{Lang[this.state.lang].account.button.deposit}</Button>
                                        </Col>
                                        <Col span={8} style={{textAlign:'center'}}>
                                            <Button
                                                    disabled={new BigNumber(this.state.ct_balanceOfToken ? this.state.ct_balanceOfToken : 0).comparedTo(0) < 1}
                                                    type="primary" onClick={() => {
                                                this.setState({showWithDrawToken: true})
                                            }}
                                                    style={{borderRadius: '45px',
                                                        background: 'linear-gradient(to right, #88aafb 0%,#6790fa 100%)',
                                                        border: '0',color:'#FFFFFF'}}>{Lang[this.state.lang].account.button.withdraw}</Button>
                                        </Col>
                                    </Row>
                                    <Row style={{marginBottom: '35px',
                                        marginTop: '20px'}}>
                                        <Col span={24}>
                                            <small style={{textAlign: 'center', marginTop: '25px', color: '#fff',display:'block'}}>{Lang[this.state.lang].account.title.withdraw}</small>
                                            <span className={"spanx"} style={{textAlign: 'center',display:'block',fontSize:'18px'}}>{new BigNumber(this.state.ct_details.value ? this.state.ct_details.value : 0).toFixed(2)}</span></Col>
                                        <Col span={24} style={{textAlign: 'center'}}>
                                            <Button style={{borderRadius: '45px',
                                                background: 'linear-gradient(to right, #d42edf 0%,#6b1fcf 100%)',
                                                border: '0',
                                                marginTop: 16,
                                            color:'#FFFFFF'}}
                                                    disabled={new BigNumber(this.state.ct_details.value ? this.state.ct_details.value : 0).comparedTo(0) < 1}
                                                    type="primary" onClick={() => {
                                                this.withdraw()
                                            }}>{Lang[this.state.lang].account.button.withdraw}</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12} style={{textAlign:'center'}}><span
                                            className={"spanx"} style={{display:'block',textAlign:'center'}}>{Lang[this.state.lang].account.title.estimatedTotal}<br/>{new BigNumber(this.state.ct_details.amount ? this.state.ct_details.amount : 0).multipliedBy(this.state.ct_details.profitLevel ? this.state.ct_details.profitLevel : 0).toFixed(2)}</span>
                                            <Button style={{borderRadius: '45px',
                                                        background: 'linear-gradient(to right, #88aafb 0%,#6790fa 100%)',
                                                        border: '0',
                                                        marginTop: 16}}
                                                    type={"primary"} onClick={() => {
                                                this.setState({showInvest: true})
                                            }}>{Lang[this.state.lang].account.button.invest}</Button>
                                        </Col>
                                        <Col span={12} style={{textAlign:'center'}}><span
                                            className={"spanx"} style={{display:'block',textAlign:'center'}}>{Lang[this.state.lang].account.title.staticIncome}<br/>{currentStaticReward}</span>
                                            {
                                                showCountDown ?
                                                    <Countdown style={{marginTop: 14}} title="" format="HH:mm:ss"
                                                               value={parseFloat(countDown)} onFinish={() => {
                                                        this.getDetail()
                                                    }}/> : <Button style={{borderRadius: '45px',
                                                        background: 'linear-gradient(to right, #88aafb 0%,#6790fa 100%)',
                                                        border: '0',
                                                        marginTop: 16}} type="primary"
                                                                   disabled={showCountDown} onClick={() => {
                                                        this.shareProfit()
                                                    }}>{Lang[this.state.lang].account.button.trigger}</Button>
                                            }
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    {
                                        showChart ?
                                            <Row style={{textAlign: 'center'}}>
                                                <Col span={24} style={{textAlign: 'center'}}>
                                                    <div>
                                                        {returnPercent > 0 ? <WaterWave height={234}
                                                                                        title={Lang[this.state.lang].account.title.totalReturn}
                                                                                        percent={returnPercent}/> :
                                                            <WaterWave height={234}
                                                                       title={Lang[this.state.lang].account.title.totalReturn}
                                                                       percent={0}/>}
                                                    </div>
                                                </Col>
                                                <Col span={24} style={{textAlign: 'left'}}>
                                                    <Pie
                                                        hasLegend
                                                        animate
                                                        title={Lang[this.state.lang].account.title.totalReturn}
                                                        subTitle={Lang[this.state.lang].account.title.totalReturn}
                                                        total={() => (
                                                            <span
                                                                dangerouslySetInnerHTML={{
                                                                    __html: salesPieData.reduce((pre, now) => now.y + pre, 0),
                                                                }}
                                                            />
                                                        )}
                                                        data={salesPieData}
                                                        valueFormat={val => <span
                                                            dangerouslySetInnerHTML={{__html: val}}/>}
                                                        height={248}
                                                    />
                                                </Col>
                                            </Row> : ""
                                    }
                                </div>
                                <Divider dashed={true}/>
                                <Row style={{textAlign: 'center'}}>
                                    <Col span={12}>
                                        <Statistic title={Lang[this.state.lang].account.title.totalReturnDay}
                                                   value={currentIncome} precision={2}/>
                                    </Col>
                                    <Col span={12}>
                                        <Statistic title={Lang[this.state.lang].account.title.dayIncome}
                                                   value={this.state.ct_details.amount && parseFloat(currentIncome) > 0 ? new BigNumber(currentIncome).div(new BigNumber(this.state.ct_details.amount).times(this.state.ct_details.profitLevel)).times(100).toFixed(2) : "0"}
                                                   suffix={"%"}/>
                                    </Col>

                                </Row>
                                <Row style={{textAlign: 'center'}}>
                                    <p/>
                                    <Col span={12}>
                                        <Statistic title={Lang[this.state.lang].account.title.areaTotal}
                                                   value={this.state.ct_details.largeAreaTotal} precision={2}/>
                                    </Col>
                                    <Col span={12}>
                                        <Statistic title={Lang[this.state.lang].account.title.areaOtherTotal}
                                                   value={new BigNumber(this.state.ct_details.achievement).minus(new BigNumber(this.state.ct_details.largeAreaTotal)).toFixed(2)}
                                                   precision={2}/>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </div>

                    <h2 style={{
                        textAlign: 'center',
                        fontSize: '16px',
                        color: '#fff',
                        marginTop: '10px'
                    }}>{Lang[this.state.lang].project.title}</h2>

                    <div className="content-n">
                        <div className="account-n">
                            <div className={"contract-dn"} style={{padding: '30px 5px'}}>
                                <Row style={{textAlign: 'center'}}>
                                    <Col span={12}>
                                        <Statistic title={Lang[this.state.lang].account.title.staticincome+"(SERO)"}
                                                   value={staticReward} precision={2}/>
                                    </Col>
                                    <Col span={12}>
                                        <Statistic title={Lang[this.state.lang].account.title.recommendincome+"(SERO)"}
                                                   value={recommendReward}
                                                   />
                                    </Col>

                                </Row>
                                <Row style={{textAlign: 'center'}}>
                                    <p/>
                                    <Col span={12}>
                                        <Statistic title={Lang[this.state.lang].account.title.managerincome+"(SERO)"}
                                                   value={ManageReward} precision={2}/>
                                    </Col>
                                    <Col span={12}>
                                        <Statistic title="VIP(SERO)"
                                                   value={vipReward}
                                                   precision={2}/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                    <div className="contract-detail-n">
                        <Skeleton loading={loading}>
                            <Descriptions
                                title={<h2 style={{color: '#fff'}}>{Lang[this.state.lang].project.title}</h2>}>
                                <Descriptions.Item label={Lang[this.state.lang].project.contractAddress}>
                                    <small>{ct.address}</small>
                                </Descriptions.Item>
                            </Descriptions>

                            <span style={{ color: '#FFFFFF'}}>{Lang[this.state.lang].account.title.exchangerate}（SERO/CDOT)</span>
                            <b style={{    display: 'block',
                                fontSize: '20px',
                                marginTop: '5px',
                                color: '#FFFFFF'}}>{new BigNumber(this.state.ct_conversionRateSero).times(10).toFixed(2)}:{new BigNumber(this.state.ct_conversionRateCdot).times(10).toFixed(2)}</b>

                            <Divider dashed={true}/>
                            <Descriptions title={<h4
                                style={{color: '#fff'}}>{Lang[this.state.lang].account.title.investDetail}</h4>}>
                                <Descriptions.Item
                                    label={Lang[this.state.lang].account.title.id}>{this.state.ct_details.id}</Descriptions.Item>
                                <Descriptions.Item
                                    label={Lang[this.state.lang].account.title.referId}>{this.state.ct_details.referId}</Descriptions.Item>
                                <Descriptions.Item
                                    label={Lang[this.state.lang].account.title.areaId}>{this.state.ct_details.largeAreaId}</Descriptions.Item>
                                <Descriptions.Item
                                    label={Lang[this.state.lang].account.title.totalInvest}>{this.state.ct_details.amount}</Descriptions.Item>
                                <Descriptions.Item
                                    label={Lang[this.state.lang].account.title.profitLevel}>{this.state.ct_details.profitLevel}</Descriptions.Item>
                                <Descriptions.Item
                                    label={Lang[this.state.lang].account.title.latestTime}>{convertUTCDate(updateTimestamp)}</Descriptions.Item>
                            </Descriptions>
                        </Skeleton>
                    </div>
                </div>
                <div className="footer-n">
                    <span>风险投资 谨慎参与</span>
                </div>

                <SelectAccount visible={showAccountSelect} selectAccount={this.selectAccount}
                               hiddenAccount={this.hiddenAccount}/>

                <Modal
                    title={Lang[this.state.lang].account.modal.deposit.title}
                    visible={this.state.showDeposit}
                    onCancel={this.handleCancel}
                    footer={null}
                    getContainer={false}
                >
                    <div style={{textAlign: "center"}}>
                        <canvas id="qrImg"></canvas>
                        <p style={{wordBreak: 'normal', whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>
                            <small>{this.state.currentAccount.MainPKr}</small></p>
                        <Button className='copyTxt' type="primary" onClick={() => {
                            copy(this.state.currentAccount.MainPKr);
                            message.success('Copy to clipboard successfully');
                        }}>{Lang[this.state.lang].account.modal.deposit.copy}</Button>
                    </div>
                </Modal>


                <InvestForm
                    wrappedComponentRef={this.saveInvestFormRef}
                    visible={this.state.showInvest}
                    onCancel={this.handleInvestCancel}
                    onCreate={this.handleInvestCreate}
                    sero={this.state.balanceSero}
                    asnow={this.state.ct_details.asnowBalances}
                    // calcuPrincipalProfit={this.calcuPrincipalProfit}
                    lang={this.state.lang}
                    times={this.state.ct_details.profitLevel}
                    referId={this.state.ct_details.referId}
                    mprate={this.state.ct_conversionRate}
                />


                <BuyTokenForm
                    wrappedComponentRef={this.saveBuyTokenFormRef}
                    visible={this.state.showBuyToken}
                    onCancel={this.handleBuyTokenCancel}
                    onCreate={this.handleBuyTokenCreate}
                    sero={this.state.balanceSero}
                    asnow={this.state.ct_details.asnowBalances}
                    // calcuPrincipalProfit={this.calcuPrincipalProfit}
                    lang={this.state.lang}
                    times={this.state.ct_details.profitLevel}
                    referId={this.state.ct_details.referId}
                    conversionRate={this.state.ct_conversionRate}
                />

                <WithDrawTokenForm
                    wrappedComponentRef={this.saveWithDrawTokenFormRef}
                    visible={this.state.showWithDrawToken}
                    onCancel={this.handleWithDrawTokenCancel}
                    onCreate={this.handleWithDrawTokenCreate}
                    sero={this.state.balanceSero}
                    // calcuPrincipalProfit={this.calcuPrincipalProfit}
                    lang={this.state.lang}
                    times={this.state.ct_details.profitLevel}
                    referId={this.state.ct_details.referId}
                    hascdot={this.state.ct_balanceOfToken}
                />

                <PaymentTokenForm
                    wrappedComponentRef={this.savePaymentTokenFormRef}
                    visible={this.state.showPaymentToken}
                    onCancel={this.handlePaymentTokenCancel}
                    onCreate={this.handlePaymentTokenCreate}
                    sero={this.state.balanceSero}
                    accountcdot={this.state.balanceCdot}
                    // calcuPrincipalProfit={this.calcuPrincipalProfit}
                    lang={this.state.lang}
                    times={this.state.ct_details.profitLevel}
                    referId={this.state.ct_details.referId}
                    hascdot={this.state.ct_balanceOfToken}
                />

                <CommunityPermForm
                    wrappedComponentRef={this.saveCommunityPermFormRef}
                    visible={this.state.showCommunityPerm}
                    onCancel={this.handleCommunityPermCancel}
                    onCreate={this.handleCommunityPermCreate}
                    lang={this.state.lang}
                />

            </div>
        );
    }
}


class App extends Component {
    constructor() {
        super();
        this.state = {
            locale: zhCN,
        };
    }

    componentWillMount() {
        let lang = localStorage.getItem("lang");
        let locale = zhCN;
        if (lang) {
            if (lang === "zh_CN") {
                locale = zhCN;
            } else if (lang === "en_US") {
                locale = enUS;
            }
        } else {
            locale = zhCN;
            localStorage.setItem("lang", "zh_CN");
        }

        this.setState({
            locale: locale
        })
    }

    changeLocale = e => {
        const localeValue = e.target.value;
        this.setState({locale: localeValue});
        if (localeValue.locale === "en") {
            localStorage.setItem("lang", "en_US");
        } else if (localeValue.locale === "zh-cn") {
            localStorage.setItem("lang", "zh_CN");
        }
    };

    render() {
        const {locale} = this.state;
        return (
            <div className="App" style={{height: document.documentElement.clientHeight}}>
                <Layout className="layout">
                    {/*<Header className="header">*/}
                    {/*    <div className="logo"><img src={logo}/></div>*/}
                    {/*    <div className="change-locale">*/}
                    {/*        <Radio.Group value={locale} onChange={this.changeLocale}>*/}
                    {/*            <Radio.Button key="en" value={enUS}>*/}
                    {/*                English*/}
                    {/*            </Radio.Button>*/}
                    {/*            <Radio.Button key="cn" value={zhCN}>*/}
                    {/*                中文*/}
                    {/*            </Radio.Button>*/}
                    {/*        </Radio.Group>*/}
                    {/*    </div>*/}
                    {/*</Header>*/}

                    <ConfigProvider locale={locale}>
                        <ContentPage key={locale ? locale.locale : 'en'}/>
                    </ConfigProvider>
                    <Footer style={{textAlign: 'center'}}/>
                </Layout>
            </div>
        );
    }
}

function convertUTCDate(dateTimestamp) {
    if (dateTimestamp && dateTimestamp > 0) {
        let cDate = new Date(dateTimestamp * 1000);
        return appendZero(cDate.getMonth() + 1) + "/" + appendZero(cDate.getDate()) + " " + appendZero(cDate.getHours()) + ":" + appendZero(cDate.getMinutes());
    }
    return ""
}

function nextShareTime() {
    let d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    let year = d.getUTCFullYear();
    let month = d.getUTCMonth();
    let day = d.getUTCDate();

    d = new Date(year, month, day, 0, 0, 0);
    let tz = new Date().getTimezoneOffset() / 60;
    console.log('countdown',d.getTime() + (-tz) * 60 * 60 * 1000);
    return d.getTime() + (-tz) * 60 * 60 * 1000;
}


function appendZero(i) {
    i = i < 10 ? "0" + i : i;
    return i;
}

export default App;
