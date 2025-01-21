import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo32Component } from './lib75-demo32.component';

describe('Lib75Demo32Component', () => {
  let component: Lib75Demo32Component;
  let fixture: ComponentFixture<Lib75Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
