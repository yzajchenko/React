const styles = () => ({
  todo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  tackComplete: {
    textDecoration: "line-through",
    fontSize: "14px",
    minWidth: "300px"
  },
  tack: {
    minWidth: "300px",
    "& input": {
      color: "black"
    }
  },
  done: {
    opacity: 0
  }
});

export default styles;
