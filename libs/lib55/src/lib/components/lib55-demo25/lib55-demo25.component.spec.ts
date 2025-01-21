import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo25Component } from './lib55-demo25.component';

describe('Lib55Demo25Component', () => {
  let component: Lib55Demo25Component;
  let fixture: ComponentFixture<Lib55Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
