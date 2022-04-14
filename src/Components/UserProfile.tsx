import React from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

export const UserProfile = ({
  user,
  active,
}: {
  user: { name: string; id: number; company: any };
  active: boolean;
}) => {
  return (
    <>
      <div className={classNames({ [styles.active]: active })}>
        <img
          className={styles.userPhoto}
          src={`https://i.pravatar.cc/${user.id + 300}`}
          alt="userPhoto"
        />
      </div>
      <span
        className={classNames(styles.userName, {
          [styles.color]: active,
        })}
      >
        {user.name}
      </span>
      <span
        className={classNames(styles.companyName, { [styles.color]: active })}
      >
        {user.company.name}
      </span>
    </>
  );
};
