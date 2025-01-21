import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo16Component } from './lib86-demo16.component';

describe('Lib86Demo16Component', () => {
  let component: Lib86Demo16Component;
  let fixture: ComponentFixture<Lib86Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
