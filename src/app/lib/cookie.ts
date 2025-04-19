import { getCookie, setCookie } from 'cookies-next'
// types
import { Meme } from '@/types'
// data
import { initialMemes } from '../data/memes'
//////////////////////////////////////////////////

const COOKIE_KEY = 'memes'

export function getOrInitMemes(): Meme[] {
    const memesJson = getCookie(COOKIE_KEY)

    if (!memesJson) {
      setCookie(COOKIE_KEY, JSON.stringify(initialMemes));
      return initialMemes
    }

    try {
      return JSON.parse(memesJson as string) as Meme[];
    } catch (e) {
      return initialMemes
    }
}

export function updateMeme(updated: Meme) {
  const memes = getOrInitMemes()

  const updatedMemes = memes.map(meme =>
    meme.id === updated.id ? updated : meme
  )

  setCookie(
    'memes',
    JSON.stringify(updatedMemes),
    {
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax'
    }
  )
}