import React, { useState } from 'react';
import { VStack, Text, Button, Box, Input, Flex } from '@chakra-ui/react';
import Navbar from '../../Components/Navbar';

const LinearSearch = () => {
  const [array, setArray] = useState([4, 2, 7, 1, 9, 5, 3]);
  const [searchValue, setSearchValue] = useState('');
  const [searchIndex, setSearchIndex] = useState(-1);

  const linearSearch = () => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === parseInt(searchValue)) {
        setSearchIndex(i);
        return;
      }
    }
    setSearchIndex(-1);
  };

  return (
    <>
      <Navbar />
      <VStack p={4} spacing={4} align="center">
        <Text fontSize="xl" fontWeight="bold">
          Linear Search Visualization
        </Text>
        <Flex>
          <Input
            type="number"
            placeholder="Enter value to search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button ml={2} colorScheme="teal" onClick={linearSearch}>
            Search
          </Button>
        </Flex>
        <Box>
          {array.map((value, index) => (
            <Box
              key={index}
              display="inline-block"
              textAlign="center"
              p={2}
              borderRadius="md"
              border="1px solid"
              borderColor={searchIndex === index ? 'teal.500' : 'gray.300'}
              bg={searchIndex === index ? 'teal.50' : 'white'}
            >
              {value}
            </Box>
          ))}
        </Box>
        {searchIndex !== -1 ? (
          <Text mt={2} color="teal.500">
            Element found at index {searchIndex}.
          </Text>
        ) : (
          <Text mt={2} color="red.500">
            Element not found.
          </Text>
        )}
      </VStack>
    </>
  );
};

export default LinearSearch;
