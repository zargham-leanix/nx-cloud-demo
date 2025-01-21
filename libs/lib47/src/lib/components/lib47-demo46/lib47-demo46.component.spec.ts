import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo46Component } from './lib47-demo46.component';

describe('Lib47Demo46Component', () => {
  let component: Lib47Demo46Component;
  let fixture: ComponentFixture<Lib47Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
