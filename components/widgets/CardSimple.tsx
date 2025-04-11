import React from "react";
import clsx from "clsx";

type CardSimpleProps = {
  icon: React.ReactNode;
  heading?: string;
  title: string;
  content: string;
  customClass?: string;
};

const CardSimple = ({
  icon,
  heading,
  title,
  content,
  customClass,
}: CardSimpleProps) => {
  return (
    <div className={clsx("card custom-card", customClass)}>
      <a href="javascript:void(0);" className="card-anchor" />
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="me-3">{icon}</div>
          <div>
            {heading ? (
              <p className="card-text text-info mb-1 fs-14 fw-semibold">
                {heading}
              </p>
            ) : (
              <p className="card-text mb-0 fs-14 fw-semibold">{title}</p>
            )}

            {heading && <div className="card-title fs-12 mb-1">{title}</div>}

            <div
              className={clsx(
                "card-title text-muted mb-0",
                heading ? "fs-11" : "fs-12"
              )}
            >
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSimple;
