import Form from "../Pages/Form";
import Sform from "../Pages/Sform";
import Body from "../Component/Body";
import Buttons from "../Common/Buttons";
import DetailPage from "../Common/DetailPage";
export const route = [
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Buttons />,
      },
      {
        path: "Form",
        element: <Form />,
      },
      {
        path: "Sform",
        element: <Sform />,
      },
      {
        path: "DetailPage",
        element: <DetailPage />,
      },
    ],
  },
];
