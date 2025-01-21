import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo25Component } from './lib75-demo25.component';

describe('Lib75Demo25Component', () => {
  let component: Lib75Demo25Component;
  let fixture: ComponentFixture<Lib75Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
