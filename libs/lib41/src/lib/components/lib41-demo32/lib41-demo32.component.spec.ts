import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo32Component } from './lib41-demo32.component';

describe('Lib41Demo32Component', () => {
  let component: Lib41Demo32Component;
  let fixture: ComponentFixture<Lib41Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
