import Accordian from "./Accordion";
import Data from "./data";

function Menu() {
  let items = [];
  function recur(data, res) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].isFolder) {
        res.push(
          <Accordian key={data[i].name} data={data[i].name}>
            {recur(data[i].items, [])}
          </Accordian>
        );
      } else {
        res.push(<Accordian key={data[i].name} data={data[i].name} />);
      }
    }
    return res;
  }
  items = recur(Data, []);
  return <>{items}</>;
}

export default Menu;
