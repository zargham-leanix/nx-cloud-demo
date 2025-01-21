import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo16Component } from './lib27-demo16.component';

describe('Lib27Demo16Component', () => {
  let component: Lib27Demo16Component;
  let fixture: ComponentFixture<Lib27Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
