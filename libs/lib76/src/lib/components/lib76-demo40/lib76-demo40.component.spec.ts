import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo40Component } from './lib76-demo40.component';

describe('Lib76Demo40Component', () => {
  let component: Lib76Demo40Component;
  let fixture: ComponentFixture<Lib76Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
