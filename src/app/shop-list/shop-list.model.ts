export type ShopListItem = {
  id: string;
  name: string;
  unit: string;
  quantity: number;
  checked: boolean;
};

export type ShopList = ShopListItem[];
