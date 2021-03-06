import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'
import { ProductListComponent } from './product-list-component';
import { ProductComponent } from '../product-component/product.component';
import { ProductService } from '../Service/product-service.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productionService: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductComponent],
      imports: [
        HttpClientModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    productionService = jasmine.createSpyObj("productionService",['loadProducts']);
    component = new ProductListComponent(productionService);    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ProductService loadproducts', () => {
    component.ngOnInit();
    expect(productionService.loadProducts).toHaveBeenCalledTimes(1);
  });
});
