export const EQUALIZER_HEIGHTS = [
  60, 80, 40, 100, 60, 80, 40, 100, 60, 80, 40, 100,
];
export const styles = {
  container: {
    paddingTop: 30,
    flex: 1,
    padding: 10,
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  station: {
    backgroundColor: "lightgray",
    padding: 10,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    borderRadius: 8,
    marginVertical: 5,
  },
  stationName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  stationURL: {
    color: "gray",
    fontSize: 12,
  },
  animationContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: Math.max(...EQUALIZER_HEIGHTS) + 20,
    marginBottom: 20,
  },
  bar: {
    width: 10,
    borderRadius: 5,
    backgroundColor: "#333",
    marginHorizontal: 5,
  },
};
