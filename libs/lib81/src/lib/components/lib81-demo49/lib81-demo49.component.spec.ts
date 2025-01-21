import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo49Component } from './lib81-demo49.component';

describe('Lib81Demo49Component', () => {
  let component: Lib81Demo49Component;
  let fixture: ComponentFixture<Lib81Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
