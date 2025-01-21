import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo32Component } from './lib81-demo32.component';

describe('Lib81Demo32Component', () => {
  let component: Lib81Demo32Component;
  let fixture: ComponentFixture<Lib81Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
