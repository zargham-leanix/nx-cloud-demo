import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo40Component } from './lib93-demo40.component';

describe('Lib93Demo40Component', () => {
  let component: Lib93Demo40Component;
  let fixture: ComponentFixture<Lib93Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
