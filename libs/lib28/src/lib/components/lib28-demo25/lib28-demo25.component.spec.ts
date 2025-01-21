import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo25Component } from './lib28-demo25.component';

describe('Lib28Demo25Component', () => {
  let component: Lib28Demo25Component;
  let fixture: ComponentFixture<Lib28Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
