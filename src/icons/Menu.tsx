import { Menu as IMenu } from "lucide-react";

interface Props {
  color: string;
  size: string;
}

export default function Menu({ color, size }: Props) {
  return (
    <div>
      <IMenu color={color} size={size} />
    </div>
  );
}
