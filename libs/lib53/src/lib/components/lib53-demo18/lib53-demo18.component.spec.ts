import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo18Component } from './lib53-demo18.component';

describe('Lib53Demo18Component', () => {
  let component: Lib53Demo18Component;
  let fixture: ComponentFixture<Lib53Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
