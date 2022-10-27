import { Item, Rules } from "../../types/Menu";

export interface SelectedMenuOrderPublicProps {}

export interface SelectedMenuOrderPrivateProps {
  items: Item[];
}

export interface SelectedMenuOrderProps
  extends SelectedMenuOrderPrivateProps,
    SelectedMenuOrderPublicProps {}
