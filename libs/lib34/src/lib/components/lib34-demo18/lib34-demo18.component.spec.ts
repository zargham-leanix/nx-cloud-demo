import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo18Component } from './lib34-demo18.component';

describe('Lib34Demo18Component', () => {
  let component: Lib34Demo18Component;
  let fixture: ComponentFixture<Lib34Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
