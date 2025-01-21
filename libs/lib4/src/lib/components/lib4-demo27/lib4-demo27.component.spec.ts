import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo27Component } from './lib4-demo27.component';

describe('Lib4Demo27Component', () => {
  let component: Lib4Demo27Component;
  let fixture: ComponentFixture<Lib4Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
