import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo18Component } from './lib93-demo18.component';

describe('Lib93Demo18Component', () => {
  let component: Lib93Demo18Component;
  let fixture: ComponentFixture<Lib93Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
