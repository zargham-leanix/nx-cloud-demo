import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo16Component } from './lib40-demo16.component';

describe('Lib40Demo16Component', () => {
  let component: Lib40Demo16Component;
  let fixture: ComponentFixture<Lib40Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
