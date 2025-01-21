import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo27Component } from './lib72-demo27.component';

describe('Lib72Demo27Component', () => {
  let component: Lib72Demo27Component;
  let fixture: ComponentFixture<Lib72Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
