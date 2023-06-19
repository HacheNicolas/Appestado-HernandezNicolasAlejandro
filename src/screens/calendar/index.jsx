import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import EventItems from '../../components/items/event';
import { useSelector } from 'react-redux';

const Calendar = () => {
  const events = useSelector((state) => state.events.data);
  return (
    <SafeAreaView style={styles.container}>
      <EventItems items={events} />
    </SafeAreaView>
  );
};

export default Calendar;
