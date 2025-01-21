import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo36Component } from './lib94-demo36.component';

describe('Lib94Demo36Component', () => {
  let component: Lib94Demo36Component;
  let fixture: ComponentFixture<Lib94Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
