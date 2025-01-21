import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo16Component } from './lib9-demo16.component';

describe('Lib9Demo16Component', () => {
  let component: Lib9Demo16Component;
  let fixture: ComponentFixture<Lib9Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
