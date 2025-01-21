import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo5Component } from './lib11-demo5.component';

describe('Lib11Demo5Component', () => {
  let component: Lib11Demo5Component;
  let fixture: ComponentFixture<Lib11Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
