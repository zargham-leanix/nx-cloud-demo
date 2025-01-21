import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo16Component } from './lib94-demo16.component';

describe('Lib94Demo16Component', () => {
  let component: Lib94Demo16Component;
  let fixture: ComponentFixture<Lib94Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
