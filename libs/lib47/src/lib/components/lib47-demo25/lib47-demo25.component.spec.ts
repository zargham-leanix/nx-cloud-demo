import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo25Component } from './lib47-demo25.component';

describe('Lib47Demo25Component', () => {
  let component: Lib47Demo25Component;
  let fixture: ComponentFixture<Lib47Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
