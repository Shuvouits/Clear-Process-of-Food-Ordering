import React, { useEffect, useState } from 'react'
import InnerBanner from '../../components/Frontend/InnerBanner'
import FAQ from '../../components/Frontend/FAQ'
import Resturent from '../../components/Frontend/Resturent'
import { Link, useParams } from 'react-router-dom'
import { format } from 'date-fns';

function BlogDetails() {
    const { title } = useParams();


    const [blog, setBlog] = useState([])
    const allBlog = async () => {

        try {
            const res = await fetch(`http://localhost:8000/all-blog`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            const data = await res.json();
            setBlog(data);

        } catch (error) {
            return (error)

        }

    };

    useEffect(() => {
        allBlog();
    }, []);


    console.log(title)




    return (
        <main>
            <InnerBanner />
            <section className="blog-details s-padding">
                <div className="container">
                    <div className="row">

                        {blog.filter(item => item.slug === title).map((item) => (

                            <div className="col-lg-8">
                                <div className="blog-details-taitel">
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="blog-details-img blog-details-mt-32px">
                                    <img
                                        src={item.avatar}
                                        alt="img"
                                    />
                                </div>
                                <div className="blog-details-text all-details-root blog-details-mt-32px">
                                    <div  dangerouslySetInnerHTML={{ __html: item.editorData }}></div>

                                </div>
                                <div className="row blog-details-mt-32px border-b ">
                                    <div className="col-lg-6 col-md-6  col-lg-padding-0">
                                        <div className="blog-details-tag">
                                            <div className="blog-details-tag-text">
                                                <h4>Tags:</h4>
                                            </div>
                                            <ul className="tag">
                                                <li>
                                                    <a href="javascript:;">#Stories</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">#Media</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6  col-lg-padding-0  ">
                                        <div className="blog-details-tag blog-details-tag-two ">
                                            <div className="blog-details-tag-text">
                                                <h4>Share:</h4>
                                            </div>
                                            <ul className="Share">
                                                <li>
                                                    <Link
                                                        to="https://www.twitter.com/"
                                                        target="_blank"
                                                    >
                                                        <div className="icon">
                                                            <span>
                                                                <svg
                                                                    width={19}
                                                                    height={19}
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g clipPath="url(#clip0_304_41105)">
                                                                        <path d="M1.20836 10.9249C2.33728 11.6412 3.65114 12.0197 5.00767 12.0197C6.9942 12.0197 8.8146 11.2566 10.134 9.87114C11.3966 8.54509 12.0911 6.7633 12.0566 4.9551C12.5352 4.5456 13.0981 3.76369 13.0981 3.00159C13.0981 2.70946 12.7811 2.52401 12.524 2.67288C12.0743 2.93707 11.6643 3.00617 11.2426 2.88779C10.3815 2.04847 9.09962 1.87166 8.01948 2.4539C7.07549 2.96197 6.55066 3.89172 6.59791 4.90785C5.0031 4.71326 3.52971 3.91357 2.5024 2.67084C2.33373 2.46813 2.01365 2.49201 1.87952 2.72165C1.38466 3.5691 1.38974 4.55119 1.82007 5.34428C1.61532 5.38035 1.48881 5.55259 1.48881 5.73905C1.48881 6.5362 1.84751 7.26883 2.42518 7.76876C2.31747 7.87241 2.2819 8.02635 2.32763 8.16353C2.58166 8.92664 3.15679 9.52311 3.8757 9.82185C3.09379 10.1953 2.22906 10.3198 1.45935 10.2253C1.06102 10.1714 0.864403 10.7069 1.20836 10.9249ZM5.11182 9.95243C5.39685 9.73345 5.24544 9.27721 4.88777 9.26959C4.25777 9.25638 3.68416 8.94595 3.32699 8.4577C3.49923 8.44652 3.67756 8.4201 3.84725 8.37438C4.23389 8.26972 4.2156 7.71186 3.82286 7.63311C3.11005 7.48984 2.55067 6.9706 2.34084 6.30198C2.53238 6.34923 2.72748 6.37565 2.92206 6.37921C3.30769 6.38124 3.4535 5.88689 3.13901 5.68011C2.43026 5.2132 2.12796 4.38861 2.32814 3.6133C3.56578 4.86721 5.24494 5.6227 7.02113 5.70805C7.27567 5.7238 7.4667 5.48451 7.41081 5.24216C7.16948 4.19605 7.75376 3.46292 8.38122 3.12505C9.00207 2.78973 9.99889 2.68507 10.763 3.4868C10.9901 3.72609 11.7563 3.73524 12.146 3.6443C11.9712 3.97352 11.7024 4.28598 11.4509 4.46177C11.3437 4.53697 11.2823 4.66195 11.2889 4.79252C11.3707 6.46151 10.7488 8.12085 9.58279 9.34478C8.40814 10.5779 6.78386 11.2571 5.00818 11.2571C4.30197 11.2571 3.60948 11.1423 2.95509 10.9208C3.73751 10.7694 4.48081 10.4381 5.11182 9.95243Z" />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="https://www.linkedin.com/"
                                                        target="_blank"
                                                    >
                                                        <div className="icon">
                                                            <span>
                                                                <svg
                                                                    idth={19}
                                                                    height={19}
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g clipPath="url(#clip0_304_41118)">
                                                                        <path d="M2.61488 1.07031C2.16779 1.07031 1.76133 1.2329 1.45649 1.53774C1.13134 1.86289 0.96875 2.26933 0.96875 2.6961C0.96875 3.14319 1.15165 3.54965 1.45649 3.85449C1.76133 4.15933 2.1881 4.34223 2.59456 4.32192C2.59456 4.32192 2.61488 4.32192 2.63522 4.32192C3.04168 4.32192 3.4278 4.15933 3.73264 3.85449C4.03748 3.54965 4.22038 3.14319 4.22038 2.6961C4.24069 2.26933 4.05779 1.86287 3.75295 1.55803C3.44811 1.23288 3.04165 1.07031 2.61488 1.07031ZM3.44811 3.56999C3.22456 3.79355 2.91972 3.9358 2.59456 3.91548C2.28973 3.91548 1.96457 3.79355 1.74102 3.56999C1.49715 3.34643 1.37521 3.02128 1.37521 2.69613C1.37521 2.37097 1.49715 2.06613 1.74102 1.82226C1.96457 1.59871 2.26941 1.47677 2.61488 1.47677C2.91972 1.47677 3.22456 1.59871 3.44811 1.82226C3.69198 2.06613 3.81392 2.37097 3.81392 2.69613C3.81392 3.02128 3.69198 3.34643 3.44811 3.56999Z" />
                                                                        <path d="M3.40737 4.72656H1.76124C1.43608 4.72656 1.17188 4.99075 1.17188 5.33624V12.4491C1.17188 12.7743 1.4564 13.0588 1.78155 13.0588H3.40737C3.73252 13.0588 4.01704 12.7743 4.01704 12.4695V5.33624C4.01704 5.01106 3.73252 4.72656 3.40737 4.72656ZM3.61058 12.4695C3.61058 12.5711 3.50896 12.6524 3.40737 12.6524H1.78155C1.67993 12.6524 1.57833 12.5507 1.57833 12.4491V5.33624C1.57833 5.23462 1.65962 5.13302 1.76124 5.13302H3.40737C3.50899 5.13302 3.61058 5.23464 3.61058 5.33624V12.4695Z" />
                                                                        <path d="M10.3159 4.52344H9.88914C9.09656 4.52344 8.34463 4.86893 7.85689 5.41764V5.13312C7.85689 4.9299 7.65367 4.72666 7.45043 4.72666H5.41818C5.23528 4.72666 5.01172 4.88924 5.01172 5.11278V12.6931C5.01172 12.9166 5.23528 13.0589 5.41818 13.0589H7.65367C7.83657 13.0589 8.06013 12.9166 8.06013 12.6931V8.30341C8.06013 7.63277 8.54787 7.10437 9.17786 7.10437C9.50302 7.10437 9.80786 7.22631 10.0314 7.44987C10.2346 7.63277 10.3159 7.91729 10.3159 8.2831V12.6525C10.3159 12.8557 10.5192 13.0589 10.7224 13.0589H12.7546C12.9579 13.0589 13.1611 12.8557 13.1611 12.6525V7.40924C13.1611 5.78345 11.9214 4.52344 10.3159 4.52344ZM12.7546 12.6321L12.7343 12.6525H10.7427L10.7224 8.28312C10.7224 7.79538 10.6004 7.42957 10.3363 7.16539C10.0314 6.86055 9.62495 6.69796 9.19818 6.69796C8.34463 6.71828 7.67398 7.40926 7.67398 8.30344V12.6525H5.43849V5.13312H7.45043L7.47074 5.15343V6.43375L8.01945 5.88504L8.03977 5.86473C8.44623 5.2957 9.1575 4.9299 9.90945 4.9299H10.3362C11.6978 4.9299 12.7546 6.02732 12.7546 7.40926V12.6321Z" />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="https://www.facebook.com/"
                                                        target="_blank"
                                                    >
                                                        <div className="icon">
                                                            <span>
                                                                <svg
                                                                    idth={19}
                                                                    height={19}
                                                                    viewBox="0 0 14 14"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <g clipPath="url(#clip0_304_41114)">
                                                                        <path d="M7.74364 13.01H5.79095C5.46479 13.01 5.19947 12.7446 5.19947 12.4185V8.01409H4.06023C3.73407 8.01409 3.46875 7.74868 3.46875 7.42261V5.53532C3.46875 5.20916 3.73407 4.94384 4.06023 4.94384H5.19947V3.99876C5.19947 3.06167 5.49372 2.26441 6.05032 1.6933C6.60942 1.11959 7.39078 0.816406 8.30991 0.816406L9.79912 0.818825C10.1247 0.819383 10.3896 1.0847 10.3896 1.41031V3.16261C10.3896 3.48877 10.1244 3.75409 9.79828 3.75409L8.79561 3.75446C8.48983 3.75446 8.41196 3.81577 8.39531 3.83456C8.36786 3.86572 8.33521 3.95382 8.33521 4.19709V4.94375H9.72293C9.8274 4.94375 9.92862 4.96952 10.0156 5.01808C10.2032 5.12292 10.3199 5.32117 10.3199 5.53542L10.3192 7.4227C10.3192 7.74868 10.0538 8.014 9.72768 8.014H8.33521V12.4185C8.33521 12.7446 8.0698 13.01 7.74364 13.01ZM5.91431 12.2951H7.62028V7.69407C7.62028 7.47629 7.7975 7.29916 8.01519 7.29916H9.60432L9.60497 5.65868H8.0151C7.79741 5.65868 7.62028 5.48155 7.62028 5.26377V4.19709C7.62028 3.91782 7.64865 3.60022 7.85946 3.3615C8.11417 3.07293 8.51559 3.03962 8.79543 3.03962L9.67474 3.03925V1.53348L8.30935 1.53124C6.83223 1.53124 5.91431 2.47679 5.91431 3.99876V5.26377C5.91431 5.48146 5.73718 5.65868 5.51949 5.65868H4.18359V7.29916H5.51949C5.73718 7.29916 5.91431 7.47629 5.91431 7.69407V12.2951Z" />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="https://www.instagram.com/"
                                                        target="_blank"
                                                    >
                                                        <div className="icon">
                                                            <svg
                                                                className="instagram_custom"
                                                                width={20}
                                                                height={20}
                                                                viewBox="0 0 36 36"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    x={3}
                                                                    y={3}
                                                                    width={30}
                                                                    height={30}
                                                                    rx={4}
                                                                    strokeWidth="1.5"
                                                                />
                                                                <circle cx={27} cy={9} r="1.5" fill="#FFA373" />
                                                                <circle cx={18} cy={18} r="7.5" strokeWidth="1.5" />
                                                            </svg>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-11">
                                        <div className="comment-box">
                                            <div className="comment-box-head">
                                                <h2>0 Comments</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-11">
                                        <div className="comment-from-box-main">
                                            <div className="comment-from-box-text">
                                                <h3>Leave a Comment</h3>
                                                <p>Required fields are marked *</p>
                                            </div>
                                            <form


                                            >


                                                <div className="from-box">
                                                    <div className="from-item">
                                                        <div className="from-inner-two pb-4">
                                                            <textarea
                                                                className="form-control"
                                                                name="comment"
                                                                id="exampleFormControlTextarea3"
                                                                style={{ height: '200px' }}

                                                                placeholder="Type here *"

                                                            />
                                                        </div>
                                                        <div className="form-group homec-form-input">
                                                            <div
                                                                className="g-recaptcha"
                                                                data-sitekey="6LeEoFkpAAAAAHmBeu4R5r8PtCkRj4BZh_0YemJM"
                                                            ></div>
                                                        </div>
                                                        <div className="from-btn">
                                                            <button type="submit" className="main-btn-four">
                                                                Submit Now
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}





                        <div className="col-lg-4 blog-details-pl ">
                            <div className="search-box">
                                <div className="search-box-text">
                                    <h4>Search</h4>
                                </div>
                                <div className="search-box-item">
                                    <form action="https://reservq.minionionbd.com/blog" method="GET">
                                        <div className="search-box-inner">
                                            <input
                                                type="text"
                                                name="keyword"
                                                className="form-control"
                                                id="exampleFormControlInput8"
                                                placeholder="Type here"
                                            />
                                            <button type="submit" className="search-box-inner-btn">
                                                <span>
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                                                            stroke="#D3D5DA"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="latest-blog-box">
                                <div className="latest-blog-box-text">
                                    <h3>Latest Blog</h3>
                                </div>
                                <div className="latest-blog-box-item">
                                    {blog.filter(item=> item.slug !=title ).map((item) => (

                                        <div className="latest-blog-box-item-inner">
                                            <div className="latest-blog-box-item-inner-img">
                                                <a href="https://reservq.minionionbd.com/blog/timehonored-recipes-with-a-modern-twist-1">
                                                    <img
                                                        src={item.avatar}
                                                        alt="img"
                                                    />
                                                </a>
                                            </div>
                                            <div className="latest-blog-box-item-inner-text">
                                                <Link to={`/blog/${item.slug}`}>
                                                    {item.title}
                                                </Link>
                                                <div className="latest-blog-box-item-inner-btn">
                                                    <a href="javascript:;">
                                                        <span>
                                                            <svg
                                                                width={18}
                                                                height={18}
                                                                viewBox="0 0 18 18"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M17.9894 3.25799C17.9894 5.27443 17.9894 7.29086 17.9894 9.30729C17.941 9.26327 17.897 9.21924 17.8486 9.17962C17.4833 8.85382 17.1225 8.51921 16.7485 8.20222C16.634 8.10536 16.5768 8.02611 16.5812 7.87202C16.5944 7.45376 16.5856 7.0311 16.5856 6.60844C11.5162 6.60844 6.46879 6.60844 1.40817 6.60844C1.40817 6.68329 1.40817 6.74933 1.40817 6.81097C1.40817 9.78719 1.40817 12.7634 1.40817 15.7396C1.40817 16.312 1.6722 16.5805 2.24428 16.5805C4.0617 16.5805 5.87472 16.5893 7.69214 16.5717C7.99138 16.5673 8.1982 16.629 8.32142 16.9063C8.34782 16.9636 8.39623 17.012 8.44024 17.0604C8.73067 17.3686 9.02551 17.6812 9.31594 17.9894C6.83404 17.9894 4.35213 17.9894 1.86583 17.9894C1.79102 17.9718 1.72061 17.9542 1.6458 17.9366C0.65568 17.6988 0.00440054 16.8711 0 15.8409C0 13.9345 0 12.0238 0 10.113C0 7.92045 0 5.73231 0 3.53977C0 2.50954 0.65128 1.66422 1.6458 1.45729C2.00225 1.38245 2.37629 1.41326 2.74594 1.39565C2.81194 1.39125 2.87795 1.39565 2.96156 1.39565C2.96156 0.911358 2.96156 0.45788 2.96156 0C3.43242 0 3.89008 0 4.36093 0C4.36093 0.466686 4.36093 0.920163 4.36093 1.38245C7.45451 1.38245 10.5349 1.38245 13.6373 1.38245C13.6373 0.91576 13.6373 0.453477 13.6373 0C14.1169 0 14.5746 0 15.0454 0C15.0454 0.466686 15.0454 0.924566 15.0454 1.39565C15.3491 1.39565 15.6395 1.38685 15.9344 1.39565C16.612 1.42207 17.1577 1.70825 17.5758 2.24537C17.8046 2.54476 17.9102 2.89697 17.9894 3.25799ZM13.6373 2.81332C10.5305 2.81332 7.45011 2.81332 4.35213 2.81332C4.35213 3.28001 4.35213 3.73348 4.35213 4.19577C3.88128 4.19577 3.42362 4.19577 2.94396 4.19577C2.94396 3.72468 2.94396 3.2668 2.94396 2.80011C2.66233 2.80011 2.39829 2.79571 2.13426 2.80011C1.69861 2.80892 1.40817 3.09509 1.40377 3.53096C1.39937 3.95802 1.40377 4.38508 1.40377 4.81214C1.40377 4.93102 1.40377 5.05429 1.40377 5.17316C6.47319 5.17316 11.525 5.17316 16.5812 5.17316C16.5812 4.59201 16.59 4.02406 16.5768 3.45611C16.568 3.12591 16.3216 2.83974 15.9916 2.80892C15.6791 2.7825 15.3623 2.80452 15.0322 2.80452C15.0322 3.2756 15.0322 3.73348 15.0322 4.19136C14.557 4.19136 14.1037 4.19136 13.6373 4.19136C13.6373 3.73348 13.6373 3.28001 13.6373 2.81332Z"
                                                                    fill="#F01543"
                                                                />
                                                                <path
                                                                    d="M12.9022 17.9869C12.4445 17.8768 11.9648 17.8195 11.5292 17.6478C10.0858 17.0755 9.10449 16.0321 8.70404 14.5307C8.18918 12.6244 8.69084 10.9646 10.1694 9.65255C11.2432 8.69717 12.5281 8.33174 13.9495 8.55628C15.6569 8.82485 16.8758 9.77583 17.5843 11.3388C17.778 11.7614 17.8396 12.2457 17.9628 12.6992C17.9804 12.7609 17.9848 12.8225 17.998 12.8841C17.998 13.1175 17.998 13.3508 17.998 13.5886C17.9364 13.8967 17.9056 14.2137 17.8132 14.5131C17.3731 16.0012 16.4358 17.0623 14.9924 17.639C14.5524 17.8151 14.0683 17.8724 13.6062 17.9869C13.3686 17.9869 13.1354 17.9869 12.9022 17.9869ZM13.2498 16.5824C15.0848 16.5824 16.5898 15.0767 16.5898 13.2407C16.5854 11.4092 15.0936 9.91231 13.263 9.90351C11.428 9.8947 9.91859 11.396 9.91419 13.2363C9.90979 15.0723 11.4148 16.578 13.2498 16.5824Z"
                                                                    fill="#F01543"
                                                                />
                                                                <path
                                                                    d="M2.67969 9.4736C2.67969 9.00664 2.67969 8.5529 2.67969 8.08594C3.14202 8.08594 3.59554 8.08594 4.06227 8.08594C4.06227 8.53968 4.06227 9.00224 4.06227 9.4736C3.60875 9.4736 3.15082 9.4736 2.67969 9.4736Z"
                                                                    fill="#F01543"
                                                                />
                                                                <path
                                                                    d="M6.87967 8.08594C6.87967 8.5529 6.87967 9.00664 6.87967 9.4692C6.41294 9.4692 5.95501 9.4692 5.48828 9.4692C5.48828 9.00664 5.48828 8.5529 5.48828 8.08594C5.94621 8.08594 6.40413 8.08594 6.87967 8.08594Z"
                                                                    fill="#F01543"
                                                                />
                                                                <path
                                                                    d="M9.69508 8.08594C9.69508 8.5529 9.69508 9.00664 9.69508 9.4692C9.23275 9.4692 8.77923 9.4692 8.3125 9.4692C8.3125 9.01545 8.3125 8.5573 8.3125 8.08594C8.76602 8.08594 9.22395 8.08594 9.69508 8.08594Z"
                                                                    fill="#F01543"
                                                                />
                                                                <path
                                                                    d="M2.67969 12.2778C2.67969 11.8152 2.67969 11.3571 2.67969 10.8945C3.14642 10.8945 3.60434 10.8945 4.07108 10.8945C4.07108 11.3571 4.07108 11.8108 4.07108 12.2778C3.61315 12.2778 3.15523 12.2778 2.67969 12.2778Z"
                                                                    fill="#F01543"
                                                                />
                                                                <path
                                                                    d="M5.48828 12.2822C5.48828 11.8152 5.48828 11.3615 5.48828 10.8945C5.95061 10.8945 6.40413 10.8945 6.87086 10.8945C6.87086 11.3483 6.87086 11.8108 6.87086 12.2822C6.41734 12.2822 5.95942 12.2822 5.48828 12.2822Z"
                                                                    fill="#F01543"
                                                                />
                                                                <path
                                                                    d="M2.67969 13.707C3.14642 13.707 3.59994 13.707 4.06227 13.707C4.06227 14.1696 4.06227 14.6233 4.06227 15.0903C3.60875 15.0903 3.15082 15.0903 2.67969 15.0903C2.67969 14.6365 2.67969 14.1784 2.67969 13.707Z"
                                                                    fill="#F01543"
                                                                />
                                                                <path
                                                                    d="M6.87967 13.7188C6.87967 14.1813 6.87967 14.635 6.87967 15.102C6.41294 15.102 5.95501 15.102 5.48828 15.102C5.48828 14.6439 5.48828 14.1857 5.48828 13.7188C5.9418 13.7188 6.39973 13.7188 6.87967 13.7188Z"
                                                                    fill="#F01543"
                                                                />
                                                                <path
                                                                    d="M12.5312 10.8945C12.9977 10.8945 13.451 10.8945 13.9218 10.8945C13.9218 11.4405 13.9218 11.9776 13.9218 12.5323C14.3223 12.5323 14.7095 12.5323 15.11 12.5323C15.11 13.0078 15.11 13.4613 15.11 13.928C14.2607 13.928 13.4026 13.928 12.5312 13.928C12.5312 12.9242 12.5312 11.916 12.5312 10.8945Z"
                                                                    fill="#F01543"
                                                                />
                                                            </svg>
                                                        </span>
                                                        {format(item.createdAt, 'MMMM-yyyy-dd')}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            </div>
                            <div className="blog-details-follow-us">
                                <div className="blog-details-follow-us-text">
                                    <h3>Follow Us</h3>
                                </div>
                                <ul className="follow">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="fa-brands fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/mexuv" target="_blank">
                                            <i className="fa-brands fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/" target="_blank">
                                            <i className="fa-brands fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>


            <FAQ />
            <Resturent />
        </main>
    )
}

export default BlogDetails