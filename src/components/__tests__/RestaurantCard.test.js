// // In your test setup (for example in `RestaurantCard.test.js`)
// import ReactDOM from "react-dom";

// // Mock `createRoot` for Jest environment
// jest.spyOn(ReactDOM, "createRoot").mockImplementation(() => ({
//   render: jest.fn(),
//   unmount: jest.fn(),
// }));

jest.mock("../../../assets/logo.png", () => "logo.png");
import { act } from "react";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { MOCK_DATA } from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import UserContext from "../../utils/UserContext";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render RestaurantCard", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantCard resData={MOCK_DATA} />
      </BrowserRouter>
    )
  );


  const cuisines = screen.getByText(
    "No cuisines available"
  );
  expect(cuisines).toBeInTheDocument();

  const costForTwo = screen.getByText("₹");
  expect(costForTwo).toBeInTheDocument();

  const deliveryTime = screen.getByText("minutes");
  expect(deliveryTime).toBeInTheDocument();
});

// it("should render RestaurantCard", ()=> {
//   render(<RestaurantCard/>);

//   // const res = screen.getByRole(RestaurantCard);
//   // expect.toBe(res);
//   screen.debug();
// })

// const mockUserContextValue = { loggedInUser: "Test User" };

// // it("should render RestaurantCard component with props Data", async() => {
// //   //   render(<RestaurantCard resData={MOCK_DATA} />);

// //   render(
// //     <UserContext.Provider value={mockUserContextValue}>
// //       <RestaurantCard resData={MOCK_DATA} />
// //     </UserContext.Provider>
// //   );
// //   screen.debug();
// //   //   const name = screen.getByText("Snaap Bowl");
// //   //   const name = screen.getByText((content, element) =>
// //   //     content.includes("Leon's - Burgers & Wings (Leon Grill)")
// //   //   );
// //   const name = await screen.findByText(/RRR/);

// //   expect(name).toBeInTheDocument();
// // });

// describe("RestaurantCard Component", () => {
//   it("renders correctly with provided props data", () => {
//     render(
//       <UserContext.Provider value={mockUserContextValue}>
//         <RestaurantCard resData={MOCK_DATA} />
//       </UserContext.Provider>
//     );

//     // Debug output to see rendered elements
//     screen.debug();

//     // Find the restaurant name in the document
//     const avgRating = screen.getByText(4.5);

//     // Assert that the restaurant name is in the document
//     expect(avgRating).toBeInTheDocument();
//   });
// });
