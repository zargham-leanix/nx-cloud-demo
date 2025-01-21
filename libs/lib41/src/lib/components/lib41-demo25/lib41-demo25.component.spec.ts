import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo25Component } from './lib41-demo25.component';

describe('Lib41Demo25Component', () => {
  let component: Lib41Demo25Component;
  let fixture: ComponentFixture<Lib41Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
