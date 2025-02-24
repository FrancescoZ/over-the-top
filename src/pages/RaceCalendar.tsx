import { useState } from 'react';
import {
  Container,
  Heading,
  Box,
  Text,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import data from '../../data.json';
import CalendarView from '../components/calendar/CalendarView';
import ListView from '../components/calendar/ListView';

const RaceCalendar = () => {
  const { t } = useTranslation();
  const { events } = data;

  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Box py={12}>
      <Container maxW="container.xl">
        <VStack spacing={8} mb={12}>
          <Heading as="h1" size="2xl" textAlign="center">
            {t('calendar.title')}
          </Heading>
          <Text fontSize="xl" color="gray.600" textAlign="center" maxW="2xl">
            {t('calendar.subtitle')}
          </Text>
        </VStack>

        <Tabs isLazy>
          <TabList mb={4}>
            <Tab>{t('calendar.views.calendar')}</Tab>
            <Tab>{t('calendar.views.list')}</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <CalendarView
                events={events.filter((event) => event.category === 'competition')}
                currentDate={currentDate}
                onDateChange={setCurrentDate}
              />
            </TabPanel>
            <TabPanel>
              <ListView events={events.filter((event) => event.category === 'competition')} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default RaceCalendar;
