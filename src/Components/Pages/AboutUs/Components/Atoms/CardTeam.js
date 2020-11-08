import React from "react";

const CardTeam = (props) => {
    let { name, imgUrl, position } = props;
    return (
        <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div class="card team text-center border-0">
                <div class="position-relative">
                    <img
                        src={imgUrl}
                        class="img-fluid avatar avatar-ex-large rounded-circle shadow"
                        alt=""
                    />
                    <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                        <li class="list-inline-item">
                            <a href="javascript:void(0)" class="rounded">
                                <i
                                    data-feather="facebook"
                                    class="fea icon-sm fea-social"
                                ></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="javascript:void(0)" class="rounded">
                                <i
                                    data-feather="instagram"
                                    class="fea icon-sm fea-social"
                                ></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="javascript:void(0)" class="rounded">
                                <i
                                    data-feather="twitter"
                                    class="fea icon-sm fea-social"
                                ></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="javascript:void(0)" class="rounded">
                                <i
                                    data-feather="linkedin"
                                    class="fea icon-sm fea-social"
                                ></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="card-body py-3 px-0 content">
                    <h5 class="mb-0">
                        <a href="javascript:void(0)" class="name text-dark">
                            {name}
                        </a>
                    </h5>
                    <small class="designation text-muted">{position}</small>
                </div>
            </div>
        </div>
    );
};

export default CardTeam;
