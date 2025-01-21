import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo46Component } from './lib25-demo46.component';

describe('Lib25Demo46Component', () => {
  let component: Lib25Demo46Component;
  let fixture: ComponentFixture<Lib25Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
