import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo36Component } from './lib23-demo36.component';

describe('Lib23Demo36Component', () => {
  let component: Lib23Demo36Component;
  let fixture: ComponentFixture<Lib23Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
