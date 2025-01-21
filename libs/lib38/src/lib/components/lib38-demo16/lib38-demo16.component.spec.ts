import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo16Component } from './lib38-demo16.component';

describe('Lib38Demo16Component', () => {
  let component: Lib38Demo16Component;
  let fixture: ComponentFixture<Lib38Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
