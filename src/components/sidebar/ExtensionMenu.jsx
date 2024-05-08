import Dropdown from 'react-bootstrap/Dropdown';

function ExtensionMenu() {
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
        width: '220px',
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
        Views
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
        Check for Extension Updates
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="3"
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
        Auto Update Extensions
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        eventKey="4"
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
        Enable All Extensions
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="5"
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
        Disable All Installed Extensions
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="6"
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
        Show Running Extensions
      </Dropdown.Item>
      <Dropdown.Item
        eventKey="7"
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
        Start Extension Bisect
      </Dropdown.Item>
    </Dropdown.Menu>
  );
}

export default ExtensionMenu;