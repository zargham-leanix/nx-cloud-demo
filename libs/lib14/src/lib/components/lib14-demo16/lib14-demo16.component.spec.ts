import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo16Component } from './lib14-demo16.component';

describe('Lib14Demo16Component', () => {
  let component: Lib14Demo16Component;
  let fixture: ComponentFixture<Lib14Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
