import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo40Component } from './lib95-demo40.component';

describe('Lib95Demo40Component', () => {
  let component: Lib95Demo40Component;
  let fixture: ComponentFixture<Lib95Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
