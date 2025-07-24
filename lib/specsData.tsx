import { ProductItemFragment } from "@/graphql/generated";

type specsDataProps = {
  product: ProductItemFragment;
  option: String;
};

export default function specsData({ product, option }: specsDataProps) {
  const defaultSpecs = [
    { label: "SKU", value: product.sku },
    { label: "Type", value: product.print_type },
    { label: "Load Range", value: product.price?.regularPrice?.amount?.value },
    { label: "Speed Rating", value: product.color },
    { label: "Performance", value: product.dominant_color },
    { label: "MPN", value: product.special_from_date },
    { label: "Overall Diameter", value: product.gift_message_available },
    { label: "Season", value: product.updated_at },
    { label: "Aspect Ratio", value: product.print_art },
    { label: "Brand", value: product.print_holiday },
    { label: "UTQG", value: product?.print_labels?.slice(0, 3) },
    { label: "Run Flat", value: product.print_landmarks },
    { label: "Rebate Available", value: product.print_landscape },
    { label: "Sidewall", value: product.print_mood },
    { label: "Size", value: product.print_pattern_swatch },
    { label: "Load Index", value: product.type_id },
  ];

  const matchingEntry = product?.media_gallery_entries?.find(
    (e) => e?.uid === option
  );

  const optionSpecs = [
    { label: "File", value: matchingEntry?.file },
    { label: "Id", value: matchingEntry?.id },
    { label: "Label", value: matchingEntry?.label },
    { label: "Media_type", value: matchingEntry?.media_type },
    { label: "Position", value: matchingEntry?.position },
    { label: "Uid", value: matchingEntry?.uid },
    {
      label: "Base64_encoded_data",
      value: matchingEntry?.content?.base64_encoded_data,
    },
    { label: "Name", value: matchingEntry?.content?.name },
  ];

  const fullSpecs =
    option === "" && "false"
      ? [...defaultSpecs]
      : [...defaultSpecs, ...optionSpecs];

  return fullSpecs;
}
