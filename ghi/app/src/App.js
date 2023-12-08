import Nav from './Nav';
import AttendeeList from './AttendeeList';

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <div>
      <Nav />
      <AttendeeList attendees={props.attendees}/>
    </div>
  );
}

export default App;
