import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo32Component } from './lib88-demo32.component';

describe('Lib88Demo32Component', () => {
  let component: Lib88Demo32Component;
  let fixture: ComponentFixture<Lib88Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
