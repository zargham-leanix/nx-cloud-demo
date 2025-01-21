import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo32Component } from './lib59-demo32.component';

describe('Lib59Demo32Component', () => {
  let component: Lib59Demo32Component;
  let fixture: ComponentFixture<Lib59Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
