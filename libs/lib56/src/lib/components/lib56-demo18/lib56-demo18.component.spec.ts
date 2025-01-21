import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo18Component } from './lib56-demo18.component';

describe('Lib56Demo18Component', () => {
  let component: Lib56Demo18Component;
  let fixture: ComponentFixture<Lib56Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
