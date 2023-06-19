import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { OrderItems } from '../../components';
import { useSelector } from 'react-redux';

const OrdersDetailed = ({ route }) => {
  const ordersDetailedItems = useSelector((state) => state.orders.filteredOrders);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <OrderItems items={ordersDetailedItems} preview={false} />
      </View>
    </SafeAreaView>
  );
};

export default OrdersDetailed;
