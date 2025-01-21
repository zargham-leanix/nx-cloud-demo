import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo40Component } from './lib25-demo40.component';

describe('Lib25Demo40Component', () => {
  let component: Lib25Demo40Component;
  let fixture: ComponentFixture<Lib25Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
