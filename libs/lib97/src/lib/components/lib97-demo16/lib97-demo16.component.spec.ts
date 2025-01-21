import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo16Component } from './lib97-demo16.component';

describe('Lib97Demo16Component', () => {
  let component: Lib97Demo16Component;
  let fixture: ComponentFixture<Lib97Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
