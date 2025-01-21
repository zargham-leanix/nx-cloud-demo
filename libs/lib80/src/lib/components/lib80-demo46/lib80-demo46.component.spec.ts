import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo46Component } from './lib80-demo46.component';

describe('Lib80Demo46Component', () => {
  let component: Lib80Demo46Component;
  let fixture: ComponentFixture<Lib80Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
