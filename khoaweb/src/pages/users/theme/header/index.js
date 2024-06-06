import { memo, useState } from "react";
import"./style.scss"
import {UserOutlined } from '@ant-design/icons';
import {ShoppingCartOutlined} from '@ant-design/icons';
import {MenuFoldOutlined } from '@ant-design/icons';
import { ROUTERS } from "utils/router";
import { Link } from "react-router-dom"; 
import {GiftOutlined} from '@ant-design/icons';
import {LaptopOutlined} from '@ant-design/icons';
import {PrinterOutlined} from '@ant-design/icons';
import {WifiOutlined } from '@ant-design/icons';
import {NodeIndexOutlined } from '@ant-design/icons';
import {SoundOutlined } from '@ant-design/icons';
import {SettingOutlined} from '@ant-design/icons';
import {ShakeOutlined} from '@ant-design/icons';
import {HddOutlined} from '@ant-design/icons';
import {DesktopOutlined} from '@ant-design/icons';
import {RocketOutlined} from '@ant-design/icons';

const Header = () => {
//setMenus
    const[menus ] = useState([
        {
            name: "Lap dat phong net",
            path: ROUTERS.USER.BUILDNETS, 
        },
        {
            name: "Tra gop",
            path: ROUTERS.USER.INSTALLMENT, 
        },
        {
            name: "Bang gia",
            path: ROUTERS.USER.PRICELIST, 
            isShowSubmenu: false,
            child: [
                {
                    name:"Bang gia mua cu",
                    path:"",
                },
                {
                    name:"Bang gia ban",
                    path:"",
                },
                {
                    name:"Bang gia outlet",
                    path:"",
                },
            ]
        },
        {
            name: "Xay dung cau hinh",
            path: ROUTERS.USER.BUILDPC, 
        },
        {
            name: "Chinh sach bao mat",
            path: ROUTERS.USER.POLICY, 
        },
        {
            name: "Thiet bi mining",
            path: ROUTERS.USER.MINES, 
        },
    ])
    //
    
    return(
    <>
        <div className="header_top">
        <div className="container">
            <div className="row">
                <div className="col-6 header_top_left">
                    <div className="col-lg-9 hero_searchbar_container">
                        <diiv className="hero_searchbar">
                            <div className="hero_searchbar_form">
                                <form>
                                    <input type="text" placeholder="Ban tim gi..."/>
                                    <button type="submit">Tim kiem</button> 
                                </form>
                            </div>
                        </diiv>
                    </div>
                </div>
                <div className="col-6 header_top_right">
                    <div>
                        <ul>
                            <li><UserOutlined />
                                <span>Dang Nhap/Dang Ky</span>
                            </li>
                        </ul>
                    </div>
                    <div className="header_cart">
                        <ul>
                            <li>
                                <li>
                                    Gio hang
                                </li>
                                <ShoppingCartOutlined />
                                <span>5</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 ">
                        <div className="header_danhmucsp">
                        <MenuFoldOutlined />DANH MUC SAN PHAM
                    </div>
                </div>
                <div className="col-xl-6">
                    <nav className="header_menu">
                        <ul>
                            {
                                menus?.map((menu, menuKey) => (
                                    <li key={menuKey} /*className={menuKey === 0 ? "active" : ""}*/>
                                        <Link to ={menu?.path}>{menu?.name}</Link>
                                    {
                                        menu.child &&(
                                            <ul className="header_menu_dropdown">
                                                {menu.child.map((childItem,childKey)=>(
                                                    <li key={`${menuKey}-${childKey}`}>
                                                            <Link to={childItem.path}>{childItem.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )
                                    }
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row ">
                <div className="header_menus_center">
                    <div className="menus">
                    <ul>
                        <li>
                            <Link to="#"> <GiftOutlined /> TONG HOP KHUYEN MAI </Link>
                        </li>
                        <li>
                            <Link to="#"> <SettingOutlined /> LINH KIEN CU </Link>
                        </li>
                        <li>
                            <Link to="#"> <SettingOutlined /> LINH KIEN MOI </Link>
                        </li>
                        <li>
                            <Link to="#"> <LaptopOutlined /> LAPTOP </Link>
                        </li>
                        <li>
                            <Link to="#"> <ShakeOutlined /> SSD - HDD - USB </Link>
                        </li>
                        <li>
                            <Link to="#"> <DesktopOutlined /> <HddOutlined /> PC GAMING - HOC TAP </Link>
                        </li>
                        <li>
                            <Link to="#"> <DesktopOutlined /> <HddOutlined /> PC VAN PHONG - LAM VIEC</Link>
                        </li>
                        <li>
                            <Link to="#"> <DesktopOutlined /> <HddOutlined /> PC DO HOA - THIET KE </Link>
                        </li>
                        <li>
                            <Link to="#"> <DesktopOutlined /> MAN HINH MAY TINH </Link>
                        </li>
                        <li>
                            <Link to="#"> <NodeIndexOutlined /> PHU KIEN PHAN MEM</Link>
                        </li>
                        <li>
                            <Link to="#"> <RocketOutlined /> GAMING GEAR</Link>
                        </li>
                        <li>
                            <Link to="#"> <WifiOutlined /> THIET BI MANG </Link>
                        </li>
                        <li>
                            <Link to="#"> <SoundOutlined /> THIET BI AM THANH </Link>
                        </li>
                        <li>
                            <Link to="#"> <PrinterOutlined /> CAMERA, WEBCAM, MAY IN </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="a">
                        <div className="menusgiua">
                            
                        </div>
                        <div className="menusphai">
                        
                        </div>
                        <div className="menusphai1">
                        
                        </div>
                        <div className="menusphai2">
                        
                        </div>
                        <div className="menusphai3">
                        
                        </div>
                        <div className="menusphai4">
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>    
    );
};

export default memo(Header);

