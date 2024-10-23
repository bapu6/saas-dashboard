import React, { useContext } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Image, { StaticImageData } from "next/image";
import isEmpty from "lodash/isEmpty";

import { ThemeContext } from "@/components/context/ThemeContext";

type Activity = {
  title: string;
  time: string;
  icon: StaticImageData;
};

export default function CustomizedTimeline({
  data,
  activity = false,
}: {
  data: Activity[];
  activity?: boolean;
}) {
  const { activeFg } = useContext(ThemeContext);

  return (
    <div className="flex-1">
      <Timeline
        position="right"
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {data?.map((item, id) => (
          <TimelineItem
            key={`${id}`}
            sx={{
              p: 0,
              minHeight: activity ? 65 : 50,
            }}
          >
            <TimelineSeparator sx={{ m: 0, p: 0 }}>
              <TimelineConnector
                className={`${activity && id !== 0 ? "visible" : "invisible"}`}
              />
              <TimelineDot
                sx={{ my: "5px", background: "transparent", p: 0, m: 0 }}
                variant="filled"
              >
                <div className="h-7 w-7">
                  <Image
                    alt="avatar"
                    src={item?.icon}
                    className="h-full w-full"
                  />
                </div>
              </TimelineDot>
              <TimelineConnector
                className={`${
                  activity && id !== data?.length - 1 ? "visible" : "invisible"
                }`}
              />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                px: 2,
                alignSelf: "center",
              }}
            >
              <p className="line-clamp-1">{item?.title}</p>
              {item?.time && (
                <p className={`text-${activeFg} opacity-[0.4]`}>{item?.time}</p>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
