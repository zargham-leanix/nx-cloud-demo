import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo16Component } from './lib93-demo16.component';

describe('Lib93Demo16Component', () => {
  let component: Lib93Demo16Component;
  let fixture: ComponentFixture<Lib93Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
