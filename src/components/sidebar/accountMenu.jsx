import Dropdown from 'react-bootstrap/Dropdown';

function AccountMenu() {
  const dropdownItemStyles = {
    fontSize: '12px',
    textAlign: 'center',
    color: 'antiqewhite',
  };

  return (
    <Dropdown.Menu
      show
      style={{
        zIndex: '9999',
        position: 'absolute',
        marginLeft: '51px',
        marginTop: '-100px',
        width: '250px',
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
        Backup and Sync Settings...
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        eventKey="2"
        style={dropdownItemStyles}
      >
        Turn on Cloud Changes...
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        eventKey="3"
        style={dropdownItemStyles}
      >
        No account requested yet...
        </Dropdown.Item>
    </Dropdown.Menu>
  );
}

export default AccountMenu;
