import React from "react";

const Bookmark = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
)

const Cards = (props) => {
    return (
        <div className='card'>
            <div className="top">
                <div className="img-icon">
                    <img src = {props.logo} className="logo-placeholder" />
                </div>
                <div className="save-btn">
                    <button className="btn-save">
                        Save <Bookmark />
                    </button>
                </div>
            </div>
            <div className="middle">
                <div className="brand-name">
                    {props.brandName}
                </div>
                <div className="designation">
                    {props.designation}
                </div>
                <div className="levels">
                    <span className="level-tag">Full-time</span>
                    <span className="level-tag">Remote</span>
                    <span className="level-tag">L3</span>
                </div>
            </div>
            <div className="bottom">
                <div className="pay">
                    {props.salary} / yr
                </div>
                <div className="apply-btn">
                    <button className="btn-apply">Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Cards