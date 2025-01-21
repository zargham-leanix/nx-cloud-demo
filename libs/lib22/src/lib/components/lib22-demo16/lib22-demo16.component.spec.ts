import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo16Component } from './lib22-demo16.component';

describe('Lib22Demo16Component', () => {
  let component: Lib22Demo16Component;
  let fixture: ComponentFixture<Lib22Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
