import Colors from './../../../utils/colors';
const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  subHeader: {
    backgroundColor: Colors.black10,
    padding: 16,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    marginLeft: 8,
  },
  sectionHeader: {
    backgroundColor: Colors.black20,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: Colors.white,
    fontSize: 14,
  },
  sectionText: {
    color: Colors.white,
  },
  section: {
    maxHeight: 220,
  },
  list: {
    maxHeight: 100,
    marginLeft: 16,
  },
  textMarketTitle: {
    color: Colors.white,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 16,
  },
};
export default styles;
