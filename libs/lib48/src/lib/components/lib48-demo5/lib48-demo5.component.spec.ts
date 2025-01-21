import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo5Component } from './lib48-demo5.component';

describe('Lib48Demo5Component', () => {
  let component: Lib48Demo5Component;
  let fixture: ComponentFixture<Lib48Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
