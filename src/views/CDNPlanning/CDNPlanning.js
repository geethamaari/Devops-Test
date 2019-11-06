import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Label, BarChart, Bar, AreaChart, LineChart, Area, PieChart, Pie, CartesianGrid, ComposedChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Sector, Cell } from 'recharts';
import { Modal, ModalHeader, ModalBody, Row, Col, Card, CardHeader, CardBody, Button, Input, Form, FormGroup,TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import {
    getPlanningCustomerBarChart, getPredictionChartDD, getCacheWidgetDD,getPeakTrafficPredictionChart, getTrafficWidgetDD, getPeakTrafficWidgetDD, getTrafficVolumeWidgetData, getPeakTrafficWidgetData, getCacheWidgetData, getLocalClientTableDD, getPlanCacheIspBarChartDD, getLocalClientBarChartDD, getThirdLocalCDNTableDD, getSecLocalCDNBarChartDD, getLocalCDNtoClientBarChartDD, getPlanLocalClientBarChart, getPlanLocalCDNBarChart, getPlanCacheCDNBarChartDD, getPlanningCDNBarChart, getCacheByISPBarChart, getPlanCacheCDNBarChart, getCacheImpactBarChartDD, getCacheImpactBarChart, getTrafficCoserverBarChartDD, getPlanCDNBarChartDD, getPeakISPBarChartDD, GetCountryList, getClientBarChartDD, getTrafficCoserverBarChart, getPeakTrafficISPBarChart
} from '../../actions';
import classnames from 'classnames';
import Map from "./Map";
import "react-tabs/style/react-tabs.css";



class Planning extends Component {
    constructor(props) {
        super(props);
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleCountryName = this.handleCountryName.bind(this);
        this.handleApplyBtn = this.handleApplyBtn.bind(this);
        this.TooltipCDNLocationFormatter = this.TooltipCDNLocationFormatter.bind(this);
        this.TooltipCilentFormatter = this.TooltipCilentFormatter.bind(this);
        this.TooltipTrafficFormatter = this.TooltipTrafficFormatter.bind(this);
        this.toggleCustomerBarDD = this.toggleCustomerBarDD.bind(this);
        this.toggleCDNBarDD = this.toggleCDNBarDD.bind(this);
        this.togglePeakISPBarDD = this.togglePeakISPBarDD.bind(this);
        this.toggleTrafficBarDD = this.toggleTrafficBarDD.bind(this);
        this.toggleCacheImpactBarDD = this.toggleCacheImpactBarDD.bind(this);
        this.TooltipCacheCDNFormatter = this.TooltipCacheCDNFormatter.bind(this);
        this.TooltipCacheISPFormatter = this.TooltipCacheISPFormatter.bind(this);
        this.TooltipCacheFormatter = this.TooltipCacheFormatter.bind(this);
        this.toggleCacheISPBarDD = this.toggleCacheISPBarDD.bind(this);
        this.toggleCacheCDNBarDD = this.toggleCacheCDNBarDD.bind(this);
        this.TooltipLocalCDNFormatter = this.TooltipLocalCDNFormatter.bind(this);
        this.toggleLocalCDNBarDD = this.toggleLocalCDNBarDD.bind(this);
        this.toggleSecLocalCDNBarDD = this.toggleSecLocalCDNBarDD.bind(this);
        this.TooltipLocalClientFormatter = this.TooltipLocalClientFormatter.bind(this);
        this.TooltipSecLocalBarDDFormatter = this.TooltipSecLocalBarDDFormatter.bind(this);
        this.toggleLocalCDNTableDD = this.toggleLocalCDNTableDD.bind(this);
        this.toggleLocalClientBarDD = this.toggleLocalClientBarDD.bind(this);
        this.TooltipLocalClientBarDDFormatter = this.TooltipLocalClientBarDDFormatter.bind(this);
        this.toggleLocalClientTableDD = this.toggleLocalClientTableDD.bind(this);
        this.toggleCachewidgetDD = this.toggleCachewidgetDD.bind(this);
        this.togglePeakTrafficwidgetDD = this.togglePeakTrafficwidgetDD.bind(this);
        this.toggleTrafficwidgetDD = this.toggleTrafficwidgetDD.bind(this);
        this.onPieEnter = this.onPieEnter.bind(this);
        this.displayInfobox = this.displayInfobox.bind(this);
        this.displayInfoboxs = this.displayInfoboxs.bind(this);
        this.TooltipPredictFormatter = this.TooltipPredictFormatter.bind(this);
        this.toggleHealthMapTab = this.toggleHealthMapTab.bind(this);
        this.toggleCDNMapDD = this.toggleCDNMapDD.bind(this);
        this.toggleCustomerMapDD = this.toggleCustomerMapDD.bind(this);
        this.togglePredictionChartDD = this.togglePredictionChartDD.bind(this);

        this.state = {
            startDate: "2018-10-05",
            endDate: "2018-10-12",
            Country: "All",
            sendMap: [],
            sendInfoBox: [],
            sendMaps: [],
            sendInfoBoxs: [],
            ClientBarChartData: [],
            CDNBarChartData: [],
            CountryNameData: [],
            GetCountry: [],
            TrafficCoserverData: [],
            PeakISPChartData: [],
            ClientBarChartDDData: [],
            CDNBarChartDDData: [],
            PeakISPChartDDData: [],
            TrafficCoserverDDData: [],
            CacheImpactBarData: [],
            CacheImpactBarDDData: [],
            CacheByCDNBarData: [],
            CacheByISPBarData: [],
            CacheISPBarChartDDData: [],
            CacheCDNBarDDData: [],
            LocalCDNBarData: [],
            LocalClientBarData: [],
            LocalCDNtoClientBarData: [],
            SecLocalCDNBarDDData: [],
            LocalCDNBarTableDDData: [],
            LocalClientBarDDData: [],
            LocalClientTableDDData: [],
            TrafficVolumeWidgetData: [],
            TrafficCDNLocalData: [],
            TrafficCDNNonLocalData: [],
            TrafficVolumeData: [],
            CacheWidgetData: [],
            CacheEfficiencyData: [],
            PeakTrafficWidgetData: [],
            PeakTrafficData: [],
            cachewidgetDDData: [],
            PeakTrafficWidgetDDData: [],
            TrafficwidgetDDData: [],
            PredictionChartData: [],
            PredictDate:[],
            activeIndex: 0,
            activeMapTab:'1',


            CustomerBarDDModel: false,
            CDNBarDDModel: false,
            loading: false,
            PeakISPBarDDModel: false,
            TrafficBarDDModel: false,
            CacheImpactDDModel: false,
            CacheISPDDModel: false,
            CacheCDNDDModel: false,
            SecLocalCDNBarDDModel: false,
            LocalCDNTableDDModel: false,
            LocalClientBarDDModel: false,
            LocalClientTableDDModel: false,
            CachewidgetDDModel: false,
            PeakTrafficwidgetDDModel: false,
            TrafficwidgetDDModel: false,
            CDNMapDDModel: false,
            CustomerMapDDModel: false,
            PredictionChartDDModel:false
        };
        props.GetCountryList();
        props.getPlanningCDNBarChart();
        props.getPlanningCustomerBarChart();
        props.getTrafficCoserverBarChart();
        props.getPeakTrafficISPBarChart();
        props.getCacheImpactBarChart();
        props.getCacheByISPBarChart();
        props.getPlanCacheCDNBarChart();
        props.getPlanLocalCDNBarChart();
        props.getPlanLocalClientBarChart();
        props.getTrafficVolumeWidgetData();
        props.getCacheWidgetData();
        props.getPeakTrafficWidgetData();
        props.getPeakTrafficPredictionChart();
    }

    componentDidMount() {
        setTimeout(() => this.getMapDetail(), 2000);
        setTimeout(() => this.getMapDetails(), 3000);
    }

    componentWillUpdate(nextProps) {

        if (this.props.TrafficVolumeWidgetData != nextProps.TrafficVolumeWidgetData) {
            if (nextProps.TrafficVolumeWidgetData) {
                this.state.TrafficVolumeWidgetData = nextProps.TrafficVolumeWidgetData;
                this.state.TrafficCDNLocalData = nextProps.TrafficVolumeWidgetData[0].CDN_local;
                this.state.TrafficCDNNonLocalData = nextProps.TrafficVolumeWidgetData[0].CDN_non_local;
                this.state.TrafficVolumeData = nextProps.TrafficVolumeWidgetData[0].total_volume;
            }
        }
        if (this.props.CacheWidgetData !== nextProps.CacheWidgetData) {
            if (nextProps.CacheWidgetData) {
                this.state.CacheWidgetData = nextProps.CacheWidgetData;
                this.state.CacheEfficiencyData = nextProps.CacheWidgetData[0].cache_efficiency;

            }
        }
        if (this.props.PeakTrafficWidgetData !== nextProps.PeakTrafficWidgetData) {
            if (nextProps.PeakTrafficWidgetData) {
                this.state.PeakTrafficWidgetData = nextProps.PeakTrafficWidgetData;
                this.state.PeakTrafficData = nextProps.PeakTrafficWidgetData[0].peak_traffic_rate;

            }
        }
        if (this.props.CountryNameData !== nextProps.CountryNameData) {
            if (nextProps.CountryNameData) {
                var CountryName = nextProps.CountryNameData;
                var CC = [];
                CountryName.map((val, index) => {
                    var Country = val.Country;
                    if (!CC.includes(Country)) {
                        CC.push(Country);
                    }
                });
                this.setState({
                    GetCountry: CC,
                    CountryNameData: nextProps.CountryNameData
                });
            }
        }

        if (this.props.ClientBarChartData !== nextProps.ClientBarChartData) {
            if (nextProps.ClientBarChartData) {
                this.setState({
                    ClientBarChartData: nextProps.ClientBarChartData,
                    loading: false
                });
            }
        }
        if (this.props.PredictionChartData !== nextProps.PredictionChartData) {
            if (nextProps.PredictionChartData) {
                this.setState({
                    PredictionChartData: nextProps.PredictionChartData,
                    loading: false
                });
            }
        }
        if (this.props.CDNBarChartData !== nextProps.CDNBarChartData) {
            if (nextProps.CDNBarChartData) {
                this.setState({
                    CDNBarChartData: nextProps.CDNBarChartData,
                    loading: false
                });
            }
        }
        if (this.props.CacheImpactBarData !== nextProps.CacheImpactBarData) {
            if (nextProps.CacheImpactBarData) {
                this.setState({
                    CacheImpactBarData: nextProps.CacheImpactBarData,
                    loading: false
                });
            }
        }
        if (this.props.CacheByCDNBarData !== nextProps.CacheByCDNBarData) {
            if (nextProps.CacheByCDNBarData) {
                this.setState({
                    CacheByCDNBarData: nextProps.CacheByCDNBarData,
                    loading: false
                });
            }
        }
        if (this.props.CacheByISPBarData !== nextProps.CacheByISPBarData) {
            if (nextProps.CacheByISPBarData) {
                this.setState({
                    CacheByISPBarData: nextProps.CacheByISPBarData,
                    loading: false
                });
            }
        }
        if (this.props.TrafficCoserverData !== nextProps.TrafficCoserverData) {
            if (nextProps.TrafficCoserverData) {
                this.setState({
                    TrafficCoserverData: nextProps.TrafficCoserverData,
                    loading: false
                });
            }
        }
        if (this.props.PeakISPChartData !== nextProps.PeakISPChartData) {
            if (nextProps.PeakISPChartData) {
                let chartValue = [];
                for (var i = 0; i < nextProps.PeakISPChartData.length; i++) {
                    chartValue.push({ name: nextProps.PeakISPChartData[i].ISP, value: nextProps.PeakISPChartData[i].peak_traffic_rate, RawID: nextProps.PeakISPChartData[i].raw_asn });
                }
                this.setState({
                    PeakISPChartData: chartValue
                });
            }
        }
        if (this.props.LocalCDNBarData !== nextProps.LocalCDNBarData) {
            if (nextProps.LocalCDNBarData) {
                this.setState({
                    LocalCDNBarData: nextProps.LocalCDNBarData,
                    loading: false
                });
            }
        }
        if (this.props.LocalClientBarData !== nextProps.LocalClientBarData) {
            if (nextProps.LocalClientBarData) {
                this.setState({
                    LocalClientBarData: nextProps.LocalClientBarData,
                    loading: false
                });
            }
        }
        if (this.props.ClientBarChartDDData !== nextProps.ClientBarChartDDData) {
            if (nextProps.ClientBarChartDDData !== 0) {
                this.setState({
                    ClientBarChartDDData: nextProps.ClientBarChartDDData,
                    loading: false
                });
            }
        }
        if (this.props.cachewidgetDDData !== nextProps.cachewidgetDDData) {
            if (nextProps.cachewidgetDDData !== 0) {
                this.setState({
                    cachewidgetDDData: nextProps.cachewidgetDDData,
                    loading: false
                });
            }
        }
        if (this.props.CDNBarChartDDData !== nextProps.CDNBarChartDDData) {
            if (nextProps.CDNBarChartDDData !== 0) {
                this.setState({
                    CDNBarChartDDData: nextProps.CDNBarChartDDData,
                    loading: false
                });
            }
        }
        if (this.props.PeakISPChartDDData !== nextProps.PeakISPChartDDData) {
            if (nextProps.PeakISPChartDDData !== 0) {
                this.setState({
                    PeakISPChartDDData: nextProps.PeakISPChartDDData,
                    loading: false
                });
            }
        }
        if (this.props.TrafficCoserverDDData !== nextProps.TrafficCoserverDDData) {
            if (nextProps.TrafficCoserverDDData !== 0) {
                this.setState({
                    TrafficCoserverDDData: nextProps.TrafficCoserverDDData,
                    loading: false
                });
            }
        }
        if (this.props.CacheImpactBarDDData !== nextProps.CacheImpactBarDDData) {
            if (nextProps.CacheImpactBarDDData !== 0) {
                this.setState({
                    CacheImpactBarDDData: nextProps.CacheImpactBarDDData,
                    loading: false
                });
            }
        }
        if (this.props.CacheISPBarChartDDData !== nextProps.CacheISPBarChartDDData) {
            if (nextProps.CacheISPBarChartDDData !== 0) {
                this.setState({
                    CacheISPBarChartDDData: nextProps.CacheISPBarChartDDData,
                    loading: false
                });
            }
        }
        if (this.props.CacheCDNBarDDData !== nextProps.CacheCDNBarDDData) {
            if (nextProps.CacheCDNBarDDData !== 0) {
                this.setState({
                    CacheCDNBarDDData: nextProps.CacheCDNBarDDData,
                    loading: false
                });
            }
        }
        if (this.props.LocalCDNtoClientBarData !== nextProps.LocalCDNtoClientBarData) {
            if (nextProps.LocalCDNtoClientBarData !== 0) {
                this.setState({
                    LocalCDNtoClientBarData: nextProps.LocalCDNtoClientBarData,
                    loading: false
                });
            }
        }
        if (this.props.SecLocalCDNBarDDData !== nextProps.SecLocalCDNBarDDData) {
            if (nextProps.SecLocalCDNBarDDData !== 0) {
                this.setState({
                    SecLocalCDNBarDDData: nextProps.SecLocalCDNBarDDData,
                    loading: false
                });
            }
        }
        if (this.props.PredictionChartDDData !== nextProps.PredictionChartDDData) {
            if (nextProps.PredictionChartDDData !== 0) {
                this.setState({
                    PredictionChartDDData: nextProps.PredictionChartDDData,
                    loading: false
                });
            }
        }
        if (this.props.LocalCDNBarTableDDData !== nextProps.LocalCDNBarTableDDData) {
            if (nextProps.LocalCDNBarTableDDData !== 0) {
                this.setState({
                    LocalCDNBarTableDDData: nextProps.LocalCDNBarTableDDData,
                    loading: false
                });
            }
        }
        if (this.props.LocalClientBarDDData !== nextProps.LocalClientBarDDData) {
            if (nextProps.LocalClientBarDDData !== 0) {
                this.setState({
                    LocalClientBarDDData: nextProps.LocalClientBarDDData,
                    loading: false
                });
            }
        }
        if (this.props.PeakTrafficWidgetDDData !== nextProps.PeakTrafficWidgetDDData) {
            if (nextProps.PeakTrafficWidgetDDData !== 0) {
                this.setState({
                    PeakTrafficWidgetDDData: nextProps.PeakTrafficWidgetDDData,
                    loading: false
                });
            }
        }
        if (this.props.TrafficwidgetDDData !== nextProps.TrafficwidgetDDData) {
            if (nextProps.TrafficwidgetDDData !== 0) {
                this.setState({
                    TrafficwidgetDDData: nextProps.TrafficwidgetDDData,
                    loading: false
                });
            }
        }
        if (this.props.LocalClientTableDDData !== nextProps.LocalClientTableDDData) {
            if (nextProps.LocalClientTableDDData !== 0) {
                this.setState({
                    LocalClientTableDDData: nextProps.LocalClientTableDDData,
                    loading: false
                });
            }
        }

    }
    getCCName() {
        var CC = [];
        var CountryNameData = this.state.CountryNameData;
        CountryNameData.map((val, index) => {
            var Country = val.Country;
            if (!CC.includes(Country)) {
                CC.push(Country);
            }
        });
        this.setState({
            GetCountry: CC
        });
    }
    toggleHealthMapTab(tab) {
        if (this.state.activeMapTab !== tab) {
            this.setState({
                activeMapTab: tab
            });
        }
    }
    toggleCustomerBarDD(event) {
        this.setState({
            CCName: event.Location,
            CustomerBarDDModel: !this.state.CustomerBarDDModel
        }, () => {
            if (event === undefined) {
                let startDate = "";
                let CC = "";
            }
            else if (event) {
                let startDate = this.state.startDate;
                let CC = event.Location;
                this.setState({ loading: true }, () => {
                    this.props.getClientBarChartDD(startDate, CC);
                });
            }
        });
    }
    togglePredictionChartDD(event) {
        this.setState({
           
            PredictionChartDDModel: !this.state.PredictionChartDDModel
        }, () => {
            if (event.payload === undefined) {
                let startDate = "";
                let CC = "";
            }
            else if (event.payload) {
                this.setState({
                    PredictDate: event.payload.time_bucket
                });
                let startDate = event.payload.time_bucket;
                let CC = this.state.Country;
                this.setState({ loading: true }, () => {
                    this.props.getPredictionChartDD(startDate, CC);
                });
            }
        });
    }
    toggleCustomerMapDD(event) {
        this.setState({
            CCName: event,
            CustomerMapDDModel: !this.state.CustomerMapDDModel
        }, () => {
            if (event === undefined) {
                let startDate = "";
                let CC = "";
            }
            else if (event) {
                let startDate = this.state.startDate;
                let CC = event;
                this.setState({ loading: true }, () => {
                    this.props.getClientBarChartDD(startDate, CC);
                });
            }
        });
    }
    toggleCachewidgetDD(event) {
        this.setState({
            CachewidgetDDModel: !this.state.CachewidgetDDModel
        }, () => {
            if (event === undefined) {
                let startDate = "";
                let CC = "";
            }
            else if (event) {
                let startDate = this.state.startDate;
                let CC = this.state.Country;
                this.setState({ loading: true }, () => {
                    this.props.getCacheWidgetDD(startDate, CC);
                });
            }
        });
    }
    togglePeakTrafficwidgetDD(event) {
        this.setState({
            PeakTrafficwidgetDDModel: !this.state.PeakTrafficwidgetDDModel
        }, () => {
            if (event === undefined) {
                let startDate = "";
            }
            else if (event) {
                let startDate = this.state.startDate;
                this.setState({ loading: true }, () => {
                    this.props.getPeakTrafficWidgetDD(startDate);
                });
            }
        });
    }
    toggleTrafficwidgetDD(event) {
        this.setState({
            TrafficwidgetDDModel: !this.state.TrafficwidgetDDModel
        }, () => {
            if (event === undefined) {
                let startDate = "";
                let CC = "";
            }
            else if (event) {
                let startDate = this.state.startDate;
                let CC = this.state.Country;
                this.setState({ loading: true }, () => {
                    this.props.getTrafficWidgetDD(startDate, CC);
                });
            }
        });
    }

    toggleCDNMapDD(event,values) {
        if (values === 1) {
            let startDate = this.state.startDate;
            let ID = event;
            this.setState({
                IdName: event,
                CDNMapDDModel: !this.state.CDNMapDDModel
            }, () => {
                this.setState({ loading: true }, () => {
                    this.props.getPlanCDNBarChartDD(startDate, ID);
                });
            });
        }
        else {
            let startDate = this.state.startDate;
            let ID = event;
            this.setState({
                CDNMapDDModel: !this.state.CDNMapDDModel
            }, () => {
                this.setState({ loading: true }, () => {
                    this.props.getPlanCDNBarChartDD(startDate, ID);
                });
            });
        }
    }
    toggleCDNBarDD(event) {
        this.setState({
            IdName: event.Distr_id_geo,
            CDNBarDDModel: !this.state.CDNBarDDModel
        }, () => {
            if (event == undefined) {
                let startDate = "";
                let ID = "";
            }
            else {
                let startDate = this.state.startDate;
                let ID = event.Distr_id_geo;
                this.setState({ loading: true }, () => {
                    this.props.getPlanCDNBarChartDD(startDate, ID);
                });
            }
        });
    }
    togglePeakISPBarDD(event) {
        this.setState({
            PeakISPBarDDModel: !this.state.PeakISPBarDDModel
        }, () => {
            if (event.payload === undefined) {
                let startDate = "";
                let CC = "";
                let RawID = "";
            }
            else if (event.payload) {
                this.setState({
                    Raw: event.payload.RawID
                });
                let startDate = this.state.startDate;
                let CC = this.state.Country;
                let RawID = event.payload.RawID;
                this.setState({ loading: true }, () => {
                    this.props.getPeakISPBarChartDD(startDate, CC, RawID);
                });
            }
        });
    }
    toggleTrafficBarDD(event) {
        this.setState({
            TrafficBarDDModel: !this.state.TrafficBarDDModel
        }, () => {
            if (event.payload === undefined) {
                let startDate = "";
                let ID = "";
                let CC = "";
            }
            else if (event.payload) {
                this.setState({
                    TrafficBarId: event.payload.coserver_id
                });
                let startDate = this.state.startDate;
                let ID = event.payload.coserver_id;
                let CC = this.state.Country;
                this.setState({ loading: true }, () => {
                    this.props.getTrafficCoserverBarChartDD(startDate, ID, CC);
                });

            }
        });
    }
    toggleSecLocalCDNBarDD(event) {
        this.setState({
            SecLocalCDNBarDDModel: !this.state.SecLocalCDNBarDDModel
        }, () => {
            if (event === undefined) {
                let startDate = "";
                let ID = "";
                let CC = "";
            }
            else if (event.payload) {
                this.setState({
                    SecCDNBarId: event.client_id_geo
                });
                let startDate = this.state.startDate;
                let ID = this.state.CDNCID;
                let CC = event.client_id_geo;
                this.setState({ loading: true }, () => {
                    this.props.getSecLocalCDNBarChartDD(startDate, ID, CC);
                });

            }
        });
    }
    toggleCacheImpactBarDD(event) {
        this.setState({
            CacheImpactDDModel: !this.state.CacheImpactDDModel
        }, () => {
            if (event === undefined) {
                let startDate = "";
                let ID = "";
                let CC = "";
            }
            else if (event) {
                this.setState({
                    CacheImpactBarId: event.Coserver_id
                });
                let startDate = this.state.startDate;
                let ID = event.Coserver_id;
                let CC = this.state.Country;
                this.setState({ loading: true }, () => {
                    this.props.getCacheImpactBarChartDD(startDate, ID, CC);
                });

            }
        });
    }
    toggleLocalCDNTableDD(event) {
        this.setState({
            LocalCDNTableDDModel: !this.state.LocalCDNTableDDModel
        }, () => {
            if (event === undefined) {
                let startDate = "";
                let CC = "";
                let ID = "";
                let ASN = "";
            }
            else if (event) {
                this.setState({
                    ASNId: event.organization
                });
                let startDate = this.state.startDate;
                let CC = this.state.CDNCID;
                let ID = this.state.SecCDNBarId;
                let ASN = event.organization;
                this.setState({ loading: true }, () => {
                    this.props.getThirdLocalCDNTableDD(startDate, CC, ID, ASN);
                });

            }
        });
    }
    toggleCacheISPBarDD(event) {
        this.setState({
            CacheISPDDModel: !this.state.CacheISPDDModel
        }, () => {
            if (event.payload === undefined) {
                let startDate = "";
                let Raw = "";
                let CC = "";
            }
            else if (event.payload) {
                this.setState({
                    CacheIspBarId: event.payload.raw_asn
                });
                let startDate = this.state.startDate;
                let Raw = event.payload.raw_asn;
                let CC = this.state.Country;
                this.setState({ loading: true }, () => {
                    this.props.getPlanCacheIspBarChartDD(startDate, Raw, CC);
                });

            }
        });
    }
    toggleCacheCDNBarDD(event) {
        this.setState({
            CacheCDNDDModel: !this.state.CacheCDNDDModel
        }, () => {
            if (event === undefined) {
                let startDate = "";
                let CC = "";
            }
            else if (event) {
                this.setState({
                    CacheCDNBarId: event.distr_id_geo
                });
                let startDate = this.state.startDate;
                let CC = event.distr_id_geo;
                this.setState({ loading: true }, () => {
                    this.props.getPlanCacheCDNBarChartDD(startDate, CC);
                });

            }
        });
    }
    toggleLocalCDNBarDD(event) {
        this.setState({
            LocalCDNBarDDModel: !this.state.LocalCDNBarDDModel
        }, () => {
            if (event.payload === undefined) {
                let startDate = "";
                let CC = "";
            }
            else if (event.payload) {
                this.setState({
                    CDNCID: event.payload.distr_id_geo
                });
                let startDate = this.state.startDate;
                let CC = event.payload.distr_id_geo;
                this.setState({ loading: true }, () => {
                    this.props.getLocalCDNtoClientBarChartDD(startDate, CC);  
                });
            }
        });
    }
    toggleLocalClientBarDD(event) {
        this.setState({
            LocalClientBarDDModel: !this.state.LocalClientBarDDModel
        }, () => {
            if (event.payload === undefined) {
                let startDate = "";
                let CC = "";
            }
            else if (event.payload) {
                this.setState({
                    ClientCID: event.payload.client_id_geo
                });
                let startDate = this.state.startDate;
                let CC = event.payload.client_id_geo;
                this.setState({ loading: true }, () => {
                    this.props.getLocalClientBarChartDD(startDate, CC);
                });
            }
        });
    }
    toggleLocalClientTableDD(event) {
        this.setState({
            LocalClientTableDDModel: !this.state.LocalClientTableDDModel
        }, () => {
            if (event === undefined) {
                let startDate = "";
                let ID = "";
                let CC = "";
            }
            else if (event) {
                this.setState({
                    ClientID: event.distr_id_geo
                });
                let startDate = this.state.startDate;
                let ID = this.state.ClientCID;
                let CC = event.distr_id_geo;
                this.setState({ loading: true }, () => {
                    this.props.getLocalClientTableDD(startDate, ID, CC);
                });

            }
        });
    }
    handleStartDate(event) {
        this.setState({
            startDate: event.target.value
        });
    }

    handleCountryName(event) {
        if (event === null) {
            var sendVal = this.state.Country;
            this.getCCName(sendVal);
            this.setState({
                Country: sendVal
            });
        }
        else if (event !== null) {
            this.getCCName(event.target.value);
            this.setState({
                Country: event.target.value
            });
        }

    }
    handleApplyBtn(event) {
        var s = this.state.startDate;
        var c = this.state.Country;
        const Dates = {
            startDate: s,
            Country: c
        };
        this.props.getPlanningCustomerBarChart(Dates);
        this.props.getPlanningCDNBarChart(Dates);
        this.props.getTrafficCoserverBarChart(Dates);
        this.props.getPeakTrafficISPBarChart(Dates);
        this.props.getCacheImpactBarChart(Dates);
        this.props.getPlanCacheCDNBarChart(Dates);
        this.props.getCacheByISPBarChart(Dates);
        this.props.getPlanLocalCDNBarChart(Dates);
        this.props.getPlanLocalClientBarChart(Dates);
        this.props.getTrafficVolumeWidgetData(Dates);
        this.props.getCacheWidgetData(Dates);
        this.props.getPeakTrafficWidgetData(Dates);
        event.preventDefault();
    }

    getMapDetail() {
        var map, heatGradientData;
        var maxPopulation = 1;
        map = new Microsoft.Maps.Map(document.getElementById('myMap1'), {
            /* No need to set credentials if already passed in URL */
            center: new Microsoft.Maps.Location(39.01, -98.48),
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            zoom: 4
        });

        var dataLayer = new Microsoft.Maps.EntityCollection();
        map.entities.push(dataLayer);

        var infoboxLayer = new Microsoft.Maps.EntityCollection();
        map.entities.push(infoboxLayer);

        var infobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(0, 0), { visible: false });
        infoboxLayer.push(infobox);
        //Create a legend.
        createLegend(maxPopulation);
        //Load the Bing Spatial Data Services module.
        Microsoft.Maps.loadModule('Microsoft.Maps.SpatialDataService', () => {
            var worldBounds = Microsoft.Maps.LocationRect.fromEdges(90, -180, -90, 180);
            //Get all states by doing an intersection test against a bounding box of the world and have up to 52 results returned.
            var queryOptions = {
                queryUrl: 'https://spatial.virtualearth.net/REST/v1/data/755aa60032b24cb1bfb54e8a6d59c229/USCensus2010_States/States',
                spatialFilter: {
                    spatialFilterType: 'intersects',
                    intersects: worldBounds
                },
                top: 52
            };
            var mapData;
            var mapData1 = $.ajax({
                url: "https://cdnlogapi.azurewebsites.net/api/CdnLogapi/GetPeakTrafficRateforCDN?Start_Date=2018-10-05", async: false, success: (result) => {
                    mapData = JSON.parse(result);
                }
            });
            var datas = [];
            //var t = mapData[1].RebufferPercent;
            Microsoft.Maps.SpatialDataService.QueryAPIManager.search(queryOptions, map, (data) => {
                //Loop through results and set the fill color of the polygons based on the population property.
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < mapData.length; j++) {
                        if (mapData[j].Distr_id_geo == data[i].metadata.StateCode) {
                            data[i].metadata.Population = mapData[j].PeakTrafficRate;
                            data[i].setOptions({
                                fillColor: getLegendColor(data[i].metadata.Population, maxPopulation)
                            });
                            data[i].Metadata = {
                                title: mapData[j].Distr_id_geo,
                                description: mapData[j].PeakTrafficRate
                            };
                            Microsoft.Maps.Events.addHandler(data[i], 'mouseover', this.displayInfobox);
                            datas.push(data[i]);
                        }
                    }
                }
                //Add results to the map.
                map.entities.push(datas);
            });
        });
        this.setState({
            sendMap: map,
            sendInfoBox: infobox
        });
        function createLegend(maxValue) {
            var canvas = document.getElementById('legendCanvas1');
            var ctx = canvas.getContext('2d');
            //Create a linear gradient for the legend.
            var colorGradient = {
                '0.00': 'rgba(0,255,0,255)',
                '0.50': 'rgba(255,255,0,255)',
                '1.00': 'rgba(255,0,0,255)' // Red
            };
            var grd = ctx.createLinearGradient(0, 0, 256, 0);
            for (var c in colorGradient) {
                grd.addColorStop(c, colorGradient[c]);
            }
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            //Store the pixel information from the legend.
            heatGradientData = ctx.getImageData(0, 0, canvas.width, 1);
        }
        function getLegendColor(value, maxValue) {
            value = (value > maxValue) ? maxValue : value;
            //Calculate the pixel data index from the ratio of value/maxValue.
            var idx = Math.round((value / maxValue) * 256) * 4 - 4;
            if (idx < 0) {
                idx = 0;
            }
            //Create an RGBA color from the pixel data at the calculated index.
            return 'rgba(' + heatGradientData.data[idx] + ',' + heatGradientData.data[idx + 1] + ',' + heatGradientData.data[idx + 2] + ',' + '0.5)';
        }
    }
    displayInfobox(e) {
        if (e.target) {
            var point = new Microsoft.Maps.Point(e.getX(), e.getY());
            var loc = this.state.sendMap.tryPixelToLocation(point);

            this.state.sendInfoBox.setLocation(loc);

            //var opt = e.target.metadata;
            if (e.targetType === 'polygon') {

                this.state.sendInfoBox.setLocation(e.location);
                this.state.sendInfoBox.setOptions({
                    visible: true, title: "State: " + e.target.Metadata.title, description: "PeakTrafficRate: " + e.target.Metadata.description + " Gb/s", actions: [{
                        label: 'View Details', eventHandler: () => this.toggleCDNMapDD(e.target.Metadata.title, 1)
                    }]
                });
            }
        }
    }

    getMapDetails() {
        var map, heatGradientData;
        var maxPopulation = 1;
        map = new Microsoft.Maps.Map(document.getElementById('myMap2'), {
            /* No need to set credentials if already passed in URL */
            center: new Microsoft.Maps.Location(39.01, -98.48),
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            zoom: 4
        });

        var dataLayer = new Microsoft.Maps.EntityCollection();
        map.entities.push(dataLayer);

        var infoboxLayer = new Microsoft.Maps.EntityCollection();
        map.entities.push(infoboxLayer);

        var infobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(0, 0), { visible: false });
        infoboxLayer.push(infobox);
        //Create a legend.
        createLegend(maxPopulation);
        //Load the Bing Spatial Data Services module.
        Microsoft.Maps.loadModule('Microsoft.Maps.SpatialDataService', () => {
            var worldBounds = Microsoft.Maps.LocationRect.fromEdges(90, -180, -90, 180);
            //Get all states by doing an intersection test against a bounding box of the world and have up to 52 results returned.
            var queryOptions = {
                queryUrl: 'https://spatial.virtualearth.net/REST/v1/data/755aa60032b24cb1bfb54e8a6d59c229/USCensus2010_States/States',
                spatialFilter: {
                    spatialFilterType: 'intersects',
                    intersects: worldBounds
                },
                top: 52
            };
            var mapData;
            var mapData1 = $.ajax({
                url: "https://cdnlogapi.azurewebsites.net/api/CdnLogapi/GetPeakTrafficRateforClient?Start_Date=2018-10-05", async: false, success: (result) => {
                    mapData = JSON.parse(result);
                }
            });
            var datas = [];
            //var t = mapData[1].RebufferPercent;
            Microsoft.Maps.SpatialDataService.QueryAPIManager.search(queryOptions, map, (data) => {
                //Loop through results and set the fill color of the polygons based on the population property.
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < mapData.length; j++) {
                        var mapLocation = mapData[j].Location.split("-")[1]
                        if (mapLocation == data[i].metadata.StateCode) {
                            data[i].metadata.Population = mapData[j].PeakTrafficRate;
                            data[i].setOptions({
                                fillColor: getLegendColor(data[i].metadata.Population, maxPopulation)
                            });
                            data[i].Metadata = {
                                title: mapLocation,
                                description: mapData[j].PeakTrafficRate
                            };
                            Microsoft.Maps.Events.addHandler(data[i], 'mouseover', this.displayInfoboxs);
                            datas.push(data[i]);
                        }
                    }
                }
                //Add results to the map.
                map.entities.push(datas);
            });
        });
        this.setState({
            sendMaps: map,
            sendInfoBoxs: infobox
        });
        function createLegend(maxValue) {
            var canvas = document.getElementById('legendCanvas2');
            var ctx = canvas.getContext('2d');
            //Create a linear gradient for the legend.
            var colorGradient = {
                '0.00': 'rgba(0,255,0,255)',
                '0.50': 'rgba(255,255,0,255)',
                '1.00': 'rgba(255,0,0,255)' // Red
            };
            var grd = ctx.createLinearGradient(0, 0, 256, 0);
            for (var c in colorGradient) {
                grd.addColorStop(c, colorGradient[c]);
            }
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            //Store the pixel information from the legend.
            heatGradientData = ctx.getImageData(0, 0, canvas.width, 1);
        }
        function getLegendColor(value, maxValue) {
            value = (value > maxValue) ? maxValue : value;
            //Calculate the pixel data index from the ratio of value/maxValue.
            var idx = Math.round((value / maxValue) * 256) * 4 - 4;
            if (idx < 0) {
                idx = 0;
            }
            //Create an RGBA color from the pixel data at the calculated index.
            return 'rgba(' + heatGradientData.data[idx] + ',' + heatGradientData.data[idx + 1] + ',' + heatGradientData.data[idx + 2] + ',' + '0.5)';
        }
    }
    displayInfoboxs(e) {
        if (e.target) {
            var point = new Microsoft.Maps.Point(e.getX(), e.getY());
            var loc = this.state.sendMaps.tryPixelToLocation(point);

            this.state.sendInfoBoxs.setLocation(loc);

            //var opt = e.target.metadata;
            if (e.targetType === 'polygon') {

                this.state.sendInfoBoxs.setLocation(e.location);
                this.state.sendInfoBoxs.setOptions({
                    visible: true, title: "State: " + e.target.Metadata.title, description: "PeakTrafficRate: " + e.target.Metadata.description + " Gb/s", actions: [{
                        label: 'View Details', eventHandler: () => this.toggleCDNMapDD(e.target.Metadata.title, 1)
                    }]
                });
            }
        }
    }


    TooltipCilentFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.Location}</b> <br />
                    </span>
                    <span>
                        <b>Peak Traffic Rate : {e.payload[0].payload.PeakTrafficRate} Gb/s</b> <br />
                    </span>
                </div>);
        }
    }
    TooltipLocalBarDDFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.client_id_geo}</b> <br />
                    </span>
                    <span>
                        <b>Local: {e.payload[0].payload.Local} GB</b> <br />
                    </span>
                    <span>
                        <b>Non Local: {e.payload[0].payload.Non_Local} GB</b> <br />
                    </span>
                </div>);
        }
    }
    TooltipLocalClientBarDDFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.distr_id_geo}</b> <br />
                    </span>
                    <span>
                        <b>Local: {e.payload[0].payload.Local} GB</b> <br />
                    </span>
                    <span>
                        <b>Non Local: {e.payload[0].payload.Non_Local} GB</b> <br />
                    </span>
                </div>);
        }
    }
    TooltipCDNLocationFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.Distr_id_geo}</b> <br />
                    </span>
                    <span>
                        <b>Peak Traffic Rate : {e.payload[0].payload.PeakTrafficRate} Gb/s</b> <br />
                    </span>
                </div>);
        }
    }
    TooltipTrafficFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.coserver_id}</b> <br />
                    </span>
                    <span>
                        <b>Traffic : {e.payload[0].payload.traffic} GB</b> <br />
                    </span>
                </div>);
        }
    }
    TooltipISPFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.ISP}</b> <br />
                    </span>
                    <span>
                        <b>Peak Traffic Rate : {e.payload[0].payload.peak_traffic_rate} Gb/s</b> <br />
                    </span>
                    <span>
                        <b>Traffic Rate : {e.payload[0].payload.Trafficvolume} Gb/s</b> <br />
                    </span>
                    <span>
                        <b>Traffic: {e.payload[0].payload.PTpercentage} %</b> <br />
                    </span>

                </div>);
        }
    }
    TooltipCacheCDNFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.distr_id_geo}</b> <br />
                    </span>
                    <span>
                        <b>Cache Efficiency : {e.payload[0].payload.cache_efficiency} %</b> <br />
                    </span>
                    <span>
                        <b>Traffic Rate : {e.payload[0].payload.Volume} GB</b> <br />
                    </span>
                </div>);
        }
    }
    TooltipPredictFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.time_bucket}</b> <br />
                    </span>
                    <span>
                        <b>{e.payload[0].payload.ActualVsPredicted}</b> <br />
                    </span>
                    <span>
                        <b>Peak Traffic Rate : {e.payload[0].payload.peak_traffic_rate_gigabits} Gb/s</b> <br />
                    </span>
                </div>);
        }
    }
    TooltipCacheISPFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.organization}</b> <br />
                    </span>
                    <span>
                        <b>Cache Efficiency : {e.payload[0].payload.CacheEfficiency} %</b> <br />
                    </span>
                </div>);
        }
    }
    TooltipCacheFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.Coserver_id}</b> <br />
                    </span>
                    <span>
                        <b>Cache Efficiency : {e.payload[0].payload.cache_efficiency} %</b> <br />
                    </span>
                    <span>
                        <b>Cache Missed Impact : {e.payload[0].payload.ImpactPercentage} %</b> <br />
                    </span>
                </div>);
        }
    }
    TooltipSecLocalBarDDFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.organization}</b> <br />
                    </span>
                    <span>
                        <b>Local: {e.payload[0].payload.Client_Local} GB</b> <br />
                    </span>
                    <span>
                        <b>Non Local : {e.payload[0].payload.Client_non_local} GB</b> <br />
                    </span>
                </div>);
        }
    }
    TooltipLocalCDNFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.distr_id_geo}</b> <br />
                    </span>
                    <span>
                        <b>Local : {e.payload[0].payload.Local} GB</b> <br />
                    </span>
                    <span>
                        <b>Non Local: {e.payload[0].payload.Non_Local} GB</b> <br />
                    </span>
                    <span>
                        <b>Total Volume: {e.payload[0].payload.total} GB</b> <br />
                    </span>
                </div>);
        }
    }
    TooltipLocalClientFormatter(e) {
        if (e.active && e.payload !== null && e.payload[0] !== null) {
            return (
                <div className="custom-tooltip">
                    <span>
                        <b>{e.payload[0].payload.client_id_geo}</b> <br />
                    </span>
                    <span>
                        <b>Local: {e.payload[0].payload.Local} GB</b> <br />
                    </span>
                    <span>
                        <b>Non Local: {e.payload[0].payload.Non_Local} GB</b> <br />
                    </span>
                    <span>
                        <b>Total Volume: {e.payload[0].payload.total} GB</b> <br />
                    </span>
                </div>);
        }
    }
    onPieEnter(data, index) {
        this.setState({
            activeIndex: index
        });
    };

    render() {
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#808080', '#FF0000', '#800000', '#00FF00', '#800080', '#C0C0C0'];
        const renderActiveShape = (props) => {
            const RADIAN = Math.PI / 180;
            const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
                fill, payload, percent, value } = props;
            const sin = Math.sin(-RADIAN * midAngle);
            const cos = Math.cos(-RADIAN * midAngle);
            const sx = cx + (outerRadius + 10) * cos;
            const sy = cy + (outerRadius + 10) * sin;
            const mx = cx + (outerRadius + 30) * cos;
            const my = cy + (outerRadius + 30) * sin;
            const ex = mx + (cos >= 0 ? 1 : -1) * 22;
            const ey = my;
            const textAnchor = cos >= 0 ? 'start' : 'end';

            return (
                <g>
                    <text x={230} y={0} dy={12} textAnchor="middle" verticalAnchor="" fill={fill}>{payload.name}</text>
                    <Sector
                        cx={cx}
                        cy={cy}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        fill={fill}
                    />
                    <Sector
                        cx={cx}
                        cy={cy}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        innerRadius={outerRadius + 6}
                        outerRadius={outerRadius + 10}
                        fill={fill}
                    />
                    <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                    <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#fff">{`${value}`}</text>
                    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#fff">
                        {`(Rate ${(percent * 100).toFixed(2)}%)`}
                    </text>
                </g>
            );
        };
        const { loading } = this.state;
        const LoadingSpinner = () => (
            <div className="loading">
                <i className="fa fa-spinner fa-spin" />Loading...
            </div>
        );

        var CC = this.state.GetCountry;
        let CCOptions = [];
        CC.map((val, index) => {
            CCOptions.push(<option value={val}>{val}</option>);
        });
        const customizeDot = (event) => {
            if (event.payload.ActualVsPredicted == "Actual") {
                return (
                    <circle r="3" stroke="#f5f5f5" strokeWidth="1" fill="#f5f5f5" cx={event.cx - 0} cy={event.cy - 0} onClick={this.togglePredictionChartDD} />
                );
            }
            else {
                return (
                    <circle r="3" stroke="#FF0000" strokeWidth="1" className="lastBullet" fill="#FF0000" cx={event.cx - 0} cy={event.cy - 0} />
                );
            }
        };
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Form inline className="dateForm">
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 startDateAdj">
                                <span className="mr-sm-2" >Start Date: </span>
                                <Input type="date" name="date" id="exampleDate" defaultValue={this.state.startDate} onChange={this.handleStartDate} />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 startDateAdj">
                                <span className="mr-sm-2">End Date: </span>
                                <Input type="date" name="date" id="exampleDate" defaultValue={this.state.endDate} />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <span className="mr-sm-2" >Country: </span>
                                <Input type="select" name="select" id="exampleSelect" value={this.state.Country} onChange={this.handleCountryName}>
                                    <option>All</option>
                                    {CCOptions}
                                </Input>
                            </FormGroup>
                            <Button color="success" className="apply-btn" onClick={this.handleApplyBtn}>Apply</Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6" lg="5" className="widgetSize">
                        <Row className="row-eq-height">
                            <Col xs="12" sm="6" lg="6">
                                <Card className="cursorPointer">
                                    <CardBody className="widgetHeight" onClick={this.togglePeakTrafficwidgetDD}>
                                        <Row>
                                            <Col>
                                                <i className="fas fa-chart-line bufferIcons" />
                                                <h5 className="widgetsTitles">Peak Traffic Rate</h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h4 className="text-center">{this.state.PeakTrafficData}Gb/s</h4>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="12" sm="6" lg="6">
                                <Card className="cursorPointer">
                                    <CardBody className="widgetHeight" onClick={this.toggleCachewidgetDD}>
                                        <Row>
                                            <Col>
                                                <i className="fas fa-download bufferIcons " />
                                                <h5 className="widgetsTitles">Cache Efficiency</h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h4 className="text-center">{this.state.CacheEfficiencyData}%</h4>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="row-eq-height">
                            <Col xs="12" sm="12" lg="12">
                                <Card className="cursorPointer">
                                    <CardBody className="widgetHeight" onClick={this.toggleTrafficwidgetDD}>
                                        <Row>
                                            <Col>
                                                <i className="fas fa-exchange-alt bufferIcons" />
                                                <h5 className="widgetsTitlesTraffic">Traffic Volume</h5>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h4 className="text-center">{this.state.TrafficVolumeData}GB</h4>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="12" lg="6">
                                                <span className="Local">Local- {this.state.TrafficCDNLocalData}GB</span>
                                            </Col>
                                            <Col xs="12" sm="12" lg="6">
                                                <span className="NonLocal pull-right">Non Local- {this.state.TrafficCDNNonLocalData}GB</span>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="row-eq-height">
                            <Col xs="12" sm="12" lg="12">
                                <Card className="piechartSty">
                                    <CardBody className="buffersChart" />
                                    <CardHeader> <i className="fas fa-chart-pie fa-lg" /> Peak Traffic Rate By ISP</CardHeader>
                                    <ResponsiveContainer height={420} width="100%">
                                        <PieChart height={420} width={300}>
                                            <Pie data={this.state.PeakISPChartData}
                                                dataKey="value"
                                                labelLine={false}
                                                innerRadius={40}
                                                outerRadius={100}
                                                fill="#8884d8"
                                                activeIndex={this.state.activeIndex}
                                                onMouseEnter={this.onPieEnter}
                                                activeShape={renderActiveShape}
                                                onClick={this.togglePeakISPBarDD}
                                            >
                                                {
                                                    this.state.PeakISPChartData.map((entry, index) => <Cell key="2" fill={COLORS[index % COLORS.length]} />)
                                                }
                                            </Pie>
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                            <Col xs="12" sm="12" lg="7">
                        <Card>
                            <CardHeader><i className="fas fa-map"/> Peak Traffic Rate</CardHeader>
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink className={classnames({ active: this.state.activeMapTab === '1' })}
                                            onClick={() => { this.toggleHealthMapTab('1'); }}> By CDN Location </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className={classnames({ active: this.state.activeMapTab === '2' })}
                                            onClick={() => { this.toggleHealthMapTab('2'); }}> By Client Location </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeMapTab}>
                                    <TabPane tabId="1">
                                            <CardBody className="cardBodyheight">
                                                <div id='myMap1' className="mapStyle"/>
                                                <div id="legend1"/>
                                            </CardBody>
                                    </TabPane>
                                    <TabPane tabId="2">
                                    <CardBody className="cardBodyheight">
                                        <div id='myMap2' className="mapStyle" />
                                        <div id="legend2" />
                                    </CardBody>
                                    </TabPane>
                                </TabContent>
                            </Card>
                        </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <Card>
                            <CardBody>
                                <CardHeader><i className="fas fa-chart-bar fa-lg" />  Peak Traffic Rate (Top 10)</CardHeader>
                                <Tabs className="">
                                    <TabList>
                                        <Tab>By CDN Location</Tab>
                                        <Tab>By Client Location</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <ResponsiveContainer height={360} width="100%">
                                            <BarChart width={420} height={350} data={this.state.CDNBarChartData}
                                                margin={{ top: 5, right: 30, left: 30, bottom: 50 }}>
                                                <XAxis dataKey="Distr_id_geo" angle={-50} textAnchor="end" interval={0} tick={{ fill: 'white' }}>
                                                    <Label fill="#fff" value='CDN Location' position='bottom' dy={20} style={{ textAnchor: 'middle' }} />
                                                </XAxis>
                                                <YAxis stroke="#FFF">
                                                    <Label angle={-90} fill="#fff" value='Peak Traffic Rate (Gb/s)' position='insideLeft' style={{ textAnchor: 'middle' }} />
                                                </YAxis>
                                                <Tooltip content={this.TooltipCDNLocationFormatter} cursor={{ fill: '#29363d' }} />
                                                <Bar dataKey="PeakTrafficRate" name="Peak Traffic Rate" cursor="pointer" label={{ fill: '#fff', position: 'top' }} fill="#82ca9d" onClick={this.toggleCDNBarDD} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </TabPanel>
                                    <TabPanel>
                                        <ResponsiveContainer height={360} width="100%">
                                            <BarChart width={420} height={360} data={this.state.ClientBarChartData}
                                                margin={{ top: 15, right: 30, left: 30, bottom: 40 }}>
                                                <XAxis dataKey="Location" angle={-38} textAnchor="end" interval={0} tick={{ fill: 'white' }}>
                                                    <Label fill="#fff" value='Client Location' position='bottom' dy={20} style={{ textAnchor: 'middle' }} />
                                                </XAxis>
                                                <YAxis type="number" stroke="#FFF">
                                                    <Label fill="#fff" angle={-90} value='Peak Traffic Rate (Gb/s)' position='insideLeft' style={{ textAnchor: 'middle' }} />
                                                </YAxis>
                                                <Tooltip content={this.TooltipCilentFormatter} cursor={{ fill: '#29363d' }} />
                                                <Bar dataKey="PeakTrafficRate" name="Peak Traffic Rate" fill="#82ca9d" label={{ fill: '#fff', position: 'top' }} cursor="pointer" onClick={this.toggleCustomerBarDD} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </TabPanel>
                                </Tabs>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <Card>
                            <CardBody>
                                <CardHeader><i className="fas fa-chart-bar fa-lg" /> Localization (Top 20)</CardHeader>
                                <Tabs className="">
                                    <TabList>
                                        <Tab>By CDN Location</Tab>
                                        <Tab>By Client Location</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className="BarLegend">
                                            <div><Button className="InBound" /><span>Local</span></div>
                                            <div><Button className="OutBound" /><span>Non Local</span></div>
                                        </div>
                                        <ResponsiveContainer height={400} width="100%">
                                            <AreaChart width={420}
                                                height={400}
                                                data={this.state.LocalCDNBarData}
                                                margin={{ top: 5, right: 30, left: 20, bottom: 90 }}
                                            >
                                                <XAxis dataKey="distr_id_geo" angle={-50} textAnchor="end" interval={0} tick={{ fill: 'white' }} >
                                                    <Label fill="#fff" value='CDN Location' position='bottom' dy={20} style={{ textAnchor: 'middle' }} />
                                                </XAxis>
                                                <YAxis stroke="#FFF">
                                                    <Label angle={-90} fill="#fff" value='Local / Non Local Traffic Volume (GB)' dx={-20} position='insideLeft' style={{ textAnchor: 'middle' }} />
                                                </YAxis>
                                                <YAxis yAxisId="right" orientation="right" stroke="#fff">
                                                    <Label angle={-90} fill="#fff" value='Total Volume (GB)' dx={25} position='outside' style={{ textAnchor: 'middle' }} />
                                                </YAxis>
                                                <Tooltip content={this.TooltipLocalCDNFormatter} cursor={{ fill: '#29363d' }} />
                                                <Area dataKey="Local" fill="#82ca9d" stroke="#82ca9d" stackId="1" cursor="pointer" activeDot={{ onClick: this.toggleLocalCDNBarDD }} />
                                                <Area dataKey="Non_Local" name="Non Local" stackId="1" stroke="#8884d8" fill="#8884d8" cursor="pointer" activeDot={{ onClick: this.toggleLocalCDNBarDD }} />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="BarLegend">
                                            <div><Button className="InBound" /><span>Local</span></div>
                                            <div><Button className="OutBound" /><span>Non Local</span></div>
                                        </div>
                                        <ResponsiveContainer height={400} width="100%">
                                            <AreaChart width={420}
                                                height={400}
                                                data={this.state.LocalClientBarData}
                                                margin={{ top: 5, right: 30, left: 30, bottom: 90 }}
                                            >
                                                <XAxis dataKey="client_id_geo" angle={-50} textAnchor="end" interval={0} tick={{ fill: 'white' }} >
                                                    <Label fill="#fff" value='Client Location' position='bottom' dy={20} style={{ textAnchor: 'middle' }} />
                                                </XAxis>
                                                <YAxis stroke="#FFF">
                                                    <Label angle={-90} fill="#fff" value='Local / Non Local Traffic Volume (GB)' dx={-20} position='insideLeft' style={{ textAnchor: 'middle' }} />
                                                </YAxis>
                                                <YAxis yAxisId="right" orientation="right" stroke="#fff">
                                                    <Label angle={-90} fill="#fff" value='Total Volume (GB)' dx={30} position='outside' style={{ textAnchor: 'middle' }} />
                                                </YAxis>
                                                <Tooltip content={this.TooltipLocalClientFormatter} cursor={{ fill: '#29363d' }} />
                                                <Area dataKey="Local" name="Local" stroke="#82ca9d" fill="#82ca9d" cursor="pointer" activeDot={{ onClick: this.toggleLocalClientBarDD }} />
                                                <Area dataKey="Non_Local" name="Non Local" fill="#8884d8" stroke="#8884d8" cursor="pointer" activeDot={{ onClick: this.toggleLocalClientBarDD }} />

                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </TabPanel>
                                </Tabs>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <Card>
                            <CardBody>
                                <CardHeader><i className="fas fa-chart-line fa-lg" />  Predicted - Peak Traffic Rate </CardHeader>
                                <div className="reChartFix-Line">
                                    <div className="reChartFix-container">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart width={1100}
                                                height={400}
                                                data={this.state.PredictionChartData}
                                                margin={{ top: 5, right: 50, left: 20, bottom: 105 }}
                                            >
                                                <XAxis dataKey="time_bucket" angle={-50} textAnchor="end" interval={0} tick={{ fill: 'white' }} stroke="#fff" />
                                                <YAxis stroke="#fff">
                                                    <Label angle={-90} fill="#fff" dx={-20} value='Peak Traffic Rate (Gb/s)' position='insideLeft' style={{ textAnchor: 'middle' }} />
                                                </YAxis>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#545454" />
                                                <Tooltip content={this.TooltipPredictFormatter} cursor={{ fill: '#29363d' }} />
                                                <Area type="monotone" name="Peak Traffic Rate" dataKey="peak_traffic_rate_gigabits" strokeWidth={2} stroke="#8884d8" fill="#29363d" cursor="pointer" dot={customizeDot} activeDot={{ onClick: this.togglePredictionChartDD }} />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6" lg="6">
                        <Card>
                            <CardBody>
                                <CardHeader><i className="fas fa-chart-bar fa-lg" /> Traffic Volume By Coserver</CardHeader>

                                <ResponsiveContainer height={350} width="100%">
                                    <BarChart width={400} height={350} data={this.state.TrafficCoserverData}
                                        margin={{ top: 5, right: 30, left: 30, bottom: 20 }}>
                                        <XAxis dataKey="coserver_id" angle={-38} textAnchor="end" interval={0} tick={{ fill: 'white' }} />
                                        <YAxis stroke="#FFF">
                                            <Label angle={-90} fill="#fff" value='Traffic Volume (GB)' dx={-20} position='insideLeft' style={{ textAnchor: 'middle' }} />
                                        </YAxis>
                                        <Tooltip content={this.TooltipTrafficFormatter} cursor={{ fill: '#29363d' }} />
                                        <Bar dataKey="traffic" name="Traffic" fill="#82ca9d" cursor="pointer" onClick={this.toggleTrafficBarDD} />
                                    </BarChart>
                                </ResponsiveContainer>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" lg="6">
                        <Card>
                            <CardBody>
                                <CardHeader><i className="fas fa-chart-bar fa-lg" />  Cache Efficiency and Impact by Coserver</CardHeader>
                                <div className="BarLineLegend"><div><Button className="Cache" /><span>Cache Efficiency</span></div>
                                    <div><Button className="Impact" /><span>Cache Missed Impact</span></div></div>

                                <ResponsiveContainer height={350} width="100%">
                                    <ComposedChart width={400}
                                        height={350}
                                        data={this.state.CacheImpactBarData}
                                        margin={{ top: 5, right: 30, left: 30, bottom: 40 }}
                                    >
                                        <XAxis dataKey="Coserver_id" angle={-38} textAnchor="end" interval={0} tick={{ fill: 'white' }} />
                                        <YAxis stroke="#FFF">
                                            <Label angle={-90} fill="#fff" value='Cache Efficiency (%)' position='insideLeft' style={{ textAnchor: 'middle' }} />
                                        </YAxis>
                                        <YAxis yAxisId="right" orientation="right" stroke="#fff">
                                            <Label angle={-90} fill="#fff" value='Impact (%)' dx={20} position='outside' style={{ textAnchor: 'middle' }} />
                                        </YAxis>
                                        <Tooltip content={this.TooltipCacheFormatter} cursor={{ fill: '#29363d' }} />
                                        <Bar dataKey="cache_efficiency" name="Cache Efficiency" fill="#82ca9d" cursor="pointer" onClick={this.toggleCacheImpactBarDD} />
                                        <Line yAxisId="right" type="monotone" name="Cache Missed Impact" dataKey="ImpactPercentage" stroke="#ff7300" cursor="pointer" />
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" lg="12">
                        <Card>
                            <CardBody>
                                <CardHeader><i className="fas fa-chart-bar fa-lg" /> Cache Efficiency </CardHeader>
                                <Tabs className="">
                                    <TabList>
                                        <Tab>By CDN Location</Tab>
                                        <Tab>By ISP</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <ResponsiveContainer height={360} width="100%">
                                            <BarChart width={420}
                                                height={360}
                                                data={this.state.CacheByCDNBarData}
                                                margin={{ top: 15, right: 30, left: 30, bottom: 40 }}
                                            >
                                                <XAxis dataKey="distr_id_geo" angle={-38} textAnchor="end" interval={0} tick={{ fill: 'white' }}>
                                                    <Label fill="#fff" value='CDN Location' position='bottom' dy={20} style={{ textAnchor: 'middle' }} />
                                                </XAxis>
                                                <YAxis type="number" stroke="#FFF">
                                                    <Label fill="#fff" angle={-90} value='Cache Efficiency (%)' position='insideLeft' style={{ textAnchor: 'middle' }} />
                                                </YAxis>
                                                <Tooltip content={this.TooltipCacheCDNFormatter} cursor={{ fill: '#29363d' }} />
                                                <Bar dataKey="cache_efficiency" name="Cache Effiency" label={{ fill: '#fff', position: 'top' }} fill="#82ca9d" cursor="pointer" onClick={this.toggleCacheCDNBarDD} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </TabPanel>
                                    <TabPanel>
                                        <ResponsiveContainer width="100%" height={360}>
                                            <BarChart width={600}
                                                height={360}
                                                data={this.state.CacheByISPBarData}
                                                margin={{ left: 30, bottom: 40, right: 30 }}
                                                layout="vertical" stackOffset="expand"
                                            >
                                                <XAxis type="number" stroke="#fff">
                                                    <Label fill="#fff" value='Cache Efficiency (%)' dy={20} style={{ textAnchor: 'middle' }} />
                                                </XAxis>
                                                <YAxis type="category" dataKey="organization" width={275} tick={10} interval={0} stroke="#fff" />
                                                <Tooltip content={this.TooltipCacheISPFormatter} cursor={{ fill: '#29363d' }} />
                                                <Bar name="Cache Effiency" dataKey="CacheEfficiency" fill="#82ca9d" cursor="pointer" label={{ fill: '#fff', position: 'right' }} onClick={this.toggleCacheISPBarDD} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </TabPanel>
                                </Tabs>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
              
                <Modal size='lg' isOpen={this.state.CachewidgetDDModel} toggle={this.toggleCachewidgetDD} className="fullModal">
                    <ModalHeader toggle={this.toggleCachewidgetDD}> <i className="fas fa-chart-bar fa-lg" /> Cache Efficiency - Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.cachewidgetDDData !== null ? this.state.cachewidgetDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort>Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort >Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort>State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort>MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.PeakTrafficwidgetDDModel} toggle={this.togglePeakTrafficwidgetDD} className="fullModal">
                    <ModalHeader toggle={this.togglePeakTrafficwidgetDD}> <i className="fas fa-chart-bar fa-lg" /> Peak Traffic Rate - Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.PeakTrafficWidgetDDData !== null ? this.state.PeakTrafficWidgetDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort>Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort >Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort>State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort>MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.TrafficwidgetDDModel} toggle={this.toggleTrafficwidgetDD} className="fullModal">
                    <ModalHeader toggle={this.toggleTrafficwidgetDD}> <i className="fas fa-chart-bar fa-lg" />  Traffic Volume - Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.TrafficwidgetDDData !== null ? this.state.TrafficwidgetDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort>Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort >Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort>State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort>MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.CustomerBarDDModel} toggle={this.toggleCustomerBarDD} className="fullModal">
                    <ModalHeader toggle={this.toggleCustomerBarDD}> <i className="fas fa-chart-bar fa-lg" /> Client Location- {this.state.CCName} -Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.ClientBarChartDDData !== null ? this.state.ClientBarChartDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort>Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort >Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort >State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort >MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort >Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id" dataAlign='center' width='100' dataSort>DISTR ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort >Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.CustomerMapDDModel} toggle={this.toggleCustomerMapDD} className="fullModal">
                    <ModalHeader toggle={this.toggleCustomerMapDD}> <i className="fas fa-chart-bar fa-lg" /> Client Location- {this.state.CCName} -Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.ClientBarChartDDData !== null ? this.state.ClientBarChartDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort>Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort >Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort >State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort >MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort >Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id" dataAlign='center' width='100' dataSort>DISTR ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort >Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.CDNBarDDModel} toggle={this.toggleCDNBarDD} hover className={this.props.className}>
                    <ModalHeader toggle={this.toggleCDNBarDD}><i className="fas fa-chart-bar fa-lg" />  CDN Location - {this.state.IdName} - Drilldown</ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.CDNBarChartDDData !== null ? this.state.CDNBarChartDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort >Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort >Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort >State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort >Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort >MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort>Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id" dataAlign='center' width='100' dataSort>DISTR ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.CDNMapDDModel} toggle={this.toggleCDNMapDD} hover className={this.props.className}>
                    <ModalHeader toggle={this.toggleCDNMapDD}><i className="fas fa-chart-bar fa-lg" />  CDN Location - {this.state.IdName} - Drilldown</ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.CDNBarChartDDData !== null ? this.state.CDNBarChartDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort >Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort >Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort >State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort >Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort >MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort>Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id" dataAlign='center' width='100' dataSort>DISTR ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.PeakISPBarDDModel} toggle={this.togglePeakISPBarDD} className="fullModal">
                    <ModalHeader toggle={this.togglePeakISPBarDD}> <i className="fas fa-chart-bar fa-lg" />  Raw ASN - {this.state.Raw} - Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.PeakISPChartDDData !== null ? this.state.PeakISPChartDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort>Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort >Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort>State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort>MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.TrafficBarDDModel} toggle={this.toggleTrafficBarDD} className="fullModal">
                    <ModalHeader toggle={this.toggleTrafficBarDD}> <i className="fas fa-chart-bar fa-lg" />  Coserver ID - {this.state.TrafficBarId} - Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.TrafficCoserverDDData !== null ? this.state.TrafficCoserverDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort >Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort>Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort >State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort>MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.CacheImpactDDModel} toggle={this.toggleCacheImpactBarDD} className="fullModal">
                    <ModalHeader toggle={this.toggleCacheImpactBarDD}> <i className="fas fa-chart-bar fa-lg" />  Coserver ID - {this.state.CacheImpactBarId} - Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.CacheImpactBarDDData !== null ? this.state.CacheImpactBarDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort >Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort>Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort >State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort>MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.CacheISPDDModel} toggle={this.toggleCacheISPBarDD} className="fullModal">
                    <ModalHeader toggle={this.toggleCacheISPBarDD}> <i className="fas fa-chart-bar fa-lg" />  Raw ASN - {this.state.CacheIspBarId} - Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.CacheISPBarChartDDData !== null ? this.state.CacheISPBarChartDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort >Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort>Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort >State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort>MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.CacheCDNDDModel} toggle={this.toggleCacheCDNBarDD} className="fullModal">
                    <ModalHeader toggle={this.toggleCacheCDNBarDD}> <i className="fas fa-chart-bar fa-lg" />  Raw ASN - {this.state.CacheCDNBarId} - Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.CacheCDNBarDDData !== null ? this.state.CacheCDNBarDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort >Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort>Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort >State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort>MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.LocalCDNBarDDModel} toggle={this.toggleLocalCDNBarDD} className="fullModal">
                    <ModalHeader toggle={this.toggleLocalCDNBarDD}> <i className="fas fa-chart-bar fa-lg" /> Data sent from CDN Loc - {this.state.CDNCID} - to other Client Loc</ModalHeader>
                    <ModalBody>
                        <div className="BarLegend"><div><Button className="InBound" /><span>Local</span></div>
                            <div><Button className="OutBound" /><span>Non Local</span></div></div>
                        {loading ? <LoadingSpinner /> :
                            <div className="highlight customPlacementnpm start">
                                <div className="reChartFix-Line">
                                    <div className="reChartFix-container">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart width={1100}
                                                height={400}
                                                data={this.state.LocalCDNtoClientBarData}
                                                margin={{ right: 30, left: 20, bottom: 120 }}
                                            >
                                                <XAxis dataKey="client_id_geo" angle={-50} textAnchor="end" interval={0} tick={{ fill: 'white' }} stroke="#fff" >
                                                    <Label fill="#fff" value='Client Location' position='bottom' dy={50} style={{ textAnchor: 'middle' }} />
                                                </XAxis>
                                                <YAxis stroke="#fff">
                                                    <Label angle={-90} fill="#fff" value='Traffic Volume (GB)' dx={-15} position='insideLeft' style={{ textAnchor: 'middle' }} />
                                                </YAxis>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#545454" />
                                                <Tooltip content={this.TooltipLocalBarDDFormatter} cursor={{ fill: '#29363d' }} />
                                                <Bar dataKey="Local" name="Local" fill="#82ca9d" cursor="pointer" onClick={this.toggleSecLocalCDNBarDD} />
                                                <Bar dataKey="Non_Local" name="Non Local" fill="#8884d8" cursor="pointer" onClick={this.toggleSecLocalCDNBarDD} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.SecLocalCDNBarDDModel} toggle={this.toggleSecLocalCDNBarDD} className="fullModal">
                    <ModalHeader toggle={this.toggleSecLocalCDNBarDD}> <i className="fas fa-chart-bar fa-lg" /> Data sent from Client Loc - {this.state.SecCDNBarId} - to ISP</ModalHeader>
                    <ModalBody>
                        <div className="BarLegend"><div><Button className="InBound" /><span>Local</span></div>
                            <div><Button className="OutBound" /><span>Non Local</span></div></div>
                        {loading ? <LoadingSpinner /> :
                            <div className="highlight customPlacementnpm start">
                                <div className="reChartFix-Line">
                                    <div className="reChartFix-container">
                                        <ResponsiveContainer width="100%" height={360}>
                                            <BarChart width={600}
                                                height={360}
                                                data={this.state.SecLocalCDNBarDDData}
                                                margin={{ left: 30, bottom: 100, right: 30 }}
                                                layout="vertical" stackOffset="expand"
                                            >
                                                <XAxis type="number" stroke="#fff">
                                                    <Label fill="#fff" value='Traffic Volume (GB)' dy={20} style={{ textAnchor: 'middle' }} />
                                                </XAxis>

                                                <YAxis type="category" dataKey="organization" width={275} tick={10} interval={0} stroke="#fff" />
                                                <Tooltip content={this.TooltipSecLocalBarDDFormatter} cursor={{ fill: '#29363d' }} />
                                                <Bar dataKey="Client_Local" fill="#82ca9d" cursor="pointer" onClick={this.toggleLocalCDNTableDD} />
                                                <Bar dataKey="Client_non_local" fill="#8884d8" cursor="pointer" onClick={this.toggleLocalCDNTableDD} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.LocalCDNTableDDModel} toggle={this.toggleLocalCDNTableDD} className="fullModal">
                    <ModalHeader toggle={this.toggleLocalCDNTableDD}> <i className="fas fa-chart-bar fa-lg" /> ASN - {this.state.ASNId} - Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.LocalCDNBarTableDDData !== null ? this.state.LocalCDNBarTableDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort >Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort>Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort >State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort>MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.LocalClientBarDDModel} toggle={this.toggleLocalClientBarDD} className="fullModal">
                    <ModalHeader toggle={this.toggleLocalClientBarDD}> <i className="fas fa-chart-bar fa-lg" /> Data sent from Client Loc - {this.state.ClientCID} - to other CDN Loc</ModalHeader>
                    <ModalBody>
                        <div className="BarLegend"><div><Button className="InBound" /><span>Local</span></div>
                            <div><Button className="OutBound" /><span>Non Local</span></div></div>
                        {loading ? <LoadingSpinner /> :
                            <div className="highlight customPlacementnpm start">
                                <div className="reChartFix-Line">
                                    <div className="reChartFix-container">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart width={1100}
                                                height={400}
                                                data={this.state.LocalClientBarDDData}
                                                margin={{ right: 30, left: 20, bottom: 120 }}
                                            >
                                                <XAxis dataKey="distr_id_geo" angle={-50} textAnchor="end" interval={0} tick={{ fill: 'white' }} stroke="#fff" >
                                                    <Label fill="#fff" value='Client Location' position='bottom' dy={50} style={{ textAnchor: 'middle' }} />
                                                </XAxis>
                                                <YAxis stroke="#fff">
                                                    <Label angle={-90} fill="#fff" value='Traffic Volume (GB)' dx={-15} position='insideLeft' style={{ textAnchor: 'middle' }} />
                                                </YAxis>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#545454" />
                                                <Tooltip content={this.TooltipLocalClientBarDDFormatter} cursor={{ fill: '#29363d' }} />
                                                <Bar dataKey="Local" name="Local" fill="#82ca9d" cursor="pointer" onClick={this.toggleLocalClientTableDD} />
                                                <Bar dataKey="Non_Local" name="Non Local" fill="#8884d8" cursor="pointer" onClick={this.toggleLocalClientTableDD} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.LocalClientTableDDModel} toggle={this.toggleLocalClientTableDD} className="fullModal">
                    <ModalHeader toggle={this.toggleLocalClientTableDD}> <i className="fas fa-chart-bar fa-lg" />CDN Location -{this.state.ClientID} - Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.LocalClientTableDDData !== null ? this.state.LocalClientTableDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort >Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort>Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort >State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort>MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
                <Modal size='lg' isOpen={this.state.PredictionChartDDModel} toggle={this.togglePredictionChartDD} className="fullModal">
                    <ModalHeader toggle={this.togglePredictionChartDD}> <i className="fas fa-chart-bar fa-lg" /> Time -{this.state.PredictDate} && Country -{this.state.Country} - Drilldown </ModalHeader>
                    <ModalBody>
                        {loading ? <LoadingSpinner /> :
                            <BootstrapTable data={this.state.PredictionChartDDData !== null ? this.state.PredictionChartDDData : []} height='400' className="white" search exportCSV pagination>
                                <TableHeaderColumn isKey dataField="time_bucket" dataAlign='center' width='150' dataSort >Time Bucket</TableHeaderColumn>
                                <TableHeaderColumn dataField="coserver_id" dataAlign='center' width='120' dataSort>Coserver ID</TableHeaderColumn>
                                <TableHeaderColumn dataField="state" dataAlign='center' width='100' dataSort >State</TableHeaderColumn>
                                <TableHeaderColumn dataField="raw_asn" dataAlign='center' width='100' dataSort>Raw ASN</TableHeaderColumn>
                                <TableHeaderColumn dataField="mbps" dataAlign='center' width='100' dataSort>MBPS</TableHeaderColumn>
                                <TableHeaderColumn dataField="bytes_sent" dataAlign='center' width='100' dataSort>Bytes Sent</TableHeaderColumn>
                                <TableHeaderColumn dataField="remote_addr" dataAlign='center' width='120' dataSort >Remote ADDR</TableHeaderColumn>
                                <TableHeaderColumn dataField="_tcwait" dataAlign='center' width='100' dataSort>TcWait</TableHeaderColumn>
                                <TableHeaderColumn dataField="distr_id_geo" dataAlign='center' width='120' dataSort >DISTR ID Geo</TableHeaderColumn>
                                <TableHeaderColumn dataField="cache_status" dataAlign='center' width='110' dataSort>Cache Status</TableHeaderColumn>
                                <TableHeaderColumn dataField="ISP" dataAlign='center' width='100' dataSort >ISP</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}



