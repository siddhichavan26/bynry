import Profiles from "./Component/Profiles/profile";
import Person1 from "./Component/Person/person1";
import Person2 from "./Component/Person/person2";
import Person3 from "./Component/Person/person3";
import Person4 from "./Component/Person/person4";
import Navbar from "./Component/NavBar/navbar";
import Table from "./Component/Table/table";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profiles />
      <Person1 />
      <Person2 />
      <Person3 />
      <Person4 />
      <Table />
    </div>
  );
}

export default App;
