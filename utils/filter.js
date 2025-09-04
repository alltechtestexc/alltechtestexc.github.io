
export const filterByCategory = (category) => {
    return (artworks) => {
        return artworks.filter(a =>
  a.metadata?.categories?.includes(category)
);
    }
}