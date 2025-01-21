import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo18Component } from './lib78-demo18.component';

describe('Lib78Demo18Component', () => {
  let component: Lib78Demo18Component;
  let fixture: ComponentFixture<Lib78Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
