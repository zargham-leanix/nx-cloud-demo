import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo5Component } from './lib44-demo5.component';

describe('Lib44Demo5Component', () => {
  let component: Lib44Demo5Component;
  let fixture: ComponentFixture<Lib44Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
