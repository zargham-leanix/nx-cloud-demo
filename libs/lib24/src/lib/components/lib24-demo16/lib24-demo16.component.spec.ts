import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo16Component } from './lib24-demo16.component';

describe('Lib24Demo16Component', () => {
  let component: Lib24Demo16Component;
  let fixture: ComponentFixture<Lib24Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
