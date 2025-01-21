import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo16Component } from './lib95-demo16.component';

describe('Lib95Demo16Component', () => {
  let component: Lib95Demo16Component;
  let fixture: ComponentFixture<Lib95Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
