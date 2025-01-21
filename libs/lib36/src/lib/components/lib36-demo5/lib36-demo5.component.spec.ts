import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo5Component } from './lib36-demo5.component';

describe('Lib36Demo5Component', () => {
  let component: Lib36Demo5Component;
  let fixture: ComponentFixture<Lib36Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
