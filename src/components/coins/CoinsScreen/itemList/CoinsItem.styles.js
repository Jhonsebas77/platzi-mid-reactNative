import Colors from './../../../../utils/colors';
import {Platform} from 'react-native';
const isiOS = Platform.OS === 'ios';
const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 2,
    paddingLeft: isiOS ? 0 : 16,
    marginLeft: isiOS ? 16 : 0,
  },
  row: {
    flexDirection: 'row',
  },
  textName: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 14,
    marginRight: 12,
  },
  textSymbol: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  textPercent: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 10,
    marginRight: 8,
  },
  textPriceUsd: {
    color: Colors.white,
    fontSize: 14,
  },
  imageIcon: {
    width: 20,
    height: 20,
  },
};
export default styles;
