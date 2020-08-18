import React, {PureComponent} from 'react';

class Product extends PureComponent {
    render() {
        return (
            <div>
                {/*ul>li{商品列表$}*5*/}
                <ul>
                    <li>商品列表1</li>
                    <li>商品列表2</li>
                    <li>商品列表3</li>
                    <li>商品列表4</li>
                    <li>商品列表5</li>
                </ul>
            </div>
        );
    }
}

export default Product;