import React from "react";
import classNames from "classnames";
import s from "./userprofile.module.scss";
export const UserProfile = ({ user, active }) => {
  return (
    <>
      <div
        className={classNames({
          [s.active]: active,
        })}
      >
        <img
          className={s.userPhoto}
          src={`https://i.pravatar.cc/${user.id + 300}`}
          alt="userPhoto"
        />
      </div>
      <span
        className={classNames(s.userName, {
          [s.color]: active,
        })}
      >
        {user.name}
      </span>
      <span
        className={classNames(s.companyName, {
          [s.color]: active,
        })}
      >
        {user.company.name}
      </span>
    </>
  );
};
