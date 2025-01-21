import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo36Component } from './lib7-demo36.component';

describe('Lib7Demo36Component', () => {
  let component: Lib7Demo36Component;
  let fixture: ComponentFixture<Lib7Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
