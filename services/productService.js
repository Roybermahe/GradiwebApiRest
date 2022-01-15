const libOpenExchange = require('../lib/libOpenExchange');
const libRequest = require('../lib/libRequest');
const url_base = `https://${process.env.API_KEY}:${process.env.PASSWORD}@${process.env.SHOP}${process.env.ADMIN_PREFIX}`;
/**
 * 
 * @param {[*]} data 
 * @param {string} rate rate ejm: USD, EUR, AED
 * @param {int} rateValue value from rate
 */
const mapObject = (data, rate, rateValue) => {
    return data.map(function (item) {
        return {
            id: item.id,
            product_title: item.title,
            price: rate == 'USD' ? +item.variants[0].price : (+item.variants[0].price)*rateValue,
            rate,
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
     * @param {string} rate price rate to convert
     * @returns product list from shopify
     */
    getProducts: async (rate) => {
        let url = `${url_base}/products.json`;
        let data = await libRequest.get(url);
        let rates = await libOpenExchange.getRates();
        return mapObject(data.products, rate, rates[rate]);
    },
    /**
     * @param {*} id id from product
     * @param {string} rate price rate to convert
     * @returns return one product by id
     */
    getProduct: async (id, rate) => {
        let url = `${url_base}/products/${id}.json`;
        let data = await libRequest.get(url);
        let rates = await libOpenExchange.getRates();
        return mapObject([data.product], rate,rates[rate])[0];
    }
}