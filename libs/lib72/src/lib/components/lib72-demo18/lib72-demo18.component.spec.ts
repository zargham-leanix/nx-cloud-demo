import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo18Component } from './lib72-demo18.component';

describe('Lib72Demo18Component', () => {
  let component: Lib72Demo18Component;
  let fixture: ComponentFixture<Lib72Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
