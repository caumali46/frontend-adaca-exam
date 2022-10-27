import { Items, Rules } from "../../types/Menu";

export interface CreateOrderPublicProps {
  setSelectedItemDetails: Function;
}

export interface CreateOrderPrivateProps {
  items: Items;
  rules: Rules;
  setSelectedItemDetails: Function;
}

export interface CreateOrderProps
  extends CreateOrderPrivateProps,
    CreateOrderPublicProps {}
