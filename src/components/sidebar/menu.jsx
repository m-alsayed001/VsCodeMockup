import Dropdown from 'react-bootstrap/Dropdown';

function Menu() {
  const dropdownItemStyles = {
    fontSize: '12px',
    paddingLeft: '20px',
    textAlign: 'left',
    color: 'antiqewhite'
  };

  return (
    <Dropdown.Menu
      show
      style={{
        zIndex: '9999',
        position: 'absolute',
        marginLeft: '51px',
        marginTop: '-40px',
        width: '200px',
        maxHeight: 'fit-content',
        overflowY: 'auto',
        fontSize: '12px',
        borderRadius: '8px',
      }}
    >
      <Dropdown.Item
        eventKey="1"
        style={dropdownItemStyles}
      >
        File
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="2"
        style={dropdownItemStyles}
      >
        Edit
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="3"
        style={dropdownItemStyles}
      >
        Selection
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="4"
        style={dropdownItemStyles}
      >
        View
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="5"
        style={dropdownItemStyles}
      >
        Go
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="6"
        style={dropdownItemStyles}
      >
        Run
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="7"
        style={dropdownItemStyles}
      >
        Terminal
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="8"
        style={dropdownItemStyles}
      >
        Help
      </Dropdown.Item>
    </Dropdown.Menu>
  );
}

export default Menu;


{/* <Dropdown.Divider />
<Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */}