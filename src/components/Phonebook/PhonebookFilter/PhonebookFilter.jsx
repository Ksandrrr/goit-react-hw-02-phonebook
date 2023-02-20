import { Component } from 'react';

class Phonebookfilter extends Component {
  render() {
    const { saveFilterValue } = this.props;
    return (
      <input
        type="text"
        name="filter"
        title="Search Contacts"
        onChange={saveFilterValue}
      />
    );
  }
}

export default Phonebookfilter;
