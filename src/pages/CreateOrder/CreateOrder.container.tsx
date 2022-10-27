import { useEffect, useState } from "react";
import { getMenuItems, GetMenuItemsResponse } from "../../services/menu";
import {
  CreateOrderPrivateProps,
  CreateOrderPublicProps,
} from "./CreateOrder.props";
import CreateOrderView from "./CreateOrder.view";

const CreateOrder = (props: CreateOrderPublicProps) => {
  const [menu, setMenu] = useState<GetMenuItemsResponse>({
    items: [],
    rules: {},
  });
  useEffect(() => {
    // TODO: Fetch menu data
    const fetchData = async () => {
      const response = await getMenuItems();
      setMenu(response);
      return response;
    };
    fetchData();
  }, []);

  const generatedProps: CreateOrderPrivateProps = {
    items: menu.items,
    rules: menu.rules,
    setSelectedItemDetails: props.setSelectedItemDetails,
  };

  return <CreateOrderView {...generatedProps} />;
};

export default CreateOrder;
