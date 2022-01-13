const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const podcastOptions = [
  "Politics",
  "Society and Culture",
  "Comedy",
  "Health",
  "Business",
  "Sports",
  "Education",
  "True Crime",
  "History",
  "Technology",
  "Entertainment",
];