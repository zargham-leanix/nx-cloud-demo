import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo40Component } from './lib59-demo40.component';

describe('Lib59Demo40Component', () => {
  let component: Lib59Demo40Component;
  let fixture: ComponentFixture<Lib59Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
