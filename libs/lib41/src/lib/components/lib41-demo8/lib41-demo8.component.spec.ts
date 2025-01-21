import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo8Component } from './lib41-demo8.component';

describe('Lib41Demo8Component', () => {
  let component: Lib41Demo8Component;
  let fixture: ComponentFixture<Lib41Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
