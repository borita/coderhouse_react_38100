const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const { id } = useParams();
    
    useEffect(() => {
      getProduct(id)
        .then((data) => {
          setProduct(data)
        })
        .catch(error => console.warn(error))
    }, [id])
  
    return (
      <Container>
        <h1>Detalle del Producto</h1>
        {product && <ItemDetail product={product} />}
      </Container>    
    );
  }
   
  export default ItemDetailContainer;
  
