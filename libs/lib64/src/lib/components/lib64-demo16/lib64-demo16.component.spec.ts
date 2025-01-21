import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo16Component } from './lib64-demo16.component';

describe('Lib64Demo16Component', () => {
  let component: Lib64Demo16Component;
  let fixture: ComponentFixture<Lib64Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
