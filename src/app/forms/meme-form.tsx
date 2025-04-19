import React from "react"
import {Form, Input, Button} from "@heroui/react"
import { Meme, MemeFormProps } from "@/types"
//////////////////////////////////////////////////

const isValidImageUrl = (url: string) => {
  return /\.(jpg|jpeg|png|webp|gif|bmp|svg)$/i.test(url)
};

export default function MemeForm({ data, onOpenChange, submitAction }: MemeFormProps) {

  const { id, title, likes, imageUrl } = data

  return (
    <Form
      className="flex w-full"
      onSubmit={e => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const meme: Meme = {
          id: Number(id),
          likes: Number(formData.get('likes')),
          title: formData.get('title') as string,
          imageUrl: formData.get('imageUrl') as string,
        };

        submitAction(meme)
        onOpenChange(false)
      }}
    >
      <Input
        isClearable
        type="text"
        label="Name"
        name='title'
        variant="bordered"
        className="w-full"
        defaultValue={title}
        placeholder="Enter name"
        validate={value => {
            if (value.length < 3) {
              return "Name must be at least 3 characters long";
            }

            if (value.length > 100) {
              return "Name must not exceed 100 characters"
            }
        }}
      />
      <Input
        type="url"
        isClearable
        label="URL"
        name='imageUrl'
        variant="bordered"
        className="w-full"
        placeholder="Enter url"
        defaultValue={imageUrl}
        validate={value => {
            if (!isValidImageUrl(value)) {
                return "Please enter a valid image URL (jpg)";
            }
        }}
      />
      <Input
        isClearable
        name='likes'
        label="Likes"
        type="number"
        variant="bordered"
        className="w-full"
        defaultValue={likes.toString()}
        placeholder="Enter likes"
        validate={value => {
            if (Number(value) < 0) {
              return "There must be more than zero likes.";
            }

            if (Number(value) > 99) {
              return "Likes should not exceed 99"
            }

            if (!value) {
                return "Likes should be"
            }
        }}
      />
      <div className="flex justify-between w-full">
        <Button color="primary" type="submit">
          Submit
        </Button>
        <Button type="reset" variant="flat" onPress={() => onOpenChange(false)}>
          Cancel
        </Button>
      </div>
    </Form>
  );
}

