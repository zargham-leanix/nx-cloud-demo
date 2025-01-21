import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo25Component } from './lib84-demo25.component';

describe('Lib84Demo25Component', () => {
  let component: Lib84Demo25Component;
  let fixture: ComponentFixture<Lib84Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
