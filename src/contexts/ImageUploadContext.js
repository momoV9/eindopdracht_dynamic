import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

const ImageUploadContext = createContext({})

export function ImageUploadProvider(props) {
  const [image, setImage] = useState(null)

  const uploadImage = useCallback((newImage) => {
    setImage(newImage)
  }, [])

  const clearImage = useCallback(() => {
    setImage(null)
  }, [])

  const api = useMemo(
    () => ({
      image,
      uploadImage,
      clearImage,
    }),
    [image, uploadImage, clearImage],
  )

  return (
    <ImageUploadContext.Provider value={api}>
      {props.children}
    </ImageUploadContext.Provider>
  )
}

export const useImageUploadContext = () => useContext(ImageUploadContext)
