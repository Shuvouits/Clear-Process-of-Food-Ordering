import React from 'react'

function ProfileModal({handleProfile}) {
    return (
        <div
            className="modal fade bd-example-modal-lg show "
            id="ProfileEditTable"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            style={{ display: "block", paddingLeft: 0 }}
            aria-modal="true"
            role="dialog"
        >
            <div className="modal-dialog modal-lg profile-modal" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Update Profile
                        </h5>
                        <button
                            type="button"
                            className="btn btn-primary admin_update_close_btn"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleProfile}
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body" id="Variant">
                        <form
                            className="sherah-wc__form-main"
                            action="https://reservq.minionionbd.com/admin-chnage-image/1"
                            method="POST"
                            encType="multipart/form-data"
                        >
                            <input
                                type="hidden"
                                name="_token"
                                defaultValue="snHSXDmQ4I3P9eUqjdKWpo3YUC0JOBgVasTpgJPc"
                            />{" "}
                            <div className="variant">
                                <div className="row">
                                    <div className="col-12">
                                        {" "}
                                        {/* Product Info */}
                                        <div className="product-form-box">
                                            <div className="row">
                                                <div className="col-12" id="variant_name">
                                                    <div className="form-group">
                                                        <label className="sherah-wc__form-label">Image *</label>
                                                        <div className="form-group__input">
                                                            <img
                                                                className="admin_avatar"
                                                                id="preview-img-profile"
                                                                src="https://reservq.minionionbd.com/uploads/custom-images/john-doe-2024-01-13-04-47-55-9146.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12" id="variant_name">
                                                    <div className="form-group">
                                                        <label className="sherah-wc__form-label">
                                                            New Image *
                                                        </label>
                                                        <div className="form-group__input">
                                                            <input
                                                                onchange="previewThumnailImage(event)"
                                                                type="file"
                                                                name="image"
                                                                id=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12" id="item_name">
                                                    <div className="form-group">
                                                        <label className="sherah-wc__form-label">Name *</label>
                                                        <div className="form-group__input">
                                                            <input
                                                                className="sherah-wc__form-input"
                                                                type="text"
                                                                name="name"
                                                                defaultValue="John Doe"
                                                                required=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12" id="item_name">
                                                    <div className="form-group">
                                                        <label className="sherah-wc__form-label">Email *</label>
                                                        <div className="form-group__input">
                                                            <input
                                                                className="sherah-wc__form-input"
                                                                type="text"
                                                                name="email"
                                                                defaultValue="admin@gmail.com"
                                                                required=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12" id="CreateItemButton">
                                                    <div className="form-group">
                                                        <button
                                                            type="submit"
                                                            className="sherah-btn sherah-btn__primary"
                                                        >
                                                            Update
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Product Info */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileModal