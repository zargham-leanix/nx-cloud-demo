import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo16Component } from './lib23-demo16.component';

describe('Lib23Demo16Component', () => {
  let component: Lib23Demo16Component;
  let fixture: ComponentFixture<Lib23Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
