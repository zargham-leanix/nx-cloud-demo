import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo40Component } from './lib72-demo40.component';

describe('Lib72Demo40Component', () => {
  let component: Lib72Demo40Component;
  let fixture: ComponentFixture<Lib72Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
