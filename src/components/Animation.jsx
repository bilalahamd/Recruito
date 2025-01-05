export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const slideFromLeft = {
  hidden: { x: "-100%", opacity: 0 },
  show: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};
export const titleAnimation = {
  hidden: { y: 50 },
  show: {
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const slideFromBottom = {
  hidden: { y: 30, opacity: 0 }, //
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.5,
    },
  },
};
