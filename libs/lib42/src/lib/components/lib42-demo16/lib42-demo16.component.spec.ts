import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo16Component } from './lib42-demo16.component';

describe('Lib42Demo16Component', () => {
  let component: Lib42Demo16Component;
  let fixture: ComponentFixture<Lib42Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
