import { memo } from "react";
import"./style.scss"
import {FacebookOutlined } from '@ant-design/icons';
import {InstagramOutlined } from '@ant-design/icons';
import {YoutubeOutlined } from '@ant-design/icons';
import {TruckOutlined } from '@ant-design/icons';
import {FileSyncOutlined } from '@ant-design/icons';
import {WalletOutlined } from '@ant-design/icons';
import {PhoneOutlined  } from '@ant-design/icons';
const Footer = () => {
    return (
    <footer className="footer">
       <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer_chinhs">
                        <h1 className="footer_chinh_to"><TruckOutlined />CHINH SACH GIAO HANG </h1>
                        <ul>
                            <li>Nhan hang va thanh toan tai nha</li>
                        </ul>
                    </div>
                    <div className="footer_about">
                        <h1 className="footer_about_logo">GIO THIEU THNS</h1>
                        <div className="red-bar"></div>
                        <ul>
                            <li>Ve chung toi</li>
                            <li>Tu van mua hang</li>
                            <li>Tuyen dung</li>
                        </ul>
                    </div>
                    <div className="footer_icon">
                        <div>
                            <FacebookOutlined />
                        </div>
                        <div>
                            <InstagramOutlined />
                        </div>
                        <div>
                            <YoutubeOutlined />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer_chinhc">
                        <h1 className="footer_chung_to"><FileSyncOutlined />DOI TRA DE DANG </h1>
                        <ul>
                            <li>1 doi 1 trong 7 ngay</li>
                        </ul>
                    </div>
                    <div className="footer_policy">
                        <h1 className="footer_about_policy">CHINH SACH CHUNG</h1>
                            <div className="red-bar"></div>
                            <ul>
                                <li>Chính sách trả góp</li>
                                <li>Chính sách bảo mật</li>
                                <li>Chính sách giải quyết khiếu nại</li>
                                <li>Chính sách bảo vệ thông tin cá nhân</li>
                                <li>Chính sách bảo hành</li>
                                <li>Chính sách đổi - trả hàng</li>
                            </ul>
                        </div>
                    </div>
                <div className="col-lg-3">
                    <div className="footer_thanhtoans">
                        <h1 className="footer_thanhtoans_to"><WalletOutlined />THANH TOAN TIEN LOI </h1>
                        <ul>
                            <li>Tra tien mat, chuyen khoan, tra gop 0%</li>
                        </ul>
                    </div>
                    <div className="footer_deals">
                        <h1 className="footer_about_deals">THONG TIN KHUYEN MAI</h1>
                            <div className="red-bar"></div>
                            <ul>
                                <li>Tong hop khuyen mai</li>
                             </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer_chamsoc">
                        <h1 className="footer_chamsoc_to"><PhoneOutlined />HO TRO NHIET TINH </h1>
                        <ul>
                            <li>Tu van, giai dap moi thac mac</li>
                        </ul>
                    </div>
                    <div className="footer_customers">
                        <h1 className="footer_about_customers">HO TRO KHACH HANG</h1>
                            <div className="red-bar"></div>
                            <ul>
                                <li>Tổng hợp Hotline CSKH, phản ánh</li>
                                <li>Thông tin thanh toán</li>
                                <li>Lắp đặt phòng net</li>
                                <li>Tra cứu bảo hành</li>
                                <li>Thiết bị Mining</li>
                             </ul>
                    </div>
                </div>
            </div>
       </div>
    </footer>
    );
};

export default memo(Footer);
