import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo5Component } from './lib80-demo5.component';

describe('Lib80Demo5Component', () => {
  let component: Lib80Demo5Component;
  let fixture: ComponentFixture<Lib80Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
