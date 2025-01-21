import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo36Component } from './lib97-demo36.component';

describe('Lib97Demo36Component', () => {
  let component: Lib97Demo36Component;
  let fixture: ComponentFixture<Lib97Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
