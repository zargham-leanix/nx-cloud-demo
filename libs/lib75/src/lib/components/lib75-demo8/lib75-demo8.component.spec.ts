import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo8Component } from './lib75-demo8.component';

describe('Lib75Demo8Component', () => {
  let component: Lib75Demo8Component;
  let fixture: ComponentFixture<Lib75Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
