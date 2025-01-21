import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo36Component } from './lib64-demo36.component';

describe('Lib64Demo36Component', () => {
  let component: Lib64Demo36Component;
  let fixture: ComponentFixture<Lib64Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
