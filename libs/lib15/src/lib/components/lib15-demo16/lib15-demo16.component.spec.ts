import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo16Component } from './lib15-demo16.component';

describe('Lib15Demo16Component', () => {
  let component: Lib15Demo16Component;
  let fixture: ComponentFixture<Lib15Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
