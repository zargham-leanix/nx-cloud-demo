import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo40Component } from './lib85-demo40.component';

describe('Lib85Demo40Component', () => {
  let component: Lib85Demo40Component;
  let fixture: ComponentFixture<Lib85Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
