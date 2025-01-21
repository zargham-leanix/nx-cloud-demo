import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo36Component } from './lib21-demo36.component';

describe('Lib21Demo36Component', () => {
  let component: Lib21Demo36Component;
  let fixture: ComponentFixture<Lib21Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
