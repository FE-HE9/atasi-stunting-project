import {
  Box,
  Button,
  Heading, 
  Link, 
  Text,
  useColorModeValue
} from '@chakra-ui/react';

import {Link as ReachLink} from 'react-router-dom';
import PatientList from '../../components/molecules/Patient/PatientList';
import useFetch from './useFetch'


export default function Dashboard() {
  const {data: patients, isPending, error} = useFetch('http://localhost:3001/patients');

  return (
    <Box
      p={10}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Link as={ReachLink} to={'/add-patient'}>
        <Button>New Patients</Button>
      </Link>
      <Heading p={2}>Stunting Children List</Heading>
      {error && <Text>{error}</Text>}
      {isPending && <Text>Loading...</Text>}
      {patients && <PatientList patients={patients}/>}

    </Box>
  );
}