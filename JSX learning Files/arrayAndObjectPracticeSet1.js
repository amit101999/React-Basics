const timeTable = {
  Monday: {
    9: {
      subject: "Maths",
      teacher: "Brijesh Mishra",
      time: "1 hour",
    },
    10: {
      subject: "Physics",
      teacher: "Sumit Yadav",
      time: "1 hour",
    },
    11: {
      subject: "Chemistry",
      teacher: "Vedanti Joshi",
      time: "1 hour",
    },
    13: {
      subject: "English Litrature",
      teacher: "Mayur Pandey",
      time: "1 hour",
    },
    14: {
      subject: "Hindi Vyakaran",
      teacher: "Sony Desai",
      time: "1 hour",
    },
    15: {
      subject: "PT",
      teacher: "Sonu Tyagi",
      time: "1 hour",
    },
  },
  Tuesday: {
    9: {
      subject: "Physics",
      teacher: "Sumit Yadav",
      time: "1 hour",
    },
    10: {
      subject: "Hindi Sahitya",
      teacher: "Ramesh Jha",
      time: "1 hour",
    },
    11: {
      subject: "Environtal Studies",
      teacher: "Rakesh Prakash",
      time: "1 hour",
    },
    13: {
      subject: "Biology",
      teacher: "Kuldeep Narayan",
      time: "1 hour",
    },
    14: {
      subject: "Maths",
      teacher: "Brijesh Mishra",
      time: "1 hour",
    },
    15: {
      subject: "Physics Practical",
      teacher: "Sumit Yadav",
      time: "1 hour",
    },
  },
  Wednesday: {
    9: {
      subject: "Chemistry",
      teacher: "Vedanti Joshi",
      time: "1 hour",
    },
    10: {
      subject: "English Grammar",
      teacher: "Aditi Upasane",
      time: "1 hour",
    },
    11: {
      subject: "Maths",
      teacher: "Brijesh Mishra",
      time: "1 hour",
    },
    13: {
      subject: "English Litrature",
      teacher: "Mayur Pandey",
      time: "1 hour",
    },
    14: {
      subject: "Physics",
      teacher: "Sumit Yadav",
      time: "1 hour",
    },
    15: {
      subject: "Chemistry Practical",
      teacher: "Vedanti Joshi",
      time: "1 hour",
    },
  },
  Thursday: {
    9: {
      subject: "Biology",
      teacher: "Kuldeep Narayan",
      time: "1 hour",
    },
    10: {
      subject: "Hindi Sahitya",
      teacher: "Ramesh Jha",
      time: "1 hour",
    },
    11: {
      subject: "Chemistry",
      teacher: "Vedanti Joshi",
      time: "1 hour",
    },
    13: {
      subject: "Maths",
      teacher: "Brijesh Mishra",
      time: "1 hour",
    },
    14: {
      subject: "Physics",
      teacher: "Sumit Yadav",
      time: "1 hour",
    },
    15: {
      subject: "Biology Practical",
      teacher: "Kuldeep Narayan",
      time: "1 hour",
    },
  },
  Friday: {
    9: {
      subject: "English Litrature",
      teacher: "Mayur Pandey",
      time: "1 hour",
    },
    10: {
      subject: "Hindi Sahitya",
      teacher: "Ramesh Jha",
      time: "1 hour",
    },
    11: {
      subject: "English Grammar",
      teacher: "Aditi Upasane",
      time: "1 hour",
    },
    13: {
      subject: "Biology",
      teacher: "Kuldeep Narayan",
      time: "1 hour",
    },
    14: {
      subject: "Hindi Vyakaran",
      teacher: "Sony Desai",
      time: "1 hour",
    },
    15: {
      subject: "PT",
      teacher: "Sonu Tyagi",
      time: "1 hour",
    },
  },
};

const App = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Friday"];
  return (
    <>
      <table border="1">
        <caption>School time-table of a class 12th Student.</caption>

        <tbody>
          <tr>
            <td></td>
            <th>9am 10am</th>
            <th>10am - 11am</th>
            <th>11am - 12pm</th>
            <th>12pm - 1pm</th>
            <th>1pm - 2pm</th>
            <th>2pm - 3pm</th>
            <th>3pm - 4pm</th>
          </tr>
          {Object.keys(timeTable).map((day, idx) => (
            <tr key={idx}>
              <td>{day}</td>
              {Object.keys(timeTable[day]).map((time, index) =>
                index == 3 ? (
                  <>
                    <td>Break</td>
                    <td>{timeTable[day][time].subject}</td>
                  </>
                ) : (
                  <td>{timeTable[day][time].subject}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