function mapState(state) {
    return {
        TrafficVolumeWidgetData: state.getTrafficVolumeWidgetData,
        CacheWidgetData: state.getCacheWidgetData,
        PeakTrafficWidgetData: state.getPeakTrafficWidgetData,
        ClientBarChartData: state.getPlanningCustomerBarChart,
        CDNBarChartData: state.getPlanningCDNBarChart,
        CountryNameData: state.GetCountryList,
        TrafficCoserverData: state.getTrafficCoserverBarChart,
        PeakISPChartData: state.getPeakTrafficISPBarChart,
        ClientBarChartDDData: state.getClientBarChartDD,
        CDNBarChartDDData: state.getPlanCDNBarChartDD,
        PeakISPChartDDData: state.getPeakISPBarChartDD,
        TrafficCoserverDDData: state.getTrafficCoserverBarChartDD,
        CacheImpactBarData: state.getCacheImpactBarChart,
        CacheImpactBarDDData: state.getCacheImpactBarChartDD,
        CacheByCDNBarData: state.getPlanCacheCDNBarChart,
        CacheByISPBarData: state.getCacheByISPBarChart,
        CacheISPBarChartDDData: state.getPlanCacheIspBarChartDD,
        CacheCDNBarDDData: state.getPlanCacheCDNBarChartDD,
        LocalCDNBarData: state.getPlanLocalCDNBarChart,
        LocalClientBarData: state.getPlanLocalClientBarChart,
        LocalCDNtoClientBarData: state.getLocalCDNtoClientBarChartDD,
        SecLocalCDNBarDDData: state.getSecLocalCDNBarChartDD,
        LocalCDNBarTableDDData: state.getThirdLocalCDNTableDD,
        LocalClientBarDDData: state.getLocalClientBarChartDD,
        LocalClientTableDDData: state.getLocalClientTableDD,
        cachewidgetDDData: state.getCacheWidgetDD,
        PeakTrafficWidgetDDData: state.getPeakTrafficWidgetDD,
        TrafficwidgetDDData: state.getTrafficWidgetDD,
        PredictionChartData: state.getPeakTrafficPredictionChart,
        PredictionChartDDData: state.getPredictionChartDD

    };
}

export default (connect(mapState, {
    getPlanningCustomerBarChart, getTrafficWidgetDD, getPeakTrafficPredictionChart, getCacheWidgetDD, getPeakTrafficWidgetDD, getSecLocalCDNBarChartDD, getPeakTrafficWidgetData, getCacheWidgetData, getTrafficVolumeWidgetData, getLocalClientTableDD, getLocalClientBarChartDD, getThirdLocalCDNTableDD, getPlanLocalCDNBarChart, getLocalCDNtoClientBarChartDD, getPlanLocalClientBarChart, getPlanCacheIspBarChartDD, getPlanCacheCDNBarChartDD, getCacheImpactBarChart, getPlanCacheCDNBarChart, getCacheByISPBarChart, getCacheImpactBarChartDD, getTrafficCoserverBarChartDD, getPlanCDNBarChartDD, getPeakISPBarChartDD, getPlanningCDNBarChart, GetCountryList, getTrafficCoserverBarChart, getPeakTrafficISPBarChart, getClientBarChartDD, getPredictionChartDD
})(Planning));
