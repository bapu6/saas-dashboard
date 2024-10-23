import React from "react";
import { StaticImageData } from "next/image";

import CustomizedTimeline from "./CustomizedTimeline";
import avatar1 from "@/public/activities/avatar1.png";
import avatar2 from "@/public/activities/avatar2.png";
import avatar3 from "@/public/activities/avatar3.png";
import avatar4 from "@/public/activities/avatar4.png";
import avatar5 from "@/public/activities/avatar5.png";
import bug from "@/public/notifications/bug.png";
import user from "@/public/notifications/user.png";
import broadcast from "@/public/notifications/broadcast.png";
import contact1 from "@/public/contacts/contact1.png";
import contact2 from "@/public/contacts/contact2.png";
import contact3 from "@/public/contacts/contact3.png";
import contact4 from "@/public/contacts/contact4.png";
import contact5 from "@/public/contacts/contact5.png";
import contact6 from "@/public/contacts/contact6.png";

type Activity = {
  title: string;
  time: string;
  icon: StaticImageData;
};

const RightDrawer = () => {
  const activitiesData: Activity[] = [
    {
      title: "You have a bug that needs to be fixed.",
      time: "Just now",
      icon: avatar1,
    },
    {
      title: "Released a new version",
      time: "59 minutes ago",
      icon: avatar2,
    },
    {
      title: "Submitted a bug",
      time: "12 hours ago",
      icon: avatar3,
    },
    {
      title: "Modified A data in Page X",
      time: "Today, 11:59 AM",
      icon: avatar4,
    },
    {
      title: "Deleted a page in Project X",
      time: "Feb 2, 2023",
      icon: avatar5,
    },
  ];

  const notificationData: Activity[] = [
    {
      title: "You have a bug that needs to be fixed.",
      time: "Just now",
      icon: bug,
    },
    {
      title: "New user registered",
      time: "59 minutes ago",
      icon: user,
    },
    {
      title: "You have a bug that needs to be fixed.",
      time: "12 hours ago",
      icon: broadcast,
    },
    {
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      icon: avatar1,
    },
  ];

  const contactsData = [
    {
      title: "Natali Craig",
      time: "",
      icon: contact1,
    },
    {
      title: "Drew Cano",
      time: "",
      icon: contact2,
    },
    {
      title: "Orlando Diggs",
      time: "",
      icon: contact3,
    },
    {
      title: "Andi Lane",
      time: "",
      icon: contact4,
    },
    {
      title: "Kate Morrison",
      time: "",
      icon: contact5,
    },
    {
      title: "Koray Okumus",
      time: "",
      icon: contact6,
    },
  ];

  return (
    <div className="p-5 flex flex-col gap-4 overflow-auto">
      {/* Notifications */}
      <div>
        <p className="font-semibold">Notifications</p>
        <CustomizedTimeline data={notificationData} />
      </div>
      {/* Activities */}
      <div>
        <p className="font-semibold">Activities</p>
        <CustomizedTimeline data={activitiesData} activity />
      </div>
      {/* Contacts */}
      <div>
        <p className="font-semibold">Contacts</p>
        <CustomizedTimeline data={contactsData} />
      </div>
    </div>
  );
};

export default RightDrawer;
