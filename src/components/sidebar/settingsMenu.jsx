import Dropdown from 'react-bootstrap/Dropdown';

function SettingsMenu() {
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
        marginTop: '-380px',
        width: '250px',
        maxHeight: 'fit-content',
        overflowY: 'auto',
        fontSize: '16px',
        borderRadius: '8px',
      }}
    >
      <Dropdown.Item
        eventKey="1"
        style={dropdownItemStyles}
      >
        Command Palette...
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        eventKey="2"
        style={dropdownItemStyles}
      >
        Profiles
      </Dropdown.Item>  <Dropdown.Item
        eventKey="3"
        style={dropdownItemStyles}
      >
        Settings
      </Dropdown.Item>  <Dropdown.Item
        eventKey="4"
        style={dropdownItemStyles}
      >
        Extensions
      </Dropdown.Item>  <Dropdown.Item
        eventKey="5"
        style={dropdownItemStyles}
      >
        Keyboard Shortcuts
      </Dropdown.Item>  <Dropdown.Item
        eventKey="6"
        style={dropdownItemStyles}
      >
        User Snippets
      </Dropdown.Item>  <Dropdown.Item
        eventKey="7"
        style={dropdownItemStyles}
      >
        User Tasks
      </Dropdown.Item>  <Dropdown.Item
        eventKey="8"
        style={dropdownItemStyles}
      >
        Themes
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        eventKey="9"
        style={dropdownItemStyles}
      >
        Backup and Sync Settings...
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
        eventKey="10"
        style={dropdownItemStyles}
      >
        Switch to Insiders Version...
        </Dropdown.Item>
    </Dropdown.Menu>
  );
}

export default SettingsMenu;