import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo16Component } from './lib21-demo16.component';

describe('Lib21Demo16Component', () => {
  let component: Lib21Demo16Component;
  let fixture: ComponentFixture<Lib21Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
