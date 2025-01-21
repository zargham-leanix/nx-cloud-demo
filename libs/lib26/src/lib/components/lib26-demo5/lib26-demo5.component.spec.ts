import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo5Component } from './lib26-demo5.component';

describe('Lib26Demo5Component', () => {
  let component: Lib26Demo5Component;
  let fixture: ComponentFixture<Lib26Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
