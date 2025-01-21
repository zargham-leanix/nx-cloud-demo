import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo36Component } from './lib54-demo36.component';

describe('Lib54Demo36Component', () => {
  let component: Lib54Demo36Component;
  let fixture: ComponentFixture<Lib54Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
