import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo36Component } from './lib13-demo36.component';

describe('Lib13Demo36Component', () => {
  let component: Lib13Demo36Component;
  let fixture: ComponentFixture<Lib13Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
