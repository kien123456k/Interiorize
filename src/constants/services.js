import React from "react"
import {
  GiCompass,
  GiDiamondHard,
  GiStabbedNote,
  GiBriefcase,
} from "react-icons/gi"

const services = [
  {
    id: 1,
    icon: <GiCompass className="icon" />,
    label: "mission",
    text: "Our goal is to bring the most comfortable, gorgeous as well as stylish to your interior design.",
  },
  {
    id: 2,
    icon: <GiDiamondHard className="icon" />,
    label: "vision",
    text: "Interior environemt takes an important role in almost everybody life. Motivate and stimulate everyone's inspiration as well as enhance life quality.",
  },
  {
    id: 3,
    icon: <GiStabbedNote className="icon" />,
    label: "history",
    text: "Created by Kirin Tran in 2021, we just begin our journey and have many customers from all over the world such as American, China, etc...",
  },
  {
    id: 4,
    icon: <GiBriefcase className="icon" />,
    label: "work",
    text: "We have a professional team that have many certifications as well as professors and masters from popular University such as Harvard, Royal College of Art and so on.",
  },
]

export default services
