import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo17Component } from './lib58-demo17.component';

describe('Lib58Demo17Component', () => {
  let component: Lib58Demo17Component;
  let fixture: ComponentFixture<Lib58Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
