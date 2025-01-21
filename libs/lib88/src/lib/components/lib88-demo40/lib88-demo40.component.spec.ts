import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo40Component } from './lib88-demo40.component';

describe('Lib88Demo40Component', () => {
  let component: Lib88Demo40Component;
  let fixture: ComponentFixture<Lib88Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
