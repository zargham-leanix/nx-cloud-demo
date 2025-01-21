import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo5Component } from './lib34-demo5.component';

describe('Lib34Demo5Component', () => {
  let component: Lib34Demo5Component;
  let fixture: ComponentFixture<Lib34Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
