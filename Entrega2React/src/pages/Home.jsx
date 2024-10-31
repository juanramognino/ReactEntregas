import { ItemListContainer, Loader } from "../components";
import { useItems } from "../hooks";

export const Home = () => {
    const { productsData, loading, error } = useItems();

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <Text color="red.500">Error al cargar los productos. Intenta nuevamente.</Text>;
    }

    if (productsData.length === 0) {
        return <Text>No hay productos disponibles.</Text>;
    }

    return <ItemListContainer products={productsData} />;
};