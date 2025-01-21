import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo45Component } from './lib81-demo45.component';

describe('Lib81Demo45Component', () => {
  let component: Lib81Demo45Component;
  let fixture: ComponentFixture<Lib81Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
