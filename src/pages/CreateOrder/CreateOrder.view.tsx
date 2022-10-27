import React, { useMemo, useReducer } from "react";
import "./CreateOrder.css";
import RadioInput from "../../components/RadioInput";
import { CreateOrderProps } from "./CreateOrder.props";

const CreateOrderView = (props: CreateOrderProps) => {
  const { items, rules, setSelectedItemDetails } = props;

  type SelectedItems = Record<number, string>;
  const [selectedItems, updateSelectedItems] = useReducer(
    (state: SelectedItems, newState: SelectedItems) => {
      // TODO: Merge selectedItems state with newState
      state = { ...state, ...newState };
      return state;
    },
    {
      0: "",
      1: "",
      2: "",
    } as SelectedItems
  );

  const isSelected = (id: string, groupIndex: number) => {
    return id === selectedItems[groupIndex];
  };

  const blacklist: number[] = useMemo(() => {
    // TODO: Create a blacklist based on rules and currently selected items
    let disabled: number[] = [];
    const allSelected = Object.values(selectedItems)
      .map((item) => +item)
      .filter((item) => item);

    disabled = allSelected
      .map((val: number) => {
        let newArray: number[] = [];
        if (rules[val]?.length) {
          newArray = [...rules[val]];
        }
        return newArray;
      })
      .flat();
    return disabled;
  }, [rules, selectedItems]);

  const isDisabled = (id: string) => {
    return blacklist?.includes(+id);
  };

  const handleSelection = (value: string, groupIndex: number) => {
    updateSelectedItems({
      [groupIndex]: value,
    });
  };

  const handleSubmit = (event: any) => {
    const all = Object.values(selectedItems);
    const AllItems = items.flat().filter((item) => all.includes(item.id));
    setSelectedItemDetails(AllItems);
    event.preventDefault();
  };

  // TODO: If no items are available, show a "Loading..." text
  if (!items.length) {
    return <div className="createOrder">Loading...</div>;
  }

  return (
    <div className="createOrder">
      <form onSubmit={handleSubmit}>
        {items.map((group, groupIndex) => {
          return (
            <div key={groupIndex}>
              {group.map((item) => {
                // TODO: Should render RadioInput component
                return (
                  <div key={item.id}>
                    <RadioInput
                      label={item.value}
                      value={item.id}
                      checked={isSelected(item.id, groupIndex)}
                      disabled={isDisabled(item.id)}
                      onSelect={() => {
                        handleSelection(item.id, groupIndex);
                      }}
                    />
                  </div>
                );
              })}
              <br />
            </div>
          );
        })}
        <input className="button" type="submit" />
      </form>
    </div>
  );
};

export default CreateOrderView;
