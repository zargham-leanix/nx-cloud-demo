import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo32Component } from './lib58-demo32.component';

describe('Lib58Demo32Component', () => {
  let component: Lib58Demo32Component;
  let fixture: ComponentFixture<Lib58Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
