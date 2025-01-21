import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo25Component } from './lib25-demo25.component';

describe('Lib25Demo25Component', () => {
  let component: Lib25Demo25Component;
  let fixture: ComponentFixture<Lib25Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
