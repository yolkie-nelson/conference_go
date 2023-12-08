

function AttendeeList(props) {
    return (
        <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Conference</th>
            </tr>
          </thead>
          <tbody>
          {props.attendees && props.attendees.map(attendee => {
            return (
              <tr key={attendee.href}>
                <td>{ attendee.name }</td>
                <td>{ attendee.conference }</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    )
}

export default AttendeeList;
