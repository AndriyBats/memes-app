import {Card, CardHeader, CardBody, Image} from "@heroui/react";
// types
import { Meme } from "@/types";
//////////////////////////////////////////////////

export default function MemeCard({ id, title, likes, imageUrl }: Meme) {
  return (
    <Card id={id.toString()} className="py-4 my-4 max-w-[540px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          width={500}
          src={imageUrl}
          alt="Card background"
          className="object-cover rounded-xl"
        />
        <div className="flex justify-between  items-center w-full my-2">
          <small className="text-default-500">{`❤️ ${likes} likes`}</small>
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Open image
          </a>
        </div>
      </CardBody>
    </Card>
  );
}
