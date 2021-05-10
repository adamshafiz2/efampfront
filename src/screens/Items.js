import { useContext, useEffect } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import { CubeSpinner } from "react-spinners-kit";
import Card from "../components/Card";
import numbersWithComma from "../utils/numbersWithComma";

function Items() {
  const { loading, items, getItems } = useContext(ItemsContext);

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {loading && <CubeSpinner size={40} color="#686769" />}
      {Items.length > 0 ? (
        // <Table className="table-hover table-striped">
        //   <thead>
        //     <tr>
        //       <th>NAME</th>
        //       <th>IMAGE</th>
        //       <th>CATEGORY</th>
        //       <th>DESCRIPTION</th>
        //       <th>PRICE</th>
        //       <th>EDIT</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {items.map((trainee) => (
        //       <tr key={trainee._id}>
        //         <td>{trainee.name}</td>
        //         <td>{trainee.image}</td>
        //         <td>{trainee.category}</td>
        //         <td>{trainee.description}</td>
        //         <td>{trainee.price}</td>
        //         <td>
        //           <FiDelete />
        //           <FiEdit />
        //           <FiEye />
        //         </td>
        //       </tr>
        //     ))}
        //   </tbody>
        // </Table>
        <section>
          <div className="container">
            <h1>PRODUCTS IN MARKET</h1>
            <div className="row text-center">
              {items.map((trainee) => (
                <Card
                  name={trainee.name}
                  image={trainee.image}
                  category={trainee.category}
                  description={trainee.description}
                  price={numbersWithComma(trainee.price)}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        !loading && <h1>NO RECORDS</h1>
      )}
    </section>
  );
}

export default Items;
