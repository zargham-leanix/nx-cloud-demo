import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo36Component } from './lib45-demo36.component';

describe('Lib45Demo36Component', () => {
  let component: Lib45Demo36Component;
  let fixture: ComponentFixture<Lib45Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
