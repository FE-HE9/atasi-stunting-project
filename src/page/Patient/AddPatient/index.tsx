import { 
  Box, 
  FormControl, 
  FormLabel, 
  Button,
  Stack,
  useColorModeValue,
  Input,
  Select
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPatient(){
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (event: { preventDefault: () => void; }) =>{
    event.preventDefault();
    const patient = {name, age, gender, height, status};
    fetch('http://localhost:3001/patients', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(patient)
    }).then(()=>{
      /* eslint-disable no-console */
      console.log('new patient added');
      /* eslint-enable no-console */
      setName("");
      setAge("");
      setHeight("");
      setGender("");
      setStatus("");
      navigate('/dashboard');
    })
  }

  return(
    <Box
      p={10}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={4}>
        <form onSubmit={handleSubmit} id="add_form">
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl id="gender" isRequired>
            <FormLabel>Gender</FormLabel>
            <Select 
              placeholder="Select Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value='Boy'>Boy</option>
              <option value='Girl'>Girl</option>
            </Select>
          </FormControl>

          <FormControl id="age" isRequired>
            <FormLabel>Age</FormLabel>
            <Input 
              type="text" 
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </FormControl>

          <FormControl id="height" isRequired>
            <FormLabel>Height</FormLabel>
            <Input 
              type="text" 
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </FormControl>

          <FormControl id="status" isRequired>
            <FormLabel>Status</FormLabel>
            <Select 
              placeholder="Select Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value='Normal'>Normal</option>
              <option value='Moderately stunted'>Moderately stunted</option>
              <option value='Severely stunted '>Severely stunted</option>
            </Select>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              type="submit"
            >
              Save
            </Button>
          </Stack>
        </form>
    
      </Stack>
    </Box>
    
  );
}