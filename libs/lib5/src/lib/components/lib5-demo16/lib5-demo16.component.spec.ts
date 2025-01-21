import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo16Component } from './lib5-demo16.component';

describe('Lib5Demo16Component', () => {
  let component: Lib5Demo16Component;
  let fixture: ComponentFixture<Lib5Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
