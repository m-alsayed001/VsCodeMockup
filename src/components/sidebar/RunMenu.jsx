import Dropdown from 'react-bootstrap/Dropdown';

function RunMenu() {
  const dropdownItemStyles = {
    fontSize: '11px',
    textAlign: 'left',
    color: 'antiquewhite',
  };
  return (
    <Dropdown.Menu
      show
      style={{
        zIndex: '9999',
        width: '150px',
      }}
    >
      <Dropdown.Item
        eventKey="1"
        style={dropdownItemStyles}
        className="menu-item"
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#0078D4'; // Add your desired hover background color
          e.target.style.color = 'white'; // Add your desired hover text color
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent'; // Reset to default background color
          e.target.style.color = dropdownItemStyles.color; // Reset to default text color
        }}
      >
        Run
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="2"
        style={dropdownItemStyles}
        className="menu-item"
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#0078D4'; // Add your desired hover background color
          e.target.style.color = 'white'; // Add your desired hover text color
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent'; // Reset to default background color
          e.target.style.color = dropdownItemStyles.color; // Reset to default text color
        }}
      >
        Debug Console
      </Dropdown.Item>
    </Dropdown.Menu>
  );
}

export default RunMenu;