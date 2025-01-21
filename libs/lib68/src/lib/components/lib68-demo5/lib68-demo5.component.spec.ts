import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo5Component } from './lib68-demo5.component';

describe('Lib68Demo5Component', () => {
  let component: Lib68Demo5Component;
  let fixture: ComponentFixture<Lib68Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
