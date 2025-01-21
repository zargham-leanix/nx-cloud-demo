import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo36Component } from './lib24-demo36.component';

describe('Lib24Demo36Component', () => {
  let component: Lib24Demo36Component;
  let fixture: ComponentFixture<Lib24Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
