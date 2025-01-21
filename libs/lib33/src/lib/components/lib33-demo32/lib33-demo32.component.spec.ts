import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo32Component } from './lib33-demo32.component';

describe('Lib33Demo32Component', () => {
  let component: Lib33Demo32Component;
  let fixture: ComponentFixture<Lib33Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
