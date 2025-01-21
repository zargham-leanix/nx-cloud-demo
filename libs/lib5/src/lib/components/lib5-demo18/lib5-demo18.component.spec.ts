import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo18Component } from './lib5-demo18.component';

describe('Lib5Demo18Component', () => {
  let component: Lib5Demo18Component;
  let fixture: ComponentFixture<Lib5Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
