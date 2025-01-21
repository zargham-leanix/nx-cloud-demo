import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo18Component } from './lib8-demo18.component';

describe('Lib8Demo18Component', () => {
  let component: Lib8Demo18Component;
  let fixture: ComponentFixture<Lib8Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
