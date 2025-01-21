import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo36Component } from './lib86-demo36.component';

describe('Lib86Demo36Component', () => {
  let component: Lib86Demo36Component;
  let fixture: ComponentFixture<Lib86Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
