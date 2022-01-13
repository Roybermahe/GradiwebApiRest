const libRequest = require('../lib/libRequest');
const url_base = `https://${process.env.API_KEY}:${process.env.PASSWORD}@${process.env.SHOP}${process.env.ADMIN_PREFIX}`;
/**
 *@param {[*]} data 
 */
const mapObject = (data) => {
    return data.map(function (item) {
        return {
            id: item.id,
            product_title: item.title,
            price: item.variants[0].price,
            images: item.images,
            image: item.image,
            status: item.status,
            vendor: item.vendor,
            published_at: new Date(item.published_at).toISOString().split('T')[0],
            created_at: new Date(item.created_at).toISOString().split('T')[0]
        }
    });
};

module.exports = {
    /**
     * @returns product list from shopify
     */
    getProducts: async () => {
        let url = `${url_base}/products.json`;
        let data = await libRequest.get(url);
        return mapObject(data.products);
    },
    /**
     * @param {*} id id from product
     * @returns return one product by id
     */
    getProduct: async (id) => {
        let url = `${url_base}/products/${id}.json`;
        let data = await libRequest.get(url);
        return mapObject([data.product])[0];
    }
}