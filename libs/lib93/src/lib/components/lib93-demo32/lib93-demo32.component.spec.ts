import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo32Component } from './lib93-demo32.component';

describe('Lib93Demo32Component', () => {
  let component: Lib93Demo32Component;
  let fixture: ComponentFixture<Lib93Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
