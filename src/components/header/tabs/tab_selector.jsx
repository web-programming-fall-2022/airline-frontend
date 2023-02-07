import React from "react";
import TabItem from "./tab_item";
import { faPlaneUp, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../../atoms/user_atom";
import classNames from "classnames";
import UserIndicator from "../user_indicator";

function TabSelector({ selectedPage }) {
  const user = useRecoilValue(userAtom);

  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-b5a880ed.webp")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className={classNames(
        "flex flex-col justify-end px-10 h-48 w-full text-gray-700",
        {
          "justify-between": user,
        }
      )}
    >
      {user && <UserIndicator user={user} />}
      <div className="bg-white border-r border-t border-l rounded-tl-md rounded-tr-md flex flex-row w-full">
        <TabItem
          icon={faPlaneUp}
          title={"رزرو بلیط"}
          link={"/"}
          isSelected={
            selectedPage == "/" || selectedPage.split("/")[1] == "tickets"
          }
        />
        <TabItem
          icon={faClipboardCheck}
          title={"سفر‌های من"}
          link={"/my-trips"}
          isSelected={selectedPage == "/my-trips"}
        />
      </div>
    </div>
  );
}

export default TabSelector;
