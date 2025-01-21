import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo16Component } from './lib51-demo16.component';

describe('Lib51Demo16Component', () => {
  let component: Lib51Demo16Component;
  let fixture: ComponentFixture<Lib51Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
