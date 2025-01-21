import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo11Component } from './lib18-demo11.component';

describe('Lib18Demo11Component', () => {
  let component: Lib18Demo11Component;
  let fixture: ComponentFixture<Lib18Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
