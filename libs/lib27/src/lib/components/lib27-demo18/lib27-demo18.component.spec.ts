import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo18Component } from './lib27-demo18.component';

describe('Lib27Demo18Component', () => {
  let component: Lib27Demo18Component;
  let fixture: ComponentFixture<Lib27Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
