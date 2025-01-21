import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo25Component } from './lib80-demo25.component';

describe('Lib80Demo25Component', () => {
  let component: Lib80Demo25Component;
  let fixture: ComponentFixture<Lib80Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
