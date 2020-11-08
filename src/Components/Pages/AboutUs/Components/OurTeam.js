import React from "react";
import CardTeam from "./Atoms/CardTeam";
import teams from "./data";

const OurTeam = () => {
    return (
        <div>
            <section class="section bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-12 text-center">
                            <div class="section-title mb-4 pb-2">
                                <h4 class="title">Our Team</h4>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        {teams.map((team) => (
                            <CardTeam
                                name={team.name}
                                imgUrl={team.imgUrl}
                                position={team.position}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurTeam;
