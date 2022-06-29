import React, { Component } from "react";
import {
  FormControl,
  FormLabel,
  Select,
  Stack
} from '@chakra-ui/react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Province: [],
      Cities: [],
      selectedGenre: '--Choose Genre--',
      selectedBook: '--Choose Book--'
    };

    this.ChangeProvince = this.ChangeProvince.bind(this);
    this.ChangeBook = this.ChangeBook.bind(this);
  }

  componentDidMount() {
    this.setState({
      Province: [
        { name: "Fiction", Cities: ["GOT", "LOTR", "Harry Potter"] },
        { name: "Murder", Cities: ["Dragon", "Tattoo", "Girl"] },
        { name: "Thriller", Cities: ["Angel", "Lost Symbol", "Davinci"] }
      ]
    });
  }

  ChangeProvince(e) {
    e.preventDefault();
    const Cities = this.state.Province.find(
      (genre) => genre.name === e.target.value
    ).Cities;
    this.setState({ selectedGenre: e.target.value, Cities });
  }

  ChangeBook(e) {
    e.preventDefault();
    this.setState({ selectedBook: e.target.value });
  }

  render() {
    return (
      <Stack spacing={4}>\
        <FormControl id="Province" isRequired>
          <FormLabel>Province</FormLabel>
          <Select variant='outline' placeholder='Choose Province' 
            value={this.state.selectedGenre}
            onChange={this.ChangeProvince}>
            {this.state.Province.map((genre, key) => {
              return <option key={key}>{genre.name}</option>;
            })}
          </Select>
        </FormControl>
        <FormControl id="Cities" isRequired>
          <FormLabel>Regency/City</FormLabel>
          <Select variant='outline' placeholder='Choose Regency/City' 
            value={this.state.selectedBook}
            onChange={this.ChangeBook}
            disabled={this.state.selectedGenre === '--Choose Genre--'}>
            {this.state.Cities.map((book, key) => {
              return <option key={key}>{book}</option>;
            })}
          </Select>
        </FormControl>
      </Stack>
    );
  }
}

export default Dropdown;