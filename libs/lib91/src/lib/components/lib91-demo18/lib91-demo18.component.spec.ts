import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo18Component } from './lib91-demo18.component';

describe('Lib91Demo18Component', () => {
  let component: Lib91Demo18Component;
  let fixture: ComponentFixture<Lib91Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
