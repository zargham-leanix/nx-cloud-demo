import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo46Component } from './lib75-demo46.component';

describe('Lib75Demo46Component', () => {
  let component: Lib75Demo46Component;
  let fixture: ComponentFixture<Lib75Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
