import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo16Component } from './lib54-demo16.component';

describe('Lib54Demo16Component', () => {
  let component: Lib54Demo16Component;
  let fixture: ComponentFixture<Lib54Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
