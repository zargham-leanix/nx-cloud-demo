import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo36Component } from './lib38-demo36.component';

describe('Lib38Demo36Component', () => {
  let component: Lib38Demo36Component;
  let fixture: ComponentFixture<Lib38Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
