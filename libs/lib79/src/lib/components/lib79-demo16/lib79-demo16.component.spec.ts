import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo16Component } from './lib79-demo16.component';

describe('Lib79Demo16Component', () => {
  let component: Lib79Demo16Component;
  let fixture: ComponentFixture<Lib79Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
