import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo18Component } from './lib68-demo18.component';

describe('Lib68Demo18Component', () => {
  let component: Lib68Demo18Component;
  let fixture: ComponentFixture<Lib68Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
