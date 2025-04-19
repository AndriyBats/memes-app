import { SVGProps } from "react";
//////////////////////////////////////////////////

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Meme = {
  id: number;
  title: string;
  likes: number;
  imageUrl: string;
}

export type ModalProps = {
  data: Meme;
  isOpen: boolean;
  submitAction: (meme: Meme) => void;
  onOpenChange: (open: boolean) => void;
}

export type MemeFormProps = {
  data: Meme;
  submitAction: (meme: Meme) => void;
  onOpenChange: (open: boolean) => void;
}
