'use client'

import { useState, useEffect } from "react";
import {Table, Button, TableHeader, TableColumn, TableBody, TableRow, TableCell, useDisclosure} from "@heroui/react";
// types
import { Meme } from "@/types";
import { updateMeme, getOrInitMemes } from "@/src/app/lib/cookie";
import ModalComponent from "@/components/modal";

const columns = [
  {
    key: 'id',
    label: 'Id',
  },
  {
    key: 'title',
    label: 'Name',
  },
  {
    label: 'URL',
    key: 'imageUrl',
  },
  {
    key: 'likes',
    label: 'Likes',
  },
  {
    key: 'edit',
    label: 'Edit',
  },
];

export default function MemesTable() {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [openModals, setOpenModals] = useState<{ [key: number]: boolean }>({});

  const handleOpen = (id: number) => {
    setOpenModals(prevState => ({ ...prevState, [id]: true }));
  };

  const handleClose = (id: number) => {
    setOpenModals(prevState => ({ ...prevState, [id]: false }));
  };

  const handleEditMeme = (meme: Meme) => {
    updateMeme(meme)
    setMemes(getOrInitMemes());
  }

  useEffect(() => {
    setMemes(getOrInitMemes());
  }, []);

  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        {columns.map((column) =>
          <TableColumn key={column.key}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {memes.map((row) => {
          return (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.imageUrl}</TableCell>
              <TableCell>{row.likes}</TableCell>
              <TableCell>
                <Button color="primary" onPress={() => handleOpen(row.id)}>
                  Edit
                </Button>
                <ModalComponent
                  data={row}
                  submitAction={handleEditMeme}
                  isOpen={openModals[row.id] || false}
                  onOpenChange={() => handleClose(row.id)}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}