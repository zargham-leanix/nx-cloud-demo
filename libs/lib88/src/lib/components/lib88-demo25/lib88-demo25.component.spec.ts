import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo25Component } from './lib88-demo25.component';

describe('Lib88Demo25Component', () => {
  let component: Lib88Demo25Component;
  let fixture: ComponentFixture<Lib88Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
