import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo36Component } from './lib12-demo36.component';

describe('Lib12Demo36Component', () => {
  let component: Lib12Demo36Component;
  let fixture: ComponentFixture<Lib12Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
