import React from 'react'

function AddBlog() {
    return (
        <section className="sherah-adashboard sherah-show sherah-close">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sherah-body">
                            {/* Dashboard Inner */}
                            <div className="sherah-dsinner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="sherah-breadcrumb mg-top-30">
                                            <h2 className="sherah-breadcrumb__title">Create Blog</h2>
                                            <ul className="sherah-breadcrumb__list">
                                                <li>
                                                    <a href="https://reservq.minionionbd.com/admin-dashboard">
                                                        Dashboard
                                                    </a>
                                                </li>
                                                <li className="active">
                                                    <a href="">Create Blog</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sherah-page-inner sherah-border sherah-basic-page sherah-default-bg mg-top-25 p-0">
                                    <form
                                        className="sherah-wc__form-main"
                                        action="https://reservq.minionionbd.com/blogs"
                                        method="POST"
                                        encType="multipart/form-data"
                                    >
                                        <input
                                            type="hidden"
                                            name="_token"
                                            defaultValue="QbunGZqg8VhXTZvm9qzI00RWf9a7wExq9aRuc4zP"
                                        />{" "}
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Product Info */}
                                                <div className="product-form-box sherah-border mg-top-30">
                                                    <h4 className="form-title m-0">Blog Information</h4>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Title
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"
                                                                        placeholder="Type here"
                                                                        type="text"
                                                                        id="title"
                                                                        name="title"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Slug
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"
                                                                        placeholder="Type here"
                                                                        type="text"
                                                                        name="slug"
                                                                        id="slug"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Blog Category *
                                                                </label>
                                                                <select
                                                                    className="form-group__input"
                                                                    aria-label="Default select example"
                                                                    name="blog_category"
                                                                >
                                                                    <option value={33}>Children</option>
                                                                    <option value={34}>ChatGPT</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Status *
                                                                </label>
                                                                <select
                                                                    className="form-group__input"
                                                                    aria-label="Default select example"
                                                                    name="status"
                                                                >
                                                                    <option value="active">Active</option>
                                                                    <option value="inactive">Inactive</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Description
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <textarea
                                                                        className="sherah-wc__form-input summernote"
                                                                        id="description"
                                                                        row={8}
                                                                        placeholder="Type here"
                                                                        type="text"
                                                                        name="description"
                                                                        style={{ display: "none" }}
                                                                        aria-hidden="true"
                                                                        defaultValue={""}
                                                                    />
                                                                    <div
                                                                        role="application"
                                                                        className="tox tox-tinymce"
                                                                        aria-disabled="false"
                                                                        style={{ visibility: "hidden", height: 400 }}
                                                                    >
                                                                        <div className="tox-editor-container">
                                                                            <div
                                                                                data-alloy-vertical-dir="toptobottom"
                                                                                className="tox-editor-header"
                                                                            >
                                                                                <div className="tox-promotion">
                                                                                    <a
                                                                                        href="https://www.tiny.cloud/tinymce-self-hosted-premium-features/?utm_source=TinyMCE&utm_medium=SPAP&utm_campaign=SPAP&utm_id=editorreferral"
                                                                                        rel="noopener"
                                                                                        target="_blank"
                                                                                        aria-hidden="true"
                                                                                        className="tox-promotion-link"
                                                                                    >
                                                                                        ⚡️Upgrade
                                                                                    </a>
                                                                                </div>
                                                                                <div
                                                                                    role="menubar"
                                                                                    data-alloy-tabstop="true"
                                                                                    className="tox-menubar"
                                                                                >
                                                                                    <button
                                                                                        aria-haspopup="true"
                                                                                        role="menuitem"
                                                                                        type="button"
                                                                                        tabIndex={-1}
                                                                                        data-alloy-tabstop="true"
                                                                                        unselectable="on"
                                                                                        className="tox-mbtn tox-mbtn--select"
                                                                                        aria-expanded="false"
                                                                                        style={{
                                                                                            userSelect: "none",
                                                                                            width: "36.9444px"
                                                                                        }}
                                                                                    >
                                                                                        <span className="tox-mbtn__select-label">
                                                                                            File
                                                                                        </span>
                                                                                        <div className="tox-mbtn__select-chevron">
                                                                                            <svg
                                                                                                width={10}
                                                                                                height={10}
                                                                                                focusable="false"
                                                                                            >
                                                                                                <path
                                                                                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                    fillRule="nonzero"
                                                                                                />
                                                                                            </svg>
                                                                                        </div>
                                                                                    </button>
                                                                                    <button
                                                                                        aria-haspopup="true"
                                                                                        role="menuitem"
                                                                                        type="button"
                                                                                        tabIndex={-1}
                                                                                        data-alloy-tabstop="true"
                                                                                        unselectable="on"
                                                                                        className="tox-mbtn tox-mbtn--select"
                                                                                        style={{
                                                                                            userSelect: "none",
                                                                                            width: "39.4722px"
                                                                                        }}
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <span className="tox-mbtn__select-label">
                                                                                            Edit
                                                                                        </span>
                                                                                        <div className="tox-mbtn__select-chevron">
                                                                                            <svg
                                                                                                width={10}
                                                                                                height={10}
                                                                                                focusable="false"
                                                                                            >
                                                                                                <path
                                                                                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                    fillRule="nonzero"
                                                                                                />
                                                                                            </svg>
                                                                                        </div>
                                                                                    </button>
                                                                                    <button
                                                                                        aria-haspopup="true"
                                                                                        role="menuitem"
                                                                                        type="button"
                                                                                        tabIndex={-1}
                                                                                        data-alloy-tabstop="true"
                                                                                        unselectable="on"
                                                                                        className="tox-mbtn tox-mbtn--select"
                                                                                        style={{
                                                                                            userSelect: "none",
                                                                                            width: "45.5278px"
                                                                                        }}
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <span className="tox-mbtn__select-label">
                                                                                            View
                                                                                        </span>
                                                                                        <div className="tox-mbtn__select-chevron">
                                                                                            <svg
                                                                                                width={10}
                                                                                                height={10}
                                                                                                focusable="false"
                                                                                            >
                                                                                                <path
                                                                                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                    fillRule="nonzero"
                                                                                                />
                                                                                            </svg>
                                                                                        </div>
                                                                                    </button>
                                                                                    <button
                                                                                        aria-haspopup="true"
                                                                                        role="menuitem"
                                                                                        type="button"
                                                                                        tabIndex={-1}
                                                                                        data-alloy-tabstop="true"
                                                                                        unselectable="on"
                                                                                        className="tox-mbtn tox-mbtn--select"
                                                                                        style={{
                                                                                            userSelect: "none",
                                                                                            width: "50.5278px"
                                                                                        }}
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <span className="tox-mbtn__select-label">
                                                                                            Insert
                                                                                        </span>
                                                                                        <div className="tox-mbtn__select-chevron">
                                                                                            <svg
                                                                                                width={10}
                                                                                                height={10}
                                                                                                focusable="false"
                                                                                            >
                                                                                                <path
                                                                                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                    fillRule="nonzero"
                                                                                                />
                                                                                            </svg>
                                                                                        </div>
                                                                                    </button>
                                                                                    <button
                                                                                        aria-haspopup="true"
                                                                                        role="menuitem"
                                                                                        type="button"
                                                                                        tabIndex={-1}
                                                                                        data-alloy-tabstop="true"
                                                                                        unselectable="on"
                                                                                        className="tox-mbtn tox-mbtn--select"
                                                                                        style={{
                                                                                            userSelect: "none",
                                                                                            width: "59.8333px"
                                                                                        }}
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <span className="tox-mbtn__select-label">
                                                                                            Format
                                                                                        </span>
                                                                                        <div className="tox-mbtn__select-chevron">
                                                                                            <svg
                                                                                                width={10}
                                                                                                height={10}
                                                                                                focusable="false"
                                                                                            >
                                                                                                <path
                                                                                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                    fillRule="nonzero"
                                                                                                />
                                                                                            </svg>
                                                                                        </div>
                                                                                    </button>
                                                                                    <button
                                                                                        aria-haspopup="true"
                                                                                        role="menuitem"
                                                                                        type="button"
                                                                                        tabIndex={-1}
                                                                                        data-alloy-tabstop="true"
                                                                                        unselectable="on"
                                                                                        className="tox-mbtn tox-mbtn--select"
                                                                                        style={{
                                                                                            userSelect: "none",
                                                                                            width: "47.7083px"
                                                                                        }}
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <span className="tox-mbtn__select-label">
                                                                                            Tools
                                                                                        </span>
                                                                                        <div className="tox-mbtn__select-chevron">
                                                                                            <svg
                                                                                                width={10}
                                                                                                height={10}
                                                                                                focusable="false"
                                                                                            >
                                                                                                <path
                                                                                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                    fillRule="nonzero"
                                                                                                />
                                                                                            </svg>
                                                                                        </div>
                                                                                    </button>
                                                                                    <button
                                                                                        aria-haspopup="true"
                                                                                        role="menuitem"
                                                                                        type="button"
                                                                                        tabIndex={-1}
                                                                                        data-alloy-tabstop="true"
                                                                                        unselectable="on"
                                                                                        className="tox-mbtn tox-mbtn--select"
                                                                                        style={{
                                                                                            userSelect: "none",
                                                                                            width: "47.8333px"
                                                                                        }}
                                                                                        aria-expanded="false"
                                                                                    >
                                                                                        <span className="tox-mbtn__select-label">
                                                                                            Table
                                                                                        </span>
                                                                                        <div className="tox-mbtn__select-chevron">
                                                                                            <svg
                                                                                                width={10}
                                                                                                height={10}
                                                                                                focusable="false"
                                                                                            >
                                                                                                <path
                                                                                                    d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                    fillRule="nonzero"
                                                                                                />
                                                                                            </svg>
                                                                                        </div>
                                                                                    </button>
                                                                                </div>
                                                                                <div
                                                                                    role="group"
                                                                                    className="tox-toolbar-overlord"
                                                                                    aria-disabled="false"
                                                                                >
                                                                                    <div
                                                                                        role="group"
                                                                                        className="tox-toolbar__primary"
                                                                                    >
                                                                                        <div
                                                                                            title=""
                                                                                            role="toolbar"
                                                                                            data-alloy-tabstop="true"
                                                                                            tabIndex={-1}
                                                                                            className="tox-toolbar__group"
                                                                                        >
                                                                                            <button
                                                                                                aria-label="Undo"
                                                                                                title="Undo"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn tox-tbtn--disabled"
                                                                                                aria-disabled="true"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 0 1-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 1.4L6.4 8Z"
                                                                                                            fillRule="nonzero"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                            <button
                                                                                                aria-label="Redo"
                                                                                                title="Redo"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn tox-tbtn--disabled"
                                                                                                aria-disabled="true"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M17.6 10H12c-2.8 0-4.4 1.4-4.9 3.5-.4 2 .3 4 1.4 4.6a1 1 0 1 1-1 1.8c-2-1.2-2.9-4.1-2.3-6.8.6-3 3-5.1 6.8-5.1h5.6l-3.3-3.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3Z"
                                                                                                            fillRule="nonzero"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div
                                                                                            title=""
                                                                                            role="toolbar"
                                                                                            data-alloy-tabstop="true"
                                                                                            tabIndex={-1}
                                                                                            className="tox-toolbar__group"
                                                                                        >
                                                                                            <button
                                                                                                title="Block Paragraph"
                                                                                                aria-label="Block Paragraph"
                                                                                                aria-haspopup="true"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                unselectable="on"
                                                                                                className="tox-tbtn tox-tbtn--select tox-tbtn--bespoke"
                                                                                                style={{
                                                                                                    userSelect: "none",
                                                                                                    width: 130
                                                                                                }}
                                                                                                aria-expanded="false"
                                                                                            >
                                                                                                <span className="tox-tbtn__select-label">
                                                                                                    Paragraph
                                                                                                </span>
                                                                                                <div className="tox-tbtn__select-chevron">
                                                                                                    <svg
                                                                                                        width={10}
                                                                                                        height={10}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                            fillRule="nonzero"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </button>
                                                                                            <button
                                                                                                title="Font System Font"
                                                                                                aria-label="Font System Font"
                                                                                                aria-haspopup="true"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                unselectable="on"
                                                                                                className="tox-tbtn tox-tbtn--select tox-tbtn--bespoke"
                                                                                                style={{
                                                                                                    userSelect: "none",
                                                                                                    width: 130
                                                                                                }}
                                                                                                aria-expanded="false"
                                                                                            >
                                                                                                <span className="tox-tbtn__select-label">
                                                                                                    System Font
                                                                                                </span>
                                                                                                <div className="tox-tbtn__select-chevron">
                                                                                                    <svg
                                                                                                        width={10}
                                                                                                        height={10}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                            fillRule="nonzero"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </button>
                                                                                            <button
                                                                                                title="Font size 12pt"
                                                                                                aria-label="Font size 12pt"
                                                                                                aria-haspopup="true"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                unselectable="on"
                                                                                                className="tox-tbtn tox-tbtn--select tox-tbtn--bespoke"
                                                                                                style={{
                                                                                                    userSelect: "none",
                                                                                                    width: 130
                                                                                                }}
                                                                                                aria-expanded="false"
                                                                                            >
                                                                                                <span className="tox-tbtn__select-label">
                                                                                                    12pt
                                                                                                </span>
                                                                                                <div className="tox-tbtn__select-chevron">
                                                                                                    <svg
                                                                                                        width={10}
                                                                                                        height={10}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                            fillRule="nonzero"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div
                                                                                            title=""
                                                                                            role="toolbar"
                                                                                            data-alloy-tabstop="true"
                                                                                            tabIndex={-1}
                                                                                            className="tox-toolbar__group"
                                                                                        >
                                                                                            <button
                                                                                                aria-label="Bold"
                                                                                                title="Bold"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn"
                                                                                                aria-disabled="false"
                                                                                                aria-pressed="false"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 0 1-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8Zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4Zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4Z"
                                                                                                            fillRule="evenodd"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                            <button
                                                                                                aria-label="Italic"
                                                                                                title="Italic"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn"
                                                                                                aria-disabled="false"
                                                                                                aria-pressed="false"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="m16.7 4.7-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8Z"
                                                                                                            fillRule="evenodd"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                            <button
                                                                                                aria-label="Underline"
                                                                                                title="Underline"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn"
                                                                                                aria-disabled="false"
                                                                                                aria-pressed="false"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M16 5c.6 0 1 .4 1 1v5.5a4 4 0 0 1-.4 1.8l-1 1.4a5.3 5.3 0 0 1-5.5 1 5 5 0 0 1-1.6-1c-.5-.4-.8-.9-1.1-1.4a4 4 0 0 1-.4-1.8V6c0-.6.4-1 1-1s1 .4 1 1v5.5c0 .3 0 .6.2 1l.6.7a3.3 3.3 0 0 0 2.2.8 3.4 3.4 0 0 0 2.2-.8c.3-.2.4-.5.6-.8l.2-.9V6c0-.6.4-1 1-1ZM8 17h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2Z"
                                                                                                            fillRule="evenodd"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                            <button
                                                                                                aria-label="Strikethrough"
                                                                                                title="Strikethrough"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn"
                                                                                                aria-disabled="false"
                                                                                                aria-pressed="false"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <g fillRule="evenodd">
                                                                                                            <path d="M15.6 8.5c-.5-.7-1-1.1-1.3-1.3-.6-.4-1.3-.6-2-.6-2.7 0-2.8 1.7-2.8 2.1 0 1.6 1.8 2 3.2 2.3 4.4.9 4.6 2.8 4.6 3.9 0 1.4-.7 4.1-5 4.1A6.2 6.2 0 0 1 7 16.4l1.5-1.1c.4.6 1.6 2 3.7 2 1.6 0 2.5-.4 3-1.2.4-.8.3-2-.8-2.6-.7-.4-1.6-.7-2.9-1-1-.2-3.9-.8-3.9-3.6C7.6 6 10.3 5 12.4 5c2.9 0 4.2 1.6 4.7 2.4l-1.5 1.1Z" />
                                                                                                            <path
                                                                                                                d="M5 11h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                                                                                                                fillRule="nonzero"
                                                                                                            />
                                                                                                        </g>
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div
                                                                                            title=""
                                                                                            role="toolbar"
                                                                                            data-alloy-tabstop="true"
                                                                                            tabIndex={-1}
                                                                                            className="tox-toolbar__group"
                                                                                        >
                                                                                            <button
                                                                                                aria-label="Insert/edit link"
                                                                                                title="Insert/edit link"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn"
                                                                                                aria-disabled="false"
                                                                                                aria-pressed="false"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M6.2 12.3a1 1 0 0 1 1.4 1.4l-2 2a2 2 0 1 0 2.6 2.8l4.8-4.8a1 1 0 0 0 0-1.4 1 1 0 1 1 1.4-1.3 2.9 2.9 0 0 1 0 4L9.6 20a3.9 3.9 0 0 1-5.5-5.5l2-2Zm11.6-.6a1 1 0 0 1-1.4-1.4l2-2a2 2 0 1 0-2.6-2.8L11 10.3a1 1 0 0 0 0 1.4A1 1 0 1 1 9.6 13a2.9 2.9 0 0 1 0-4L14.4 4a3.9 3.9 0 0 1 5.5 5.5l-2 2Z"
                                                                                                            fillRule="nonzero"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                            <button
                                                                                                aria-label="Insert/edit image"
                                                                                                title="Insert/edit image"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn"
                                                                                                aria-disabled="false"
                                                                                                aria-pressed="false"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="m5 15.7 3.3-3.2c.3-.3.7-.3 1 0L12 15l4.1-4c.3-.4.8-.4 1 0l2 1.9V5H5v10.7ZM5 18V19h3l2.8-2.9-2-2L5 17.9Zm14-3-2.5-2.4-6.4 6.5H19v-4ZM4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1Zm6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                                                                                                            fillRule="nonzero"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                            <button
                                                                                                aria-label="Insert/edit media"
                                                                                                title="Insert/edit media"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn"
                                                                                                aria-disabled="false"
                                                                                                aria-pressed="false"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1Zm1 2v14h14V5H5Zm4.8 2.6 5.6 4a.5.5 0 0 1 0 .8l-5.6 4A.5.5 0 0 1 9 16V8a.5.5 0 0 1 .8-.4Z"
                                                                                                            fillRule="nonzero"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                            <button
                                                                                                title="Table"
                                                                                                aria-label="Table"
                                                                                                aria-haspopup="true"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                unselectable="on"
                                                                                                className="tox-tbtn tox-tbtn--select"
                                                                                                style={{
                                                                                                    userSelect: "none",
                                                                                                    width: 48
                                                                                                }}
                                                                                                aria-expanded="false"
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            fillRule="nonzero"
                                                                                                            d="M19 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h14ZM5 14v4h6v-4H5Zm14 0h-6v4h6v-4Zm0-6h-6v4h6V8ZM5 12h6V8H5v4Z"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                                <div className="tox-tbtn__select-chevron">
                                                                                                    <svg
                                                                                                        width={10}
                                                                                                        height={10}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                            fillRule="nonzero"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div
                                                                                            title=""
                                                                                            role="toolbar"
                                                                                            data-alloy-tabstop="true"
                                                                                            tabIndex={-1}
                                                                                            className="tox-toolbar__group"
                                                                                        >
                                                                                            <button
                                                                                                title="Alignment left"
                                                                                                aria-label="Alignment left"
                                                                                                aria-haspopup="true"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                unselectable="on"
                                                                                                className="tox-tbtn tox-tbtn--select"
                                                                                                style={{
                                                                                                    userSelect: "none",
                                                                                                    width: 48
                                                                                                }}
                                                                                                aria-expanded="false"
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                        <svg
                                                                                                            width={24}
                                                                                                            height={24}
                                                                                                            focusable="false"
                                                                                                        >
                                                                                                            <path
                                                                                                                d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z"
                                                                                                                fillRule="evenodd"
                                                                                                            />
                                                                                                        </svg>
                                                                                                    </span>
                                                                                                </span>
                                                                                                <div className="tox-tbtn__select-chevron">
                                                                                                    <svg
                                                                                                        width={10}
                                                                                                        height={10}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                            fillRule="nonzero"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </button>
                                                                                            <button
                                                                                                title="Line height"
                                                                                                aria-label="Line height"
                                                                                                aria-haspopup="true"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                unselectable="on"
                                                                                                className="tox-tbtn tox-tbtn--select"
                                                                                                style={{
                                                                                                    userSelect: "none",
                                                                                                    width: 48
                                                                                                }}
                                                                                                aria-expanded="false"
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path d="M21 5a1 1 0 0 1 .1 2H13a1 1 0 0 1-.1-2H21zm0 4a1 1 0 0 1 .1 2H13a1 1 0 0 1-.1-2H21zm0 4a1 1 0 0 1 .1 2H13a1 1 0 0 1-.1-2H21zm0 4a1 1 0 0 1 .1 2H13a1 1 0 0 1-.1-2H21zM7 3.6l3.7 3.7a1 1 0 0 1-1.3 1.5h-.1L8 7.3v9.2l1.3-1.3a1 1 0 0 1 1.3 0h.1c.4.4.4 1 0 1.3v.1L7 20.4l-3.7-3.7a1 1 0 0 1 1.3-1.5h.1L6 16.7V7.4L4.7 8.7a1 1 0 0 1-1.3 0h-.1a1 1 0 0 1 0-1.3v-.1L7 3.6z" />
                                                                                                    </svg>
                                                                                                </span>
                                                                                                <div className="tox-tbtn__select-chevron">
                                                                                                    <svg
                                                                                                        width={10}
                                                                                                        height={10}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                                                                                            fillRule="nonzero"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div
                                                                                            title=""
                                                                                            role="toolbar"
                                                                                            data-alloy-tabstop="true"
                                                                                            tabIndex={-1}
                                                                                            className="tox-toolbar__group"
                                                                                        >
                                                                                            <button
                                                                                                aria-label="Numbered list"
                                                                                                title="Numbered list"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn"
                                                                                                aria-disabled="false"
                                                                                                aria-pressed="false"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 1 1 0-2ZM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1H6Zm-1 8.8.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 0 1-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 0 0-.2-.2H4.5a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3ZM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 0 1 0-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 1 1 0-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 1 1 0-1H6c.6 0 1 .4 1 1Z"
                                                                                                            fillRule="evenodd"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                            <button
                                                                                                aria-label="Bullet list"
                                                                                                title="Bullet list"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn"
                                                                                                aria-disabled="false"
                                                                                                aria-pressed="false"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2ZM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1Zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1Zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1Z"
                                                                                                            fillRule="evenodd"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                            <button
                                                                                                aria-label="Increase indent"
                                                                                                title="Increase indent"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn"
                                                                                                aria-disabled="false"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2Zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2Zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2Zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm-2.6-3.8L6.2 12l-1.8-1.2a1 1 0 0 1 1.2-1.6l3 2a1 1 0 0 1 0 1.6l-3 2a1 1 0 1 1-1.2-1.6Z"
                                                                                                            fillRule="evenodd"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                            <button
                                                                                                aria-label="Decrease indent"
                                                                                                title="Decrease indent"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                className="tox-tbtn tox-tbtn--disabled"
                                                                                                aria-disabled="true"
                                                                                                style={{ width: 34 }}
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M7 5h12c.6 0 1 .4 1 1s-.4 1-1 1H7a1 1 0 1 1 0-2Zm5 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2Zm0 4h7c.6 0 1 .4 1 1s-.4 1-1 1h-7a1 1 0 0 1 0-2Zm-5 4h12a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm1.6-3.8a1 1 0 0 1-1.2 1.6l-3-2a1 1 0 0 1 0-1.6l3-2a1 1 0 0 1 1.2 1.6L6.8 12l1.8 1.2Z"
                                                                                                            fillRule="evenodd"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div
                                                                                            role="toolbar"
                                                                                            data-alloy-tabstop="true"
                                                                                            tabIndex={-1}
                                                                                            className="tox-toolbar__group"
                                                                                        >
                                                                                            <button
                                                                                                aria-label="Reveal or hide additional toolbar items"
                                                                                                title="Reveal or hide additional toolbar items"
                                                                                                aria-haspopup="true"
                                                                                                type="button"
                                                                                                tabIndex={-1}
                                                                                                data-alloy-tabstop="true"
                                                                                                className="tox-tbtn"
                                                                                                aria-expanded="false"
                                                                                            >
                                                                                                <span className="tox-icon tox-tbtn__icon-wrap">
                                                                                                    <svg
                                                                                                        width={24}
                                                                                                        height={24}
                                                                                                        focusable="false"
                                                                                                    >
                                                                                                        <path
                                                                                                            d="M6 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2Zm12 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2Zm-6 0a2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2 2 2 0 0 0-2-2Z"
                                                                                                            fillRule="nonzero"
                                                                                                        />
                                                                                                    </svg>
                                                                                                </span>
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="tox-anchorbar" />
                                                                            </div>
                                                                            <div className="tox-sidebar-wrap">
                                                                                <div className="tox-edit-area">
                                                                                    <iframe
                                                                                        id="description_ifr"
                                                                                        frameBorder={0}
                                                                                        allowTransparency="true"
                                                                                        title="Rich Text Area"
                                                                                        className="tox-edit-area__iframe"
                                                                                        srcDoc='<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></head><body id="tinymce" class="mce-content-body " data-id="description" aria-label="Rich Text Area. Press ALT-0 for help."><br></body></html>'
                                                                                    />
                                                                                </div>
                                                                                <div
                                                                                    role="presentation"
                                                                                    className="tox-sidebar"
                                                                                >
                                                                                    <div
                                                                                        data-alloy-tabstop="true"
                                                                                        tabIndex={-1}
                                                                                        className="tox-sidebar__slider tox-sidebar--sliding-closed"
                                                                                        style={{ width: 0 }}
                                                                                    >
                                                                                        <div className="tox-sidebar__pane-container" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tox-bottom-anchorbar" />
                                                                            <div className="tox-statusbar">
                                                                                <div className="tox-statusbar__text-container tox-statusbar__text-container--flex-start">
                                                                                    <div
                                                                                        role="navigation"
                                                                                        data-alloy-tabstop="true"
                                                                                        className="tox-statusbar__path"
                                                                                        aria-disabled="false"
                                                                                    >
                                                                                        <div
                                                                                            data-index={0}
                                                                                            aria-level={1}
                                                                                            role="button"
                                                                                            tabIndex={-1}
                                                                                            className="tox-statusbar__path-item"
                                                                                            aria-disabled="false"
                                                                                        >
                                                                                            p
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="tox-statusbar__right-container">
                                                                                        <button
                                                                                            type="button"
                                                                                            tabIndex={-1}
                                                                                            data-alloy-tabstop="true"
                                                                                            className="tox-statusbar__wordcount"
                                                                                        >
                                                                                            0 words
                                                                                        </button>
                                                                                        <span className="tox-statusbar__branding">
                                                                                            <a
                                                                                                href="https://www.tiny.cloud/powered-by-tiny?utm_campaign=editor_referral&utm_medium=poweredby&utm_source=tinymce&utm_content=v6"
                                                                                                rel="noopener"
                                                                                                target="_blank"
                                                                                                aria-label="Powered by Tiny"
                                                                                                tabIndex={-1}
                                                                                            >
                                                                                                <svg
                                                                                                    width="50px"
                                                                                                    height="16px"
                                                                                                    viewBox="0 0 50 16"
                                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                                >
                                                                                                    <path
                                                                                                        fillRule="evenodd"
                                                                                                        clipRule="evenodd"
                                                                                                        d="M10.143 0c2.608.015 5.186 2.178 5.186 5.331 0 0 .077 3.812-.084 4.87-.361 2.41-2.164 4.074-4.65 4.496-1.453.284-2.523.49-3.212.623-.373.071-.634.122-.785.152-.184.038-.997.145-1.35.145-2.732 0-5.21-2.04-5.248-5.33 0 0 0-3.514.03-4.442.093-2.4 1.758-4.342 4.926-4.963 0 0 3.875-.752 4.036-.782.368-.07.775-.1 1.15-.1Zm1.826 2.8L5.83 3.989v2.393l-2.455.475v5.968l6.137-1.189V9.243l2.456-.476V2.8ZM5.83 6.382l3.682-.713v3.574l-3.682.713V6.382Zm27.173-1.64-.084-1.066h-2.226v9.132h2.456V7.743c-.008-1.151.998-2.064 2.149-2.072 1.15-.008 1.987.92 1.995 2.072v5.065h2.455V7.359c-.015-2.18-1.657-3.929-3.837-3.913a3.993 3.993 0 0 0-2.908 1.296Zm-6.3-4.266L29.16 0v2.387l-2.456.475V.476Zm0 3.2v9.132h2.456V3.676h-2.456Zm18.179 11.787L49.11 3.676H46.58l-1.612 4.527-.46 1.382-.384-1.382-1.611-4.527H39.98l3.3 9.132L42.15 16l2.732-.537ZM22.867 9.738c0 .752.568 1.075.921 1.075.353 0 .668-.047.998-.154l.537 1.765c-.23.154-.92.537-2.225.537-1.305 0-2.655-.997-2.686-2.686a136.877 136.877 0 0 1 0-4.374H18.8V3.676h1.612v-1.98l2.455-.476v2.456h2.302V5.9h-2.302v3.837Z"
                                                                                                    />
                                                                                                </svg>
                                                                                            </a>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div
                                                                                    title="Resize"
                                                                                    aria-label="Press the Up and Down arrow keys to resize the editor."
                                                                                    data-alloy-tabstop="true"
                                                                                    tabIndex={-1}
                                                                                    className="tox-statusbar__resize-handle"
                                                                                >
                                                                                    <svg
                                                                                        width={10}
                                                                                        height={10}
                                                                                        focusable="false"
                                                                                    >
                                                                                        <g fillRule="nonzero">
                                                                                            <path d="M8.1 1.1A.5.5 0 1 1 9 2l-7 7A.5.5 0 1 1 1 8l7-7ZM8.1 5.1A.5.5 0 1 1 9 6l-3 3A.5.5 0 1 1 5 8l3-3Z" />
                                                                                        </g>
                                                                                    </svg>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            aria-hidden="true"
                                                                            className="tox-view-wrap"
                                                                            style={{ display: "none" }}
                                                                        >
                                                                            <div className="tox-view-wrap__slot-container" />
                                                                        </div>
                                                                        <div
                                                                            aria-hidden="true"
                                                                            className="tox-throbber"
                                                                            style={{ display: "none" }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    Tag(use comma(,) for multiple) *
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <input
                                                                        className="sherah-wc__form-input"
                                                                        type="text"
                                                                        id="tag"
                                                                        name="tag"
                                                                        autoComplete="off"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    SEO Title *
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <textarea
                                                                        className="sherah-wc__form-input"
                                                                        placeholder="type here"
                                                                        type="text"
                                                                        name="seo_title"
                                                                        defaultValue={""}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label className="sherah-wc__form-label">
                                                                    SEO Description
                                                                </label>
                                                                <div className="form-group__input">
                                                                    <textarea
                                                                        className="sherah-wc__form-input"
                                                                        placeholder="Type here"
                                                                        type="text"
                                                                        name="seo_description"
                                                                        defaultValue={""}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Product Info */}
                                            </div>
                                        </div>
                                        <div className="product-form-box sherah-border mg-top-30">
                                            <div className="form-group">
                                                <div className="image-upload-group">
                                                    <div className="image-upload-group__single">
                                                        <img id="preview-img" src="" />
                                                    </div>
                                                    <div className="image-upload-group__single image-upload-group__single--upload">
                                                        <input
                                                            type="file"
                                                            className="btn-check"
                                                            name="image"
                                                            id="input-img1"
                                                            onchange="previewThumnailImage(event)"
                                                            autoComplete="off"
                                                        />
                                                        <label
                                                            className="image-upload-label"
                                                            htmlFor="input-img1"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="91.787"
                                                                height="84.116"
                                                                viewBox="0 0 91.787 84.116"
                                                            >
                                                                <g
                                                                    id="Group_1021"
                                                                    data-name="Group 1021"
                                                                    transform="translate(891.292 39.276)"
                                                                >
                                                                    <path
                                                                        id="Path_536"
                                                                        data-name="Path 536"
                                                                        d="M-891.292,158.124q1.434-5.442,2.867-10.884c1.3-4.961,2.586-9.926,3.9-14.884a2.8,2.8,0,0,1,2.664-2.251,2.654,2.654,0,0,1,2.763,1.848,3.929,3.929,0,0,1,.037,2q-3.073,12-6.226,23.984c-.64,2.452.088,3.739,2.533,4.394q29.033,7.775,58.067,15.543a2.893,2.893,0,0,0,3.97-2.327c.626-2.487,1.227-4.98,1.849-7.468a2.9,2.9,0,0,1,3.436-2.368,2.894,2.894,0,0,1,2.124,3.726c-.627,2.609-1.256,5.219-1.944,7.813A8.547,8.547,0,0,1-826,183.469q-29.3-7.827-58.584-15.682a8.566,8.566,0,0,1-6.552-6.853,1.264,1.264,0,0,0-.16-.3Z"
                                                                        transform="translate(0 -138.958)"
                                                                    />
                                                                    <path
                                                                        id="Path_537"
                                                                        data-name="Path 537"
                                                                        d="M-767.966,21.9c-9.648,0-19.3-.062-28.943.029a9.215,9.215,0,0,1-8.88-5.491,7.393,7.393,0,0,1-.451-3.232c-.027-14.606-.053-29.212,0-43.818a8.532,8.532,0,0,1,8.907-8.66q29.346-.008,58.693,0a8.581,8.581,0,0,1,8.877,8.872q.017,21.685,0,43.37a8.551,8.551,0,0,1-8.9,8.923C-748.432,21.915-758.2,21.9-767.966,21.9ZM-773.938.457l4.606-5.528q4.674-5.611,9.345-11.224a6.85,6.85,0,0,1,7.183-2.522c1.734.377,2.87,1.622,3.969,2.909q6.341,7.428,12.7,14.838a6.488,6.488,0,0,1,.426.631l.211-.158v-.789q0-14.429,0-28.857c0-2.179-1.125-3.294-3.316-3.295q-29.216,0-58.432,0c-2.141,0-3.277,1.115-3.278,3.25q-.008,18.865,0,37.73a5.429,5.429,0,0,0,.07.624l.239.127a5.744,5.744,0,0,1,.529-.721Q-794.05,1.826-788.4-3.808c3.131-3.127,7.065-3.129,10.21,0C-776.8-2.422-775.412-1.022-773.938.457Zm-25.649,14.9a3.316,3.316,0,0,0,2.611.808q28.949,0,57.9,0c.239,0,.478,0,.717-.005a2.828,2.828,0,0,0,2.864-2.923c.02-1.195-.052-2.393.023-3.584a2.712,2.712,0,0,0-.78-2.072q-8.569-9.946-17.1-19.927c-1.071-1.25-1.417-1.243-2.489.044q-7.71,9.264-15.424,18.523c-1.468,1.762-3.193,1.826-4.833.189q-3.076-3.071-6.147-6.147c-.963-.962-1.146-.963-2.1-.01q-6.688,6.684-13.377,13.367C-798.31,14.2-798.937,14.753-799.587,15.358Z"
                                                                        transform="translate(-69.752)"
                                                                    />
                                                                    <path
                                                                        id="Path_538"
                                                                        data-name="Path 538"
                                                                        d="M-734.635,39.893a7.657,7.657,0,0,1-7.659-7.6,7.688,7.688,0,0,1,7.7-7.667,7.682,7.682,0,0,1,7.612,7.663A7.653,7.653,0,0,1-734.635,39.893Zm-.029-5.742a1.9,1.9,0,0,0,1.938-1.906,1.934,1.934,0,0,0-1.886-1.884,1.927,1.927,0,0,0-1.936,1.92A1.9,1.9,0,0,0-734.664,34.151Z"
                                                                        transform="translate(-122.238 -52.421)"
                                                                    />
                                                                </g>
                                                            </svg>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" mg-top-40 sherah-dflex sherah-dflex-gap-30 justify-content-end">
                                            <button
                                                type="submit"
                                                className="sherah-btn sherah-btn__primary"
                                            >
                                                Create Blog
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AddBlog