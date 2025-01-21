import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo27Component } from './lib33-demo27.component';

describe('Lib33Demo27Component', () => {
  let component: Lib33Demo27Component;
  let fixture: ComponentFixture<Lib33Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
