import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo14Component } from './lib58-demo14.component';

describe('Lib58Demo14Component', () => {
  let component: Lib58Demo14Component;
  let fixture: ComponentFixture<Lib58Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
