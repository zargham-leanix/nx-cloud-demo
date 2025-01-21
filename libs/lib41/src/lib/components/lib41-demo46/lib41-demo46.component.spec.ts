import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo46Component } from './lib41-demo46.component';

describe('Lib41Demo46Component', () => {
  let component: Lib41Demo46Component;
  let fixture: ComponentFixture<Lib41Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
