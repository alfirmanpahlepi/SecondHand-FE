import { SimpleNavbar } from '../../components/navbars';
import { ProductCard } from '../../components/cards';
import { SellerLayout } from '../../components/layouts';
import AuthenticatedRoute from '../../routes/AuthenticatedRoute';

export default function Sold() {
  return (
    <AuthenticatedRoute>
      <SimpleNavbar />
      <SellerLayout active={3}>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </SellerLayout>
    </AuthenticatedRoute>
  );
}
