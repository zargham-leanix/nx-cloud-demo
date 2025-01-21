import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo36Component } from './lib51-demo36.component';

describe('Lib51Demo36Component', () => {
  let component: Lib51Demo36Component;
  let fixture: ComponentFixture<Lib51Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
