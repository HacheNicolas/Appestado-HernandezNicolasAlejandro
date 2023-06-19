import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { OrderItems } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { filterOrders, selectOrdersType } from '../../store/actions';

const Orders = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.data);

  const donations = orders.filter((order) => order.orderType == 'Donacion');
  const requests = orders.filter((order) => order.orderType == 'Solicitud');

  const onSelectDonation = () => {
    dispatch(selectOrdersType('Donacion'));
    dispatch(filterOrders('Donacion'));
    navigation.navigate('OrdersDetailed', {
      name: 'DONACIONES',
    });
  };

  const onSelectRequests = (items) => {
    dispatch(selectOrdersType('Solicitud'));
    dispatch(filterOrders('Solicitud'));
    navigation.navigate('OrdersDetailed', {
      name: 'SOLICITUDES',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <OrderItems
          items={donations}
          preview={true}
          title={'Donaciones'}
          onSelectList={onSelectDonation}
        />
      </View>
      <View style={styles.sectionContainer}>
        <OrderItems
          items={requests}
          preview={true}
          title={'Solicitudes'}
          onSelectList={onSelectRequests}
        />
      </View>
    </SafeAreaView>
  );
};

export default Orders;
