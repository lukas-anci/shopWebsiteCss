import ShopCategories from './ShopCategories';
import ShopItem from './ShopItem';

export default function Shop() {
  return (
    <section className="container">
      <ShopCategories />
      <main>
        <ShopItem />
      </main>
    </section>
  );
}
